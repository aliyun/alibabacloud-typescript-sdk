// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagPortRouteProtocolListResponseBodyPorts extends $dara.Model {
  /**
   * @remarks
   * The neighbor IP address.
   * 
   * @example
   * 192.XX.XX.1
   */
  neighborIp?: string;
  /**
   * @remarks
   * The port name.
   * 
   * @example
   * 3
   */
  portName?: string;
  /**
   * @remarks
   * The autonomous system number of the peer BGP network.
   * 
   * @example
   * 12345
   */
  remoteAs?: string;
  /**
   * @remarks
   * The IP address of the peer.
   * 
   * @example
   * 192.XX.XX.1
   */
  remoteIp?: string;
  /**
   * @remarks
   * The routable protocol of the port. Valid values:
   * 
   * - **STATIC**: static routable protocol.
   * - **OSPF**: OSPF dynamic routable protocol.
   * - **BGP**: BGP dynamic routable protocol.
   * 
   * @example
   * BGP
   */
  routeProtocol?: string;
  /**
   * @remarks
   * The port status. Valid values:
   * 
   * - **UP**: The port is enabled.
   * - **DOWN**: The port is disabled.
   * 
   * @example
   * UP
   */
  status?: string;
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
      neighborIp: 'NeighborIp',
      portName: 'PortName',
      remoteAs: 'RemoteAs',
      remoteIp: 'RemoteIp',
      routeProtocol: 'RouteProtocol',
      status: 'Status',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      neighborIp: 'string',
      portName: 'string',
      remoteAs: 'string',
      remoteIp: 'string',
      routeProtocol: 'string',
      status: 'string',
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

export class DescribeSagPortRouteProtocolListResponseBodyTaskStates extends $dara.Model {
  /**
   * @remarks
   * The time when the query task was created.
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
   * - **Offline**: The Smart Access Gateway device is offline and the query task has not been delivered. The task will be delivered after the device comes online.
   * - **Succeed**: The query task is delivered.
   * - **Processing**: The query task is being delivered.
   * - **VersionNotSupport**: The current version of the Smart Access Gateway device does not support this operation.
   * - **BuildRequestError**: The China Cloud Management Platform does not support this operation.
   * - **HardwareError**: The query task failed to be delivered due to a device error.
   * - **TaskNotExist**: The query task does not exist.
   * - **OfflineNotConfiged**: The Smart Access Gateway device is offline and the query task has not been delivered. The task will not be delivered even after the device comes online.
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

export class DescribeSagPortRouteProtocolListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of port information.
   */
  ports?: DescribeSagPortRouteProtocolListResponseBodyPorts[];
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
   * The query task status.
   */
  taskStates?: DescribeSagPortRouteProtocolListResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      ports: 'Ports',
      requestId: 'RequestId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ports: { 'type': 'array', 'itemType': DescribeSagPortRouteProtocolListResponseBodyPorts },
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagPortRouteProtocolListResponseBodyTaskStates },
    };
  }

  validate() {
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
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

