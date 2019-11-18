class VideosController < ApplicationController
  before_action :allow_iframe_requests

  def allow_iframe_requests
    response.headers['X-Frame-Options'] = 'ALLOWALL'
  end

  def show; end
end
