// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagRouteProtocolBgpResponseBodyTaskStates extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the query task was created.
   * 
   * @example
   * 1586765938000
   */
  createTime?: string;
  /**
   * @remarks
   * The error code. 200 indicates that the query task succeeded.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. Successful indicates that the query task succeeded.
   * 
   * @example
   * Successful
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status of the asynchronous task. Valid values:
   * 
   * - **Initialized**: The query task is initialized.
   * - **Offline**: The Smart Access Gateway device is offline and the query task is not delivered. The task will be delivered after the device comes online.
   * - **Succeed**: The query task succeeded.
   * - **Processing**: The query task is being delivered.
   * - **VersionNotSupport**: The current version of the Smart Access Gateway device does not support this feature.
   * - **BuildRequestError**: The management and control system does not support the operation.
   * - **HardwareError**: The query task failed to be delivered due to a device error.
   * - **TaskNotExist**: The query task does not exist.
   * - **OfflineNotConfiged**: The Smart Access Gateway device is offline and the query task is not delivered. The task will not be delivered after the device comes online.
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
   * The keepalive interval. Unit: seconds.
   * 
   * @example
   * 3
   */
  keepAlive?: number;
  /**
   * @remarks
   * The autonomous system (AS) number of the Smart Access Gateway.
   * 
   * @example
   * 65536
   */
  localAs?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2F39E4FE-B45C-47FF-9921-95780486F52D
   */
  requestId?: string;
  /**
   * @remarks
   * The BGP router ID.
   * 
   * @example
   * 192.XX.XX.1
   */
  routerId?: string;
  /**
   * @remarks
   * The status of the query task.
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

