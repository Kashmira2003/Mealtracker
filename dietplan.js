function checkRange() {
    var inputValue = document.getElementById("inputValue").value;
    var resultElement = document.getElementById("result");
  
    // Check if inputValue is a valid number
    if (!isNaN(inputValue)) {
      var value = parseFloat(inputValue);
  
      if (0 <= value && value < 18.5) {
        resultElement.innerHTML =
          "Just like obesity causes health concerns, having less weight than the normal also poses health issues. Being underweight can be result of poor nutrition and should be a matter of concern. If the body does not receive adequate amounts of nutrients, the body fails to function to its utmost. This could result in the imbalance in the metabolism. Inculcating a healthy diet for underweight will provide the necessary nutrients for better functioning of the body. These are quick health tips for the person suffering from underweight should include this in your diet plan:<br>1.Heavy food items that are more in calories.<br>2.Frequent consumption of food items which are rich in nutrients, it could be snacks, shakes or juices, or proper meals.<br>3.Adding extra ingredients that are high in calories to regular diet, for example, including eggs and bananas in morning breakfast, etc., can help in increasing the weight.<br>4.Consume protein supplements along with adequate amount of vegetables and fruits.<br>5.Eating calorie dense food and maintaining a balanced diet will help in gaining the weight.<br>6.However, the diet shouldn't be started drastically and instead, should be implemented gradually so that the body is accustomed with it.<br>7.Frequent Meals: Eat 5-6 smaller meals throughout the day rather than 3 large ones.<br>8. Balanced Nutrients: Include a mix of carbohydrates, proteins, and healthy fats in each meal.<br>9. Protein-Rich Foods.<br>10.Prioritize sources of lean protein such as chicken, turkey, fish, eggs, dairy, beans, and legumes.";
      } else if (18.5 <= value && value <= 24.9) {
        resultElement.innerHTML =
          "1. Balanced Meals: Include a mix of lean proteins, whole grains, healthy fats, and a variety of fruits and vegetables in every meal.<br>2. Portion Control:Be mindful of portion sizes to avoid overeating. Use smaller plates if needed.<br>3. Hydration:Drink plenty of water throughout the day. Aim for at least 8 glasses (64 ounces) daily.<br>4. Colorful Plate: Opt for a variety of colorful fruits and vegetables to ensure a range of vitamins and minerals.<br>5. Lean Proteins: Include sources like poultry, fish, beans, lentils, tofu, and low-fat dairy for protein needs.<br>6. Whole Grains: Choose whole grains such as brown rice, quinoa, oats, and whole wheat for fiber and sustained energy.<br>7. Healthy Fats: Incorporate sources of healthy fats like avocados, nuts, seeds, and olive oil.<br>8. Limit Processed Foods: Minimize the intake of processed and sugary foods. Choose whole, unprocessed options.<br>9.Regular Meals: Aim for three balanced meals and, if needed, healthy snacks between meals.";
      } else if (25 <= value && value <= 29) {
        resultElement.innerHTML =
          "1. Rely on soft drinks, sweetened cereals, cookies and cakes, donuts and pastries, chips, and confectionery to get you through the day.<br>2. Don't skip meals.This will tempt you to snack and DO NOT snack between meals.<br>3. Avoid eating quickly. Sit and chew each bite. Try using chopsticks!<br>4. Don't food shop when you're hungry.<br>5. Don't eat more than two or three pieces of fruit per day 6. Eat more vegetables - add them at every meal.<br>7. Drink plenty of water - you can become hungry when thirsty.<br>8. Try eating off smaller plates so as to eat smaller portions.<br>9. Exercise between 30 minutes to one hour each day with moderate exercise - brisk walking, team sport, cycling or swimming.<br>10 .Be mindful of what you put in your mouth and your shopping trolley.";
      } else if (30 <= value && value <= 34.9) {
        resultElement.innerHTML =
          "1. Caloric Deficit: Create a moderate caloric deficit to promote weight loss. This deficit can be achieved through a combination of diet and exercise.<br>2. Balanced Meals: Include a mix of lean proteins, whole grains, healthy fats, and plenty of fruits and vegetables in each meal.<br>3. Portion Control: Be mindful of portion sizes to avoid overeating. Use smaller plates to help control portions.<br>4. Meal Planning: Plan meals and snacks in advance to make healthier choices and avoid impulsive eating.<br>5. Accountability: Keep a food diary to track your eating habits and identify areas for improvement.<br>6. Professional Guidance: Seek support from a registered dietitian or healthcare professional for personalized advice.<br>7. Behavioral Changes: Focus on lifestyle changes rather than short-term diets. Develop sustainable lifestyle";
      } else if (35.9 <= value && value <= 39.9) {
        resultElement.innerHTML =
          "1. Caloric Deficit: Create a moderate caloric deficit to promote weight loss. This deficit can be achieved through a combination of diet and exercise.<br>2. Balanced Meals: Include a mix of lean proteins, whole grains, healthy fats, and plenty of fruits and vegetables in each meal.<br>3. Portion Control: Be mindful of portion sizes to avoid overeating. Use smaller plates to help control portions.<br>4. Meal Planning: Plan meals and snacks in advance to make healthier choices and avoid impulsive eating.<br>5. Accountability: Keep a food diary to track your eating habits and identify areas for improvement.<br>6. Professional Guidance: Seek support from a registered dietitian or healthcare professional for personalized advice.<br>7. Behavioral Changes: cfFocus on lifestyle changes rather than short-term diets. Develop sustainable lifestyle";
      }
      else {
        resultElement.innerHTML ="Rare Condition,<br>You need to consult a doctor";
      }
    } else {
      resultElement.innerHTML = "Invalid input. Please enter a numerical value.";
    }
  }
  