// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDevicePageRequest extends $dara.Model {
  /**
   * @example
   * 5b504f84b69b9a73d3a21a2cff05e190
   */
  deviceName?: string;
  /**
   * @example
   * 1
   */
  disableStatus?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * el3SzmCU2p0x4RBc
   */
  productKey?: string;
  productName?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'deviceName',
      disableStatus: 'disableStatus',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      productKey: 'productKey',
      productName: 'productName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      disableStatus: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      productKey: 'string',
      productName: 'string',
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

