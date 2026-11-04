// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceDeviceGroupsByDeviceRequest extends $dara.Model {
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
   * The instance ID.
   * 
   * This parameter is required.
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
   * TestIsolationId
   */
  isolationId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The product key.
   * 
   * This parameter is required.
   * 
   * @example
   * TestProductKey
   */
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotInstanceId: 'IotInstanceId',
      isolationId: 'IsolationId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotInstanceId: 'string',
      isolationId: 'string',
      pageNo: 'number',
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

