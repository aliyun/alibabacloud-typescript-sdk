// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExcessiveDeviceRegistrationApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * reg-application-0f4a127b7e78****
   */
  applicationId?: string;
  /**
   * @remarks
   * The creation time of the excessive device registration application.
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
   * The reason for the excessive device registration application.
   * 
   * @example
   * 这是一条超额注册申请
   */
  description?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @remarks
   * The operating system of the device. Valid values:
   * 
   * - **Windows**: The Windows operating system.
   * 
   * - **macOS**: The macOS operating system.
   * 
   * - **Linux**: The Linux operating system.
   * 
   * - **Android**: The Android operating system.
   * 
   * - **iOS**: The iOS operating system.
   * 
   * - **Windows_Wuying**: Wuying Workspace.
   * 
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @remarks
   * A list of full department paths.
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
   * Specifies whether the excessive device registration application has been used. Valid values:
   * 
   * - **true**: The application has been used.
   * 
   * - **false**: The application has not been used.
   * 
   * @example
   * false
   */
  isUsed?: boolean;
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
   * The user ID.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * The status of the excessive device registration application. Valid values:
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
      description: 'Description',
      deviceTag: 'DeviceTag',
      deviceType: 'DeviceType',
      fullDepartment: 'FullDepartment',
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
      fullDepartment: { 'type': 'array', 'itemType': 'string' },
      hostname: 'string',
      isUsed: 'boolean',
      mac: 'string',
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

export class ListExcessiveDeviceRegistrationApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of excessive device registration applications.
   */
  applications?: ListExcessiveDeviceRegistrationApplicationsResponseBodyApplications[];
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
   * The total number of excessive device registration applications.
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
      applications: { 'type': 'array', 'itemType': ListExcessiveDeviceRegistrationApplicationsResponseBodyApplications },
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

