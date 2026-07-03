// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagHaResponseBodyPorts extends $dara.Model {
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
   * The virtual IP address of the Smart Access Gateway.
   * 
   * @example
   * 192.XX.XX.1
   */
  virtualIp?: string;
  static names(): { [key: string]: string } {
    return {
      portName: 'PortName',
      virtualIp: 'VirtualIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portName: 'string',
      virtualIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagHaResponseBodyTaskStates extends $dara.Model {
  /**
   * @remarks
   * The time when the query task was created.
   * 
   * @example
   * 1586836343000
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

export class DescribeSagHaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The high-availability (HA) pattern. Valid values:
   * 
   * - **NONE**: The HA feature is not enabled.
   * - **STATIC**: static pattern.
   * - **DYNAMIC**: dynamic schema.
   * 
   * @example
   * NONE
   */
  mode?: string;
  /**
   * @remarks
   * The list of port information.
   */
  ports?: DescribeSagHaResponseBodyPorts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 273D62FD-E346-4959-AA18-D79B9276FEFB
   */
  requestId?: string;
  /**
   * @remarks
   * The list of query task information.
   */
  taskStates?: DescribeSagHaResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      ports: 'Ports',
      requestId: 'RequestId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      ports: { 'type': 'array', 'itemType': DescribeSagHaResponseBodyPorts },
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagHaResponseBodyTaskStates },
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

