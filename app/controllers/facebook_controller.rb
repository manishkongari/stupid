class FacebookController < ApplicationController
  layout "facebook_canvas"

  after_filter :allow_iframe

  def index
  	
  end
  def create
    # Instantiate a new object using form parameters
    @subject = Facebook.new(subject_params)
    # Save the object
    if @subject.save
      # If save succeeds, redirect to the index action
      redirect_to(:action => 'index')
    else
      # If save fails, redisplay the form so user can fix problems
      render('new')
    end
  end


  private

    def subject_params
      # same as using "params[:subject]", except that it:
      # - raises an error if :subject is not present
      # - allows listed attributes to be mass-assigned
      params.require(:facebook).permit(:email, :friend, :hint)
    end
  private

    def allow_iframe
      response.headers["X-Frame-Options"] = "GOFORIT"
    end


end


 