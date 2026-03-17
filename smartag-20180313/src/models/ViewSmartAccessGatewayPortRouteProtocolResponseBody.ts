// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewSmartAccessGatewayPortRouteProtocolResponseBodyPorts extends $dara.Model {
  neighborIp?: string;
  /**
   * @example
   * 5
   */
  portName?: string;
  /**
   * @example
   * 65535
   */
  remoteAs?: string;
  /**
   * @example
   * 192.XX.XX.1
   */
  remoteIp?: string;
  /**
   * @example
   * BGP
   */
  routeProtocol?: string;
  /**
   * @example
   * UP
   */
  status?: string;
  /**
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
   * @example
   * 1586765938000
   */
  createTime?: string;
  /**
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @example
   * Successful
   */
  errorMessage?: string;
  /**
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
  ports?: ViewSmartAccessGatewayPortRouteProtocolResponseBodyPorts[];
  /**
   * @example
   * 877F5673-FFD1-5168-99D1-1E8009FBFF7B
   */
  requestId?: string;
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

