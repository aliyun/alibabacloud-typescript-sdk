// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerRecordRequest extends $dara.Model {
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
   * The IotId of the IPC device. The IotId is the unique identifier that is issued by IoT Platform to the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the IotId.
   * 
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. The **IotId** is the unique identifier of the device and corresponds to the combination of **ProductKey** and **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * zLZyi6aOLyOSHa****yD000100
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
   * iot-cn-n6w1y5****0t
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The pre-recording duration. Valid values: 0 to 10. Unit: seconds.
   * 
   * >The pre-recording duration is generated only when the device supports the pre-recording feature. Otherwise, the pre-recording duration is 0.
   * 
   * @example
   * 5
   */
  preRecordDuration?: number;
  /**
   * @remarks
   * The ProductKey of the product to which the IPC device belongs. You can view the ProductKey on the **Products** page in the IoT Platform console or call the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation to query all products under the current account.
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  /**
   * @remarks
   * The recording duration, including the pre-recording duration. Valid values: 10 to 7200. Unit: seconds.
   * 
   * > The maximum length of a single recording file is 30 minutes. If the recording duration exceeds 30 minutes, the recording is automatically split into multiple recording files.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  recordDuration?: number;
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
      preRecordDuration: 'PreRecordDuration',
      productKey: 'ProductKey',
      recordDuration: 'RecordDuration',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      preRecordDuration: 'number',
      productKey: 'string',
      recordDuration: 'number',
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

