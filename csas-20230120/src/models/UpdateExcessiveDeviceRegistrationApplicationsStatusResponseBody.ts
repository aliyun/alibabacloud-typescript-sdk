// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * ID of the device registration application.
   * 
   * @example
   * reg-application-0f4a127b7e78****
   */
  applicationId?: string;
  /**
   * @remarks
   * Time when the device registration application was created.
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
   * This field indicates the reason for the excessive device registration request.
   * 
   * @example
   * 这是一条超额注册申请
   */
  description?: string;
  /**
   * @remarks
   * ID of the endpoint device.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @remarks
   * Operating system of the endpoint device. Valid values:
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
   * - **Windows_Wuying**: Alibaba Cloud Cloud Desktop operating system.
   * 
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @remarks
   * Name of the endpoint device.
   * 
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @remarks
   * Indicates whether the device registration application has been used. Valid values:
   * 
   * - **true**: Used.
   * 
   * - **false**: Not used.
   * 
   * @example
   * false
   */
  isUsed?: boolean;
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
   * User ID.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * Status of the device registration application. Valid values:
   * 
   * - **Pending**: Pending review.
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
  /**
   * @remarks
   * List of device registration applications that exceed your quota.
   */
  applications?: UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBodyApplications[];
  /**
   * @remarks
   * ID of the request.
   * 
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

