// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The user\\"s account name.
   * 
   * - If the user is an Alibaba Cloud primary account **wangwu**, the format is **[Primary Account]**, for example, **wangwu**.
   * - If the user is a RAM account **zhangsan**@aliyun.cn**, the format is **[Primary Account: Sub-Account]**, for example, **wangwu:zhangsan**.
   * 
   * > Only one of UserId and AccountName needs to be filled in. If neither is filled in, it will default to binding the report\\"s Owner, and the report will be accessed with that user\\"s identity. If you need to configure row-level permissions, please refer to [Row-Level Permissions](https://help.aliyun.com/document_detail/322783.html).
   * 
   * @example
   * test
   * 
   * @deprecated
   */
  accountName?: string;
  /**
   * @remarks
   * The type of the user\\"s account.
   * - 1: Alibaba Cloud account
   * - 3: Quick BI self-built account
   * - 4: DingTalk
   * - 5: RAM sub-account
   * - 9: WeCom
   * - 10: Feishu
   * > If AccountName is not empty, then AccountType must also not be empty.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  accountType?: number;
  /**
   * @remarks
   * Component ID. This is the ID of a component within the above-mentioned dashboard; other types of works do not support this.
   * Refer to [QueryWorksBloodRelationship](https://next.api.aliyun.com/api/quickbi-public/2022-01-01/QueryWorksBloodRelationship?spm=a2c4g.11186623.0.0.15615d7aWVvWAl&params={}&lang=JAVA&tab=DOC&sdkStyle=old) for the API to get the component ID.
   * 
   * @example
   * 0fc6a275c7f64f17b1****a306ce0f31
   */
  cmptId?: string;
  /**
   * @remarks
   * Expiration time
   * - Unit: minutes
   * - Default: 240
   * 
   * @example
   * 200
   */
  expireTime?: number;
  /**
   * @remarks
   * Global parameters for the report filter conditions.
   * - A string in JsonArray format.
   * 
   * > If you need to use global parameter capabilities, please contact the [Quick BI Operations Manager](https://h5-alimebot.dingtalk.com/intl/index.htm?spm=a2c4g.11186623.0.0.3da14f6chrDv9e&sourceType=ding_talk&from=DEFFB9G5KBByQkwq23wneFIOmaJ).
   * 
   * @example
   * [{"paramKey":"price","joinType":"and","conditionList":[{"operate":">","value":"0"}]}]
   */
  globalParam?: string;
  /**
   * @remarks
   * The number of tickets. Each time a ticket is used, the number of tickets decreases by 1.
   * - Default value: 1
   * - Recommended value: 1
   * - Maximum value: 99999
   * 
   * @example
   * 1
   */
  ticketNum?: number;
  /**
   * @remarks
   * Quick BI\\"s UserId, which is not your Alibaba Cloud account ID.
   * You can call the [QueryUserInfoByAccount](https://next.api.aliyun.com/api/quickbi-public/2022-01-01/QueryUserInfoByAccount?spm=a2c4g.11186623.0.0.15615d7aWVvWAl&params={}&tab=DOC&sdkStyle=old) interface to obtain the UserId. An example of a UserId is fe67f61a35a94b7da1a34ba174a7****.
   * 
   * > Only one of UserId and AccountName needs to be filled in. If neither is filled in, it will default to binding the report\\"s Owner, and the report will be accessed with that user\\"s identity. If you need to configure row-level permissions, please refer to [Row-Level Permissions](https://help.aliyun.com/document_detail/322783.html).
   * 
   * @example
   * 46e537466****92704c8
   */
  userId?: string;
  /**
   * @remarks
   * Watermark parameters for the report.
   * - Must not exceed 50 characters.
   * - When the report type is a large screen, watermark parameter passing is not supported.
   * 
   * @example
   * test
   */
  watermarkParam?: string;
  /**
   * @remarks
   * The ID of the report to be embedded. Currently supports dashboards, spreadsheets, data screens, self-service data retrieval, ad-hoc analysis, and data entry.
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

