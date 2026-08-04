// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MapFromHavanaBindIdShrinkRequest extends $dara.Model {
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
  havanaBindStationsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      havanaBindId: 'HavanaBindId',
      havanaBindStationsShrink: 'HavanaBindStations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      havanaBindId: 'string',
      havanaBindStationsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

