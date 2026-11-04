// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLiveStreamingRequest extends $dara.Model {
  /**
   * @remarks
   * The duration of video cached data. Valid values: 0 to 10000. Unit: milliseconds. Default value: 0.
   * 
   * @example
   * 0
   */
  cacheDuration?: number;
  /**
   * @remarks
   * The DeviceName of the IPC device. You can view the **DeviceName** on the **Devices** page in the IoT Platform console.
   * >Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * camera1
   */
  deviceName?: string;
  enableStun?: boolean;
  /**
   * @remarks
   * The encryption type. Valid values:
   * - **1** (default): Keyframe encryption.
   * - **0**: No encryption.
   * 
   * @example
   * 1
   */
  encryptType?: number;
  /**
   * @remarks
   * Specifies whether to send a force I-frame command to the device. Valid values:
   * 
   * - **true**: Sent.
   * - **false** (default): Not sent.
   * 
   * @example
   * false
   */
  forceIFrame?: boolean;
  /**
   * @remarks
   * The IotId of the IPC device. The IotId is the globally unique identifier that is issued by IoT Platform to the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the IotId.
   * 
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. The **IotId** is the globally unique identifier of the device and corresponds to the combination of **ProductKey** and **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * C47T6xwp6ms4bNlkHRWCg4****
   */
  iotId?: string;
  /**
   * @remarks
   * The instance ID. You can view the **ID** of the current instance on the **Instance Overview** page in the IoT Platform console.
   * 
   * >Notice: 
   * - If an ID value is displayed, you must specify this parameter. Otherwise, the call fails.
   * - If the <props="intl"><ph>**Instance Overview** page or </ph>ID value is not displayed, you do not need to specify this parameter.
   * 
   * 
   * 
   * For more information about instances, see [Instance overview](https://help.aliyun.com/document_detail/356505.html).
   * 
   * @example
   * iot-cn-n6w1y59****
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * Specifies whether the playback URL can be used for an unlimited number of times within the validity period. Valid values:
   * - **true**: Allowed.
   * - **false** (default): Not allowed.
   * 
   * @example
   * false
   */
  playUnLimited?: boolean;
  /**
   * @remarks
   * The ProductKey of the product to which the IPC device belongs. You can view the ProductKey on the **Products** page in the IoT Platform console or call the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation to query the information about all products under the current account.
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  /**
   * @remarks
   * The playback protocol type. Valid values:
   * 
   * - **rtmp** (default): RTMP.
   * - **hls**: HLS.
   * - **flv**: HTTP-FLV.
   * 
   * @example
   * rtmp
   */
  scheme?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the stream. Valid values:
   * 
   * - **true**: Encrypted.
   * - **false** (default): Not encrypted.
   * 
   * @example
   * true
   */
  shouldEncrypt?: boolean;
  /**
   * @remarks
   * The stream type. Valid values:
   * - **0** (default): Main stream.
   * - **1**: Sub stream.
   * 
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @remarks
   * The validity period of the URL. Valid values: 10 to 14400. Unit: seconds. Default value: 10.
   * 
   * @example
   * 60
   */
  urlValidDuration?: number;
  static names(): { [key: string]: string } {
    return {
      cacheDuration: 'CacheDuration',
      deviceName: 'DeviceName',
      enableStun: 'EnableStun',
      encryptType: 'EncryptType',
      forceIFrame: 'ForceIFrame',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      playUnLimited: 'PlayUnLimited',
      productKey: 'ProductKey',
      scheme: 'Scheme',
      shouldEncrypt: 'ShouldEncrypt',
      streamType: 'StreamType',
      urlValidDuration: 'UrlValidDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheDuration: 'number',
      deviceName: 'string',
      enableStun: 'boolean',
      encryptType: 'number',
      forceIFrame: 'boolean',
      iotId: 'string',
      iotInstanceId: 'string',
      playUnLimited: 'boolean',
      productKey: 'string',
      scheme: 'string',
      shouldEncrypt: 'boolean',
      streamType: 'number',
      urlValidDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

