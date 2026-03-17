// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewSmartAccessGatewayOspfRouteResponseBodyTaskStates extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the task was created. Unit: milliseconds.
   * 
   * The value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1586843621000
   */
  createTime?: string;
  /**
   * @remarks
   * The error code. A value of 200 indicates that the task is successful.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. A value of Successful indicates that the task is successful.
   * 
   * @example
   * Successful
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status of the asynchronous task. Valid values:
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

export class ViewSmartAccessGatewayOspfRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the OSPF area.
   * 
   * @example
   * 10
   */
  areaId?: number;
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * *   **NONE**: Authentication is disabled.
   * *   **CLEARTEXT**: Plaintext authentication is used.
   * *   **MD5**: MD5 authentication is used.
   * 
   * @example
   * NONE
   */
  authenticationType?: string;
  /**
   * @remarks
   * The timeout period of connections between OSPF peers. Unit: seconds.
   * 
   * @example
   * 10
   */
  deadTime?: number;
  /**
   * @remarks
   * The time interval at which Hello packets are sent. Unit: seconds.
   * 
   * @example
   * 1
   */
  helloTime?: number;
  /**
   * @remarks
   * The MD5 key value.
   * 
   * @example
   * 123****
   */
  md5Key?: string;
  /**
   * @remarks
   * The ID of the MD5 key.
   * 
   * @example
   * 1
   */
  md5KeyId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AA1AE941-84A9-5F83-A955-C8DAF31C2CB8
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the router that has OSPF enabled.
   * 
   * @example
   * 1.XX.XX.1
   */
  routerId?: string;
  /**
   * @remarks
   * The status of the task.
   */
  taskStates?: ViewSmartAccessGatewayOspfRouteResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      authenticationType: 'AuthenticationType',
      deadTime: 'DeadTime',
      helloTime: 'HelloTime',
      md5Key: 'Md5Key',
      md5KeyId: 'Md5KeyId',
      requestId: 'RequestId',
      routerId: 'RouterId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'number',
      authenticationType: 'string',
      deadTime: 'number',
      helloTime: 'number',
      md5Key: 'string',
      md5KeyId: 'number',
      requestId: 'string',
      routerId: 'string',
      taskStates: { 'type': 'array', 'itemType': ViewSmartAccessGatewayOspfRouteResponseBodyTaskStates },
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

