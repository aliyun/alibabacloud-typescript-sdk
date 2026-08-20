// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUninstallApplicationsStatusResponseBodyApplications extends $dara.Model {
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
   * The department to which the user belongs.
   * 
   * @example
   * Testing Department
   */
  department?: string;
  /**
   * @remarks
   * The ID of the endpoint device.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @remarks
   * The operating system type of the endpoint device. Valid values:
   * - **Windows**: Windows.
   * - **macOS**: macOS.
   * - **Linux**: Linux.
   * - **Android**: Android.
   * - **iOS**: iOS.
   * - **Windows_Wuying**: WUYING Workspace.
   * 
   * @example
   * Windows
   */
  devType?: string;
  /**
   * @remarks
   * The name of the endpoint device.
   * 
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @remarks
   * The name of the identity provider.
   * 
   * @example
   * Test Identity Provider
   */
  idpName?: string;
  /**
   * @remarks
   * Indicates whether the uninstallation has been performed.
   * 
   * @example
   * false
   */
  isUninstall?: boolean;
  /**
   * @remarks
   * The MAC address of the endpoint device.
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
   * This is a test
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
   * - **Pending**: Pending.
   * - **Approved**: Approved.
   * - **Rejected**: Rejected.
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
   * Mr. Wang
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
   * The list of uninstall applications.
   */
  applications?: UpdateUninstallApplicationsStatusResponseBodyApplications[];
  /**
   * @remarks
   * The request ID.
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

