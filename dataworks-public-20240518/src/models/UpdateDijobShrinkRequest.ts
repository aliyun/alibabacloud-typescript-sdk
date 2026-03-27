// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDIJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use the Id parameter instead.
   * 
   * @example
   * 11588
   * 
   * @deprecated
   */
  DIJobId?: number;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * The description of the synchronization task.
   */
  description?: string;
  fileSpec?: string;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 11588
   */
  id?: number;
  /**
   * @remarks
   * The task-level settings, including DDL handling policies, column data type mapping between source and destination, and runtime parameters.
   */
  jobSettingsShrink?: string;
  /**
   * @remarks
   * The task owner.
   * 
   * @example
   * 95279527
   */
  owner?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can call the [ListProjects](https://help.aliyun.com/document_detail/178393.html) operation to obtain the ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The resource settings.
   */
  resourceSettingsShrink?: string;
  /**
   * @remarks
   * The list of synchronization object transformation mappings. Each element describes a set of source object selection rules and the transformation rules applied to those objects.
   * 
   * >  [ { "SourceObjectSelectionRules":[ { "ObjectType":"Database", "Action":"Include", "ExpressionType":"Exact", "Expression":"biz_db" }, { "ObjectType":"Schema", "Action":"Include", "ExpressionType":"Exact", "Expression":"s1" }, { "ObjectType":"Table", "Action":"Include", "ExpressionType":"Exact", "Expression":"table1" } ], "TransformationRuleNames":[ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema" } ] } ]
   */
  tableMappingsShrink?: string;
  /**
   * @remarks
   * The list of synchronization object transformation rule definitions.
   * 
   * >  [ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema", "RuleExpression":"{"expression":"${srcDatasoureName}_${srcDatabaseName}"}" } ]
   */
  transformationRulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      description: 'Description',
      fileSpec: 'FileSpec',
      id: 'Id',
      jobSettingsShrink: 'JobSettings',
      owner: 'Owner',
      projectId: 'ProjectId',
      resourceSettingsShrink: 'ResourceSettings',
      tableMappingsShrink: 'TableMappings',
      transformationRulesShrink: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      description: 'string',
      fileSpec: 'string',
      id: 'number',
      jobSettingsShrink: 'string',
      owner: 'string',
      projectId: 'number',
      resourceSettingsShrink: 'string',
      tableMappingsShrink: 'string',
      transformationRulesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

