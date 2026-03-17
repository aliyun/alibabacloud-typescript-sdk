// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagPortListResponseBodyPorts extends $dara.Model {
  /**
   * @remarks
   * The Mac address of the port.
   * 
   * @example
   * c4:00:ad:a2:f5:****
   */
  mac?: string;
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
   * Port role:
   * 
   * *   **NONE**: No role is assigned to the port.
   * *   **WAN**: The port is used as a WAN port. The WAN port supports a Dynamic Host Configuration Protocol (DHCP) client, PPPoE, or a static IP address to access the Internet.
   * *   **LAN**: The port is used as a LAN port. The LAN port supports a DHCP server or a static IP address to connect to a local terminal or switch.
   * *   **ECC**: The port is used as a leased line port to connect to a leased line.
   * *   **MGT**: The port is used as the management port.
   * 
   * @example
   * NONE
   */
  role?: string;
  /**
   * @remarks
   * Port states:
   * 
   * *   **Up**: The port is enabled.
   * *   **Down**: The port is disabled.
   * *   **Unavailable**: The SAG device is disconnected from Alibaba Cloud.
   * 
   * @example
   * Down
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      mac: 'Mac',
      portName: 'PortName',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mac: 'string',
      portName: 'string',
      role: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortListResponseBodyTaskStates extends $dara.Model {
  /**
   * @remarks
   * The time when the query task was created.
   * 
   * @example
   * 1586762479000
   */
  createTime?: string;
  /**
   * @remarks
   * The error code. 200 indicates that the query task is successful.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. Successful indicates that the query task is successful.
   * 
   * @example
   * Successful
   */
  errorMessage?: string;
  /**
   * @remarks
   * Asynchronous task states:
   * 
   * *   **Initialized**: The query task is initialized.
   * *   **Offline**: The SAG device is disconnected from Alibaba Cloud and Alibaba Cloud has not assigned the query task to the SAG device. When the SAG device is connected to Alibaba Cloud, Alibaba Cloud continues to assign the query task to the SAG device.
   * *   **Succeed**: Alibaba Cloud has assigned the query task to the SAG device.
   * *   **Processing**: Alibaba Cloud is assigning the query task to the SAG device.
   * *   **VersionNotSupport**: not supported by the current version of the SAG device.
   * *   **BuildRequestError**: not supported by the control and management center in the cloud.
   * *   **HardwareError**: Alibaba Cloud failed to assign the query task to the SAG device because the SAG device is faulty.
   * *   **TaskNotExist**: The query task does not exist.
   * *   **OfflineNotConfiged**: The SAG device is disconnected from Alibaba Cloud and Alibaba Cloud has not assigned the query task to the SAG device. When the SAG device is connected to Alibaba Cloud, Alibaba Cloud does not assign the query task to the SAG device.
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

export class DescribeSagPortListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the port information.
   */
  ports?: DescribeSagPortListResponseBodyPorts[];
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
   * The state of the query task.
   */
  taskStates?: DescribeSagPortListResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      ports: 'Ports',
      requestId: 'RequestId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ports: { 'type': 'array', 'itemType': DescribeSagPortListResponseBodyPorts },
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagPortListResponseBodyTaskStates },
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

