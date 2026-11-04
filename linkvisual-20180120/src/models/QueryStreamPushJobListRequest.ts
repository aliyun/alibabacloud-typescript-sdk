// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryStreamPushJobListRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the page number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The DeviceName of the device.
   * You can view the **DeviceName** on the **Devices** page in the IoT Platform console.
   * >Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * camera1
   */
  deviceName?: string;
  /**
   * @remarks
   * The ID of the device. The ID is the unique identifier that is issued by IoT Platform to the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the ID.
   * 
   * >Notice:  **IotId** is the unique identifier of the device and corresponds to the combination of **ProductKey** and **DeviceName**. If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * d7XmBoJhAr88C6PelXDF00****
   */
  iotId?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can view instance ID of the current instance on the **Instance Overview** tab in the IoT Platform console.
   * 
   * This parameter is required.
   * 
   * @example
   * iot-cn-n6w1y59****
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The type of the stream push job. Valid values:
   * 
   * - **1** (default): continuous job.
   * - **2**: triggered job. The job ends after it is interrupted.
   * 
   * @example
   * 1
   */
  jobType?: number;
  /**
   * @remarks
   * Specifies the number of entries to return on each page. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The **ProductKey** of the product to which the device belongs.
   * You can view the **ProductKey** on the **Products** page in the IoT Platform console or call the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation to query the information of all products under the current account.
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      jobType: 'JobType',
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
      jobType: 'number',
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

