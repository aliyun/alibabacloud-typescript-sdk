// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceStatusInfo extends $dara.Model {
  appVersion?: string;
  department?: string;
  dlpStatus?: string;
  internetIp?: string;
  laStatus?: string;
  loginStatus?: string;
  nacStatus?: string;
  privateIp?: string;
  saseUserId?: string;
  username?: string;
  workshop?: string;
  ztnaStatus?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      department: 'Department',
      dlpStatus: 'DlpStatus',
      internetIp: 'InternetIp',
      laStatus: 'LaStatus',
      loginStatus: 'LoginStatus',
      nacStatus: 'NacStatus',
      privateIp: 'PrivateIp',
      saseUserId: 'SaseUserId',
      username: 'Username',
      workshop: 'Workshop',
      ztnaStatus: 'ZtnaStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      department: 'string',
      dlpStatus: 'string',
      internetIp: 'string',
      laStatus: 'string',
      loginStatus: 'string',
      nacStatus: 'string',
      privateIp: 'string',
      saseUserId: 'string',
      username: 'string',
      workshop: 'string',
      ztnaStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

