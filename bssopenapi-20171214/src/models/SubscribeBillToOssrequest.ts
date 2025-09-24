// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubscribeBillToOSSRequest extends $dara.Model {
  /**
   * @remarks
   * The initial billing cycle from which bills start to be pushed. After you subscribe to the bills, the system automatically pushes the data that is generated from the initial billing cycle to the current time. If the SubscribeType parameter is set to MonthBill, this parameter is invalid. Historical data is not pushed again. The data generated within the last year can be pushed.
   * 
   * @example
   * 2021-03
   */
  beginBillingCycle?: string;
  /**
   * @remarks
   * The owner ID of the OSS bucket that stores the bills. This parameter is required if you are a bidder or reseller and want to push data to an OSS bucket of a member account. In this case, you must specify this account as the account used to call this operation and grant the AliyunConsumeDump2OSSRole permission to this account. If you are a regular user, you do not need to set this parameter. By default, your account is used to call this operation.
   * 
   * @example
   * 12341324
   */
  bucketOwnerId?: number;
  /**
   * @remarks
   * The path of the OSS bucket.
   * 
   * @example
   * testpath
   */
  bucketPath?: string;
  /**
   * @remarks
   * The type of the account whose bills are to be pushed if multi-tier accounts are involved. Valid values:
   * 
   * *   MA: the master account and a non-managed member account in Finance Cloud
   * *   ACP1: a member account of a virtual network operator (VNO)
   * 
   * Default value: MA.
   * 
   * @example
   * MA
   */
  multAccountRelSubscribe?: string;
  /**
   * @remarks
   * The upper limit of the number of lines in a single file. When the bill file exceeds the upper limit, it will be split into multiple files and merged into a compressed package.
   * 
   * @example
   * 300000
   */
  rowLimitPerFile?: number;
  /**
   * @remarks
   * The OSS bucket that stores the bills to which you want to subscribe.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxxx-bucket
   */
  subscribeBucket?: string;
  /**
   * @remarks
   * The type of the bill to which you want to subscribe. Valid values:
   * 
   * *   BillingItemDetailForBillingPeriod: detailed bills of billable items
   * *   InstanceDetailForBillingPeriod: detailed bills of instances
   * *   BillingItemDetailMonthly: billable item-based bills summarized by billing cycle
   * *   InstanceDetailMonthly: instance-based bills summarized by billing cycle
   * *   SplitItemDetailDaily: split bills summarized by day
   * *   MonthBill: monthly bills in the PDF format. You can subscribe to the monthly PDF bills only of the master account.
   * 
   * @example
   * BillingItemDetailForBillingPeriod
   */
  subscribeType?: string;
  /**
   * @remarks
   * Whether to protect network communications through the SSL (Secure Sockets Layer) encryption protocol. When this parameter is set to true, it means that SSL encryption is enabled to ensure the security and integrity of data transmission.
   * 
   * @example
   * true
   */
  usingSsl?: string;
  static names(): { [key: string]: string } {
    return {
      beginBillingCycle: 'BeginBillingCycle',
      bucketOwnerId: 'BucketOwnerId',
      bucketPath: 'BucketPath',
      multAccountRelSubscribe: 'MultAccountRelSubscribe',
      rowLimitPerFile: 'RowLimitPerFile',
      subscribeBucket: 'SubscribeBucket',
      subscribeType: 'SubscribeType',
      usingSsl: 'UsingSsl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginBillingCycle: 'string',
      bucketOwnerId: 'number',
      bucketPath: 'string',
      multAccountRelSubscribe: 'string',
      rowLimitPerFile: 'number',
      subscribeBucket: 'string',
      subscribeType: 'string',
      usingSsl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

