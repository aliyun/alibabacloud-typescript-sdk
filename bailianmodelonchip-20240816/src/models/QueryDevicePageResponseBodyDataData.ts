// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDevicePageResponseBodyDataData extends $dara.Model {
  /**
   * @example
   * 2025-03-15 09:44:32
   */
  activeTime?: string;
  /**
   * @example
   * 1539704706413278
   */
  aliyunUid?: string;
  /**
   * @example
   * 202504010001
   */
  batchNo?: string;
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
   * @example
   * 2025-04-27 09:10:31
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-04-27 09:10:31
   */
  gmtModify?: string;
  /**
   * @remarks
   * ID。
   * 
   * @example
   * 201
   */
  id?: number;
  /**
   * @example
   * nnjNQQv3ZjyYE7H4
   */
  productKey?: string;
  productName?: string;
  remark?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 493303079000577
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      activeTime: 'activeTime',
      aliyunUid: 'aliyunUid',
      batchNo: 'batchNo',
      deviceName: 'deviceName',
      disableStatus: 'disableStatus',
      gmtCreate: 'gmtCreate',
      gmtModify: 'gmtModify',
      id: 'id',
      productKey: 'productKey',
      productName: 'productName',
      remark: 'remark',
      status: 'status',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTime: 'string',
      aliyunUid: 'string',
      batchNo: 'string',
      deviceName: 'string',
      disableStatus: 'number',
      gmtCreate: 'string',
      gmtModify: 'string',
      id: 'number',
      productKey: 'string',
      productName: 'string',
      remark: 'string',
      status: 'number',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

