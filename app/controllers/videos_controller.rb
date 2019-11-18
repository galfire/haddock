class VideosController < ApplicationController
  before_action :allow_iframe_requests

  def allow_iframe_requests
    response.headers.delete :"X-Frame-Options"
  end

  def show; end
end
