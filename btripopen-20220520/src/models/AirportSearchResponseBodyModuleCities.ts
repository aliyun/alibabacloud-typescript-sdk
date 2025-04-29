// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AirportSearchResponseBodyModuleCities extends $dara.Model {
  /**
   * @example
   * HGH
   */
  code?: string;
  /**
   * @example
   * 100
   */
  distance?: number;
  name?: string;
  /**
   * @example
   * 上海
   */
  travelName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      distance: 'distance',
      name: 'name',
      travelName: 'travel_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      distance: 'number',
      name: 'string',
      travelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

