// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDeviceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5b504f84b69b9a73d3a21a2cff05e190
   */
  deviceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2oImhCz4f8XCviiM
   */
  productKey?: string;
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'deviceName',
      productKey: 'productKey',
      remark: 'remark',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      productKey: 'string',
      remark: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

