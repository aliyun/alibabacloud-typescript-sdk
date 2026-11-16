// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReportDefinitionsResponseBodyReportDefinitions extends $dara.Model {
  /**
   * @remarks
   * The start billing cycle for data push. After a successful subscription, the system automatically pushes data from the start billing cycle to the current time. This parameter is invalid for monthly bill PDF subscriptions and historical data is not pushed again. Data for up to the last year can be pushed.
   * 
   * @example
   * 2025-05
   */
  beginBillingCycle?: string;
  /**
   * @remarks
   * The name of the OSS bucket where files are stored.
   * 
   * @example
   * oss-bill
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The UID of the OSS bucket owner. Specify this parameter if the subscription is made by a bidder or reseller and data needs to be pushed to the OSS bucket of a RAM user. The target account must be a RAM user of the calling account and must be granted the AliyunConsumeDump2OSSRole permission. Regular users do not need to specify this parameter. By default, the calling account is used.
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
   * The type of the subscription source, such as OSS or MC.
   * 
   * @example
   * OSS
   */
  reportSourceType?: string;
  /**
   * @remarks
   * The ID of the bill subscription task.
   * 
   * @example
   * 123321
   */
  reportTaskId?: number;
  /**
   * @remarks
   * The subscription type. Valid values:
   * - BillingItemDetailForBillingPeriod: billing item consumption details
   * - InstanceDetailForBillingPeriod: instance consumption details
   * - BillingItemDetailMonthly: billing item consumption summary by billing cycle
   * 
   * @example
   * BillingItemDetailForBillingPeriod
   */
  reportType?: string;
  /**
   * @remarks
   * The time when the subscription was created.
   * 
   * @example
   * 2025-05-21 10:36:31
   */
  subscribeCreateTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginBillingCycle: 'BeginBillingCycle',
      ossBucketName: 'OssBucketName',
      ossBucketOwnerAccountId: 'OssBucketOwnerAccountId',
      ossBucketPath: 'OssBucketPath',
      reportSourceName: 'ReportSourceName',
      reportSourceType: 'ReportSourceType',
      reportTaskId: 'ReportTaskId',
      reportType: 'ReportType',
      subscribeCreateTime: 'SubscribeCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginBillingCycle: 'string',
      ossBucketName: 'string',
      ossBucketOwnerAccountId: 'number',
      ossBucketPath: 'string',
      reportSourceName: 'string',
      reportSourceType: 'string',
      reportTaskId: 'number',
      reportType: 'string',
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

export class ListReportDefinitionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata of the response structure.
   */
  metadata?: any;
  /**
   * @remarks
   * The data list.
   */
  reportDefinitions?: ListReportDefinitionsResponseBodyReportDefinitions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      reportDefinitions: 'ReportDefinitions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'any',
      reportDefinitions: { 'type': 'array', 'itemType': ListReportDefinitionsResponseBodyReportDefinitions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reportDefinitions)) {
      $dara.Model.validateArray(this.reportDefinitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

