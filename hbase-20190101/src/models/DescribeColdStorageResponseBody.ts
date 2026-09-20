// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColdStorageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ld-bp1uoihlf82e8****
   */
  clusterId?: string;
  /**
   * @remarks
   * The total storage capacity of cold storage, in GB.
   * 
   * > This parameter is returned only when **OpenStatus** is **open**.
   * 
   * @example
   * 800
   */
  coldStorageSize?: string;
  /**
   * @remarks
   * The cold storage type. For newly created BDS instances, the cold storage type is **BdsColdStorage**. This parameter is not returned for other instances by default.
   * 
   * @example
   * BdsColdStorage
   */
  coldStorageType?: string;
  /**
   * @remarks
   * The amount of cold storage space used, in GB.
   * 
   * > This parameter is returned only when **OpenStatus** is **open**.
   * 
   * @example
   * 20.00
   */
  coldStorageUseAmount?: string;
  /**
   * @remarks
   * The usage of the cold storage space, in percentage (%).
   * 
   * > This parameter is returned only when **OpenStatus** is **open**.
   * 
   * @example
   * 20.00
   */
  coldStorageUsePercent?: string;
  /**
   * @remarks
   * The enabling status of cold storage. Valid values:
   * - **open**: Cold storage is enabled.
   * - **close**: Cold storage is not enabled.
   * 
   * @example
   * open
   */
  openStatus?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * - **PREPAY**: subscription.
   * - **POSTPAY**: pay-as-you-go.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

