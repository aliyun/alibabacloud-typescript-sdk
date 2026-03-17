// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagHaResponseBodyPorts extends $dara.Model {
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
   * The virtual IP address of the SAG device.
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
   * The error code returned for a query task. The 200 error code indicates that the query task is successful.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned for a query task. The Successful error message indicates that the query task is successful.
   * 
   * @example
   * Successful
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status of the query task. Valid values:
   * 
   * *   **Initialized**: The query task has been initialized.
   * *   **Offline**: The query task is not dispatched because the SAG device is disconnected from Alibaba Cloud. The task will be dispatched after the SAG device is connected to Alibaba Cloud.
   * *   **Succeed**: The query task has been dispatched.
   * *   **Processing**: The query task is being dispatched.
   * *   **VersionNotSupport**: The current version of the SAG device does not support query tasks.
   * *   **BuildRequestError**: The SAG control system does not support query tasks.
   * *   **HardwareError**: The query task failed to be dispatched due to device errors.
   * *   **TaskNotExist**: The query task does not exist.
   * *   **OfflineNotConfiged**: The query task is not dispatched because the SAG device is disconnected from Alibaba Cloud. The task will not be dispatched after the device is connected to Alibaba Cloud.
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
   * The HA mode. Valid values:
   * 
   * *   **NONE**: HA is disabled.
   * *   **STATIC**: static HA is enabled.
   * *   **DYNAMIC**: dynamic HA is enabled.
   * 
   * @example
   * NONE
   */
  mode?: string;
  /**
   * @remarks
   * The information about the port.
   */
  ports?: DescribeSagHaResponseBodyPorts[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 273D62FD-E346-4959-AA18-D79B9276FEFB
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the query task.
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

