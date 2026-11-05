// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagGlobalRouteProtocolResponseBodyTaskStates extends $dara.Model {
  /**
   * @remarks
   * The time when the query task was created.
   * 
   * @example
   * 1586855592000
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
   * 
   * - **Initialized**: The query task is initialized.
   * - **Offline**: The Smart Access Gateway device is offline and the query task is not delivered. The task will be delivered after the device comes online.
   * - **Succeed**: The query task is delivered.
   * - **Processing**: The query task is being delivered.
   * - **VersionNotSupport**: The current version of the Smart Access Gateway device does not support the feature.
   * - **BuildRequestError**: The management and control system does not support the operation.
   * - **HardwareError**: The query task delivery failed due to a device error.
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

export class DescribeSagGlobalRouteProtocolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3712F0B2-721E-4FBF-BBEF-888E3BFE0A20
   */
  requestId?: string;
  /**
   * @remarks
   * The routable protocol. Valid values:
   * 
   * - **STATIC**: static routable protocol
   * - **OSPF**: OSPF dynamic routable protocol
   * - **BGP**: BGP dynamic routable protocol
   * 
   * @example
   * STATIC
   */
  routeProtocol?: string;
  /**
   * @remarks
   * The status of the query task.
   */
  taskStates?: DescribeSagGlobalRouteProtocolResponseBodyTaskStates[];
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
      taskStates: { 'type': 'array', 'itemType': DescribeSagGlobalRouteProtocolResponseBodyTaskStates },
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

