// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQualityRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The strength of the monitoring rule. The strength of a monitoring rule indicates the importance of the rule. Valid values:
   * 
   * *   1: indicates that the monitoring rule is a strong rule.
   * *   0: indicates that the monitoring rule is a weak rule. You can specify whether a monitoring rule is a strong rule based on your business requirements. If a monitoring rule is a strong rule and the critical threshold is exceeded, a critical alert is reported and nodes that are associated with the rule are blocked from running.
   * 
   * @example
   * 0
   */
  blockType?: number;
  /**
   * @remarks
   * The checker ID. Valid values: 2: indicates that the current value is compared with the average value of the previous 7 days. 3: indicates that the current value is compared with the average value of the previous 30 days. 4: indicates that the current value is compared with the value 1 day earlier. 5: indicates that the current value is compared with the value 7 days earlier. 6: indicates that the current value is compared with the value 30 days earlier. 7: indicates the variance between the current value and the value 7 days earlier. 8: indicates the variance between the current value and the value 30 days earlier. 9: indicates that the current value is compared with a fixed value. 10: indicates that the current value is compared with the value 1, 7, or 30 days earlier. 11: indicates that the current value is compared with the value of the previous cycle. You can call the [ListQualityRules](https://help.aliyun.com/document_detail/173995.html) operation to query the ID.
   * 
   * @example
   * 9
   */
  checker?: number;
  /**
   * @remarks
   * The description of the monitoring rule.
   * 
   * @example
   * Verify the number of table rows
   */
  comment?: string;
  /**
   * @remarks
   * The threshold for a critical alert. The threshold indicates the deviation of the monitoring result from the expected value. You can specify a custom value for the threshold based on your business requirements. If a monitoring rule is a strong rule and the critical threshold is exceeded, a critical alert is reported and tasks that are associated with the rule are blocked from running.
   * 
   * @example
   * 10
   */
  criticalThreshold?: string;
  /**
   * @remarks
   * The ID of the partition filter expression. You can call the [ListQualityRules](https://help.aliyun.com/document_detail/173995.html) operation to obtain the ID of the partition filter expression.
   * 
   * @example
   * 123
   */
  entityId?: number;
  /**
   * @remarks
   * The expected value of the monitoring rule.
   * 
   * @example
   * 300
   */
  expectValue?: string;
  /**
   * @remarks
   * The monitoring rule ID. You can call the [ListQualityRules](https://help.aliyun.com/document_detail/173995.html) operation to query the ID of the monitoring rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The method that is used to collect sample data, such as avg, count, sum, min, max, count_distinct, user_defined, table_count, table_size, table_dt_load_count, table_dt_refuseload_count, null_value, null_value/table_count, (table_count-count_distinct)/table_count, or table_count-count_distinct.
   * 
   * This parameter is required.
   * 
   * @example
   * table_count
   */
  methodName?: string;
  /**
   * @remarks
   * Specifies whether to enable the monitoring rule in the production environment. Valid values:
   * 
   * *   true: The monitoring rule is triggered when the associated auto triggered node that generates the output data starts to run.
   * *   false: The monitoring rule is not triggered when the associated auto triggered node that generates the output data starts to run.
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
   * The comparison operator, such as >, >=, =, ≠, <, or <=.
   * 
   * >  If you set the Checker parameter to 9, you must configure the Operator parameter.
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @remarks
   * Specifies whether the threshold is a dynamic threshold. Valid values:
   * 
   * *   0: The threshold is not a dynamic threshold.
   * *   2: The threshold is a dynamic threshold.
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
   * The name of the compute engine or data source. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the name of the compute engine or data source.
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
   * The name of the monitoring rule.
   * 
   * @example
   * 123
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the monitoring rule. Valid values:
   * 
   * *   0: The monitoring rule is created by the system.
   * *   1: The monitoring rule is created by a user.
   * *   2: The monitoring rule is a workspace-level rule.
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
   * The ID of the monitoring template. You can call the [ListQualityRules](https://help.aliyun.com/document_detail/173995.html) operation to obtain the ID of the monitoring template.
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
   * up
   */
  trend?: string;
  /**
   * @remarks
   * The threshold for a warning alert. The threshold specifies the deviation of the monitoring result from the expected value. You can specify a custom value for the threshold based on your business requirements.
   * 
   * @example
   * 5
   */
  warningThreshold?: string;
  /**
   * @remarks
   * The filter condition or custom SQL statement that is used for monitoring.
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

