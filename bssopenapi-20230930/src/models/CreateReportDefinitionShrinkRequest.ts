// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReportDefinitionShrinkRequest extends $dara.Model {
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
   * Email subscription configuration. Specifies whether to include enterprise multi-account members in the bill.
   * 
   * @example
   * true
   */
  includeMembers?: string;
  /**
   * @remarks
   * The MaxCompute project name.
   * 
   * @example
   * project
   */
  mcProject?: string;
  /**
   * @remarks
   * The MaxCompute subscription table name.
   * 
   * @example
   * table
   */
  mcTableName?: string;
  /**
   * @remarks
   * The primary sales site ID. If left empty, the system uses the site ID of the current user by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * Email subscription configuration. Specifies whether to skip sending emails when no bills are available.
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
   * The subscription source. Valid values: OSS, MC, or MSC_EMAIL.
   * 
   * @example
   * OSS
   */
  reportSourceType?: string;
  /**
   * @remarks
   * The subscription type. Valid values:
   * - consumeDetailBillV2: consumption details (supported only for OSS/MC subscriptions).
   * - splitDetailBillV2: split details (supported only for OSS/MC subscriptions).
   * - costDetailBillV2: cost details (supported only for OSS/MC subscriptions).
   * - monthBillOverview: monthly bill summary (supported only for OSS/MSC_EMAIL subscriptions).
   * - focus: FOCUS bill (supported only for OSS/MC subscriptions).
   * 
   * This parameter is required.
   * 
   * @example
   * consumeDetailBillV2
   */
  reportType?: string;
  /**
   * @remarks
   * The user-specified subscription fields.
   */
  selectedFieldsShrink?: string;
  /**
   * @remarks
   * Email subscription configuration. Specifies whether to include bill attachments in emails.
   * 
   * @example
   * true
   */
  sendWithAttach?: string;
  /**
   * @remarks
   * Email subscription configuration. Specifies whether to split attachments by user ID.
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
      selectedFieldsShrink: 'SelectedFields',
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
      selectedFieldsShrink: 'string',
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

