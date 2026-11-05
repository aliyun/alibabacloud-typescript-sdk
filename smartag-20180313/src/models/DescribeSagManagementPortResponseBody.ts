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
   * The error code. A value of 200 indicates that the query task is successful.
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
   * The status of the asynchronous task. Valid values:
   * - **Initialized**: The query task is initialized.
   * - **Offline**: The Smart Access Gateway device is offline and the query task is not delivered. The task will be delivered after the device goes online.
   * - **Succeed**: The query task is delivered successfully.
   * - **Processing**: The query task is being delivered.
   * - **VersionNotSupport**: The current version of the Smart Access Gateway device does not support the feature.
   * - **BuildRequestError**: The control plane does not support the operation.
   * - **HardwareError**: The query task failed to be delivered due to a device error.
   * - **TaskNotExist**: The query task does not exist.
   * - **OfflineNotConfiged**: The Smart Access Gateway device is offline and the query task is not delivered. The task will not be delivered after the device goes online.
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
   * The gateway IP address of the management port.
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
   * The subnet mask of the management port.
   * 
   * @example
   * 255.255.255.0
   */
  mask?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3616AAA9-3A6F-4604-98AF-86753AB7F040
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the query task.
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

