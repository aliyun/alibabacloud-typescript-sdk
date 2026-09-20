// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQualityRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The strength of the quality check rule. The strength indicates the importance of the rule. Valid values:
   * - 1: strong rule.
   * - 0: weak rule.
   * You can set important rules as strong rules based on your business requirements. If a strong rule is used and a red alert is triggered, the scheduling task is blocked.
   * 
   * @example
   * 0
   */
  blockType?: number;
  /**
   * @remarks
   * The checker ID.
   * 2: 7-day average fluctuation.
   * 3: 30-day average fluctuation.
   * 4: 1-day cycle comparison.
   * 5: 7-day cycle comparison.
   * 6: 30-day cycle comparison.
   * 7: 7-day variance fluctuation.
   * 8: 30-day variance fluctuation.
   * 9: comparison with a fixed value.
   * 10: 1-, 7-, and 30-day fluctuation detection.
   * 11: previous cycle comparison.
   * You can call the [ListQualityRules](https://help.aliyun.com/document_detail/173995.html) operation to obtain the checker ID.
   * 
   * @example
   * 9
   */
  checker?: number;
  /**
   * @remarks
   * The description of the quality check rule.
   * 
   * @example
   * Verify the number of table rows
   */
  comment?: string;
  /**
   * @remarks
   * The red alert threshold. This value indicates the degree of deviation from the expected sample value. You can customize this threshold based on your business requirements. If a strong rule is used and the red threshold is triggered, the scheduling task is blocked.
   * 
   * @example
   * 10
   */
  criticalThreshold?: string;
  /**
   * @remarks
   * The ID of the partition expression. You can call the [ListQualityRules](https://help.aliyun.com/document_detail/173995.html) operation to obtain the partition expression ID.
   * 
   * @example
   * 123
   */
  entityId?: number;
  /**
   * @remarks
   * The expected value of the check result.
   * 
   * @example
   * 300
   */
  expectValue?: string;
  /**
   * @remarks
   * The ID of the quality check rule. You can call the [ListQualityRules](https://help.aliyun.com/document_detail/173995.html) operation to obtain the rule ID.
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
   * The enabled or disabled status of the rule, which controls whether the quality rule runs in the production environment.
   * 
   * - true: When the scheduling task associated with the output table data of the data quality rule is executed, the quality rule check is triggered.
   * 
   * - false: When the scheduling task associated with the output table data of the data quality rule is executed, the quality rule check is not triggered.
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
   * The comparison operator. Valid values: >, >=, =, ≠, <, and <=.
   * 
   * > When Checker is set to 9, Operator is a required parameter.
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @remarks
   * Specifies whether the threshold is dynamic. Valid values:
   * - 0: non-dynamic threshold.
   * - 2: dynamic threshold.
   * 
   * @example
   * 0
   */
  predictType?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * @example
   * 26
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the engine or data source. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace management page to obtain the name.
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
   * The type of the field.
   * 
   * @example
   * bigint
   */
  propertyType?: string;
  /**
   * @remarks
   * The name of the quality check rule.
   * 
   * @example
   * 123
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * - 0: system template rule.
   * - 1: custom SQL rule.
   * - 4: custom template rule.
   * 
   * @example
   * 0
   */
  ruleType?: number;
  /**
   * @remarks
   * The variable settings inserted before the custom rule, in the format of x=a,y=b.
   * 
   * @example
   * x=a,y=b
   */
  taskSetting?: string;
  /**
   * @remarks
   * The ID of the check template. You can call the [ListQualityRules](https://help.aliyun.com/document_detail/173995.html) operation to obtain the check template ID.
   * 
   * @example
   * 7
   */
  templateId?: number;
  /**
   * @remarks
   * The trend of the check result. Valid values:
   * - up: upward trend.
   * - down: downward trend.
   * - abs: absolute value.
   * 
   * @example
   * up
   */
  trend?: string;
  /**
   * @remarks
   * The orange alert threshold. This value indicates the degree of deviation from the expected sample value. You can customize this threshold based on your business requirements.
   * 
   * @example
   * 5
   */
  warningThreshold?: string;
  /**
   * @remarks
   * The filter condition or custom SQL statement used by the check task.
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

