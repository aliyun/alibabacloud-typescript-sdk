// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQualityRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The strength type of the monitoring rule. Valid values:
   * 
   * *   0: The monitoring rule is a weak rule.
   * *   1: The monitoring rule is a strong rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  blockType?: number;
  /**
   * @remarks
   * The checker ID.
   * 
   * @example
   * 9
   */
  checker?: number;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * Verification
   */
  comment?: string;
  /**
   * @remarks
   * The threshold for a critical alert. The threshold indicates the deviation of the monitoring result from the expected value. You can customize this threshold based on your business requirements. If a strong rule is used and a critical alert is triggered, nodes are blocked.
   * 
   * @example
   * 20
   */
  criticalThreshold?: string;
  /**
   * @remarks
   * The ID of the partition filter expression.
   * 
   * This parameter is required.
   * 
   * @example
   * 15224
   */
  entityId?: number;
  /**
   * @remarks
   * The expected value.
   * 
   * @example
   * 0
   */
  expectValue?: string;
  /**
   * @remarks
   * The method used to collect sample data. If you want to use a custom SQL statement as a sampling method, set this parameter to user_defined.
   * 
   * @example
   * count/table_count
   */
  methodName?: string;
  /**
   * @remarks
   * The comparison operator, such as >, >=, =, ≠, <, or <=.
   * 
   * > If you set the Checker parameter to 9, you must configure the Operator parameter.
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @remarks
   * Specifies whether the monitoring rule is a dynamic threshold rule. Valid values: 0 and 2. The value 0 indicates that the monitoring rule is not a dynamic threshold rule. The value 2 indicates that the monitoring rule is a dynamic threshold rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  predictType?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the compute engine or data source.
   * 
   * This parameter is required.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  /**
   * @remarks
   * The fields that you want to monitor. If you want to monitor all fields in a table and check the table rows, set this parameter to table_count. If you want to monitor all fields in a table and check the table size, set this parameter to table_size.
   * 
   * @example
   * table_id
   */
  property?: string;
  /**
   * @remarks
   * The data type of the fields that you want to monitor. If you want to monitor all fields in a table, set this parameter to table. If you want to monitor only a specific field, set this parameter to bigint.
   * 
   * @example
   * bigint
   */
  propertyType?: string;
  /**
   * @remarks
   * The name of the monitoring rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the monitoring rule. Valid values: 0, 1, and 2. The value 0 indicates that the monitoring rule is created by the system. The value 1 indicates that the monitoring rule is created by a user. The value 2 indicates that the monitoring rule is a workspace-level rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  ruleType?: number;
  /**
   * @remarks
   * The variable settings inserted before the custom rule. Format: x=a,y=b.
   * 
   * @example
   * x=a,y=b
   */
  taskSetting?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 7
   */
  templateId?: number;
  /**
   * @remarks
   * The trend of the monitoring result. Valid values:
   * 
   * *   up: increasing
   * *   down: decreasing
   * *   abs: absolute value
   * 
   * @example
   * abs
   */
  trend?: string;
  /**
   * @remarks
   * The threshold for a warning alert. The threshold indicates the deviation of the monitoring result from the expected value. You can customize this threshold based on your business requirements.
   * 
   * @example
   * 10
   */
  warningThreshold?: string;
  /**
   * @remarks
   * The filter condition or custom SQL statement.
   * 
   * @example
   * table_id>1
   */
  whereCondition?: string;
  static names(): { [key: string]: string } {
    return {
      blockType: 'BlockType',
      checker: 'Checker',
      comment: 'Comment',
      criticalThreshold: 'CriticalThreshold',
      entityId: 'EntityId',
      expectValue: 'ExpectValue',
      methodName: 'MethodName',
      operator: 'Operator',
      predictType: 'PredictType',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      property: 'Property',
      propertyType: 'PropertyType',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      taskSetting: 'TaskSetting',
      templateId: 'TemplateId',
      trend: 'Trend',
      warningThreshold: 'WarningThreshold',
      whereCondition: 'WhereCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockType: 'number',
      checker: 'number',
      comment: 'string',
      criticalThreshold: 'string',
      entityId: 'number',
      expectValue: 'string',
      methodName: 'string',
      operator: 'string',
      predictType: 'number',
      projectId: 'number',
      projectName: 'string',
      property: 'string',
      propertyType: 'string',
      ruleName: 'string',
      ruleType: 'number',
      taskSetting: 'string',
      templateId: 'number',
      trend: 'string',
      warningThreshold: 'string',
      whereCondition: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

