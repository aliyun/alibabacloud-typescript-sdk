// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClearFaceDeviceDBRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the device corresponding to the V-series edge all-in-one machine. On the **Basic Information** tab of the **Host Details** page for the V-series edge all-in-one machine in the Edge Computing console, find the **Video Gateway** information and obtain the **DeviceName** value.
   * 
   * This parameter is required.
   * 
   * @example
   * TestDevice_1
   */
  deviceName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * You can view the **ID** of the current instance on the **Instance Overview** page in the IoT Platform console. If an ID value exists, you must pass this ID value. Otherwise, the call fails.
   * 
   * > If a public instance does not have an ID value, see [How to obtain an instance ID](https://help.aliyun.com/document_detail/267533.html).
   * 
   * @example
   * iot_instc_pu****_c*-v64********
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The business isolation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ZheJiangHZ
   */
  isolationId?: string;
  /**
   * @remarks
   * The unique identifier of the product to which the device corresponding to the V-series edge all-in-one machine belongs. On the **Basic Information** tab of the **Host Details** page for the V-series edge all-in-one machine in the Edge Computing console, find the **Video Gateway** information and obtain the **ProductKey** value.
   * 
   * This parameter is required.
   * 
   * @example
   * a1Wmy******
   */
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotInstanceId: 'IotInstanceId',
      isolationId: 'IsolationId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotInstanceId: 'string',
      isolationId: 'string',
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

