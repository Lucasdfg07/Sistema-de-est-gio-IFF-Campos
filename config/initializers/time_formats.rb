# Used to create time and datetime formatting short cuts. Search for to_formatted_s in the api
# Also see http://snippets.dzone.com/posts/show/2406

# If time = Time.local(2009,12,24,15,30,27)

Time::DATE_FORMATS[:datetime] = "%H:%M %d-%b-%Y"  # time.to_s(:datetime)  ---->  15:30 24-Dec-2009
Time::DATE_FORMATS[:date] = "%d-%b-%Y"            # time.to_s(:date)      ---->  24-Dec-2009
Time::DATE_FORMATS[:time] = "%H:%M"               # time.to_s(:time)      ---->  15:30
Time::DATE_FORMATS[:google] = "%Y-%m-%d %H:%M:%S" # time.to_s(:google)  ---->  2009-12-24 15:30:27

# Note: that Date instances have their own formatting.
# In rails, the default string output of a date field uses Date::DATE_FORMATS[:default]
Date::DATE_FORMATS[:default] = Time::DATE_FORMATS[:date]

# To add the same styling to both Time and Date instances:
date_formats = {
  concise: '%d-%b-%Y' # 24-Dec-2009
}

Time::DATE_FORMATS.merge! date_formats
Date::DATE_FORMATS.merge! date_formats

# To display the current date and time in all the formats in your current environment:
Date::DATE_FORMATS.keys.push(:default).each{|k| puts [k,Date.today.to_s(k)].join(': ')}
Time::DATE_FORMATS.keys.push(:default).each{|k| puts [k,Time.now.to_s(k)].join(': ')}
