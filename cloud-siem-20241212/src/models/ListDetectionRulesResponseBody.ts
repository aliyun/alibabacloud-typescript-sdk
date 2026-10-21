// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDetectionRulesResponseBodyDetectionRulesEntityMappingsNormalizationFieldMappings extends $dara.Model {
  /**
   * @remarks
   * The mapping field.
   * 
   * @example
   * ip
   */
  mappingFieldName?: string;
  /**
   * @remarks
   * The normalized entity field.
   * 
   * @example
   * src_ip
   */
  normalizationFieldName?: string;
  /**
   * @remarks
   * The data type of the normalized entity field.
   * 
   * @example
   * vachar
   */
  normalizationFieldType?: string;
  static names(): { [key: string]: string } {
    return {
      mappingFieldName: 'MappingFieldName',
      normalizationFieldName: 'NormalizationFieldName',
      normalizationFieldType: 'NormalizationFieldType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappingFieldName: 'string',
      normalizationFieldName: 'string',
      normalizationFieldType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectionRulesResponseBodyDetectionRulesEntityMappings extends $dara.Model {
  /**
   * @remarks
   * The entity mapping configuration.
   */
  normalizationFieldMappings?: ListDetectionRulesResponseBodyDetectionRulesEntityMappingsNormalizationFieldMappings[];
  /**
   * @remarks
   * The entity type ID.
   * 
   * @example
   * ip
   */
  normalizationSchemaId?: string;
  static names(): { [key: string]: string } {
    return {
      normalizationFieldMappings: 'NormalizationFieldMappings',
      normalizationSchemaId: 'NormalizationSchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalizationFieldMappings: { 'type': 'array', 'itemType': ListDetectionRulesResponseBodyDetectionRulesEntityMappingsNormalizationFieldMappings },
      normalizationSchemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.normalizationFieldMappings)) {
      $dara.Model.validateArray(this.normalizationFieldMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectionRulesResponseBodyDetectionRulesPlaybook extends $dara.Model {
  /**
   * @remarks
   * The input parameter configuration for invoking the playbook.
   * 
   * @example
   * [
   *     {
   *         "name": "expireDay",
   *         "dataType": "Integer",
   *         "required": true,
   *         "isArray": false,
   *         "example": "7",
   *         "description": "desc",
   *         "typeName": "Integer",
   *         "dataClass": "normal",
   *         "stanchDefaultValue": "7"
   *     }
   * ]
   */
  config?: string;
  /**
   * @remarks
   * The flow configuration of the playbook.
   * 
   * @example
   * [
   *     {
   *         "id": "EndEvent_1fqpq4h",
   *         "zIndex": 1,
   *         "data": {
   *             "nodeType": "endEvent",
   *             "appType": "basic",
   *             "valueData": {
   * 
   *             },
   *             "icon": "icon-radio-off-full"
   *         },
   *         "position": {
   *             "x": 1369,
   *             "y": 174
   *         }
   *     }
   * ]
   */
  flow?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      flow: 'Flow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      flow: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectionRulesResponseBodyDetectionRules extends $dara.Model {
  /**
   * @remarks
   * The alert ATT&CK technique.
   * 
   * @example
   * Discovery
   */
  alertAttCk?: string;
  /**
   * @remarks
   * The ATT&CK technique mapping.
   */
  alertAttCkMapping?: string;
  /**
   * @remarks
   * The alert description. You can use $$ to reference query output fields.
   * 
   * @example
   * Alert from: $product_code$, detected network attack from $src_ip$, affected assets include: $dst_ip$
   */
  alertDescription?: string;
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
   * The alert level mapping.
   */
  alertLevelMapping?: string;
  /**
   * @remarks
   * The alert name. You can use $$ to reference query output fields.
   * 
   * @example
   * Detected high-frequency multi-type network attacks from $src_ip$
   */
  alertName?: string;
  /**
   * @remarks
   * The alert template ID of the detection rule. Valid values:
   * - ALERT_ACTIVITY: other alerts.
   * - EDR_ALERT_ACTIVITY: endpoint detection and response alerts.
   * - FIREWALL_ALERT_ACTIVITY: firewall alerts.
   * - WAF_ALERT_ACTIVITY: web application firewall alerts.
   * 
   * @example
   * ALERT_ACTIVITY
   */
  alertSchemaId?: string;
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
   * The alert threshold count.
   * 
   * @example
   * 10
   */
  alertThresholdCount?: number;
  /**
   * @remarks
   * The list of alert threshold fields, separated by commas.
   * 
   * @example
   * alert_type,ip
   */
  alertThresholdGroup?: string;
  /**
   * @remarks
   * The alert threshold period length.
   * 
   * @example
   * 5m
   */
  alertThresholdPeriod?: string;
  /**
   * @remarks
   * The alerting type.
   * 
   * @example
   * WebShell
   */
  alertType?: string;
  /**
   * @remarks
   * The alerting type mapping.
   */
  alertTypeMapping?: string;
  /**
   * @remarks
   * The creation time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-03-21 13:47:01
   */
  createTime?: number;
  /**
   * @remarks
   * The expression content of the detection rule.
   * 
   * @example
   * *|set session mode=scan;SELECT * FROM log
   * WHERE schema = \\"PROCESS_START_ACTIVITY\\"
   * AND (
   *     proc_path LIKE \\"%/groups\\"
   *     OR (
   *         (
   *             proc_path LIKE \\"%/cat\\"
   *             OR proc_path LIKE \\"%/head\\"
   *             OR proc_path LIKE \\"%/tail\\"
   *             OR proc_path LIKE \\"%/more\\"
   *         )
   *         AND cmdline LIKE \\"%/etc/group%\\"
   *     )
   * )
   */
  detectionExpressionContent?: string;
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
   * The description of the detection rule.
   * 
   * @example
   * Check the enumeration behavior of local system groups. An attacker may attempt to find the Local Systems group and its permission settings.
   */
  detectionRuleDescription?: string;
  /**
   * @remarks
   * The ID of the detection rule.
   * 
   * @example
   * jndi-attack-success_http_netstat
   */
  detectionRuleId?: string;
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
   * The status of the detection rule. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * - testing: Testing.
   * 
   * @example
   * enabled
   */
  detectionRuleStatus?: string;
  /**
   * @remarks
   * The type of the detection rule. Valid values:
   * - preset: preset detection rule.
   * - custom: custom detection rule.
   * - custom_template: rule template.
   * 
   * @example
   * custom
   */
  detectionRuleType?: string;
  /**
   * @remarks
   * The entity mapping configuration.
   */
  entityMappings?: ListDetectionRulesResponseBodyDetectionRulesEntityMappings[];
  /**
   * @remarks
   * The event aggregation period configuration.
   * 
   * @example
   * 5m
   */
  incidentAggregationExpression?: string;
  /**
   * @remarks
   * The event aggregation type. Valid values:
   * - none: No event is generated.
   * - graph_compute: Graph computing (supported by predefined rules).
   * - expert: Expert rule.
   * - passthrough: Alerting pass-through (one-to-one).
   * - window: Same-type aggregation (window).
   * 
   * @example
   * passthrough
   */
  incidentAggregationType?: string;
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
   * The XML configuration of the playbook.
   */
  playbook?: ListDetectionRulesResponseBodyDetectionRulesPlaybook;
  /**
   * @remarks
   * The user-defined parameters of the playbook.
   * 
   * @example
   * {
   *     "ip": {
   *         "ip": "124.23.*.*"
   *     }
   * }
   */
  playbookParameters?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * @example
   * dde983ed-eb56-45ea-ac2e-3b12b2a9****
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The scheduling start time (13-digit timestamp).
   * 
   * @example
   * 1733269771123
   */
  scheduleBeginTime?: number;
  /**
   * @remarks
   * The scheduling cron expression. This parameter is required when ScheduleType is set to cron.
   * 
   * @example
   * 5m
   */
  scheduleExpression?: string;
  /**
   * @remarks
   * The maximum number of retries upon timeout. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  scheduleMaxRetries?: number;
  /**
   * @remarks
   * The maximum timeout period, in seconds. Valid values: 60 to 1800.
   * 
   * @example
   * 60
   */
  scheduleMaxTimeout?: number;
  /**
   * @remarks
   * The scheduling type. Valid values:
   * 
   * - fixed_rate: fixed interval.
   * - cron: cron expression.
   * 
   * @example
   * fixed_rate
   */
  scheduleType?: string;
  /**
   * @remarks
   * The scheduling window length.
   * 
   * @example
   * 5m
   */
  scheduleWindow?: string;
  /**
   * @remarks
   * The update time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-04-16 10:51:00
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      alertAttCk: 'AlertAttCk',
      alertAttCkMapping: 'AlertAttCkMapping',
      alertDescription: 'AlertDescription',
      alertLevel: 'AlertLevel',
      alertLevelMapping: 'AlertLevelMapping',
      alertName: 'AlertName',
      alertSchemaId: 'AlertSchemaId',
      alertTacticId: 'AlertTacticId',
      alertThresholdCount: 'AlertThresholdCount',
      alertThresholdGroup: 'AlertThresholdGroup',
      alertThresholdPeriod: 'AlertThresholdPeriod',
      alertType: 'AlertType',
      alertTypeMapping: 'AlertTypeMapping',
      createTime: 'CreateTime',
      detectionExpressionContent: 'DetectionExpressionContent',
      detectionExpressionType: 'DetectionExpressionType',
      detectionRuleDescription: 'DetectionRuleDescription',
      detectionRuleId: 'DetectionRuleId',
      detectionRuleName: 'DetectionRuleName',
      detectionRuleStatus: 'DetectionRuleStatus',
      detectionRuleType: 'DetectionRuleType',
      entityMappings: 'EntityMappings',
      incidentAggregationExpression: 'IncidentAggregationExpression',
      incidentAggregationType: 'IncidentAggregationType',
      logCategoryId: 'LogCategoryId',
      logSchemaId: 'LogSchemaId',
      playbook: 'Playbook',
      playbookParameters: 'PlaybookParameters',
      playbookUuid: 'PlaybookUuid',
      scheduleBeginTime: 'ScheduleBeginTime',
      scheduleExpression: 'ScheduleExpression',
      scheduleMaxRetries: 'ScheduleMaxRetries',
      scheduleMaxTimeout: 'ScheduleMaxTimeout',
      scheduleType: 'ScheduleType',
      scheduleWindow: 'ScheduleWindow',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertAttCk: 'string',
      alertAttCkMapping: 'string',
      alertDescription: 'string',
      alertLevel: 'string',
      alertLevelMapping: 'string',
      alertName: 'string',
      alertSchemaId: 'string',
      alertTacticId: 'string',
      alertThresholdCount: 'number',
      alertThresholdGroup: 'string',
      alertThresholdPeriod: 'string',
      alertType: 'string',
      alertTypeMapping: 'string',
      createTime: 'number',
      detectionExpressionContent: 'string',
      detectionExpressionType: 'string',
      detectionRuleDescription: 'string',
      detectionRuleId: 'string',
      detectionRuleName: 'string',
      detectionRuleStatus: 'string',
      detectionRuleType: 'string',
      entityMappings: { 'type': 'array', 'itemType': ListDetectionRulesResponseBodyDetectionRulesEntityMappings },
      incidentAggregationExpression: 'string',
      incidentAggregationType: 'string',
      logCategoryId: 'string',
      logSchemaId: 'string',
      playbook: ListDetectionRulesResponseBodyDetectionRulesPlaybook,
      playbookParameters: 'string',
      playbookUuid: 'string',
      scheduleBeginTime: 'number',
      scheduleExpression: 'string',
      scheduleMaxRetries: 'number',
      scheduleMaxTimeout: 'number',
      scheduleType: 'string',
      scheduleWindow: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.entityMappings)) {
      $dara.Model.validateArray(this.entityMappings);
    }
    if(this.playbook && typeof (this.playbook as any).validate === 'function') {
      (this.playbook as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectionRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of detection rules.
   */
  detectionRules?: ListDetectionRulesResponseBodyDetectionRules[];
  /**
   * @remarks
   * The maximum number of entries to return in this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 508DCFFD-4508-54BF-A8A0-E97A0FA6****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      detectionRules: 'DetectionRules',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectionRules: { 'type': 'array', 'itemType': ListDetectionRulesResponseBodyDetectionRules },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.detectionRules)) {
      $dara.Model.validateArray(this.detectionRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

