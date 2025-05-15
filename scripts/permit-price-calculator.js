const permitPrices = [
    {
      threeMonth: [
        "Not Available",
        "£34.00",
        "£48.50",
        "£58.60",
        "£68.70",
        "£88.90",
        "£124.60",
      ],
      sixMonth: [
        "Not Available",
        "£61.30",
        "£87.60",
        "£105.70",
        "£123.90",
        "£160.10",
        "£224.50",
      ],
      annual: [
        "£43.50",
        "£102.30",
        "£146.10",
        "£176.20",
        "£206.60",
        "£266.90",
        "£374.30",
      ],
    },
    {
      threeMonth: [
        "Not Available",
        "£40.80",
        "£60.70",
        "£73.30",
        "£85.90",
        "£115.50",
        "£161.90",
      ],
      sixMonth: [
        "Not Available",
        "£73.60",
        "£109.60",
        "£132.10",
        "£154.90",
        "£208.10",
        "£292.00",
      ],
      annual: [
        "£52.30",
        "£122.70",
        "£182.70",
        "£220.30",
        "£258.30",
        "£347.00",
        "£486.70",
      ],
    }
  ]  


  document.addEventListener('DOMContentLoaded', function() {
    const emissions = document.getElementById('emissions');
    const permitLength = document.getElementById('permit-length');
    const permitNumber = document.getElementById('permit-number');
    const total = document.getElementById('permit-total');

    function updatePrice() {
      const permitPrice = permitPrices[parseInt(permitNumber.value)][permitLength.value][parseInt(emissions.value)];
      total.textContent = permitPrice;
    }

    emissions.addEventListener('change', updatePrice);
    permitLength.addEventListener('change', updatePrice);
    permitNumber.addEventListener('change', updatePrice);

    updatePrice();
  });