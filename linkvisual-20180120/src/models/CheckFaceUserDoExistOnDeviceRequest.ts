// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckFaceUserDoExistOnDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * The device name.
   * 
   * This parameter is required.
   * 
   * @example
   * TestDeviceName
   */
  deviceName?: string;
  /**
   * @remarks
   * The isolation ID.
   * 
   * @example
   * TestIotInstanceId
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The isolation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a103lZ86ovStDMnU
   */
  isolationId?: string;
  /**
   * @remarks
   * The ProductKey of the IoT Platform product.
   * 
   * This parameter is required.
   * 
   * @example
   * a1654Sr4Y3f
   */
  productKey?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * tibce3fsgqelezk8
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotInstanceId: 'IotInstanceId',
      isolationId: 'IsolationId',
      productKey: 'ProductKey',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotInstanceId: 'string',
      isolationId: 'string',
      productKey: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

