// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagPortRouteProtocolListResponseBodyPorts extends $dara.Model {
  /**
   * @remarks
   * The IP address of the neighbor device.
   * 
   * @example
   * 192.XX.XX.1
   */
  neighborIp?: string;
  /**
   * @remarks
   * The name of the port.
   * 
   * @example
   * 3
   */
  portName?: string;
  /**
   * @remarks
   * The number of the autonomous system (AS) to which the SAG device belongs.
   * 
   * @example
   * 12345
   */
  remoteAs?: string;
  /**
   * @remarks
   * The IP address of the peer device.
   * 
   * @example
   * 192.XX.XX.1
   */
  remoteIp?: string;
  /**
   * @remarks
   * The routing protocol. Valid values:
   * 
   * *   **STATIC**: static routing protocol
   * *   **OSPF**: Open Shortest Path First protocol (OSPF)
   * *   **BGP**: Border Gateway Protocol (BGP)
   * 
   * @example
   * BGP
   */
  routeProtocol?: string;
  /**
   * @remarks
   * The status of the port. Valid values:
   * 
   * *   **UP**: The port was enabled.
   * *   **DOWN**: The port was disabled.
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
   * The status of the query task. Valid values:
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

export class DescribeSagPortRouteProtocolListResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the details of the port.
   */
  ports?: DescribeSagPortRouteProtocolListResponseBodyPorts[];
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
   * The details about the status of the query task.
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

