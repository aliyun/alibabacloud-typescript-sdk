// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReportDefinitionRequest extends $dara.Model {
  /**
   * @example
   * 2025-05
   */
  beginBillingCycle?: string;
  includeMembers?: string;
  /**
   * @example
   * project
   */
  mcProject?: string;
  /**
   * @example
   * table
   */
  mcTableName?: string;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  notSendOnNoData?: string;
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
  reportSourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BillingItemDetailForBillingPeriod
   */
  reportType?: string;
  sendWithAttach?: string;
  splitFileOnUserId?: string;
  static names(): { [key: string]: string } {
    return {
      beginBillingCycle: 'BeginBillingCycle',
      includeMembers: 'IncludeMembers',
      mcProject: 'McProject',
      mcTableName: 'McTableName',
      nbid: 'Nbid',
      notSendOnNoData: 'NotSendOnNoData',
      ossBucketName: 'OssBucketName',
      ossBucketOwnerAccountId: 'OssBucketOwnerAccountId',
      ossBucketPath: 'OssBucketPath',
      reportSourceType: 'ReportSourceType',
      reportType: 'ReportType',
      sendWithAttach: 'SendWithAttach',
      splitFileOnUserId: 'SplitFileOnUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginBillingCycle: 'string',
      includeMembers: 'string',
      mcProject: 'string',
      mcTableName: 'string',
      nbid: 'string',
      notSendOnNoData: 'string',
      ossBucketName: 'string',
      ossBucketOwnerAccountId: 'number',
      ossBucketPath: 'string',
      reportSourceType: 'string',
      reportType: 'string',
      sendWithAttach: 'string',
      splitFileOnUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

