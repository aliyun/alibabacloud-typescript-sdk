// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagManagementPortResponseBodyTaskStates extends $dara.Model {
  /**
   * @remarks
   * The time when the query task was created.
   * 
   * @example
   * 1586759657000
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
   * The state of the query task. Valid values:
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

export class DescribeSagManagementPortResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address of the management port gateway.
   * 
   * @example
   * 192.XX.XX.254
   */
  gateway?: string;
  /**
   * @remarks
   * The IP address of the management port.
   * 
   * @example
   * 192.XX.XX.10
   */
  IP?: string;
  /**
   * @remarks
   * The subnet gateway of the IP address of the management port.
   * 
   * @example
   * 255.255.255.0
   */
  mask?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3616AAA9-3A6F-4604-98AF-86753AB7F040
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the query task.
   */
  taskStates?: DescribeSagManagementPortResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      gateway: 'Gateway',
      IP: 'IP',
      mask: 'Mask',
      requestId: 'RequestId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateway: 'string',
      IP: 'string',
      mask: 'string',
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagManagementPortResponseBodyTaskStates },
    };
  }

  validate() {
    if(Array.isArray(this.taskStates)) {
      $dara.Model.validateArray(this.taskStates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

