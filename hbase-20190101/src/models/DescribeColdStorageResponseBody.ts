// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColdStorageResponseBody extends $dara.Model {
  /**
   * @example
   * ld-bp1uoihlf82e8****
   */
  clusterId?: string;
  /**
   * @example
   * 800
   */
  coldStorageSize?: string;
  /**
   * @example
   * BdsColdStorage
   */
  coldStorageType?: string;
  /**
   * @example
   * 20.00
   */
  coldStorageUseAmount?: string;
  /**
   * @example
   * 20.00
   */
  coldStorageUsePercent?: string;
  /**
   * @example
   * open
   */
  openStatus?: string;
  /**
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @example
   * DCB9479E-F05F-4D1C-AFB7-C639B87764B7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      coldStorageSize: 'ColdStorageSize',
      coldStorageType: 'ColdStorageType',
      coldStorageUseAmount: 'ColdStorageUseAmount',
      coldStorageUsePercent: 'ColdStorageUsePercent',
      openStatus: 'OpenStatus',
      payType: 'PayType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      coldStorageSize: 'string',
      coldStorageType: 'string',
      coldStorageUseAmount: 'string',
      coldStorageUsePercent: 'string',
      openStatus: 'string',
      payType: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

