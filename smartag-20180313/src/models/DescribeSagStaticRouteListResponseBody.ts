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
   * The name of the port.
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

export class DescribeSagStaticRouteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CE6642D4-21EB-4168-9BF9-F217953F9892
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the static route.
   */
  staticRoutes?: DescribeSagStaticRouteListResponseBodyStaticRoutes[];
  /**
   * @remarks
   * The state of the query task.
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

