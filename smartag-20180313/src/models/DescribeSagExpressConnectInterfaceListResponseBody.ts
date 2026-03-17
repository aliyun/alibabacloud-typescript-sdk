// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagExpressConnectInterfaceListResponseBodyInterfaces extends $dara.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.XX.XX.1
   */
  IP?: string;
  /**
   * @remarks
   * The subnet mask of the IP address of the port.
   * 
   * @example
   * 255.255.255.0
   */
  mask?: string;
  /**
   * @remarks
   * The VLAN ID.
   * 
   * @example
   * 2
   */
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      mask: 'Mask',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      mask: 'string',
      vlan: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagExpressConnectInterfaceListResponseBodyTaskStates extends $dara.Model {
  /**
   * @remarks
   * The time when the query task was created.
   * 
   * @example
   * 1586835287000
   */
  createTime?: string;
  /**
   * @remarks
   * The error code returned. A value of 200 indicates that the query task is successful.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. A value of Successful indicates that the query task is successful.
   * 
   * @example
   * Successful
   */
  errorMessage?: string;
  /**
   * @remarks
   * The state of the asynchronous query task. Valid values:
   * 
   * *   **Initialized**: The query task is initialized.
   * *   **Offline**: The SAG device is disconnected from Alibaba Cloud and Alibaba Cloud has not assigned the query task to the SAG device. After the SAG device is connected to Alibaba Cloud, Alibaba Cloud assigns the query task to the SAG device.
   * *   **Succeed**: Alibaba Cloud has assigned the query task to the SAG device.
   * *   **Processing**: Alibaba Cloud is assigning the query task to the SAG device.
   * *   **VersionNotSupport**: The query task is not supported by the current version of the SAG device.
   * *   **BuildRequestError**: The query task is not supported by the controller of the SAG device.
   * *   **HardwareError**: Alibaba Cloud failed to assign the query task to the SAG device because the SAG device is faulty.
   * *   **TaskNotExist**: The query task does not exist.
   * *   **OfflineNotConfiged**: The SAG device is disconnected from Alibaba Cloud and Alibaba Cloud has not assigned the query task to the SAG device. Alibaba Cloud does not assign the query task to the SAG device even after the SAG device is connected to Alibaba Cloud.
   * 
   * @example
   * Succeed
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagExpressConnectInterfaceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the port.
   */
  interfaces?: DescribeSagExpressConnectInterfaceListResponseBodyInterfaces[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2718F7A6-EA67-41EF-BA39-E9F4A0F5D306
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the query task.
   */
  taskStates?: DescribeSagExpressConnectInterfaceListResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      interfaces: 'Interfaces',
      requestId: 'RequestId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interfaces: { 'type': 'array', 'itemType': DescribeSagExpressConnectInterfaceListResponseBodyInterfaces },
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagExpressConnectInterfaceListResponseBodyTaskStates },
    };
  }

  validate() {
    if(Array.isArray(this.interfaces)) {
      $dara.Model.validateArray(this.interfaces);
    }
    if(Array.isArray(this.taskStates)) {
      $dara.Model.validateArray(this.taskStates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

