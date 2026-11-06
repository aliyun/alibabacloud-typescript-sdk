// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAgentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the custom agent. Valid values:
   * - Default: The system-built-in custom agent. Each workspace can have at most one Default agent, and it cannot be deleted.
   * - Common: A common custom agent.
   * 
   * @example
   * Common
   */
  agentType?: string;
  /**
   * @remarks
   * The callback feature configuration items.
   */
  callbackConfigShrink?: string;
  /**
   * @remarks
   * The creation source. Valid values:
   * - Empty (default): Create the agent by using a form.
   * - SmartNew: Create the agent by using intelligent development.
   * 
   * @example
   * SmartNew
   */
  createFrom?: string;
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
   * The specified data scope in **JSON character string format**.
   * - General parameter description:
   *   - tableFlag: Set to true to specify the data scope.
   *   - scope: Set to personal as a fixed value.
   *   - personal: The parameters for file and database types.
   * 
   * **File type**. Pass parameters in the following format:
   * - DataSourceType: Set to remote_data_center as a fixed value.
   * - FileId: The file ID.
   * - Database: The database name returned by the ListDataCenterTable operation, which is usually the file name.
   * - Tables: The table names returned by the ListDataCenterTable operation.
   * - TableIds: The table IDs returned by the ListDataCenterTable operation.
   * - RegionId: The current region.
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
   * **Database type**. Pass parameters in the following format:
   * - DataSourceType: Set to database as a fixed value.
   * - DmsInstanceId: The DMS instance ID returned by the data center operation.
   * - DmsDatabaseId: The DMS database ID returned by the data center operation.
   * - FileId: The instance name. **[Deprecated]**
   * - DbName: The database name returned by the data center operation.
   * - Database: The database name returned by the data center operation.
   * - Tables: The table names returned by the data center operation.
   * - TableIds: The table IDs returned by the data center operation.
   * - Engine: The database engine type, such as mysql or postgresql.
   * - RegionId: The current region.
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
   *     "Database" : "Test table******.xlsx",
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
   * Agent test description
   */
  description?: string;
  /**
   * @remarks
   * The execution configuration.
   */
  executionConfigShrink?: string;
  /**
   * @remarks
   * The instruction.
   * - Input limit: Up to 10,000 characters.
   * 
   * @example
   * Core metric definitions:
   * 1. GMV (Gross Merchandise Volume) refers to the total order amount, including both paid and unpaid orders.
   * 2. Order volume refers to the number of valid orders placed per day.
   * 3. UV (Unique Visitors) refers to the number of deduplicated users who visit the website or app.
   * 4. Conversion rate = Number of paid orders / UV, reflecting the traffic conversion efficiency
   */
  instruction?: string;
  /**
   * @remarks
   * The knowledge.
   * - Input limit: Up to 10,000 characters.
   * 
   * @example
   * Core metric definitions:
   * 1. GMV (Gross Merchandise Volume) refers to the total order amount, including both paid and unpaid orders.
   * 2. Order volume refers to the number of valid orders placed per day.
   * 3. UV (Unique Visitors) refers to the number of deduplicated users who visit the website or app.
   * 4. Conversion rate = Number of paid orders / UV, reflecting the traffic conversion efficiency
   */
  knowledge?: string;
  /**
   * @remarks
   * The external knowledge bases.
   */
  knowledgeConfigListShrink?: string;
  /**
   * @remarks
   * The knowledge semantic configuration list.
   */
  knowledgeSemanticConfigListShrink?: string;
  /**
   * @remarks
   * The name of the custom agent.
   * 
   * @example
   * Agent test name
   */
  name?: string;
  /**
   * @remarks
   * The list of recommended questions.
   * - You can configure up to 10 recommended questions.
   */
  recommendQuestionListShrink?: string;
  /**
   * @remarks
   * The ID of the referenced historical session.
   * 
   * @example
   * 99crainsjnveo*******vynid
   */
  relatedSessionId?: string;
  /**
   * @remarks
   * The scheduled task configuration.
   */
  scheduleTaskConfigShrink?: string;
  /**
   * @remarks
   * The text report format.
   * 
   * @example
   * The text report requires that all numbers be converted to Chinese numerals instead of Arabic numerals
   */
  textReportConfig?: string;
  /**
   * @remarks
   * The list of user-specified skills.
   */
  userSpecifiedSkillListShrink?: string;
  /**
   * @remarks
   * The web report format.
   * 
   * @example
   * The web report requires that all numbers be converted to Chinese numerals instead of Arabic numerals
   */
  webReportConfig?: string;
  /**
   * @remarks
   * The web report theme.
   * 
   * @example
   * Default
   */
  webReportTheme?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 56kv1pvl9uvt9**********bb
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      callbackConfigShrink: 'CallbackConfig',
      createFrom: 'CreateFrom',
      DMSUnit: 'DMSUnit',
      dataJson: 'DataJson',
      description: 'Description',
      executionConfigShrink: 'ExecutionConfig',
      instruction: 'Instruction',
      knowledge: 'Knowledge',
      knowledgeConfigListShrink: 'KnowledgeConfigList',
      knowledgeSemanticConfigListShrink: 'KnowledgeSemanticConfigList',
      name: 'Name',
      recommendQuestionListShrink: 'RecommendQuestionList',
      relatedSessionId: 'RelatedSessionId',
      scheduleTaskConfigShrink: 'ScheduleTaskConfig',
      textReportConfig: 'TextReportConfig',
      userSpecifiedSkillListShrink: 'UserSpecifiedSkillList',
      webReportConfig: 'WebReportConfig',
      webReportTheme: 'WebReportTheme',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      callbackConfigShrink: 'string',
      createFrom: 'string',
      DMSUnit: 'string',
      dataJson: 'string',
      description: 'string',
      executionConfigShrink: 'string',
      instruction: 'string',
      knowledge: 'string',
      knowledgeConfigListShrink: 'string',
      knowledgeSemanticConfigListShrink: 'string',
      name: 'string',
      recommendQuestionListShrink: 'string',
      relatedSessionId: 'string',
      scheduleTaskConfigShrink: 'string',
      textReportConfig: 'string',
      userSpecifiedSkillListShrink: 'string',
      webReportConfig: 'string',
      webReportTheme: 'string',
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

