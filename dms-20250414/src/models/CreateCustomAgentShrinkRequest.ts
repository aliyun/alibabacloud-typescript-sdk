// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAgentShrinkRequest extends $dara.Model {
  callbackConfigShrink?: string;
  /**
   * @remarks
   * The ID of the DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The data range, specified as a **JSON string**.
   * 
   * - General parameters
   * 
   *   - `tableFlag`: Set to `true` to specify a data range.
   * 
   *   - `scope`: The value must be `personal`.
   * 
   *   - `personal`: Contains the parameters for a file or database.
   * 
   * **File type**: Use the following parameters.
   * 
   * - `DataSourceType`: The value must be `remote_data_center`.
   * 
   * - `FileId`: The ID of the file.
   * 
   * - `Database`: The name of the database returned by the `ListDataCenterTable` operation. This is typically the file name.
   * 
   * - `Tables`: The names of the tables returned by the `ListDataCenterTable` operation.
   * 
   * - `TableIds`: The table IDs returned by the `ListDataCenterTable` operation.
   * 
   * - `RegionId`: The current region.
   * 
   * ```
   * {
   *   "tableFlag": true,
   *   "scope": "personal",
   *   "personal": {
   *     "DataSourceType": "remote_data_center",
   *     "FileId": "f-f0jksn001ibmkoo********6v2zn6",
   *     "Database": "diamonds.csv",
   *     "Tables": [
   *       "diamonds"
   *     ],
   *     "TableIds": [
   *       "35hfn94pxl********50pi"
   *     ],
   *     "RegionId": "cn-hangzhou"
   *   }
   * }
   * ```
   * 
   * **Database type**: Use the following parameters.
   * 
   * - `DataSourceType`: The value must be `database`.
   * 
   * - `DmsInstanceId`: The ID of the DMS instance returned by the data center API.
   * 
   * - `DmsDatabaseId`: The ID of the DMS database returned by the data center API.
   * 
   * - `FileId`: The instance name. This parameter is deprecated.
   * 
   * - `DbName`: The name of the database returned by the data center API.
   * 
   * - `Database`: The name of the database returned by the data center API.
   * 
   * - `Tables`: The names of the tables returned by the data center API.
   * 
   * - `TableIds`: The table IDs returned by the data center API.
   * 
   * - `Engine`: The database engine. Valid values: `mysql` and `postgresql`.
   * 
   * - `RegionId`: The current region.
   * 
   * ```
   * {
   *   "tableFlag": true,
   *   "scope": "personal",
   *   "personal": {
   *     "DataSourceType": "database",
   *     "DmsInstanceId": "284***8",
   *     "DmsDatabaseId": "769***45",
   *     "FileId": "pgm-bp15095e*******6t",
   *     "DbName": "pg_catalog",
   *     "Database": "pg_catalog",
   *     "Tables": [
   *       "pg_aggregate"
   *     ],
   *     "TableIds": [
   *       "5263****31"
   *     ],
   *     "Engine": "postgresql",
   *     "RegionId": "cn-hangzhou"
   *   }
   * }
   * ```
   * 
   * @example
   * {
   *   "tableFlag" : true,
   *   "scope" : "personal",
   *   "personal" : {
   *     "DataSourceType" : "remote_data_center",
   *     "FileId" : "f-5qlrwaw10********s3gpw1z",
   *     "Database" : "测试表格******.xlsx",
   *     "Tables" : [ "Sheet1" ],
   *     "TableIds" : [ "******" ],
   *     "RegionId" : "cn-hangzhou"
   *   }
   * }
   */
  dataJson?: string;
  /**
   * @remarks
   * The description of the custom agent.
   * 
   * @example
   * Agent测试描述
   */
  description?: string;
  /**
   * @remarks
   * The execution configuration.
   */
  executionConfigShrink?: string;
  /**
   * @remarks
   * The instruction for the custom agent.
   * 
   * - Maximum length: 10,000 characters.
   * 
   * @example
   * 核心指标定义：
   * 1、GMV（成交总额）指订单金额总和，含已支付及未支付成功订单；
   * 2、订单量为每日有效下单笔数；
   * 3、UV（独立访客）指访问网站或APP的去重用户数；
   * 4、转化率=支付订单数 / UV，反映流量转化效率；
   */
  instruction?: string;
  /**
   * @remarks
   * The knowledge for the custom agent.
   * 
   * - Maximum length: 10,000 characters.
   * 
   * @example
   * 核心指标定义：
   * 1、GMV（成交总额）指订单金额总和，含已支付及未支付成功订单；
   * 2、订单量为每日有效下单笔数；
   * 3、UV（独立访客）指访问网站或APP的去重用户数；
   * 4、转化率=支付订单数 / UV，反映流量转化效率；
   */
  knowledge?: string;
  /**
   * @remarks
   * A list of external knowledge bases.
   */
  knowledgeConfigListShrink?: string;
  /**
   * @remarks
   * The name of the custom agent.
   * 
   * @example
   * Agent测试名称
   */
  name?: string;
  relatedSessionId?: string;
  /**
   * @remarks
   * The configuration for the scheduled task.
   */
  scheduleTaskConfigShrink?: string;
  /**
   * @remarks
   * The formatting requirements for the text report.
   * 
   * @example
   * 文字报告要求所有数字不使用阿拉伯数字，全部转为中文数字
   */
  textReportConfig?: string;
  /**
   * @remarks
   * The formatting requirements for the web report.
   * 
   * @example
   * 网页报告要求所有数字不使用阿拉伯数字，全部转为中文数字
   */
  webReportConfig?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 56kv1pvl9uvt9**********bb
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      callbackConfigShrink: 'CallbackConfig',
      DMSUnit: 'DMSUnit',
      dataJson: 'DataJson',
      description: 'Description',
      executionConfigShrink: 'ExecutionConfig',
      instruction: 'Instruction',
      knowledge: 'Knowledge',
      knowledgeConfigListShrink: 'KnowledgeConfigList',
      name: 'Name',
      relatedSessionId: 'RelatedSessionId',
      scheduleTaskConfigShrink: 'ScheduleTaskConfig',
      textReportConfig: 'TextReportConfig',
      webReportConfig: 'WebReportConfig',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackConfigShrink: 'string',
      DMSUnit: 'string',
      dataJson: 'string',
      description: 'string',
      executionConfigShrink: 'string',
      instruction: 'string',
      knowledge: 'string',
      knowledgeConfigListShrink: 'string',
      name: 'string',
      relatedSessionId: 'string',
      scheduleTaskConfigShrink: 'string',
      textReportConfig: 'string',
      webReportConfig: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

