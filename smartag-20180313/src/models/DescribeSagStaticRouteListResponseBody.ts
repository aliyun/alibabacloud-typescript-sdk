// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagStaticRouteListResponseBodyStaticRoutes extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * @example
   * 192.XX.XX.0/24
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The next hop.
   * 
   * @example
   * 192.XX.XX.1
   */
  nextHop?: string;
  /**
   * @remarks
   * The port name.
   * 
   * @example
   * 0
   */
  portName?: string;
  /**
   * @remarks
   * The VLAN ID.
   * 
   * @example
   * 1
   */
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHop: 'NextHop',
      portName: 'PortName',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHop: 'string',
      portName: 'string',
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

export class DescribeSagStaticRouteListResponseBodyTaskStates extends $dara.Model {
  /**
   * @remarks
   * The time when the query task was created.
   * 
   * @example
   * 1586857309000
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
   * - **VersionNotSupport**: The current version of the Smart Access Gateway device does not support this feature.
   * - **BuildRequestError**: The management and control system does not support the request.
   * - **HardwareError**: The query task failed to be delivered due to a device error.
   * - **TaskNotExist**: The query task does not exist.
   * - **OfflineNotConfiged**: The Smart Access Gateway device is offline and the query task is not delivered. The task will not be delivered even after the device goes online.
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

export class DescribeSagStaticRouteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE6642D4-21EB-4168-9BF9-F217953F9892
   */
  requestId?: string;
  /**
   * @remarks
   * The list of static routes.
   */
  staticRoutes?: DescribeSagStaticRouteListResponseBodyStaticRoutes[];
  /**
   * @remarks
   * The status of the query tasks.
   */
  taskStates?: DescribeSagStaticRouteListResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      staticRoutes: 'StaticRoutes',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      staticRoutes: { 'type': 'array', 'itemType': DescribeSagStaticRouteListResponseBodyStaticRoutes },
      taskStates: { 'type': 'array', 'itemType': DescribeSagStaticRouteListResponseBodyTaskStates },
    };
  }

  validate() {
    if(Array.isArray(this.staticRoutes)) {
      $dara.Model.validateArray(this.staticRoutes);
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

