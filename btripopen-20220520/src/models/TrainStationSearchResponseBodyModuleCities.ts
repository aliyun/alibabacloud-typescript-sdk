// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainStationSearchResponseBodyModuleCities extends $dara.Model {
  /**
   * @example
   * hz
   */
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

