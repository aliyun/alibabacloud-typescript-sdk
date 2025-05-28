// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReportDefinitionsResponseBodyReportDefinitions extends $dara.Model {
  /**
   * @example
   * 2025-05
   */
  beginBillingCycle?: string;
  /**
   * @example
   * oss-bill
   */
  ossBucketName?: string;
  /**
   * @example
   * 1234567812345678
   */
  ossBucketOwnerAccountId?: number;
  /**
   * @example
   * bill/
   */
  ossBucketPath?: string;
  /**
   * @example
   * OSS
   */
  reportSourceName?: string;
  /**
   * @example
   * OSS
   */
  reportSourceType?: string;
  /**
   * @example
   * 123321
   */
  reportTaskId?: number;
  /**
   * @example
   * BillingItemDetailForBillingPeriod
   */
  reportType?: string;
  /**
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

