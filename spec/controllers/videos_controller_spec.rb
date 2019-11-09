require 'rails_helper'

RSpec.describe VideosController, type: :controller do
  describe 'get /videos/:id' do
    it 'returns status code 200' do
      get :show, params: { id: 1 }
      expect(response).to have_http_status(200)
    end
  end
end
