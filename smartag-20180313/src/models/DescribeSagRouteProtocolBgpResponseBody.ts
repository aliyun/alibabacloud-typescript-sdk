// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagRouteProtocolBgpResponseBodyTaskStates extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the task was created.
   * 
   * @example
   * 1586765938000
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
   * The error message returned. A value of Successful indicates that the query task is successful.
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

export class DescribeSagRouteProtocolBgpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The hold time. Unit: seconds.
   * 
   * @example
   * 9
   */
  holdTime?: number;
  /**
   * @remarks
   * The time interval at which keep-alive packets are sent. Unit: seconds.
   * 
   * @example
   * 3
   */
  keepAlive?: number;
  /**
   * @remarks
   * The autonomous system (AS) number to which the SAG device belongs.
   * 
   * @example
   * 65536
   */
  localAs?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F39E4FE-B45C-47FF-9921-95780486F52D
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the BGP router.
   * 
   * @example
   * 192.XX.XX.1
   */
  routerId?: string;
  /**
   * @remarks
   * The details about the query task.
   */
  taskStates?: DescribeSagRouteProtocolBgpResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      holdTime: 'HoldTime',
      keepAlive: 'KeepAlive',
      localAs: 'LocalAs',
      requestId: 'RequestId',
      routerId: 'RouterId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      holdTime: 'number',
      keepAlive: 'number',
      localAs: 'number',
      requestId: 'string',
      routerId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagRouteProtocolBgpResponseBodyTaskStates },
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

