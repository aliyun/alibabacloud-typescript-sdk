// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReportDefinitionRequest extends $dara.Model {
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
   * The email subscription configuration. Specifies whether to include enterprise multi-account members in bills.
   * 
   * @example
   * true
   */
  includeMembers?: string;
  /**
   * @remarks
   * The name of the MC project.
   * 
   * @example
   * project
   */
  mcProject?: string;
  /**
   * @remarks
   * The name of the MC subscription table.
   * 
   * @example
   * table
   */
  mcTableName?: string;
  /**
   * @remarks
   * The ID of the level-1 site. If this parameter is left empty, the ID of the site to which the current user belongs is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * The email subscription configuration. Specifies whether to skip sending emails when no bills are generated.
   * 
   * @example
   * true
   */
  notSendOnNoData?: string;
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
   * The subscription source. Valid values: OSS, MC, and MSC_EMAIL.
   * 
   * @example
   * OSS
   */
  reportSourceType?: string;
  /**
   * @remarks
   * The subscription type. Valid values:
   * - consumeDetailBillV2: consumption details (supported only by OSS and MC subscriptions).
   * - splitDetailBillV2: split details (supported only by OSS and MC subscriptions).
   * - costDetailBillV2: cost details (supported only by OSS and MC subscriptions).
   * - monthBillOverview: monthly bill summary (supported only by OSS and MSC_EMAIL subscriptions).
   * - focus: focus bills (supported only by OSS and MC subscriptions).
   * 
   * This parameter is required.
   * 
   * @example
   * consumeDetailBillV2
   */
  reportType?: string;
  /**
   * @remarks
   * The email subscription configuration. Specifies whether to include bill attachments in emails.
   * 
   * @example
   * true
   */
  sendWithAttach?: string;
  /**
   * @remarks
   * The email subscription configuration. Specifies whether to split attachments by user ID.
   * 
   * @example
   * true
   */
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

