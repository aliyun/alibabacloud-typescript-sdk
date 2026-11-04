// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The DeviceName of the IPC device. You can view the **DeviceName** on the **Devices** page in the IoT Platform console.
   * >Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * camera1
   */
  deviceName?: string;
  /**
   * @remarks
   * The list of names of the video files to be deleted. You can call the [QueryRecord](https://help.aliyun.com/document_detail/107922.html) operation to obtain the video file names.
   * 
   * > You can delete a maximum of 50 video files in a single call.
   * 
   * This parameter is required.
   * 
   * @example
   * file1
   */
  fileNameList?: string[];
  /**
   * @remarks
   * The ID of the IPC device. The ID is issued by IoT Platform and uniquely identifies the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the ID.
   * 
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. As the unique identifier of the device, **IotId** has a one-to-one mapping with the combination of **ProductKey** and **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * d7XmBoJhAr88C6PelXDF00****
   */
  iotId?: string;
  /**
   * @remarks
   * The instance ID. You can view the **ID** of the current instance on the **Instance Overview** page in the IoT Platform console.
   * 
   * >Notice: 
   * - If an ID value is available, you must specify this parameter. Otherwise, the call fails.
   * - If no <props="intl"><ph>**Instance Overview** page or </ph>ID value is available, you do not need to specify this parameter.
   * 
   * 
   * 
   * For more information about instances, see [Instance overview](https://help.aliyun.com/document_detail/356505.html).
   * 
   * @example
   * iot-060a****
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The ProductKey of the product to which the IPC device belongs. You can view the ProductKey on the **Products** page in the IoT Platform console or call the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation to query the information about all products under the current account.
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      fileNameList: 'FileNameList',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      fileNameList: { 'type': 'array', 'itemType': 'string' },
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileNameList)) {
      $dara.Model.validateArray(this.fileNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

