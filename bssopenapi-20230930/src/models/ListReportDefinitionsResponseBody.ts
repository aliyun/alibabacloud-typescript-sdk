// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReportDefinitionsResponseBodyReportDefinitions extends $dara.Model {
  /**
   * @remarks
   * The start billing cycle for push. After the subscription is created, the system automatically pushes data from the start billing cycle to the current time. This parameter does not take effect for monthly bill PDF subscriptions, and historical data is not re-pushed. Data within the last year can be pushed at most.
   * 
   * @example
   * 2025-05
   */
  beginBillingCycle?: string;
  /**
   * @remarks
   * The name of the OSS bucket for file storage.
   * 
   * @example
   * oss-bill
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The UID of the OSS owner that stores the files. If a Bid/Reseller subscription is used and data needs to be pushed to the OSS bucket of a sub-account, specify this parameter. The specified account must be a sub-account of the calling account, and the AliyunConsumeDump2OSSRole permission must be granted to this account. Regular users do not need to specify this parameter. The calling account is used by default.
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
   * The ID of the bill subscription task.
   * 
   * @example
   * 123321
   */
  reportTaskId?: number;
  /**
   * @remarks
   * The subscription type. Valid values:
   * - BillingItemDetailForBillingPeriod: billing item consumption details.
   * - InstanceDetailForBillingPeriod: instance consumption details.
   * - BillingItemDetailMonthly: billing item consumption summary by billing cycle.
   * 
   * @example
   * BillingItemDetailForBillingPeriod
   */
  reportType?: string;
  /**
   * @remarks
   * The fields specified by the user for the subscription.
   */
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
   * The list of report definitions.
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

