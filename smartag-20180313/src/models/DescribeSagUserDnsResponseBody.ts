// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagUserDnsResponseBodyTaskStates extends $dara.Model {
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

export class DescribeSagUserDnsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address of the primary DNS server.
   * 
   * @example
   * 192.XX.XX.1
   */
  masterDns?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0937DEA0-AB4B-42F4-9314-07B97D30282B
   */
  requestId?: string;
  /**
   * @remarks
   * The IP address of the secondary DNS server.
   * 
   * @example
   * 192.XX.XX.2
   */
  slaveDns?: string;
  /**
   * @remarks
   * The state of the query task.
   */
  taskStates?: DescribeSagUserDnsResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      masterDns: 'MasterDns',
      requestId: 'RequestId',
      slaveDns: 'SlaveDns',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterDns: 'string',
      requestId: 'string',
      slaveDns: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagUserDnsResponseBodyTaskStates },
    };
  }

  validate() {
    if(Array.isArray(this.taskStates)) {
      $dara.Model.validateArray(this.taskStates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

