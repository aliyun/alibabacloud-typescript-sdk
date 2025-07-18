// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBodyApplications extends $dara.Model {
  /**
   * @example
   * reg-application-0f4a127b7e78****
   */
  applicationId?: string;
  /**
   * @example
   * 2023-07-17 18:46:55
   */
  createTime?: string;
  department?: string;
  description?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @example
   * false
   */
  isUsed?: boolean;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
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
      description: 'Description',
      deviceTag: 'DeviceTag',
      deviceType: 'DeviceType',
      hostname: 'Hostname',
      isUsed: 'IsUsed',
      mac: 'Mac',
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
      description: 'string',
      deviceTag: 'string',
      deviceType: 'string',
      hostname: 'string',
      isUsed: 'boolean',
      mac: 'string',
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

export class UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBody extends $dara.Model {
  applications?: UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBodyApplications[];
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
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
      applications: { 'type': 'array', 'itemType': UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBodyApplications },
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

