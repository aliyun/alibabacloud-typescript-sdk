// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCarbonEmissionTrendResponseBodyDataTargetEmissionListItems } from "./GetCarbonEmissionTrendResponseBodyDataTargetEmissionListItems";


export class GetCarbonEmissionTrendResponseBodyDataTargetEmissionList extends $dara.Model {
  /**
   * @remarks
   * Data item list.
   */
  items?: GetCarbonEmissionTrendResponseBodyDataTargetEmissionListItems[];
  /**
   * @remarks
   * The year.
   * 
   * @example
   * 2024
   */
  year?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetCarbonEmissionTrendResponseBodyDataTargetEmissionListItems },
      year: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

