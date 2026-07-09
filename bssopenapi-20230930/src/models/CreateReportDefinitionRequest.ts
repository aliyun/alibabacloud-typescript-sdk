// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReportDefinitionRequest extends $dara.Model {
  /**
   * @remarks
   * The start billing cycle for push. After the subscription succeeds, the system automatically pushes data from the start billing cycle to the current time. This parameter is invalid for monthly bill PDF subscriptions, and historical data will not be re-pushed. You can push data within the last year.
   * 
   * @example
   * 2025-05
   */
  beginBillingCycle?: string;
  /**
   * @remarks
   * The email subscription configuration that specifies whether to include multi-account members of the organization in bills.
   * 
   * @example
   * true
   */
  includeMembers?: string;
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * project
   */
  mcProject?: string;
  /**
   * @remarks
   * The name of the MaxCompute subscription table.
   * 
   * @example
   * table
   */
  mcTableName?: string;
  /**
   * @remarks
   * The first-level site ID. If this parameter is left empty, the site ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * The email subscription configuration that specifies whether to skip sending emails when no bills are available.
   * 
   * @example
   * true
   */
  notSendOnNoData?: string;
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
   * The UID of the OSS bucket owner that stores the files. If this is a Bid/Reseller subscription and you need to push data to a sub-account\\"s OSS, specify this parameter. The account must be a sub-account of the calling account, and the AliyunConsumeDump2OSSRole permission must be granted to this account. Regular users do not need to specify this parameter. The default value is the calling account.
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
   * The subscription source. Valid values: OSS, MC, and MSC_EMAIL.
   * 
   * @example
   * OSS
   */
  reportSourceType?: string;
  /**
   * @remarks
   * The subscription type. Valid values:
   * - consumeDetailBillV2: consumption details. This value is supported only by OSS/MC subscriptions.
   * - splitDetailBillV2: split details. This value is supported only by OSS/MC subscriptions.
   * - costDetailBillV2: cost details. This value is supported only by OSS/MC subscriptions.
   * - monthBillOverview: monthly bill overview. This value is supported only by OSS/MSC_EMAIL subscriptions.
   * - focus: FOCUS bill. This value is supported only by OSS/MC subscriptions.
   * 
   * This parameter is required.
   * 
   * @example
   * consumeDetailBillV2
   */
  reportType?: string;
  /**
   * @remarks
   * The email subscription configuration that specifies whether to send emails with bill attachments.
   * 
   * @example
   * true
   */
  sendWithAttach?: string;
  /**
   * @remarks
   * The email subscription configuration that specifies whether to split attachments by user ID.
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

