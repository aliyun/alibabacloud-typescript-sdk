// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQualityRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The strength of the quality rule. You can specify a rule as a strong or weak rule based on the importance of the rule. Valid values:
   * 
   * - 1: strong rule
   * 
   * - 0: weak rule
   *   If you specify a rule as a strong rule and a critical alert is triggered for the rule, the scheduling of the associated task is blocked.
   * 
   * @example
   * 0
   */
  blockType?: number;
  /**
   * @remarks
   * The checker ID. You can call the [ListQualityRules](https://help.aliyun.com/document_detail/173995.html) operation to query the checker ID.
   * 
   * @example
   * 9
   */
  checker?: number;
  /**
   * @remarks
   * The description of the quality rule.
   * 
   * @example
   * Verify the number of table rows
   */
  comment?: string;
  /**
   * @remarks
   * The threshold for a critical alert. The threshold specifies the deviation of a check result from the expected value. You can customize the threshold based on your business requirements. If you use a strong rule and a critical alert is triggered, the scheduling of the associated task is blocked.
   * 
   * @example
   * 10
   */
  criticalThreshold?: string;
  /**
   * @remarks
   * The ID of the partition filter expression. You can call the [ListQualityRules](https://help.aliyun.com/document_detail/173995.html) operation to query the ID of the partition filter expression.
   * 
   * @example
   * 123
   */
  entityId?: number;
  /**
   * @remarks
   * The expected value.
   * 
   * @example
   * 300
   */
  expectValue?: string;
  /**
   * @remarks
   * The rule ID. You can call the [ListQualityRules](https://help.aliyun.com/document_detail/173995.html) operation to query the rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The name of the method used to collect sample data. Valid values: avg, count, sum, min, max, count_distinct, user_defined, table_count, table_size, table_dt_load_count, table_dt_refuseload_count, null_value, null_value/table_count, (table_count-count_distinct)/table_count, and table_count-count_distinct.
   * 
   * This parameter is required.
   * 
   * @example
   * table_count
   */
  methodName?: string;
  /**
   * @remarks
   * Specifies whether to enable or disable the quality rule. This parameter specifies whether to run the quality rule in the production environment.
   * 
   * - true: The quality rule is triggered when the scheduling task that is associated with the output table of the rule runs.
   * 
   * - false: The quality rule is not triggered when the scheduling task that is associated with the output table of the rule runs.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  openSwitch?: boolean;
  /**
   * @remarks
   * The comparison operator. Valid values: >, >=, =, !=, <, and <=.
   * 
   * > This parameter is required if you set the Checker parameter to 9.
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @remarks
   * Specifies whether to use a dynamic threshold. Valid values:
   * 
   * - 0: no
   * 
   * - 2: yes
   * 
   * @example
   * 0
   */
  predictType?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 26
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the engine or data source. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to obtain the name.
   * 
   * This parameter is required.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * This parameter is required.
   * 
   * @example
   * id
   */
  property?: string;
  /**
   * @remarks
   * The data type of the field.
   * 
   * @example
   * bigint
   */
  propertyType?: string;
  /**
   * @remarks
   * The name of the quality rule.
   * 
   * @example
   * 123
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
   * @example
   * 0
   */
  ruleType?: number;
  /**
   * @remarks
   * The variable settings that are inserted before a custom rule. The settings are in the format of x=a,y=b.
   * 
   * @example
   * x=a,y=b
   */
  taskSetting?: string;
  /**
   * @remarks
   * The ID of the template that is used for the check. You can call the [ListQualityRules](https://help.aliyun.com/document_detail/173995.html) operation to query the template ID.
   * 
   * @example
   * 7
   */
  templateId?: number;
  /**
   * @remarks
   * The trend of the check result. Valid values:
   * 
   * - up: upward trend
   * 
   * - down: downward trend
   * 
   * - abs: absolute value
   * 
   * @example
   * up
   */
  trend?: string;
  /**
   * @remarks
   * The threshold for a warning alert. The threshold specifies the deviation of a check result from the expected value. You can customize the threshold based on your business requirements.
   * 
   * @example
   * 5
   */
  warningThreshold?: string;
  /**
   * @remarks
   * The filter condition or custom SQL statement that is used for the check.
   * 
   * @example
   * dt=$[yyyymmdd]
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
      id: 'Id',
      methodName: 'MethodName',
      openSwitch: 'OpenSwitch',
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
      id: 'number',
      methodName: 'string',
      openSwitch: 'boolean',
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

