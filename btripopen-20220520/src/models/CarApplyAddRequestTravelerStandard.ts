// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CarApplyAddRequestTravelerStandardCarCitySet } from "./CarApplyAddRequestTravelerStandardCarCitySet";


export class CarApplyAddRequestTravelerStandard extends $dara.Model {
  carCitySet?: CarApplyAddRequestTravelerStandardCarCitySet[];
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      carCitySet: 'car_city_set',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carCitySet: { 'type': 'array', 'itemType': CarApplyAddRequestTravelerStandardCarCitySet },
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

