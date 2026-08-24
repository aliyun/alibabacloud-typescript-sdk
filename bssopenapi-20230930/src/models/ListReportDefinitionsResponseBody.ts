// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReportDefinitionsResponseBodyReportDefinitions extends $dara.Model {
  /**
   * @remarks
   * The start billing cycle for push. After the subscription is created, the system automatically pushes data from the start billing cycle to the current time. This parameter does not take effect for monthly bill PDF subscriptions, and historical data is not re-pushed. Data within the last year can be pushed.
   * 
   * @example
   * 2025-05
   */
  beginBillingCycle?: string;
  /**
   * @remarks
   * The name of the OSS bucket that stores the files.
   * 
   * @example
   * oss-bill
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The UID of the OSS bucket owner that stores the files. Specify this parameter when a Bid/Reseller subscription needs to push data to the OSS bucket of a sub-account. The specified account must be a sub-account of the calling account and must be granted the AliyunConsumeDump2OSSRole permission. Regular users do not need to specify this parameter. The calling account is used by default.
   * 
   * @example
   * 1234567812345678
   */
  ossBucketOwnerAccountId?: number;
  /**
   * @remarks
   * The storage path of the OSS bucket.
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
   * The subscription source. Valid values: OSS and MC.
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
   * 123321
   */
  reportTaskId?: number;
  /**
   * @remarks
   * The subscription type. Valid values:
   * - BillingItemDetailForBillingPeriod: billable item consumption details.
   * - InstanceDetailForBillingPeriod: instance consumption details.
   * - BillingItemDetailMonthly: billable item consumption summary by billing cycle.
   * 
   * @example
   * BillingItemDetailForBillingPeriod
   */
  reportType?: string;
  selectedFields?: string[];
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
      selectedFields: 'SelectedFields',
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
      selectedFields: { 'type': 'array', 'itemType': 'string' },
      subscribeCreateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.selectedFields)) {
      $dara.Model.validateArray(this.selectedFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReportDefinitionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata of the response struct.
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

