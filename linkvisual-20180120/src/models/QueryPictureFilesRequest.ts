// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPictureFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the retrieval range. The time is a 13-digit timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1615357669000
   */
  beginTime?: number;
  /**
   * @remarks
   * The page number of the returned page. Pages start from 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The DeviceName of the IP camera.
   * You can view the **DeviceName** on the **Devices** page of the IoT Platform console.
   * >Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * camera1
   */
  deviceName?: string;
  /**
   * @remarks
   * The end time of the retrieval range. The time is a 13-digit timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1615444063000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the IP camera. The ID is issued by IoT Platform and is the unique identifier of the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the ID.
   * 
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. The **IotId** is the unique identifier of the device and corresponds to the combination of **ProductKey** and **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * zLZyi6aOLyOSHa9hsPyD00****
   */
  iotId?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can view the **ID** of the current instance on the **Instance Overview** page of the IoT Platform console.
   * 
   * >Notice: 
   * - If the instance has an ID, you must specify instance ID. Otherwise, the call fails.
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
   * The number of entries to return on each page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The source of the image. Valid values:
   * 
   * - **0**: all events. This is the default value.
   * - **1**: snapshot captured during an alert event.
   * - **2**: manual snapshot.
   * - **3**: other sources.
   * - **4**: cloud snapshot.
   * 
   * @example
   * 0
   */
  pictureSource?: number;
  /**
   * @remarks
   * The type of the image. Valid values:
   * 
   * - **0**: thumbnail. 
   * - **1**: original image.
   * - **2**: all images. This is the default value.
   * 
   * @example
   * 2
   */
  pictureType?: number;
  /**
   * @remarks
   * The ProductKey of the product to which the IP camera belongs.
   * You can view the ProductKey on the **Products** page of the IoT Platform console or call the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation to query the information about all products under the current account.
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      currentPage: 'CurrentPage',
      deviceName: 'DeviceName',
      endTime: 'EndTime',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      pictureSource: 'PictureSource',
      pictureType: 'PictureType',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      currentPage: 'number',
      deviceName: 'string',
      endTime: 'number',
      iotId: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      pictureSource: 'number',
      pictureType: 'number',
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

