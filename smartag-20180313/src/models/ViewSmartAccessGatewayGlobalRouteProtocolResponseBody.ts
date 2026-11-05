// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewSmartAccessGatewayGlobalRouteProtocolResponseBodyTaskStates extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the query task was created. Unit: milliseconds.
   * 
   * The timestamp is in the UNIX format, which represents the total time elapsed from 00:00:00 on January 1, 1970 (UTC) to the time when the query task was created.
   * 
   * @example
   * 1586843621000
   */
  createTime?: string;
  /**
   * @remarks
   * The error code. A value of 200 indicates that the query task succeeded.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. A value of Successful indicates that the query task succeeded.
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
   * - **Offline**: The SAG device is offline and the query task is not delivered. The task will be delivered Smart Access Gateway device goes online.
   * - **Succeed**: The query task is delivered.
   * - **Processing**: The query task is being delivered.
   * - **VersionNotSupport**: The current version of the SAG device does not support this operation.
   * - **BuildRequestError**: The management and control system does not support this operation.
   * - **HardwareError**: The query task failed to be delivered due to a device error.
   * - **TaskNotExist**: The query task does not exist.
   * - **OfflineNotConfiged**: The SAG device is offline and the query task is not delivered. The task will not be delivered Smart Access Gateway device goes online.
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

export class ViewSmartAccessGatewayGlobalRouteProtocolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D10FFDB2-AF7D-530A-A2AC-EBDC16500399
   */
  requestId?: string;
  /**
   * @remarks
   * The routing protocol. Valid values:
   * 
   * - **STATIC**: Static routing protocol.
   * - **OSPF**: OSPF dynamic routing protocol.
   * - **BGP**: BGP dynamic routing protocol.
   * 
   * @example
   * STATIC
   */
  routeProtocol?: string;
  /**
   * @remarks
   * The status of the query task.
   */
  taskStates?: ViewSmartAccessGatewayGlobalRouteProtocolResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routeProtocol: 'RouteProtocol',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routeProtocol: 'string',
      taskStates: { 'type': 'array', 'itemType': ViewSmartAccessGatewayGlobalRouteProtocolResponseBodyTaskStates },
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

