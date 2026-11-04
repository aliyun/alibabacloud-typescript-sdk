// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDevicePictureFileRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image generated when a snapshot capture event occurs:
   * - For active snapshot capture, see [TriggerCapturePicture](https://help.aliyun.com/document_detail/107914.html) for the image ID.
   * - For snapshot capture triggered by an intelligent alert event, see [QueryDeviceEvent](https://help.aliyun.com/document_detail/107916.html) for the image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * fdc576d03c094faea9fa10fbf48c****
   */
  captureId?: string;
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
  /**
   * @remarks
   * Specifies the expiration time of the image URL. Unit: minutes. Valid values: 1 to 43200.
   * 
   * @example
   * 60
   */
  expireTime?: number;
  /**
   * @remarks
   * The IotId of the IPC device. The IotId is the globally unique identifier (GUID) that is issued by IoT Platform to the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the IotId.
   * 
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. The **IotId** is the globally unique identifier of the device and corresponds to the combination of **ProductKey** and **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * zLZyi6aOLyOSHa9hsPyD00****
   */
  iotId?: string;
  /**
   * @remarks
   * The instance ID. You can view the **ID** of the current instance on the **Overview** page in the IoT Platform console.
   * 
   * >Notice: 
   * - If the instance has an ID, you must specify the ID. Otherwise, the call fails.
   * - If the <props="intl"><ph>**Overview** page is not displayed or the instance does not have an </ph>ID, you do not need to specify this parameter.
   * 
   * 
   * 
   * For more information about instances, see [Instance overview](https://help.aliyun.com/document_detail/356505.html).
   * 
   * @example
   * iot-cn-n6w1y******
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The image type. Valid values:
   * - **0**: thumbnail.
   * - **1**: original image.
   * - **2**: all images. This is the default value.
   * 
   * @example
   * 1
   */
  pictureType?: number;
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
   * Specifies the width of the target scaled image. Unit: px. Valid values: 1 to 4096.
   * 
   * @example
   * 100
   */
  thumbWidth?: number;
  static names(): { [key: string]: string } {
    return {
      captureId: 'CaptureId',
      deviceName: 'DeviceName',
      expireTime: 'ExpireTime',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      pictureType: 'PictureType',
      productKey: 'ProductKey',
      thumbWidth: 'ThumbWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captureId: 'string',
      deviceName: 'string',
      expireTime: 'number',
      iotId: 'string',
      iotInstanceId: 'string',
      pictureType: 'number',
      productKey: 'string',
      thumbWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

