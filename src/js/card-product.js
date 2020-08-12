$(function()
{
    $('.click').on('click',function(e)
  {
      if(e.target.tagName == 'A') return true;
    else if(e.target.tagName == 'BUTTON') return true;
    else
    {
        window.location.href = $(e.currentTarget).attr('data-url');
    }
    return false;
  });
});