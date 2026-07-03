// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagExpressConnectInterfaceListResponseBodyInterfaces extends $dara.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.XX.XX.1
   */
  IP?: string;
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
   * The VLAN ID.
   * 
   * @example
   * 2
   */
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      mask: 'Mask',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      mask: 'string',
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

export class DescribeSagExpressConnectInterfaceListResponseBodyTaskStates extends $dara.Model {
  /**
   * @remarks
   * The time when the query task was created.
   * 
   * @example
   * 1586835287000
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
   * The error message. "Successful" indicates that the query task succeeded.
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
   * - **Offline**: The Smart Access Gateway device is offline and the query task is not delivered. The task will be delivered after the device comes online.
   * - **Succeed**: The query task is delivered.
   * - **Processing**: The query task is being delivered.
   * - **VersionNotSupport**: The current version of the Smart Access Gateway device does not support this operation.
   * - **BuildRequestError**: The China Cloud Management Platform does not support this operation.
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

export class DescribeSagExpressConnectInterfaceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of interface information.
   */
  interfaces?: DescribeSagExpressConnectInterfaceListResponseBodyInterfaces[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2718F7A6-EA67-41EF-BA39-E9F4A0F5D306
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the query task.
   */
  taskStates?: DescribeSagExpressConnectInterfaceListResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      interfaces: 'Interfaces',
      requestId: 'RequestId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interfaces: { 'type': 'array', 'itemType': DescribeSagExpressConnectInterfaceListResponseBodyInterfaces },
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagExpressConnectInterfaceListResponseBodyTaskStates },
    };
  }

  validate() {
    if(Array.isArray(this.interfaces)) {
      $dara.Model.validateArray(this.interfaces);
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

