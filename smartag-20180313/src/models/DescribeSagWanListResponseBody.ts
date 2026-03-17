// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagWanListResponseBodyTaskStates extends $dara.Model {
  /**
   * @remarks
   * The time when the query task was created.
   * 
   * @example
   * 1586834861000
   */
  createTime?: string;
  /**
   * @remarks
   * The error code returned to the query task. A value of 200 indicates that the query task is successful.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned to the query task. A value of Successful indicates that the query task is successful.
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

export class DescribeSagWanListResponseBodyWans extends $dara.Model {
  /**
   * @remarks
   * The bandwidth cap of the WAN port. Unit: Mbit/s.
   * 
   * @example
   * 50
   */
  bandWidth?: number;
  /**
   * @remarks
   * The IP address of the gateway.
   * 
   * @example
   * 192.XX.XX.1
   */
  gateway?: string;
  /**
   * @remarks
   * The IP address of the WAN port.
   * 
   * @example
   * 172.XX.XX.1
   */
  IP?: string;
  /**
   * @remarks
   * The connection type of the WAN port. Valid values:
   * 
   * *   **DHCP**: The WAN port connects to the Internet through an IP address that is dynamically assigned by the Dynamic Host Configuration Protocol (DHCP) server.
   * *   **STATIC**: The WAN port connects to the Internet through a static IP address.
   * *   **PPPOE**: The WAN port connects to the Internet through dial-up connections.
   * 
   * @example
   * STATIC
   */
  IPType?: string;
  /**
   * @remarks
   * The Internet service provider (ISP) used by the WAN port.
   * 
   * *   **CT**: China Telecom
   * *   **CM**: China Mobile
   * *   **CU**: China Unicom
   * *   **Other**: Other ISPs
   * 
   * @example
   * CT
   */
  ISP?: string;
  /**
   * @remarks
   * The subnet mask of the WAN port IP address.
   * 
   * @example
   * 255.255.255.240
   */
  mask?: string;
  /**
   * @remarks
   * The number of the WAN port.
   * 
   * @example
   * 1
   */
  portName?: string;
  /**
   * @remarks
   * The priority of the WAN port.
   * 
   * Valid values: **-1** and **1 to 50**. A smaller number represents a higher priority.
   * 
   * >  A value of **-1** indicates that the WAN port is not used to forward network traffic.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The status of data transfer on the WAN port. Valid values:
   * 
   * *   **active**: The WAN port is the active port for data transfer.
   * *   **standby**: The WAN port is a standby port. If the active port is down, data transfer is switched to the WAN port.
   * 
   * @example
   * active
   */
  trafficState?: string;
  /**
   * @remarks
   * The username of the PPPoE account.
   * 
   * @example
   * Usernamexx
   */
  username?: string;
  /**
   * @remarks
   * The weight of the WAN port.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      bandWidth: 'BandWidth',
      gateway: 'Gateway',
      IP: 'IP',
      IPType: 'IPType',
      ISP: 'ISP',
      mask: 'Mask',
      portName: 'PortName',
      priority: 'Priority',
      trafficState: 'TrafficState',
      username: 'Username',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidth: 'number',
      gateway: 'string',
      IP: 'string',
      IPType: 'string',
      ISP: 'string',
      mask: 'string',
      portName: 'string',
      priority: 'number',
      trafficState: 'string',
      username: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanListResponseBody extends $dara.Model {
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
   * The status of and information about the query task.
   */
  taskStates?: DescribeSagWanListResponseBodyTaskStates[];
  /**
   * @remarks
   * The settings of the WAN port.
   */
  wans?: DescribeSagWanListResponseBodyWans[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskStates: 'TaskStates',
      wans: 'Wans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagWanListResponseBodyTaskStates },
      wans: { 'type': 'array', 'itemType': DescribeSagWanListResponseBodyWans },
    };
  }

  validate() {
    if(Array.isArray(this.taskStates)) {
      $dara.Model.validateArray(this.taskStates);
    }
    if(Array.isArray(this.wans)) {
      $dara.Model.validateArray(this.wans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

