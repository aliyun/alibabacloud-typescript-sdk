// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReportDefinitionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The start billing cycle for data push. After the subscription is created, the system automatically pushes data from the start billing cycle to the current time. This parameter is invalid for monthly billing PDF subscriptions, and historical data is not pushed again. Data within the recent year can be pushed at most.
   * 
   * @example
   * 2025-05
   */
  beginBillingCycle?: string;
  /**
   * @remarks
   * The metadata of the response structure.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * The name of the OSS bucket that stores the files.
   * 
   * @example
   * sh-bill
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The UID of the OSS owner that stores the files. Specify this parameter when a BID or reseller subscription needs to push files to the OSS bucket of a RAM user. The RAM user must be a subordinate account of the calling account and must be granted the AliyunConsumeDump2OSSRole permission. Regular users do not need to specify this parameter. The default value is the calling account.
   * 
   * @example
   * 1234567812345678
   */
  ossBucketOwnerAccountId?: number;
  /**
   * @remarks
   * The storage path in the OSS bucket.
   * 
   * @example
   * bill/
   */
  ossBucketPath?: string;
  /**
   * @remarks
   * The name of the subscription source.
   * 
   * @example
   * OSS
   */
  reportSourceName?: string;
  /**
   * @remarks
   * The subscription source. Valid values: OSS and MC.
   * 
   * @example
   * OSS
   */
  reportSourceType?: string;
  /**
   * @remarks
   * The ID of the billing subscription task.
   * 
   * @example
   * 123123
   */
  reportTaskId?: number;
  /**
   * @remarks
   * The subscription type. Valid values:
   * - consumeDetailBillV2: consumption details (supported only by OSS and MC subscriptions).
   * - splitDetailBillV2: split details (supported only by OSS and MC subscriptions).
   * - costDetailBillV2: cost details (supported only by OSS and MC subscriptions).
   * - monthBillOverview: monthly bill summary (supported only by OSS and MSC_EMAIL subscriptions).
   * - focus: focus bills (supported only by OSS and MC subscriptions).
   * 
   * @example
   * consumeDetailBillV2
   */
  reportType?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 340CAB45-0637-5875-9BE4-EFD5750F6BA5
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the subscription was created. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-05-21 10:36:31
   */
  subscribeCreateTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginBillingCycle: 'BeginBillingCycle',
      metadata: 'Metadata',
      ossBucketName: 'OssBucketName',
      ossBucketOwnerAccountId: 'OssBucketOwnerAccountId',
      ossBucketPath: 'OssBucketPath',
      reportSourceName: 'ReportSourceName',
      reportSourceType: 'ReportSourceType',
      reportTaskId: 'ReportTaskId',
      reportType: 'ReportType',
      requestId: 'RequestId',
      subscribeCreateTime: 'SubscribeCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginBillingCycle: 'string',
      metadata: 'any',
      ossBucketName: 'string',
      ossBucketOwnerAccountId: 'number',
      ossBucketPath: 'string',
      reportSourceName: 'string',
      reportSourceType: 'string',
      reportTaskId: 'number',
      reportType: 'string',
      requestId: 'string',
      subscribeCreateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

