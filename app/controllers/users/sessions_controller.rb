class Users::SessionsController < Devise::SessionsController
  def create
    self.resource = warden.authenticate(auth_options)
    
    if resource.nil?
      if User.exists?(email: params[:user][:email])
        flash[:alert] = "Invalid email or password."
      else
        flash[:alert] = "Please enter a valid credentials."
      end
      redirect_to new_user_session_path
    else
      set_flash_message!(:notice, :signed_in)
      sign_in(resource_name, resource)
      yield resource if block_given?
      redirect_to after_sign_in_path_for(resource)
    end
  end
end
