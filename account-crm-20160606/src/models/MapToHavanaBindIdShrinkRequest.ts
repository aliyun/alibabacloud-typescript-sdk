// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MapToHavanaBindIdShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  havanaBindStationsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      havanaBindStationsShrink: 'HavanaBindStations',
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      havanaBindStationsShrink: 'string',
      pk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

