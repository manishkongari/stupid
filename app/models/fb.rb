class Fb < ActiveRecord::Base
  validates_presence_of :userid
  validates_presence_of :name
  validates_presence_of :email
  validates_presence_of :friend
  validates_presence_of :hint
end
