// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDeviceVodUrlByTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The recording start time. The value must be a 10-digit UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1508200012
   */
  beginTime?: number;
  /**
   * @remarks
   * The DeviceName of the IPC device.
   * You can view the **DeviceName** on the **Devices** page in the IoT Platform console.
   * >Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * camera1
   */
  deviceName?: string;
  enableStun?: boolean;
  /**
   * @remarks
   * The encryption type. Only I-frame encryption is supported. Set the value to 0.
   * 
   * @example
   * 0
   */
  encryptType?: number;
  /**
   * @remarks
   * The recording end time. The value must be a 10-digit UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1582420940
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the IPC device. The ID is issued by IoT Platform and uniquely identifies the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the ID.
   * 
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. The **IotId** uniquely identifies the device and has a one-to-one mapping with the combination of **ProductKey** and **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
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
   * - If the instance has an ID, you must specify this ID. Otherwise, the call fails.
   * - If the instance does not have an <props="intl"><ph>**Instance Overview** page or </ph>ID, you do not need to specify this parameter.
   * 
   * 
   * 
   * For more information about instances, see [Instance overview](https://help.aliyun.com/document_detail/356505.html).
   * 
   * @example
   * iot-cn-n6w1y****
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * Specifies whether the playback URL can be used an unlimited number of times. Valid values:
   * 
   * - **true**: The URL can be used an unlimited number of times within 10 seconds.
   * - **false**: The URL can be used only once. This is the default value.
   * 
   * @example
   * false
   */
  playUnLimited?: boolean;
  /**
   * @remarks
   * The ProductKey of the product to which the IPC device belongs.
   * You can view the ProductKey on the **Products** page in the IoT Platform console or call the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation to query the information about all products under the current account.
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * - **rtmp**: RTMP.
   * - **flv**: HTTP-FLV.
   * - **hls**: HLS.
   *  > For more information about the limits of HLS, see [Cloud development](https://help.aliyun.com/document_detail/208584.html).
   * 
   * @example
   * rtmp
   */
  scheme?: string;
  /**
   * @remarks
   * The offset relative to the recording start time specified by **BeginTime**. Unit: seconds. Default value: 0.
   * 
   * @example
   * 0
   */
  seekTime?: number;
  /**
   * @remarks
   * Specifies whether to encrypt the stream. Valid values:
   * - **true**: Encrypts the stream.
   * - **false**: Does not encrypt the stream. This is the default value.
   * 
   * @example
   * false
   */
  shouldEncrypt?: boolean;
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
      beginTime: 'BeginTime',
      deviceName: 'DeviceName',
      enableStun: 'EnableStun',
      encryptType: 'EncryptType',
      endTime: 'EndTime',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      playUnLimited: 'PlayUnLimited',
      productKey: 'ProductKey',
      scheme: 'Scheme',
      seekTime: 'SeekTime',
      shouldEncrypt: 'ShouldEncrypt',
      urlValidDuration: 'UrlValidDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      deviceName: 'string',
      enableStun: 'boolean',
      encryptType: 'number',
      endTime: 'number',
      iotId: 'string',
      iotInstanceId: 'string',
      playUnLimited: 'boolean',
      productKey: 'string',
      scheme: 'string',
      seekTime: 'number',
      shouldEncrypt: 'boolean',
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

