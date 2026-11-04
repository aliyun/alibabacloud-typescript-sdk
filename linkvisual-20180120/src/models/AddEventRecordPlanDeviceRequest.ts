// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEventRecordPlanDeviceRequest extends $dara.Model {
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
   * The IotId of the IP camera. The IotId is the unique identifier that is issued by IoT Platform for the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the IotId.
   * 
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. The **IotId** is the unique identifier of the device and corresponds to the combination of **ProductKey** and **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * zLZyi6aOLyOSHa9hsPyD00****
   */
  iotId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * You can view the **ID** of the current instance on the **Instance Overview** page in the IoT Platform console. If an ID value is available, you must specify this ID. Otherwise, the call fails.
   * 
   * > If the public instance does not have an ID value, see [How to obtain an instance ID](https://help.aliyun.com/document_detail/267533.html).
   * 
   * @example
   * iot-cn-n6w1y59****
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The ID of the intelligent alert event recording plan. You can call the [QueryEventRecordPlans](https://help.aliyun.com/document_detail/107907.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5b60bf0dd55944c19d7817442bc9****
   */
  planId?: string;
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
   * The stream type. Valid values:
   * - **0** (default): main stream.
   * - **1**: sub stream.
   * 
   * @example
   * 0
   */
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      planId: 'PlanId',
      productKey: 'ProductKey',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      planId: 'string',
      productKey: 'string',
      streamType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

