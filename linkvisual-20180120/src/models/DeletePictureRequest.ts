// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePictureRequest extends $dara.Model {
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
   * The IotId of the IPC device. The IotId is a unique identifier issued by IoT Platform for the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the IotId.
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. The **IotId** is a unique identifier for the device and has a one-to-one mapping with the combination of **ProductKey** and **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * 1CJ0****e7qiq8VkQi1000000
   */
  iotId?: string;
  /**
   * @remarks
   * The instance ID. You can view the **ID** of the current instance on the **Instance Overview** page in the IoT Platform console.
   * >Notice: 
   * - If the instance has an ID, you must specify the ID. Otherwise, the call fails.
   * - If the instance does not have an <props="intl"><ph>**Instance Overview** page or an </ph>ID, you do not need to specify this parameter.
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
   * The list of picture IDs. Picture IDs are generated when you call the [TriggerCapturePicture](https://help.aliyun.com/document_detail/107914.html) operation.
   * > You can specify up to 50 picture IDs in a single call.
   * 
   * This parameter is required.
   * 
   * @example
   * cFc5MzZ****npYT1***TDFzX1hrVzA0Z****
   */
  pictureIdList?: string[];
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
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      pictureIdList: 'PictureIdList',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      pictureIdList: { 'type': 'array', 'itemType': 'string' },
      productKey: 'string',
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

