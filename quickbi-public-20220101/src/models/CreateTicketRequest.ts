// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The account name of the user.
   * 
   * - If the user is an Alibaba Cloud account **wangwu**, the format is **[primary account]**, for example, **wangwu**.
   * - If the user is a Resource Access Management (RAM) users account **zhangsan**@aliyun.cn**, the format is **[primary account:RAM user]**, for example, **wangwu:zhangsan**.
   * 
   * > Specify either UserId or AccountName. If neither is specified, the report owner is attached by default, and the report is accessed under that user\\"s identity. To configure row-level permissions for data, see [Row-level permissions](https://help.aliyun.com/document_detail/322783.html).
   * 
   * @example
   * test
   * 
   * @deprecated
   */
  accountName?: string;
  /**
   * @remarks
   * The account type of the user. Valid values:
   * - 1: Alibaba Cloud account
   * - 3: Quick BI custom account
   * - 4: DingTalk
   * - 5: RAM user
   * - 9: WeCom
   * - 10: Lark
   * > If AccountName is specified, AccountType must also be specified.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  accountType?: number;
  /**
   * @remarks
   * The component ID. This is the ID of a specific component in the dashboard. Other report types are not supported.
   * To obtain the component ID, see [QueryWorksBloodRelationship](https://next.api.aliyun.com/api/quickbi-public/2022-01-01/QueryWorksBloodRelationship?spm=a2c4g.11186623.0.0.15615d7aWVvWAl&params={}&lang=JAVA&tab=DOC&sdkStyle=old).
   * 
   * @example
   * 0fc6a275c7f64f17b1****a306ce0f31
   */
  cmptId?: string;
  /**
   * @remarks
   * The expiration time.
   * - Unit: minutes.
   * - Default value: 240.
   * 
   * @example
   * 200
   */
  expireTime?: number;
  /**
   * @remarks
   * The global parameter.
   * 
   * @example
   * [{"paramKey":"price","joinType":"and","conditionList":[{"operate":">","value":"0"}]}]
   */
  globalParam?: string;
  /**
   * @remarks
   * The number of times the ticket can be used. Each time the ticket is used for access, the count decreases by 1.
   * - Default value: 1.
   * - Recommended value: 1.
   * - Maximum value: 99999.
   * 
   * @example
   * 1
   */
  ticketNum?: number;
  /**
   * @remarks
   * The Quick BI user ID, not your Alibaba Cloud account ID.
   * You can call the [QueryUserInfoByAccount](https://next.api.aliyun.com/api/quickbi-public/2022-01-01/QueryUserInfoByAccount?spm=a2c4g.11186623.0.0.15615d7aWVvWAl&params={}&tab=DOC&sdkStyle=old) operation to obtain the user ID. Example: fe67f61a35a94b7da1a34ba174a7****.
   * 
   * > Specify either UserId or AccountName. If neither is specified, the report owner is used by default, and the report is accessed under that user\\"s identity. To configure row-level permissions for data, see [Row-level permissions](https://help.aliyun.com/document_detail/322783.html).
   * 
   * @example
   * 46e537466****92704c8
   */
  userId?: string;
  /**
   * @remarks
   * The watermark parameter for the report.
   * - The value cannot exceed 50 characters.
   * - Watermark parameters are not supported when the report type is data screen.
   * 
   * @example
   * ticket embed
   */
  watermarkParam?: string;
  /**
   * @remarks
   * The ID of the report for which embedding is enabled. Dashboards, workbooks, data screens, ad hoc queries, ad hoc analyses, and data entry forms are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * a206f5f3-****-e9b17c835b03
   */
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      cmptId: 'CmptId',
      expireTime: 'ExpireTime',
      globalParam: 'GlobalParam',
      ticketNum: 'TicketNum',
      userId: 'UserId',
      watermarkParam: 'WatermarkParam',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'number',
      cmptId: 'string',
      expireTime: 'number',
      globalParam: 'string',
      ticketNum: 'number',
      userId: 'string',
      watermarkParam: 'string',
      worksId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

