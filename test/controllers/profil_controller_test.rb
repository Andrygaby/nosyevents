require 'test_helper'

class ProfilControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get profil_index_url
    assert_response :success
  end

end
