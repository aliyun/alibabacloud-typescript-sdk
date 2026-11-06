// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDetectionRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ATT&CK technique of the alert.
   * 
   * @example
   * Discovery
   */
  alertAttCk?: string;
  /**
   * @remarks
   * The threat level of the alert. Valid values:
   * - 5: Critical.
   * - 4: High.
   * - 3: Medium.
   * - 2: Low.
   * - 1: Informational.
   * 
   * @example
   * 1
   */
  alertLevel?: string;
  /**
   * @remarks
   * The tactic phase of the alert.
   * 
   * @example
   * TA0042
   */
  alertTacticId?: string;
  /**
   * @remarks
   * The alerting type.
   * 
   * @example
   * siem_rule_type_alert_storm
   */
  alertType?: string;
  /**
   * @remarks
   * The expression content of the detection rule.
   * 
   * @example
   * playbook
   */
  detectionExpressionType?: string;
  /**
   * @remarks
   * The ID of the detection rule.
   * 
   * @example
   * dr-ppa85gfw69tgwkys****
   */
  detectionRuleId?: string;
  /**
   * @remarks
   * The list of detection rule IDs.
   */
  detectionRuleIdsShrink?: string;
  /**
   * @remarks
   * The name of the detection rule.
   * 
   * @example
   * Detect Discovery Behavior for Local Systems Groups
   */
  detectionRuleName?: string;
  /**
   * @remarks
   * The status of the detection rule.
   * 
   * @example
   * enabled
   */
  detectionRuleStatus?: string;
  /**
   * @remarks
   * The type of the detection rule. Valid values:
   * - preset: Preset detection rule.
   * - custom: Custom detection rule.
   * - custom_template: Rule template.
   * 
   * @example
   * preset
   */
  detectionRuleType?: string;
  /**
   * @remarks
   * The event summaries type. Valid values:
   * - none: No event is generated.
   * - graph_compute: Graph computing (supported by preset rules).
   * - expert: Expert rules.
   * - passthrough: Alerting pass-through (one-to-one).
   * - window: Similar aggregation (window).
   * 
   * @example
   * graph_compute
   */
  incidentAggregationType?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * Note: This parameter is required in actual calls. If it is not provided, the service returns a 400 error "The specified Lang can not be empty.". Explicitly specify the language code.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the log normalization category.
   * 
   * @example
   * NETWORK_CATEGORY
   */
  logCategoryId?: string;
  /**
   * @remarks
   * The ID of the log normalization schema.
   * 
   * @example
   * API_RISK_ACTIVITY
   */
  logSchemaId?: string;
  /**
   * @remarks
   * The collection of log schema IDs, which matches any schema by its full ID. If this parameter is not provided, this condition is not applied. If an empty array is explicitly provided, zero records are returned. If both this parameter and LogSchemaId are provided, the intersection is used.
   */
  logSchemaIdsShrink?: string;
  /**
   * @remarks
   * The maximum number of data entries to return in this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort direction. Valid values:
   * 
   * - **asc**: Ascending order. This is the default value.
   * - **desc**: Descending order.
   * 
   * @example
   * asc
   */
  orderDirection?: string;
  /**
   * @remarks
   * The field used for sorting. Valid values:
   * - GmtCreate: Creation time.
   * - GmtModified: Update time.
   * 
   * @example
   * GmtModified
   */
  orderFieldName?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: The assets are located in the Chinese mainland.
   * - ap-southeast-1: The assets are located outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose perspective the administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      alertAttCk: 'AlertAttCk',
      alertLevel: 'AlertLevel',
      alertTacticId: 'AlertTacticId',
      alertType: 'AlertType',
      detectionExpressionType: 'DetectionExpressionType',
      detectionRuleId: 'DetectionRuleId',
      detectionRuleIdsShrink: 'DetectionRuleIds',
      detectionRuleName: 'DetectionRuleName',
      detectionRuleStatus: 'DetectionRuleStatus',
      detectionRuleType: 'DetectionRuleType',
      incidentAggregationType: 'IncidentAggregationType',
      lang: 'Lang',
      logCategoryId: 'LogCategoryId',
      logSchemaId: 'LogSchemaId',
      logSchemaIdsShrink: 'LogSchemaIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderDirection: 'OrderDirection',
      orderFieldName: 'OrderFieldName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertAttCk: 'string',
      alertLevel: 'string',
      alertTacticId: 'string',
      alertType: 'string',
      detectionExpressionType: 'string',
      detectionRuleId: 'string',
      detectionRuleIdsShrink: 'string',
      detectionRuleName: 'string',
      detectionRuleStatus: 'string',
      detectionRuleType: 'string',
      incidentAggregationType: 'string',
      lang: 'string',
      logCategoryId: 'string',
      logSchemaId: 'string',
      logSchemaIdsShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderDirection: 'string',
      orderFieldName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

