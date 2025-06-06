// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceStatusInfo extends $dara.Model {
  /**
   * @remarks
   * Client version.
   * 
   * @example
   * 4.5.1
   */
  appVersion?: string;
  /**
   * @remarks
   * Department to which the user belongs.
   * 
   * @example
   * IT运维部
   */
  department?: string;
  /**
   * @remarks
   * Office data protection status. Values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * - **Unprovisioned**: Not configured.
   * - **Unauthorized**: Unauthorized.
   * 
   * @example
   * enabled
   */
  dlpStatus?: string;
  /**
   * @remarks
   * Public IP address.
   * 
   * @example
   * 120.26.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * Internet behavior management enablement status.
   * 
   * @example
   * enabled
   */
  laStatus?: string;
  /**
   * @remarks
   * Login status.
   * 
   * @example
   * online
   */
  loginStatus?: string;
  /**
   * @remarks
   * Network access control status. Values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * - **Unprovisioned**: Not configured.
   * 
   * @example
   * enabled
   */
  nacStatus?: string;
  /**
   * @remarks
   * Private IP address.
   * 
   * @example
   * 172.20.XX.XX
   */
  privateIp?: string;
  /**
   * @remarks
   * Unique ID of the SASE user.
   * 
   * @example
   * su_dfsdfsdgasgsgag
   */
  saseUserId?: string;
  /**
   * @remarks
   * Username.
   * 
   * @example
   * test
   */
  username?: string;
  /**
   * @remarks
   * Identified office area name.
   * 
   * @example
   * office
   */
  workshop?: string;
  /**
   * @remarks
   * ZTNA enablement status.
   * 
   * @example
   * enabled
   */
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

