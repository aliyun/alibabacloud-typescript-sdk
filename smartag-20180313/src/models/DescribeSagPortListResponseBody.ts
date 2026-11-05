// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagPortListResponseBodyPorts extends $dara.Model {
  /**
   * @remarks
   * The MAC address of the port.
   * 
   * @example
   * c4:00:ad:a2:f5:****
   */
  mac?: string;
  /**
   * @remarks
   * The port name.
   * 
   * @example
   * 5
   */
  portName?: string;
  /**
   * @remarks
   * The port role. Valid values:
   * 
   * - **NONE**: The port role is unassigned.
   * - **WAN**: The port is a WAN port. A WAN port is used to connect to the Internet and supports DHCP client, PPPoE, and static IP access methods.
   * - **LAN**: The port is a LAN port. A LAN port is used to connect to local clients or switches and supports DHCP server and static IP access methods.
   * - **ECC**: The port is a dedicated connection port used to connect to a dedicated connection.
   * - **MGT**: The port is a management port.
   * - **CELLULAR**: The port is a 4G port.
   * 
   * @example
   * NONE
   */
  role?: string;
  /**
   * @remarks
   * The port status. Valid values:
   * 
   * - **Up**: The port is enabled.
   * - **Down**: The port is disabled.
   * - **Unavailable**: The device is offline.
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
   * - **Offline**: The Smart Access Gateway device is offline and the query task is not delivered. The task will be delivered after the device goes online.
   * - **Succeed**: The query task is delivered.
   * - **Processing**: The query task is being delivered.
   * - **VersionNotSupport**: The current version of the Smart Access Gateway device does not support this feature.
   * - **BuildRequestError**: The management and control system does not support this operation.
   * - **HardwareError**: The query task failed to be delivered due to a device error.
   * - **TaskNotExist**: The query task does not exist.
   * - **OfflineNotConfiged**: The Smart Access Gateway device is offline and the query task is not delivered. The task will not be delivered after the device goes online.
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
   * The list of port information.
   */
  ports?: DescribeSagPortListResponseBodyPorts[];
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
   * The status of the query task.
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

