// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportUserDevicesRequest extends $dara.Model {
  appStatuses?: string[];
  department?: string;
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  deviceStatuses?: string[];
  deviceTags?: string[];
  deviceTypes?: string[];
  dlpStatuses?: string[];
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  iaStatuses?: string[];
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  nacStatuses?: string[];
  paStatuses?: string[];
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * true
   */
  sharingStatus?: boolean;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      appStatuses: 'AppStatuses',
      department: 'Department',
      deviceBelong: 'DeviceBelong',
      deviceStatuses: 'DeviceStatuses',
      deviceTags: 'DeviceTags',
      deviceTypes: 'DeviceTypes',
      dlpStatuses: 'DlpStatuses',
      hostname: 'Hostname',
      iaStatuses: 'IaStatuses',
      mac: 'Mac',
      nacStatuses: 'NacStatuses',
      paStatuses: 'PaStatuses',
      saseUserId: 'SaseUserId',
      sharingStatus: 'SharingStatus',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatuses: { 'type': 'array', 'itemType': 'string' },
      department: 'string',
      deviceBelong: 'string',
      deviceStatuses: { 'type': 'array', 'itemType': 'string' },
      deviceTags: { 'type': 'array', 'itemType': 'string' },
      deviceTypes: { 'type': 'array', 'itemType': 'string' },
      dlpStatuses: { 'type': 'array', 'itemType': 'string' },
      hostname: 'string',
      iaStatuses: { 'type': 'array', 'itemType': 'string' },
      mac: 'string',
      nacStatuses: { 'type': 'array', 'itemType': 'string' },
      paStatuses: { 'type': 'array', 'itemType': 'string' },
      saseUserId: 'string',
      sharingStatus: 'boolean',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appStatuses)) {
      $dara.Model.validateArray(this.appStatuses);
    }
    if(Array.isArray(this.deviceStatuses)) {
      $dara.Model.validateArray(this.deviceStatuses);
    }
    if(Array.isArray(this.deviceTags)) {
      $dara.Model.validateArray(this.deviceTags);
    }
    if(Array.isArray(this.deviceTypes)) {
      $dara.Model.validateArray(this.deviceTypes);
    }
    if(Array.isArray(this.dlpStatuses)) {
      $dara.Model.validateArray(this.dlpStatuses);
    }
    if(Array.isArray(this.iaStatuses)) {
      $dara.Model.validateArray(this.iaStatuses);
    }
    if(Array.isArray(this.nacStatuses)) {
      $dara.Model.validateArray(this.nacStatuses);
    }
    if(Array.isArray(this.paStatuses)) {
      $dara.Model.validateArray(this.paStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

