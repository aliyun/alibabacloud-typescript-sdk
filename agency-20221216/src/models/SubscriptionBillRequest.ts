// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubscriptionBillRequest extends $dara.Model {
  /**
   * @remarks
   * The billing month from which to start pushing bills. Format: yyyy-MM.
   * 
   * After a successful subscription, the system automatically pushes data from the start billing cycle to the current time. Data for up to the last six months (including the current month) can be pushed. If the specified month exceeds this range, the subscription is invalid.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-10
   */
  beginBillingCycle?: string;
  /**
   * @remarks
   * The bill file format. Valid values:
   * - csv
   * - parquet
   * 
   * If you subscribe to multiple file types, use separate buckets to avoid file overwriting.
   * 
   * This parameter is required.
   * 
   * @example
   * csv
   */
  billFormat?: string;
  /**
   * @remarks
   * The UID of the account that owns the OSS bucket for storing files.
   * 
   * If a partner subscribes and needs to push files to the OSS bucket of a subordinate partner account, this account must be a subordinate partner account of the partner account. Grant the [AliyunConsumeDump2OSSRole](https://ram.console.aliyun.com/?spm=api-workbench.API%20Document.0.0.68c71e0fhmTSJp#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunConsumeDump2OSSRole%22,%20%22TemplateId%22:%20%22Dump2OSSRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fusercenter2.aliyun.com%22,%20%22Service%22:%20%22Consume%22%7D) permission to the subordinate partner account. 
   * 
   * If a partner subscribes and pushes files to the partner account\\"s own OSS bucket, grant the [AliyunConsumeDump2OSSRole](https://ram.console.aliyun.com/?spm=api-workbench.API%20Document.0.0.68c71e0fhmTSJp#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunConsumeDump2OSSRole%22,%20%22TemplateId%22:%20%22Dump2OSSRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fusercenter2.aliyun.com%22,%20%22Service%22:%20%22Consume%22%7D) permission to the partner account.
   * 
   * This parameter is required.
   * 
   * @example
   * 5569414254138836
   */
  bucketOwnerId?: number;
  /**
   * @remarks
   * The name of the OSS bucket for storing bill files.
   * 
   * This parameter is required.
   * 
   * @example
   * bill-bucket
   */
  subscribeBucket?: string;
  /**
   * @remarks
   * The row count threshold for a single bill file. If the number of rows exceeds this threshold, the file is automatically split into multiple files. The naming convention for split files is `uid_billType_billCycle_SquenceNo_fileNo`.
   * 
   * All information in the file names is identical except for fileNo. These files belong to the same billing cycle and the same file type but are split into multiple files.
   * 
   * @example
   * 100000
   */
  subscribeSegmentSize?: number;
  /**
   * @remarks
   * The subscription type. Valid values: 
   * - PartnerBillingItemDetailForBillingPeriod: billing item detail.
   * - PartnerBillingItemDetailMonthly: billing item monthly bill.
   * - PartnerInstanceDetailForBillingPeriod: instance bill detail.
   * - PartnerInstanceDetailMonthly: instance monthly bill.
   * 
   * This parameter is required.
   * 
   * @example
   * PartnerBillingItemDetailForBillingPeriod
   */
  subscribeType?: string;
  static names(): { [key: string]: string } {
    return {
      beginBillingCycle: 'BeginBillingCycle',
      billFormat: 'BillFormat',
      bucketOwnerId: 'BucketOwnerId',
      subscribeBucket: 'SubscribeBucket',
      subscribeSegmentSize: 'SubscribeSegmentSize',
      subscribeType: 'SubscribeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginBillingCycle: 'string',
      billFormat: 'string',
      bucketOwnerId: 'number',
      subscribeBucket: 'string',
      subscribeSegmentSize: 'number',
      subscribeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

