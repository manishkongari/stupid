class FacebookController < ApplicationController
  layout "facebook_canvas"

  after_filter :allow_iframe

  def index
  	
  end

  private

  def allow_iframe
    response.headers["X-Frame-Options"] = "GOFORIT"
  end
end
