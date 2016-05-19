const FEMALE = 0;
const MALE = 1;
const MISC = 2;
const MARRIED = true;
const UNMARRIED = false;

const CAMPAIGN_MARRIED_MALE = 1;
const CAMPAIGN_UNMARRIED_FEMALE = 2;
const CAMPAIGN_MARRIED_FEMALE = 3;
const CAMPAIGN_OTHERS = 4;

function campaignNumber(age, sex, married){
    var age = input (age)
    var sex = input (sex)
    var married = input (married)
    
    if(age >= 30 && sex == 1 && married == true) {
      CAMPAIGN_MARRIED_MALE(show"1");   
    }
    if(20 <= age > 30 && sex == 0 && married == false) {
        CAMPAIGN_UNMARRIED_FEMALE(show"2");
    }
    if(sex == 0 && married == true){
        CAMPAIGN_MARRIED_FEMALE(show"3")
    }
    else{
        CAMPAIN_OTHERS(show"4")
    }

