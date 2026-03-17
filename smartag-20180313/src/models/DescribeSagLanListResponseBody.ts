// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagLanListResponseBodyLans extends $dara.Model {
  /**
   * @remarks
   * The last IP address of the DHCP pool.
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
   * The connection type of the LAN port.
   * 
   * **DHCP**: a dynamic IP address. Uses the Dynamic Host Configuration Protocol (DHCP) to dynamically assign an IP address to a connected device.
   * 
   * **STATIC**: a static IP address. Specifies a static IP address for the LAN port.
   * 
   * @example
   * DHCP
   */
  IPType?: string;
  /**
   * @remarks
   * The time duration that the IP address is retained after it is assigned through DHCP. Unit: minutes.
   * 
   * @example
   * 7
   */
  lease?: string;
  /**
   * @remarks
   * The subnet mask of the IP address of the port.
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
   * The first IP address of the DHCP pool.
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

export class DescribeSagLanListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the LAN port.
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
   * The state of the query task.
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

