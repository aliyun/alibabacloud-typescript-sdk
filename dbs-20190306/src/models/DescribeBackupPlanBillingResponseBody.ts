// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPlanBillingResponseBodyItem extends $dara.Model {
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PREPAY**: subscription
   * 
   * - **POSTPAY**: pay-as-you-go
   * 
   * @example
   * PREPAY
   */
  buyChargeType?: string;
  /**
   * @remarks
   * The timestamp that indicates when the instance was purchased.
   * 
   * @example
   * 1658372830000
   */
  buyCreateTimestamp?: number;
  /**
   * @remarks
   * The timestamp that indicates when the instance expires.
   * 
   * > This parameter is returned only when BuyChargeType is set to PREPAY.
   * 
   * @example
   * 1661097600000
   */
  buyExpiredTimestamp?: number;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * micro
   */
  buySpec?: string;
  /**
   * @remarks
   * The storage space used by incremental backup data. Unit: bytes.
   * 
   * @example
   * 10437039
   */
  contStorageSize?: number;
  /**
   * @remarks
   * The storage space used by full backup data. Unit: bytes.
   * 
   * @example
   * 151
   */
  fullStorageSize?: number;
  /**
   * @remarks
   * Indicates whether the instance has expired.
   * 
   * > This parameter is returned only when BuyChargeType is set to PREPAY.
   * 
   * @example
   * true
   */
  isExpired?: boolean;
  /**
   * @remarks
   * Indicates whether the instance provides unlimited free backup traffic.
   * 
   * @example
   * true
   */
  isFreeBytesUnlimited?: boolean;
  /**
   * @remarks
   * The total paid backup traffic in the current month. Unit: bytes.
   * 
   * @example
   * 0
   */
  paiedBytes?: number;
  /**
   * @remarks
   * The timestamp that indicates the end of the billing cycle for the free backup traffic.
   * 
   * @example
   * 1659283200000
   */
  quotaEndTimestamp?: number;
  /**
   * @remarks
   * The timestamp that indicates the start of the billing cycle for the free backup traffic.
   * 
   * @example
   * 1656604800000
   */
  quotaStartTimestamp?: number;
  /**
   * @remarks
   * The total free backup traffic in the current month. Unit: bytes.
   * 
   * > This parameter is returned only when BuyChargeType is set to PREPAY and IsFreeBytesUnlimited is false.
   * 
   * @example
   * 858993459200
   */
  totalFreeBytes?: number;
  /**
   * @remarks
   * The paid traffic for full backups in the current month. Unit: bytes.
   * 
   * @example
   * 0
   */
  usedFullBytes?: number;
  /**
   * @remarks
   * The paid traffic for incremental backups in the current month. Unit: bytes.
   * 
   * @example
   * 9406734
   */
  usedIncrementBytes?: number;
  static names(): { [key: string]: string } {
    return {
      buyChargeType: 'BuyChargeType',
      buyCreateTimestamp: 'BuyCreateTimestamp',
      buyExpiredTimestamp: 'BuyExpiredTimestamp',
      buySpec: 'BuySpec',
      contStorageSize: 'ContStorageSize',
      fullStorageSize: 'FullStorageSize',
      isExpired: 'IsExpired',
      isFreeBytesUnlimited: 'IsFreeBytesUnlimited',
      paiedBytes: 'PaiedBytes',
      quotaEndTimestamp: 'QuotaEndTimestamp',
      quotaStartTimestamp: 'QuotaStartTimestamp',
      totalFreeBytes: 'TotalFreeBytes',
      usedFullBytes: 'UsedFullBytes',
      usedIncrementBytes: 'UsedIncrementBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyChargeType: 'string',
      buyCreateTimestamp: 'number',
      buyExpiredTimestamp: 'number',
      buySpec: 'string',
      contStorageSize: 'number',
      fullStorageSize: 'number',
      isExpired: 'boolean',
      isFreeBytesUnlimited: 'boolean',
      paiedBytes: 'number',
      quotaEndTimestamp: 'number',
      quotaStartTimestamp: 'number',
      totalFreeBytes: 'number',
      usedFullBytes: 'number',
      usedIncrementBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanBillingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParameter
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * This backupPlan can\\"t support this action
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The billing information of the backup plan.
   */
  item?: DescribeBackupPlanBillingResponseBodyItem;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD7BC7F5-4E3A-5DF3-BFF9-831503C4D9E3
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      item: 'Item',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      item: DescribeBackupPlanBillingResponseBodyItem,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.item && typeof (this.item as any).validate === 'function') {
      (this.item as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

