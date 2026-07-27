// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQualityRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The strength of the rule. Valid values:
   * 
   * - 0: weak rule
   * 
   * - 1: strong rule
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  blockType?: number;
  /**
   * @remarks
   * The ID of the checker. Valid values:
   * 
   * - 2: 7-day average fluctuation
   * 
   * - 3: 30-day average fluctuation
   * 
   * - 4: day-over-day comparison
   * 
   * - 5: week-over-week comparison
   * 
   * - 6: month-over-month comparison
   * 
   * - 7: 7-day variance fluctuation
   * 
   * - 8: 30-day variance fluctuation
   * 
   * - 9: comparison with a fixed value
   * 
   * - 10: fluctuation detection over 1, 7, and 30 days
   * 
   * - 11: comparison with the previous cycle
   * 
   * @example
   * 9
   */
  checker?: number;
  /**
   * @remarks
   * The comments of the rule.
   * 
   * @example
   * Verification
   */
  comment?: string;
  /**
   * @remarks
   * The critical threshold. It indicates the deviation of the check result from the expected value. You can customize this threshold based on your business requirements. If a strong rule is used and a critical alert is triggered, the scheduling task is blocked.
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
   * The check method. If you use a custom SQL statement, set this parameter to `user_defined`.
   * 
   * @example
   * count/table_count
   */
  methodName?: string;
  /**
   * @remarks
   * The comparison operator. Examples: `>`, `>=`, `=`, `<>`, `<`, and `<=`.
   * 
   * > If you set the Checker parameter to 9, you must specify the Operator parameter.
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @remarks
   * Specifies whether to use a dynamic threshold. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  predictType?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to obtain the workspace ID.
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
   * The field that is monitored by the rule. To perform a table-level check, set this parameter to `table_count` for the number of rows or `table_size` for the table size.
   * 
   * @example
   * table_id
   */
  property?: string;
  /**
   * @remarks
   * The data type of the field. For a table-level check, set this parameter to `table`. For a field-level check, set this parameter to a specific data type, such as `bigint`.
   * 
   * @example
   * bigint
   */
  propertyType?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * - 0: system template
   * 
   * - 1: custom SQL
   * 
   * - 2: custom template
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  ruleType?: number;
  /**
   * @remarks
   * The variable settings that are inserted before the custom rule. Format: x=a,y=b.
   * 
   * @example
   * x=a,y=b
   */
  taskSetting?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * 7
   */
  templateId?: number;
  /**
   * @remarks
   * The trend of the check result. Valid values:
   * 
   * - `up`: upward trend
   * 
   * - `down`: downward trend
   * 
   * - `abs`: absolute value
   * 
   * @example
   * abs
   */
  trend?: string;
  /**
   * @remarks
   * The warning threshold. It indicates the deviation of the check result from the expected value. You can customize this threshold based on your business requirements.
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

