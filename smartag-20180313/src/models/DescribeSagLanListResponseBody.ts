// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagLanListResponseBodyLans extends $dara.Model {
  /**
   * @remarks
   * The end address of the DHCP address pool.
   * 
   * @example
   * 192.XX.XX.254
   */
  endIp?: string;
  /**
   * @remarks
   * The IP address of the LAN port.
   * 
   * @example
   * 192.XX.XX.1
   */
  IP?: string;
  /**
   * @remarks
   * The connection type of the LAN port. Valid values:
   * 
   * **DHCP**: Dynamic IP. Uses the DHCP protocol to dynamically assign IP addresses to connected devices.
   * 
   * **STATIC**: Static IP. Statically specifies the IP address of the LAN port.
   * 
   * @example
   * DHCP
   */
  IPType?: string;
  /**
   * @remarks
   * The DHCP lease time. Unit: minutes.
   * 
   * @example
   * 7
   */
  lease?: string;
  /**
   * @remarks
   * The subnet mask.
   * 
   * @example
   * 255.255.255.0
   */
  mask?: string;
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
   * The start IP address of the DHCP address pool.
   * 
   * @example
   * 192.XX.XX.2
   */
  startIp?: string;
  static names(): { [key: string]: string } {
    return {
      endIp: 'EndIp',
      IP: 'IP',
      IPType: 'IPType',
      lease: 'Lease',
      mask: 'Mask',
      portName: 'PortName',
      startIp: 'StartIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIp: 'string',
      IP: 'string',
      IPType: 'string',
      lease: 'string',
      mask: 'string',
      portName: 'string',
      startIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagLanListResponseBodyTaskStates extends $dara.Model {
  /**
   * @remarks
   * The time when the query task was created.
   * 
   * @example
   * 1586852928000
   */
  createTime?: string;
  /**
   * @remarks
   * The error code. 200 indicates that the query task succeeded.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. Successful indicates that the query task succeeded.
   * 
   * @example
   * Successful
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status of the asynchronous task. Valid values:
   * - **Initialized**: The query task is initialized.
   * - **Offline**: The Smart Access Gateway device is offline and the query task is not delivered. The task will be delivered after the device comes online.
   * - **Succeed**: The query task was delivered successfully.
   * - **Processing**: The query task is being delivered.
   * - **VersionNotSupport**: The current version of the Smart Access Gateway device does not support this operation.
   * - **BuildRequestError**: The request is not supported by the management system.
   * - **HardwareError**: The query task failed to be delivered due to a device error.
   * - **TaskNotExist**: The query task does not exist.
   * - **OfflineNotConfiged**: The Smart Access Gateway device is offline and the query task is not delivered. The task will not be delivered even after the device comes online.
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

export class DescribeSagLanListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of LAN port information.
   */
  lans?: DescribeSagLanListResponseBodyLans[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1120228A-E5E1-4E9C-B56D-96887E1A2B2F
   */
  requestId?: string;
  /**
   * @remarks
   * The status information of the query task.
   */
  taskStates?: DescribeSagLanListResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      lans: 'Lans',
      requestId: 'RequestId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lans: { 'type': 'array', 'itemType': DescribeSagLanListResponseBodyLans },
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagLanListResponseBodyTaskStates },
    };
  }

  validate() {
    if(Array.isArray(this.lans)) {
      $dara.Model.validateArray(this.lans);
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

