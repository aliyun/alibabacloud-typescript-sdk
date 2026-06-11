// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomAgentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The callback configuration.
   */
  callbackConfigShrink?: string;
  /**
   * @remarks
   * The ID of the custom agent.
   * 
   * This parameter is required.
   * 
   * @example
   * ca-4y3ca4khkcu**********ysf
   */
  customAgentId?: string;
  /**
   * @remarks
   * The current DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The data scope for the agent, specified in a **JSON-formatted string**.
   * 
   * - General parameters:
   * 
   *   - `tableFlag`: Set this to `true` to specify the data scope.
   * 
   *   - `scope`: The value must be `personal`.
   * 
   *   - `personal`: The parameters for files or databases.
   * 
   * **For files**, use the following parameters:
   * 
   * - `DataSourceType`: The value must be `remote_data_center`.
   * 
   * - `FileId`: The file ID.
   * 
   * - `Database`: The database name returned by the `ListDataCenterTable` operation. This is typically the file name.
   * 
   * - `Tables`: The table names returned by the `ListDataCenterTable` operation.
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
   * **For databases**, use the following parameters:
   * 
   * - `DataSourceType`: The value must be `database`.
   * 
   * - `DmsInstanceId`: The ID of the DMS instance, which is returned by the data center API.
   * 
   * - `DmsDatabaseId`: The ID of the DMS database, which is returned by the data center API.
   * 
   * - `FileId`: The instance name. This parameter is deprecated.
   * 
   * - `DbName`: The database name returned by the data center API.
   * 
   * - `Database`: The database name returned by the data center API.
   * 
   * - `Tables`: The table names returned by the data center API.
   * 
   * - `TableIds`: The table IDs returned by the data center API.
   * 
   * - `Engine`: The database engine type. Valid values: `mysql` and `postgresql`.
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
   * The system instruction for the custom agent.
   * 
   * - The maximum length is 10,000 characters.
   * 
   * @example
   * 分析框架：
   * 1、需按日、周、月维度监控核心指标（GMV、订单量、UV、转化率），分析趋势变化及同比/环比波动；
   * 2、划分新老客、渠道、地域进行拆解，识别增长来源与短板；
   * 3、结合用户行为路径（浏览→加购→支付）开展漏斗分析，定位流失环节；
   */
  instruction?: string;
  /**
   * @remarks
   * A text-based knowledge base for the custom agent.
   * 
   * - The maximum length is 10,000 characters.
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
   * The configurations for the external knowledge base.
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
   * The formatting instructions for the text report.
   * 
   * - The maximum length is 10,000 characters.
   * 
   * @example
   * 文字报告要求所有数字不使用阿拉伯数字，全部转为中文数字
   */
  textReportConfig?: string;
  /**
   * @remarks
   * The formatting instructions for the web report.
   * 
   * - The maximum length is 50,000 characters.
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
      customAgentId: 'CustomAgentId',
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
      customAgentId: 'string',
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

