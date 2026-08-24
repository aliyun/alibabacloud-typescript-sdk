// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReportDefinitionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The start billing cycle for push. After successful subscription, the system automatically pushes data from the start billing cycle to the current time. This parameter is invalid for monthly bill PDF subscriptions and does not re-push historical data. Data within the last year can be pushed.
   * 
   * @example
   * 2025-05
   */
  beginBillingCycle?: string;
  /**
   * @remarks
   * The response struct metadata.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * The name of the OSS bucket for file storage.
   * 
   * @example
   * sh-bill
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The UID of the OSS owner that stores the files. If this is a Bid/Reseller subscription and you need to push to a sub-account\\"s OSS, specify this parameter. The account must be a sub-account of the calling account, and the AliyunConsumeDump2OSSRole permission must be granted to this account. Regular users do not need to specify this parameter. The default value is the calling account.
   * 
   * @example
   * 1234567812345678
   */
  ossBucketOwnerAccountId?: number;
  /**
   * @remarks
   * The OSS bucket storage path.
   * 
   * @example
   * bill/
   */
  ossBucketPath?: string;
  /**
   * @remarks
   * The subscription source name.
   * 
   * @example
   * OSS
   */
  reportSourceName?: string;
  /**
   * @remarks
   * The subscription source. Valid values: OSS or MC.
   * 
   * @example
   * OSS
   */
  reportSourceType?: string;
  /**
   * @remarks
   * The bill subscription task ID.
   * 
   * @example
   * 123123
   */
  reportTaskId?: number;
  /**
   * @remarks
   * The subscription type. Valid values:
   * - consumeDetailBillV2: consumption details (supported only for OSS/MC subscriptions).
   * - splitDetailBillV2: split details (supported only for OSS/MC subscriptions).
   * - costDetailBillV2: cost details (supported only for OSS/MC subscriptions).
   * - monthBillOverview: monthly bill summary (supported only for OSS/MSC_EMAIL subscriptions).
   * - focus: FOCUS bill (supported only for OSS/MC subscriptions).
   * 
   * @example
   * consumeDetailBillV2
   */
  reportType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 340CAB45-0637-5875-9BE4-EFD5750F6BA5
   */
  requestId?: string;
  /**
   * @remarks
   * The subscription creation time.
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

