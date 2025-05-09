// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDIJobRequestTransformationRules extends $dara.Model {
  /**
   * @remarks
   * The action type. Valid values:
   * 
   * *   DefinePrimaryKey
   * *   Rename
   * *   AddColumn
   * *   HandleDml
   * *   DefineIncrementalCondition
   * *   DefineCycleScheduleSettings
   * *   DefinePartitionKey
   * 
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @remarks
   * The expression of the rule. The expression must be a JSON string.
   * 
   * 1.  Example of a renaming rule
   * 
   * *   Example: {"expression":"${srcDatasourceName}_${srcDatabaseName}_0922" }
   * *   expression: the expression of the renaming rule. You can use the following variables in an expression: ${srcDatasourceName}, ${srcDatabaseName}, and ${srcTableName}. ${srcDatasourceName} specifies the name of the source. ${srcDatabaseName} specifies the name of a source database. ${srcTableName} specifies the name of a source table.
   * 
   * 2.  Example of a column addition rule
   * 
   * *   Example: {"columns":[{"columnName":"my_add_column","columnValueType":"Constant","columnValue":"123"}]}
   * *   If you do not configure such a rule, no fields are added to the destination and no values are assigned by default.
   * *   columnName: the name of the field that is added.
   * *   columnValueType: the value type of the field. Valid values: Constant and Variable.
   * *   columnValue: the value of the field. If the columnValueType parameter is set to Constant, set the columnValue parameter to a constant of the STRING data type. If the columnValueType parameter is set to Variable, set the columnValue parameter to a built-in variable. The following built-in variables are supported: EXECUTE_TIME (LONG data type), DB_NAME_SRC (STRING data type), DATASOURCE_NAME_SRC (STRING data type), TABLE_NAME_SRC (STRING data type), DB_NAME_DEST (STRING data type), DATASOURCE_NAME_DEST (STRING data type), TABLE_NAME_DEST (STRING data type), and DB_NAME_SRC_TRANSED (STRING data type). EXECUTE_TIME specifies the execution time. DB_NAME_SRC specifies the name of a source database. DATASOURCE_NAME_SRC specifies the name of the source. TABLE_NAME_SRC specifies the name of a source table. DB_NAME_DEST specifies the name of a destination database. DATASOURCE_NAME_DEST specifies the name of the destination. TABLE_NAME_DEST specifies the name of a destination table. DB_NAME_SRC_TRANSED specifies the database name obtained after a transformation.
   * 
   * 3.  Example of a rule used to specify primary key fields for a destination table
   * 
   * *   Example: {"columns":["ukcolumn1","ukcolumn2"]}
   * *   If you do not configure such a rule, the primary key fields in the mapped source table are used for the destination table by default.
   * *   If the destination table is an existing table, Data Integration does not modify the schema of the destination table. If the specified primary key fields do not exist in the destination table, an error is reported when the synchronization task starts to run.
   * *   If the destination table is automatically created by the system, Data Integration automatically creates the schema of the destination table. The schema contains the primary key fields that you specify. If the specified primary key fields do not exist in the destination table, an error is reported when the synchronization task starts to run.
   * 
   * 4.  Example of a rule used to process DML messages
   * 
   * *   Example: {"dmlPolicies":[{"dmlType":"Delete","dmlAction":"Filter","filterCondition":"id > 1"}]}
   * *   If you do not configure such a rule, the default processing policy for messages generated for insert, update, and delete operations is Normal.
   * *   dmlType: the DML operation. Valid values: Insert, Update, and Delete.
   * *   dmlAction: the processing policy for DML messages. Valid values: Normal, Ignore, Filter, and LogicalDelete. Filter indicates conditional processing. You can set the dmlAction parameter to Filter only when the dmlType parameter is set to Update or Delete.
   * *   filterCondition: the condition used to filter DML messages. This parameter is required only when the dmlAction parameter is set to Filter.
   * 
   * 5.  Example of a rule used to perform incremental synchronization
   * 
   * *   Example: {"where":"id > 0"}
   * *   You can configure such a rule to perform incremental synchronization.
   * 
   * 6.  Example of a rule used to configure scheduling parameters for an auto triggered task
   * 
   * *   Example: {"cronExpress":" \\* \\* \\* \\* \\* \\*", "cycleType":"1"}
   * *   You can configure such a rule to configure scheduling parameters for an auto triggered task.
   * 
   * 7.  Example of a rule used to specify a partition key
   * 
   * *   Example: {"columns":["id"]}
   * *   You can configure such a rule to specify a partition key.
   * 
   * @example
   * {"expression":"${srcDatasoureName}_${srcDatabaseName}"}
   */
  ruleExpression?: string;
  /**
   * @remarks
   * The name of the rule. If the values of the RuleActionType parameter and the RuleTargetType parameter are the same for multiple transformation rules, you must make sure that the transformation rule names are unique.
   * 
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the object on which you want to perform the action. Valid values:
   * 
   * *   Table
   * *   Schema
   * *   Database
   * 
   * @example
   * Table
   */
  ruleTargetType?: string;
  static names(): { [key: string]: string } {
    return {
      ruleActionType: 'RuleActionType',
      ruleExpression: 'RuleExpression',
      ruleName: 'RuleName',
      ruleTargetType: 'RuleTargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionType: 'string',
      ruleExpression: 'string',
      ruleName: 'string',
      ruleTargetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

