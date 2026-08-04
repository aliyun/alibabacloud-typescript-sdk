// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUninstallApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * The uninstall application ID.
   * 
   * @example
   * uninstall-app-6646831ac314****
   */
  applicationId?: string;
  /**
   * @remarks
   * The time when the uninstall application was created.
   * 
   * @example
   * 2023-07-17 18:46:55
   */
  createTime?: string;
  /**
   * @remarks
   * The user\\"s department.
   * 
   * @example
   * 测试部
   */
  department?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @remarks
   * The operating system of the device. Valid values:
   * 
   * - **Windows**
   * 
   * - **macOS**
   * 
   * - **Linux**
   * 
   * - **Android**
   * 
   * - **iOS**
   * 
   * - **Windows_Wuying**: Elastic Desktop Service.
   * 
   * @example
   * Windows
   */
  devType?: string;
  /**
   * @remarks
   * The list of full department paths.
   */
  fullDepartment?: string[];
  /**
   * @remarks
   * The hostname of the device.
   * 
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @remarks
   * The name of the Identity Provider (IdP).
   * 
   * @example
   * 测试身份源
   */
  idpName?: string;
  /**
   * @remarks
   * Indicates whether the application has been uninstalled.
   * 
   * @example
   * false
   */
  isUninstall?: boolean;
  /**
   * @remarks
   * The MAC address of the device.
   * 
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @remarks
   * The reason for the application.
   * 
   * @example
   * 这是一个测试
   */
  reason?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * The status of the uninstall application. Valid values:
   * 
   * - **Pending**
   * 
   * - **Approved**
   * 
   * - **Rejected**
   * 
   * @example
   * Approved
   */
  status?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * 王先生
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      department: 'Department',
      devTag: 'DevTag',
      devType: 'DevType',
      fullDepartment: 'FullDepartment',
      hostname: 'Hostname',
      idpName: 'IdpName',
      isUninstall: 'IsUninstall',
      mac: 'Mac',
      reason: 'Reason',
      saseUserId: 'SaseUserId',
      status: 'Status',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      createTime: 'string',
      department: 'string',
      devTag: 'string',
      devType: 'string',
      fullDepartment: { 'type': 'array', 'itemType': 'string' },
      hostname: 'string',
      idpName: 'string',
      isUninstall: 'boolean',
      mac: 'string',
      reason: 'string',
      saseUserId: 'string',
      status: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fullDepartment)) {
      $dara.Model.validateArray(this.fullDepartment);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUninstallApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of uninstall applications.
   */
  applications?: ListUninstallApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of uninstall applications.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListUninstallApplicationsResponseBodyApplications },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

