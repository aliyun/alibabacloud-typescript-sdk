// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecordDownloadJobListRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the page number to return. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The DeviceName of the video device. You can view the **DeviceName** of devices under a specified product on the **Devices** page in the [IoT Platform console](https://iot.console.aliyun.com/devices) or by calling the [QueryDevice](https://help.aliyun.com/document_detail/69905.html) operation.
   * 
   * >Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * Device01
   */
  deviceName?: string;
  /**
   * @remarks
   * The ID of the video device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation to query the ID.
   * 
   * >Notice:  **IotId** is the unique identifier of the device and corresponds to the combination of **ProductKey** and **DeviceName**. If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * C47T6xwp6ms4bNlkHRWCg4****
   */
  iotId?: string;
  /**
   * @remarks
   * The instance ID. You can view the ID of the current instance on the **Instance Overview** tab in the IoT Platform console.
   * 
   * This parameter is required.
   * 
   * @example
   * iot-2w******
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * Specifies the number of entries to return per page. Maximum value: 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The **ProductKey** of the product to which the video device belongs.
   * 
   * You can view the information of all products under the current instance on the **Products** page in the [IoT Platform console](https://iot.console.aliyun.com/product) or by calling the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation.
   * 
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1Bw******
   */
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

