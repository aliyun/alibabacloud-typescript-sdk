// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNacUserCertResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 1
   */
  aliuid?: string;
  department?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @example
   * windows
   */
  deviceType?: string;
  /**
   * @example
   * 2029-06-30 09:31:54
   */
  expiredTime?: string;
  /**
   * @example
   * MS-XU****
   */
  hostname?: string;
  /**
   * @example
   * 08:f8:**:**:**:5e
   */
  mac?: string;
  /**
   * @example
   * Disabled
   */
  status?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  userId?: string;
  /**
   * @example
   * zhang**
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      department: 'Department',
      devTag: 'DevTag',
      deviceType: 'DeviceType',
      expiredTime: 'ExpiredTime',
      hostname: 'Hostname',
      mac: 'Mac',
      status: 'Status',
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      department: 'string',
      devTag: 'string',
      deviceType: 'string',
      expiredTime: 'string',
      hostname: 'string',
      mac: 'string',
      status: 'string',
      userId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

