// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagWifiResponseBodyTaskStates extends $dara.Model {
  /**
   * @remarks
   * The time when the query task was created.
   * 
   * @example
   * 1586843621000
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
   * - **BuildRequestError**: The management system does not support the operation.
   * - **HardwareError**: The query task fails to be delivered due to device errors.
   * - **TaskNotExist**: The query task does not exist.
   * - **OfflineNotConfiged**: The Smart Access Gateway device is offline and the query task is not delivered. The task will not be delivered even after the device goes online.
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

export class DescribeSagWifiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * - **NONE**: Authentication is disabled.
   * - **WPA-PSK**: WPA-PSK authentication is enabled.
   * - **WPA2-PSK**: WPA2-PSK authentication is enabled.
   * 
   * @example
   * WPA2-PSK
   */
  authenticationType?: string;
  /**
   * @remarks
   * The spectrum bandwidth. Valid values:
   * 
   * - **Auto**.
   * - **20MHz**.
   * - **40MHz**.
   * 
   * @example
   * Automatic
   */
  bandwidth?: string;
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * 0
   */
  channel?: string;
  /**
   * @remarks
   * The encryption algorithm. Valid values:
   * 
   * - **AUTO**: Automatic encryption.
   * - **TKIP**: Temporal Key Integrity Protocol.
   * - **AES**: Advanced Encryption Standard.
   * 
   * @example
   * AES
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Indicates whether the wireless security feature is enabled. Valid values:
   * 
   * - **True**: The wireless security feature is enabled.
   * - **False**: The wireless security feature is disabled.
   * 
   * @example
   * True
   */
  isAuth?: string;
  /**
   * @remarks
   * Indicates whether the Wi-Fi broadcast feature is enabled. Valid values:
   * 
   * - **True**: The Wi-Fi broadcast feature is enabled.
   * - **False**: The Wi-Fi broadcast feature is disabled.
   * 
   * @example
   * True
   */
  isBroadcast?: string;
  /**
   * @remarks
   * Indicates whether the wireless feature is enabled. Valid values:
   * 
   * - **True**: Enabled.
   * - **False**: Disabled.
   * 
   * @example
   * True
   */
  isEnable?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E93884AC-6C21-4FEA-8E3A-7377D33B194F
   */
  requestId?: string;
  /**
   * @remarks
   * The Wi-Fi name.
   * 
   * @example
   * aliyun_sag_123456***
   */
  ssid?: string;
  /**
   * @remarks
   * The status of the query task.
   */
  taskStates?: DescribeSagWifiResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'AuthenticationType',
      bandwidth: 'Bandwidth',
      channel: 'Channel',
      encryptAlgorithm: 'EncryptAlgorithm',
      isAuth: 'IsAuth',
      isBroadcast: 'IsBroadcast',
      isEnable: 'IsEnable',
      requestId: 'RequestId',
      ssid: 'Ssid',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'string',
      bandwidth: 'string',
      channel: 'string',
      encryptAlgorithm: 'string',
      isAuth: 'string',
      isBroadcast: 'string',
      isEnable: 'string',
      requestId: 'string',
      ssid: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagWifiResponseBodyTaskStates },
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

