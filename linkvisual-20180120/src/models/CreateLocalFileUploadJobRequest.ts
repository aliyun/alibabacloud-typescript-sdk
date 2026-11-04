// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLocalFileUploadJobRequestTimeSlot extends $dara.Model {
  /**
   * @remarks
   * The name of the video device.
   * You can view the **DeviceName** on the **Devices** page in the IoT Platform console.
   * >Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * camera1
   */
  deviceName?: string;
  /**
   * @remarks
   * The end time for uploading the local video recording. The time is a 10-digit UNIX timestamp in seconds.
   * >The maximum time range for a single local video recording upload job is 1 hour.
   * 
   * This parameter is required.
   * 
   * @example
   * 1631019775
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the video device. The ID is issued by IoT Platform and uniquely identifies the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the ID.
   * 
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. The **IotId** uniquely identifies the device and has a one-to-one mapping with the combination of **ProductKey** and **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * d7XmBoJhAr88C6PelXDF00****
   */
  iotId?: string;
  /**
   * @remarks
   * The ProductKey of the product to which the video device belongs.
   * You can view the ProductKey on the **Products** page in the IoT Platform console or call the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation to query the information about all products under the current account.
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  /**
   * @remarks
   * The start time for uploading the local video recording. The time is a 10-digit UNIX timestamp in seconds.
   * >The maximum time range for a single local video recording upload job is 1 hour.
   * 
   * This parameter is required.
   * 
   * @example
   * 1631019675
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      endTime: 'EndTime',
      iotId: 'IotId',
      productKey: 'ProductKey',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      endTime: 'number',
      iotId: 'string',
      productKey: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLocalFileUploadJobRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can view the **ID** of the current instance on the **Instance Overview** page in the IoT Platform console.
   * 
   * >Notice: 
   * - If the instance has an ID, you must specify the ID. Otherwise, the call fails.
   * - If the instance does not have an <props="intl"><ph>**Instance Overview** page or </ph>ID, you do not need to specify this parameter.
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
   * The list of time slots.
   */
  timeSlot?: CreateLocalFileUploadJobRequestTimeSlot[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      timeSlot: 'TimeSlot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      timeSlot: { 'type': 'array', 'itemType': CreateLocalFileUploadJobRequestTimeSlot },
    };
  }

  validate() {
    if(Array.isArray(this.timeSlot)) {
      $dara.Model.validateArray(this.timeSlot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

