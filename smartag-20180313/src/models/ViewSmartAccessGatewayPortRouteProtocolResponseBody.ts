// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewSmartAccessGatewayPortRouteProtocolResponseBodyPorts extends $dara.Model {
  /**
   * @remarks
   * The IP address of the neighbor.
   * 
   * @example
   * 192.XX.XX.2
   */
  neighborIp?: string;
  /**
   * @remarks
   * The name of the port.
   * 
   * @example
   * 5
   */
  portName?: string;
  /**
   * @remarks
   * The autonomous system (AS) number of the BGP peer.
   * 
   * @example
   * 65535
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
   * - **STATIC**: static routing protocol.
   * - **OSPF**: Open Shortest Path First (OSPF) dynamic routing protocol.
   * - **BGP**: Border Gateway Protocol (BGP) dynamic routing protocol.
   * 
   * @example
   * BGP
   */
  routeProtocol?: string;
  /**
   * @remarks
   * The status of the port. Valid values:
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

export class ViewSmartAccessGatewayPortRouteProtocolResponseBodyTaskStates extends $dara.Model {
  /**
   * @remarks
   * The time when the query task was created.
   * 
   * This is a UNIX timestamp that represents the number of milliseconds that have elapsed since 00:00:00 UTC on January 1, 1970.
   * 
   * @example
   * 1586765938000
   */
  createTime?: string;
  /**
   * @remarks
   * The error code. \\`200\\` indicates that the query task is successful.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. \\`Successful\\` indicates that the query task is successful.
   * 
   * @example
   * Successful
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status of the asynchronous task:
   * 
   * - **Initialized**: The query task is being initialized.
   * - **Offline**: The SAG device is offline and the query task is not sent. The task will be sent after the device goes online.
   * - **Succeed**: The query task is sent.
   * - **Processing**: The query task is being sent.
   * - **VersionNotSupport**: The current version of the SAG device is not supported.
   * - **BuildRequestError**: The management plane does not support the operation.
   * - **HardwareError**: The query task failed to be sent due to a device error.
   * - **TaskNotExist**: The query task does not exist.
   * - **OfflineNotConfiged**: The SAG device is offline and the query task is not sent. The task will not be sent even after the device goes online.
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

export class ViewSmartAccessGatewayPortRouteProtocolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of port information.
   */
  ports?: ViewSmartAccessGatewayPortRouteProtocolResponseBodyPorts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 877F5673-FFD1-5168-99D1-1E8009FBFF7B
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the query task.
   */
  taskStates?: ViewSmartAccessGatewayPortRouteProtocolResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      ports: 'Ports',
      requestId: 'RequestId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ports: { 'type': 'array', 'itemType': ViewSmartAccessGatewayPortRouteProtocolResponseBodyPorts },
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': ViewSmartAccessGatewayPortRouteProtocolResponseBodyTaskStates },
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

