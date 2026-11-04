// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDevicePictureByListRequest extends $dara.Model {
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
   * The expiration time of the image URL. Unit: minutes.
   * 
   * @example
   * 60
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the IP camera. The ID is issued by IoT Platform and uniquely identifies the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the ID.
   * 
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. **IotId** uniquely identifies the device and corresponds to the combination of **ProductKey** and **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * 1CJ0****e7qiq8VkQi1000000
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
   * iot-cn-n6w1y******
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The list of image IDs. Image IDs are generated when you call the [TriggerCapturePicture](https://help.aliyun.com/document_detail/107914.html) operation.
   * 
   * > You can specify up to 50 image IDs in a single call.
   * 
   * This parameter is required.
   * 
   * @example
   * cFc5MzZ****npYT1***TDFzX1hrVzA0Z****
   */
  pictureIdList?: string[];
  /**
   * @remarks
   * The image type. Valid values:
   * 
   * - **0**: thumbnail.
   * - **1**: original image. 
   * - **2**: all. Default value.
   * 
   * @example
   * 2
   */
  pictureType?: number;
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
   * Specifies the width of the target thumbnail. Unit: px. Valid values: 1 to 4096.
   * 
   * @example
   * 100
   */
  thumbWidth?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      expireTime: 'ExpireTime',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      pictureIdList: 'PictureIdList',
      pictureType: 'PictureType',
      productKey: 'ProductKey',
      thumbWidth: 'ThumbWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      expireTime: 'number',
      iotId: 'string',
      iotInstanceId: 'string',
      pictureIdList: { 'type': 'array', 'itemType': 'string' },
      pictureType: 'number',
      productKey: 'string',
      thumbWidth: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pictureIdList)) {
      $dara.Model.validateArray(this.pictureIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

