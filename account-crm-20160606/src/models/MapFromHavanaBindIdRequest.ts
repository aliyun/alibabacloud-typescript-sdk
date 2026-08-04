// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MapFromHavanaBindIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  havanaBindId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  havanaBindStations?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      havanaBindId: 'HavanaBindId',
      havanaBindStations: 'HavanaBindStations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      havanaBindId: 'string',
      havanaBindStations: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

