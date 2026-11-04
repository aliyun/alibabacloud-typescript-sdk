// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMonthRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The DeviceName of the IP camera. You can view the **DeviceName** on the **Devices** page in the IoT Platform console.>Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * camera1
   */
  deviceName?: string;
  /**
   * @remarks
   * The IotId of the IP camera. The IotId is the unique identifier issued by IoT Platform for the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the IotId.>Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. The **IotId** is the unique identifier of the device and corresponds to the combination of **ProductKey** and **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
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
   * The month to query, in the YYYYMM format.
   * 
   * This parameter is required.
   * 
   * @example
   * 201901
   */
  month?: string;
  /**
   * @remarks
   * The ProductKey of the product to which the IP camera belongs. You can view the ProductKey on the **Products** page in the IoT Platform console or call the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation to query all products under the current account.>Notice:  If you specify this parameter, you must also specify **DeviceName**.
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
      month: 'Month',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      month: 'string',
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

