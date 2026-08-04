// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUninstallApplicationsStatusResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * Uninstall request ID.
   * 
   * @example
   * uninstall-app-6646831ac314****
   */
  applicationId?: string;
  /**
   * @remarks
   * Time when the uninstall request was created.
   * 
   * @example
   * 2023-07-17 18:46:55
   */
  createTime?: string;
  /**
   * @remarks
   * Department to which the user belongs.
   * 
   * @example
   * 测试部
   */
  department?: string;
  /**
   * @remarks
   * Endpoint device ID.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @remarks
   * Operating system type of the endpoint device. Valid values:
   * 
   * - **Windows**: Windows operating system.
   * 
   * - **macOS**: macOS operating system.
   * 
   * - **Linux**: Linux operating system.
   * 
   * - **Android**: Android operating system.
   * 
   * - **iOS**: iOS operating system.
   * 
   * - **Windows_Wuying**: Alibaba Cloud Desktop operating system.
   * 
   * @example
   * Windows
   */
  devType?: string;
  /**
   * @remarks
   * Device name of the endpoint.
   * 
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @remarks
   * Name of the user identity source.
   * 
   * @example
   * 测试身份源
   */
  idpName?: string;
  /**
   * @remarks
   * Indicates whether the uninstall has been executed.
   * 
   * @example
   * false
   */
  isUninstall?: boolean;
  /**
   * @remarks
   * MAC address of the endpoint device.
   * 
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @remarks
   * Reason for the request.
   * 
   * @example
   * 这是一个测试
   */
  reason?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * Status of the uninstall request. Valid values:
   * 
   * - **Pending**: Pending.
   * 
   * - **Approved**: Approved.
   * 
   * - **Rejected**: Rejected.
   * 
   * @example
   * Approved
   */
  status?: string;
  /**
   * @remarks
   * Username.
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUninstallApplicationsStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of uninstall requests.
   */
  applications?: UpdateUninstallApplicationsStatusResponseBodyApplications[];
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * 9B769522-D50C-5978-8981-52BE800D6099
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': UpdateUninstallApplicationsStatusResponseBodyApplications },
      requestId: 'string',
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

