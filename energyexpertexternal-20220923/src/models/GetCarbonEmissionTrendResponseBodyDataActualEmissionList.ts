// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCarbonEmissionTrendResponseBodyDataActualEmissionListItems } from "./GetCarbonEmissionTrendResponseBodyDataActualEmissionListItems";


export class GetCarbonEmissionTrendResponseBodyDataActualEmissionList extends $dara.Model {
  /**
   * @remarks
   * Data item list.
   */
  items?: GetCarbonEmissionTrendResponseBodyDataActualEmissionListItems[];
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
      items: { 'type': 'array', 'itemType': GetCarbonEmissionTrendResponseBodyDataActualEmissionListItems },
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

