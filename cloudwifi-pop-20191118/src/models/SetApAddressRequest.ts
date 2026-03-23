// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetApAddressRequest extends $dara.Model {
  apAreaName?: string;
  apBuildingName?: string;
  apCampusName?: string;
  apCityName?: string;
  apFloor?: string;
  apGroup?: string;
  apName?: string;
  apNationName?: string;
  apProvinceName?: string;
  apUnitId?: number;
  apUnitName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  direction?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  language?: string;
  lat?: string;
  lng?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mac?: string;
  static names(): { [key: string]: string } {
    return {
      apAreaName: 'ApAreaName',
      apBuildingName: 'ApBuildingName',
      apCampusName: 'ApCampusName',
      apCityName: 'ApCityName',
      apFloor: 'ApFloor',
      apGroup: 'ApGroup',
      apName: 'ApName',
      apNationName: 'ApNationName',
      apProvinceName: 'ApProvinceName',
      apUnitId: 'ApUnitId',
      apUnitName: 'ApUnitName',
      appCode: 'AppCode',
      appName: 'AppName',
      direction: 'Direction',
      language: 'Language',
      lat: 'Lat',
      lng: 'Lng',
      mac: 'Mac',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apAreaName: 'string',
      apBuildingName: 'string',
      apCampusName: 'string',
      apCityName: 'string',
      apFloor: 'string',
      apGroup: 'string',
      apName: 'string',
      apNationName: 'string',
      apProvinceName: 'string',
      apUnitId: 'number',
      apUnitName: 'string',
      appCode: 'string',
      appName: 'string',
      direction: 'string',
      language: 'string',
      lat: 'string',
      lng: 'string',
      mac: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

