// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUninstallApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @example
   * uninstall-app-6646831ac314****
   */
  applicationId?: string;
  /**
   * @example
   * 2023-07-17 18:46:55
   */
  createTime?: string;
  department?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @example
   * Windows
   */
  devType?: string;
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  idpName?: string;
  /**
   * @example
   * false
   */
  isUninstall?: boolean;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  reason?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * Approved
   */
  status?: string;
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

export class ListUninstallApplicationsResponseBody extends $dara.Model {
  applications?: ListUninstallApplicationsResponseBodyApplications[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
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

