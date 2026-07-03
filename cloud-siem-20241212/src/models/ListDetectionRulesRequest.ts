// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDetectionRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ATT\\&CK technique of the alert.
   * 
   * @example
   * Discovery
   */
  alertAttCk?: string;
  /**
   * @remarks
   * The threat level of the alert. Valid values:
   * 
   * - 5: critical.
   * 
   * - 4: important.
   * 
   * - 3: medium.
   * 
   * - 2: low.
   * 
   * - 1: informational.
   * 
   * @example
   * 1
   */
  alertLevel?: string;
  /**
   * @remarks
   * The alert tactic phase.
   * 
   * @example
   * TA0042
   */
  alertTacticId?: string;
  /**
   * @remarks
   * The alert type.
   * 
   * @example
   * siem_rule_type_alert_storm
   */
  alertType?: string;
  /**
   * @remarks
   * The type of the detection rule expression.
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
  detectionRuleIds?: string[];
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
   * 
   * - preset: a built-in detection rule.
   * 
   * - custom: a custom detection rule.
   * 
   * - custom_template: a rule template.
   * 
   * @example
   * preset
   */
  detectionRuleType?: string;
  /**
   * @remarks
   * The event aggregation type. Valid values:
   * 
   * - none: No events are generated.
   * 
   * - graph_compute: graph computing (supported by predefined rules).
   * 
   * - expert: expert rule.
   * 
   * - passthrough: alert passthrough (one-to-one).
   * 
   * - window: aggregation of similar alerts (by window).
   * 
   * @example
   * graph_compute
   */
  incidentAggregationType?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
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
   * The maximum number of data entries to read.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **asc**: ascending order. This is the default value.
   * 
   * - **desc**: descending order.
   * 
   * @example
   * asc
   */
  orderDirection?: string;
  /**
   * @remarks
   * The field to sort by. Valid values:
   * 
   * - GmtCreate: the creation time.
   * 
   * - GmtModified: the update time.
   * 
   * @example
   * GmtModified
   */
  orderFieldName?: string;
  /**
   * @remarks
   * The pagination parameter. This specifies the current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The pagination parameter. This specifies the number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the Data Management center of threat analysis is located. Select a region based on the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: Your assets are outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID that the administrator uses to switch to the perspective of another member.
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
      detectionRuleIds: 'DetectionRuleIds',
      detectionRuleName: 'DetectionRuleName',
      detectionRuleStatus: 'DetectionRuleStatus',
      detectionRuleType: 'DetectionRuleType',
      incidentAggregationType: 'IncidentAggregationType',
      lang: 'Lang',
      logCategoryId: 'LogCategoryId',
      logSchemaId: 'LogSchemaId',
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
      detectionRuleIds: { 'type': 'array', 'itemType': 'string' },
      detectionRuleName: 'string',
      detectionRuleStatus: 'string',
      detectionRuleType: 'string',
      incidentAggregationType: 'string',
      lang: 'string',
      logCategoryId: 'string',
      logSchemaId: 'string',
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
    if(Array.isArray(this.detectionRuleIds)) {
      $dara.Model.validateArray(this.detectionRuleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

