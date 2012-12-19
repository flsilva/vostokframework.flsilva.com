module NavigationHelpers
  def get_active_nav_class(page_regex)
    (page_regex.match(current_resource.url.to_s.downcase) != nil) ? "active" : ""
  end
end
