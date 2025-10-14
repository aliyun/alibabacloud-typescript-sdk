// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDetectionRulesShrinkRequest extends $dara.Model {
  /**
   * @example
   * Discovery
   */
  alertAttCk?: string;
  /**
   * @example
   * 1
   */
  alertLevel?: string;
  /**
   * @example
   * TA0042
   */
  alertTacticId?: string;
  /**
   * @example
   * siem_rule_type_alert_storm
   */
  alertType?: string;
  /**
   * @example
   * playbook
   */
  detectionExpressionType?: string;
  /**
   * @example
   * dr-ppa85gfw69tgwkys****
   */
  detectionRuleId?: string;
  detectionRuleIdsShrink?: string;
  /**
   * @example
   * Detect Discovery Behavior for Local Systems Groups
   */
  detectionRuleName?: string;
  /**
   * @example
   * enabled
   */
  detectionRuleStatus?: string;
  /**
   * @example
   * preset
   */
  detectionRuleType?: string;
  /**
   * @example
   * graph_compute
   */
  incidentAggregationType?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * NETWORK_CATEGORY
   */
  logCategoryId?: string;
  /**
   * @example
   * API_RISK_ACTIVITY
   */
  logSchemaId?: string;
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @example
   * asc
   */
  orderDirection?: string;
  /**
   * @example
   * GmtModified
   */
  orderFieldName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
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

