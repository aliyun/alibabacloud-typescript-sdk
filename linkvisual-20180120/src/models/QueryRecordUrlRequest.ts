// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecordUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The DeviceName of the IP camera.
   * You can view the **DeviceName** on the **Devices** page in the IoT Platform console.
   * >Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * camera1
   */
  deviceName?: string;
  /**
   * @remarks
   * The name of the cloud recording file. You can call the [QueryRecord](https://help.aliyun.com/document_detail/107922.html) operation to query the file name.
   * 
   * This parameter is required.
   * 
   * @example
   * file1
   */
  fileName?: string;
  /**
   * @remarks
   * The IotId of the IP camera. The IotId is the unique identifier that is issued by IoT Platform to the device. You can call the IoT Platform [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation to query the IotId.
   * 
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. The **IotId** is the unique identifier of the device and corresponds to the combination of **ProductKey** and **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * VrJwPGjC1sJlqPjZA3cxg4****
   */
  iotId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * <props="china">You can view the **ID** of the current instance on the **Instance Overview** page in the IoT Platform console. If the instance has an ID, you must specify the ID. Otherwise, the call fails.
   * 
   * <props="china">
   * > If the public instance does not have an ID, see [How to obtain an instance ID](https://help.aliyun.com/document_detail/267533.html).
   * 
   * <props="intl">You do not need to specify this parameter.
   * 
   * @example
   * iot-cn-n6w1y****
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The ProductKey of the product to which the IP camera belongs.
   * You can view the ProductKey on the **Products** page in the IoT Platform console or call the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation to query the information about all products under the current account.
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  /**
   * @remarks
   * The playback offset time of the recording, in seconds. Default value: 0.
   * 
   * @example
   * 0
   */
  seekTime?: number;
  /**
   * @remarks
   * The validity period of the URL, in seconds. Valid values: 10 to 3600.
   * 
   * @example
   * 10
   */
  urlValidDuration?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      fileName: 'FileName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      seekTime: 'SeekTime',
      urlValidDuration: 'UrlValidDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      fileName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      seekTime: 'number',
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

