// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferDeviceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The list of names of the devices to be transferred. You can specify up to 100 device names.
   * 
   * This parameter is required.
   * 
   * @example
   * RepeatList
   */
  deviceNameList?: string[];
  /**
   * @remarks
   * The ProductKey of the product to which the devices belong. IoT Platform generates this unique identifier when the product is created.
   * 
   * This parameter is required.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  /**
   * @remarks
   * The ID of the source instance to which the devices belong:
   * 
   * - Public instance ID: iotx-oxssharez200.
   *     > Only the China (Shanghai) region is supported. Enterprise instance ID is iotx-oxssharez200.
   * 
   * - Enterprise Edition instance ID: Log on to the IoT Platform console. On the **Instance Overview** page, click Enterprise instance name. On the **Instance Details** page, view the **Instance ID** in the **Basic Information** section.
   * 
   * @example
   * iotx-oxssharez200
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The ID of the target instance to which the devices are transferred. Only Enterprise Edition instances are supported as target instances.
   * 
   * You can log on to the IoT Platform console. On the **Instance Overview** page, click the instance name. On the **Instance Details** page, view the **Instance ID** in the **Basic Information** section.
   * 
   * This parameter is required.
   * 
   * @example
   * iot-060***
   */
  targetInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceNameList: 'DeviceNameList',
      productKey: 'ProductKey',
      sourceInstanceId: 'SourceInstanceId',
      targetInstanceId: 'TargetInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNameList: { 'type': 'array', 'itemType': 'string' },
      productKey: 'string',
      sourceInstanceId: 'string',
      targetInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deviceNameList)) {
      $dara.Model.validateArray(this.deviceNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

