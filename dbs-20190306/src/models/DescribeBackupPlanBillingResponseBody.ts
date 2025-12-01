// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPlanBillingResponseBodyItem extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   PREPAY
   * *   POSTPAY
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
   * 1554560477000
   */
  buyCreateTimestamp?: number;
  /**
   * @remarks
   * The timestamp that indicates when the instance expires.
   * 
   * > This parameter is available only if the value of the BuyChargeType parameter is PREPAY.
   * 
   * @example
   * 1554560477000
   */
  buyExpiredTimestamp?: number;
  /**
   * @remarks
   * The specifications of the instance.
   * 
   * @example
   * micro
   */
  buySpec?: string;
  /**
   * @remarks
   * The size of the built-in storage for storing incremental backup data.
   * 
   * @example
   * 12134
   */
  contStorageSize?: number;
  /**
   * @remarks
   * The size of the built-in storage for storing full backup data.
   * 
   * @example
   * 13123
   */
  fullStorageSize?: number;
  /**
   * @remarks
   * Indicates whether the instance expired.
   * 
   * > This parameter is available only if the value of the BuyChargeType parameter is PREPAY.
   * 
   * @example
   * true
   */
  isExpired?: boolean;
  /**
   * @remarks
   * Indicates whether the instance has no backup traffic limit.
   * 
   * @example
   * true
   */
  isFreeBytesUnlimited?: boolean;
  /**
   * @remarks
   * The total paid backup traffic in the current month.
   * 
   * @example
   * 213213
   */
  paiedBytes?: number;
  /**
   * @remarks
   * The timestamp that indicates when the billing cycle of free backup traffic ends.
   * 
   * @example
   * 1554560477000
   */
  quotaEndTimestamp?: number;
  /**
   * @remarks
   * The timestamp that indicates when the billing cycle of free backup traffic starts.
   * 
   * @example
   * 1554560477000
   */
  quotaStartTimestamp?: number;
  /**
   * @remarks
   * The total free backup traffic in the current month.
   * 
   * > This parameter is available only if the value of the BuyChargeType parameter is PREPAY and the value of the IsFreeBytesUnlimited parameter is false.
   * 
   * @example
   * 13123
   */
  totalFreeBytes?: number;
  /**
   * @remarks
   * The paid full backup traffic in the current month.
   * 
   * @example
   * 1312313
   */
  usedFullBytes?: number;
  /**
   * @remarks
   * The paid incremental backup traffic in the current month.
   * 
   * @example
   * 131231
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
   * The billing information of the backup schedule.
   */
  item?: DescribeBackupPlanBillingResponseBodyItem;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EB4DFD5E-3618-498D-BE35-4DBEA0072122
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

