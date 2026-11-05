// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewSmartAccessGatewayDnsResponseBodyTaskStates extends $dara.Model {
  /**
   * @remarks
   * The time when the query task was created.
   * 
   * The time is a UNIX timestamp that indicates the number of seconds elapsed since 00:00:00 UTC on January 1, 1970.
   * 
   * @example
   * 1586857309000
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
   * - **Succeed**: The query task is delivered successfully.
   * - **Processing**: The query task is being delivered.
   * - **VersionNotSupport**: The current version of the Smart Access Gateway device does not support this operation.
   * - **BuildRequestError**: The management and control system does not support this operation.
   * - **HardwareError**: The query task fails to be delivered due to device errors.
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

export class ViewSmartAccessGatewayDnsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address of the primary DNS server.
   * 
   * @example
   * 114.114.XXX.XXX
   */
  masterDns?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 571AC2E7-8119-58E9-8BFA-1D580CBD1E56
   */
  requestId?: string;
  /**
   * @remarks
   * The IP address of the secondary DNS server.
   * 
   * @example
   * 8.8.XX.XX
   */
  slaveDns?: string;
  /**
   * @remarks
   * The status of the query task.
   */
  taskStates?: ViewSmartAccessGatewayDnsResponseBodyTaskStates[];
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
      taskStates: { 'type': 'array', 'itemType': ViewSmartAccessGatewayDnsResponseBodyTaskStates },
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

