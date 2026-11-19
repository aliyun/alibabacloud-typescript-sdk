// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LocationInfo extends $dara.Model {
  /**
   * @remarks
   * The city associated with the search. It is used to return information about the corresponding region in scenarios such as weather.
   * 
   * @example
   * Beijing
   */
  city?: string;
  /**
   * @remarks
   * The IP address associated with the search. It is used to identify the region in supported scenarios and has a lower priority than city.
   * 
   * @example
   * 117.136.110.23
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'city',
      ip: 'ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

