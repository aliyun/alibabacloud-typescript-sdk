// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MapToHavanaBindIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  havanaBindStations?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      havanaBindStations: 'HavanaBindStations',
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      havanaBindStations: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pk: 'string',
    };
  }

  validate() {
    if(this.havanaBindStations) {
      $dara.Model.validateMap(this.havanaBindStations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

