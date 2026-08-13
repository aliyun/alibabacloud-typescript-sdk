// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAgentShrinkRequest extends $dara.Model {
  callbackConfigShrink?: string;
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
   * The specified data range in **JSON string format**.
   * - Common parameter description
   *   - tableFlag: true indicates a specified data range.
   *   - scope: personal is a fixed value.
   *   - personal: pass parameters for file or database types.
   * 
   * **File type**. Pass parameters in the following format:
   * - DataSourceType: remote_data_center is a fixed value.
   * - FileId: The file ID.
   * - Database: The database name returned by the ListDataCenterTable operation, which is usually the file name.
   * - Tables: The table name returned by the ListDataCenterTable operation.
   * - TableIds: The TableId returned by the ListDataCenterTable operation.
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
   * **Database type**. Pass parameters as follows:
   * - DataSourceType: database is a fixed value.
   * - DmsInstanceId: The DMS instance ID returned by the data center operation.
   * - DmsDatabaseId: The DMS database ID returned by the data center operation.
   * - FileId: The instance name (deprecated).
   * - DbName: The database name returned by the data center operation.
   * - Database: The database name returned by the data center operation.
   * - Tables: The table name returned by the data center operation.
   * - TableIds: The TableId returned by the data center operation.
   * - Engine: The engine type (mysql or postgresql).
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
   *     "Database" : "TestTable******.xlsx",
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
   * AgentTestDescription
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
   * 
   * @example
   * Core metric definitions:
   * 1. GMV (Gross Merchandise Volume) refers to the total order amount, including both paid and unpaid orders;
   * 2. Order volume is the number of valid orders placed per day;
   * 3. UV (Unique Visitors) refers to the deduplicated number of users who visit the website or app;
   * 4. Conversion rate = number of paid orders / UV, reflecting traffic conversion efficiency;
   */
  instruction?: string;
  /**
   * @remarks
   * The knowledge.
   * 
   * @example
   * Core metric definitions:
   * 1. GMV (Gross Merchandise Volume) refers to the total order amount, including both paid and unpaid orders.
   * 2. Order volume is the number of valid orders placed per day.
   * 3. UV (Unique Visitors) refers to the deduplicated number of users who visit the website or app.
   * 4. Conversion rate = number of paid orders / UV, reflecting traffic conversion efficiency.
   */
  knowledge?: string;
  /**
   * @remarks
   * The external knowledge base configurations.
   */
  knowledgeConfigListShrink?: string;
  knowledgeSemanticConfigListShrink?: string;
  /**
   * @remarks
   * The name of the custom agent.
   * 
   * @example
   * AgentTestName
   */
  name?: string;
  /**
   * @remarks
   * The ID of the referenced historical session.
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
   * The text report requires all numbers to be written in Chinese characters instead of Arabic numerals
   */
  textReportConfig?: string;
  /**
   * @remarks
   * The web report format.
   * 
   * @example
   * The web report requires all numbers to be written in Chinese characters instead of Arabic numerals
   */
  webReportConfig?: string;
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
      callbackConfigShrink: 'CallbackConfig',
      DMSUnit: 'DMSUnit',
      dataJson: 'DataJson',
      description: 'Description',
      executionConfigShrink: 'ExecutionConfig',
      instruction: 'Instruction',
      knowledge: 'Knowledge',
      knowledgeConfigListShrink: 'KnowledgeConfigList',
      knowledgeSemanticConfigListShrink: 'KnowledgeSemanticConfigList',
      name: 'Name',
      relatedSessionId: 'RelatedSessionId',
      scheduleTaskConfigShrink: 'ScheduleTaskConfig',
      textReportConfig: 'TextReportConfig',
      webReportConfig: 'WebReportConfig',
      webReportTheme: 'WebReportTheme',
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
      knowledgeSemanticConfigListShrink: 'string',
      name: 'string',
      relatedSessionId: 'string',
      scheduleTaskConfigShrink: 'string',
      textReportConfig: 'string',
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

