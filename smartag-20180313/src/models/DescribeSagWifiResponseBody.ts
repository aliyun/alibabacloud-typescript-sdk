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

export class DescribeSagWifiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * *   **NONE**: authentication is disabled.
   * *   **WPA-PSK**: WPA-PSK authentication is enabled.
   * *   **WPA2-PSK**: WPA2-PSK authentication is enabled.
   * 
   * @example
   * WPA2-PSK
   */
  authenticationType?: string;
  /**
   * @remarks
   * The bandwidth of the Wi-Fi channel. Valid values:
   * 
   * *   **Automatic**
   * *   **20 HMz**
   * *   **40 MHz**
   */
  bandwidth?: string;
  /**
   * @remarks
   * The Wi-Fi channel.
   * 
   * @example
   * 0
   */
  channel?: string;
  /**
   * @remarks
   * The encryption algorithm.
   * 
   * *   **AUTO**: automatically selects the encryption algorithm.
   * *   **TKIP**: uses the Temporal Key Integrity Protocol (TKIP).
   * *   **AES**: uses the Advanced Encryption Standard authorized by Wi-Fi®.
   * 
   * @example
   * AES
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Indicates whether wireless security is enabled.
   * 
   * *   **True**: wireless security is enabled.
   * *   **False**: wireless security is disabled.
   * 
   * @example
   * True
   */
  isAuth?: string;
  /**
   * @remarks
   * Indicates whether broadcast over Wi-Fi is enabled. Valid values:
   * 
   * *   **True**: broadcast is enabled.
   * *   **False**: broadcast is disabled.
   * 
   * @example
   * True
   */
  isBroadcast?: string;
  /**
   * @remarks
   * Indicates whether wireless connections are enabled. Valid values:
   * 
   * *   **True**: wireless connections are enabled.
   * *   **False**: wireless connections are disabled.
   * 
   * @example
   * True
   */
  isEnable?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E93884AC-6C21-4FEA-8E3A-7377D33B194F
   */
  requestId?: string;
  /**
   * @remarks
   * The service set identifier (SSID) of the Wi-Fi network.
   * 
   * @example
   * aliyun_sag_123456***
   */
  ssid?: string;
  /**
   * @remarks
   * The information about the query task.
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

