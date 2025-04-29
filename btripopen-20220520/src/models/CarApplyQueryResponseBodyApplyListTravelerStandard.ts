// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CarApplyQueryResponseBodyApplyListTravelerStandardCarCitySet } from "./CarApplyQueryResponseBodyApplyListTravelerStandardCarCitySet";


export class CarApplyQueryResponseBodyApplyListTravelerStandard extends $dara.Model {
  carCitySet?: CarApplyQueryResponseBodyApplyListTravelerStandardCarCitySet[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      carCitySet: 'car_city_set',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carCitySet: { 'type': 'array', 'itemType': CarApplyQueryResponseBodyApplyListTravelerStandardCarCitySet },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.carCitySet)) {
      $dara.Model.validateArray(this.carCitySet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

