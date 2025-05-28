// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReportDefinitionResponseBody extends $dara.Model {
  /**
   * @example
   * 2025-05
   */
  beginBillingCycle?: string;
  metadata?: any;
  /**
   * @example
   * sh-bill
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
   * 123123
   */
  reportTaskId?: number;
  /**
   * @example
   * BillingItemDetailForBillingPeriod
   */
  reportType?: string;
  /**
   * @example
   * 340CAB45-0637-5875-9BE4-EFD5750F6BA5
   */
  requestId?: string;
  /**
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

