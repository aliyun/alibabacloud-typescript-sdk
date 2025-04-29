// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CitySearchResponseBodyModuleCities extends $dara.Model {
  /**
   * @example
   * 330100
   */
  code?: string;
  name?: string;
  /**
   * @example
   * 0
   */
  region?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      region: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

