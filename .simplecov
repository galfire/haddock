SimpleCov.start do
  add_filter %r{/spec/}
  add_group "controllers", "app/controllers/"
end
