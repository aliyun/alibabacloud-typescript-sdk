// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewSmartAccessGatewayWanSnatResponseBodyTaskStates extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the task was created. Unit: milliseconds.
   * 
   * The value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1586852928000
   */
  createTime?: string;
  /**
   * @remarks
   * The error code. A value of 200 indicates that the task is successful.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. A value of Successful indicates that the task is successful.
   * 
   * @example
   * Successful
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status of the asynchronous task. Valid values:
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

export class ViewSmartAccessGatewayWanSnatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0CFC6919-8F3D-524F-A7A6-E5FADCD36A20
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether to enable SNAT. Valid values: Valid values:
   * 
   * *   **1**: enables SNAT
   * *   **0**: disables SNAT
   * 
   * @example
   * 1
   */
  snat?: string;
  /**
   * @remarks
   * The status of the task.
   */
  taskStates?: ViewSmartAccessGatewayWanSnatResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snat: 'Snat',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snat: 'string',
      taskStates: { 'type': 'array', 'itemType': ViewSmartAccessGatewayWanSnatResponseBodyTaskStates },
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

