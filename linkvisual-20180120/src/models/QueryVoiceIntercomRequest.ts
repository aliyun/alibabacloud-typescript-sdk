// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVoiceIntercomRequest extends $dara.Model {
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
   * The device ID of the IPC device. The ID is issued by IoT Platform and is the unique identifier of the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation to query the ID.
   * 
   * >Notice:  As the unique identifier of the device, **IotId** has a one-to-one mapping with the combination of **ProductKey** and **DeviceName**. If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * C47T6xwp6ms4bNlkHRWCg4****
   */
  iotId?: string;
  /**
   * @remarks
   * The instance ID. You can view the **ID** of the current instance on the **Instance Overview** page in the IoT Platform console.
   * 
   * >Notice: 
   * - If an **ID** value is available, you must specify the **ID**. Otherwise, the call fails.
   * - If the **Instance Overview** page or the **ID** value is not available, you do not need to specify this parameter.
   * 
   * 
   * 
   * For more information about instances, see [Instance overview](https://help.aliyun.com/document_detail/356505.html).
   * 
   * @example
   * iot-cn-n6w1y*****
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The **ProductKey** of the product to which the IPC device belongs.
   * You can view the information about all products under the current account on the **Products** page in the IoT Platform console or by calling the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation.
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  /**
   * @remarks
   * The connection protocol type for voice intercom. Valid values:
   * 
   * - **ws**: WebSocket. Call this operation to obtain the web voice call address when you implement the voice intercom feature on web clients. <props="china"><ph>For more information about how to implement the voice intercom feature between web clients and devices, see [Web voice intercom integration guide](https://help.aliyun.com/document_detail/2545966.html).</ph>
   * - **rtmp** (default): Real-Time Messaging Protocol (RTMP). Call this operation to obtain the corresponding voice call address when you implement the voice intercom feature by using players in Android and iOS applications. For more information about how to implement the voice intercom feature between Android and iOS applications and devices, see [Android voice intercom](https://help.aliyun.com/document_detail/260925.html) and [iOS voice intercom](https://help.aliyun.com/document_detail/253953.html).
   * 
   * @example
   * rtmp
   */
  scheme?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      scheme: 'Scheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      scheme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

