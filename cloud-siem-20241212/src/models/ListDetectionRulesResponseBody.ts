// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDetectionRulesResponseBodyDetectionRulesEntityMappingsNormalizationFieldMappings extends $dara.Model {
  /**
   * @remarks
   * The mapped field.
   * 
   * @example
   * ip
   */
  mappingFieldName?: string;
  /**
   * @remarks
   * The standard entity field.
   * 
   * @example
   * src_ip
   */
  normalizationFieldName?: string;
  /**
   * @remarks
   * The data type of the standard entity field.
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
   * The configuration of the input parameters for invoking the playbook.
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
   * The ATT\\&CK technique of the alert.
   * 
   * @example
   * Discovery
   */
  alertAttCk?: string;
  alertAttCkMapping?: string;
  /**
   * @remarks
   * The alert description. You can use $$ to reference the output fields of the query.
   * 
   * @example
   * Alert from: $product_code$, detected network attack from $src_ip$, affected assets include: $dst_ip$
   */
  alertDescription?: string;
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
  alertLevelMapping?: string;
  /**
   * @remarks
   * The alert name. You can use $$ to reference the output fields of the query.
   * 
   * @example
   * Detected high-frequency multi-type network attacks from $src_ip$
   */
  alertName?: string;
  /**
   * @remarks
   * The ID of the alert template for the detection rule. Valid values:
   * 
   * - ALERT_ACTIVITY: other alerts.
   * 
   * - EDR_ALERT_ACTIVITY: Endpoint Detection and Response (EDR) alerts.
   * 
   * - FIREWALL_ALERT_ACTIVITY: firewall alerts.
   * 
   * - WAF_ALERT_ACTIVITY: Web Application Firewall (WAF) alerts.
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
   * The number of alert thresholds.
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
   * The length of the alert threshold period.
   * 
   * @example
   * 5m
   */
  alertThresholdPeriod?: string;
  /**
   * @remarks
   * The alert type.
   * 
   * @example
   * WebShell
   */
  alertType?: string;
  alertTypeMapping?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-03-21 13:47:01
   */
  createTime?: number;
  /**
   * @remarks
   * The content of the detection rule expression.
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
   * The type of the detection rule expression.
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
   * 
   * - enabled: The rule is enabled.
   * 
   * - disabled: The rule is disabled.
   * 
   * - testing: The rule is being tested.
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
   * The configuration of the event aggregation period.
   * 
   * @example
   * 5m
   */
  incidentAggregationExpression?: string;
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
   * The configuration of the playbook.
   */
  playbook?: ListDetectionRulesResponseBodyDetectionRulesPlaybook;
  /**
   * @remarks
   * The custom parameters of the playbook.
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
   * The UUID of the playbook.
   * 
   * @example
   * dde983ed-eb56-45ea-ac2e-3b12b2a9****
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The start time of the scheduling. This is a 13-digit timestamp.
   * 
   * @example
   * 1733269771123
   */
  scheduleBeginTime?: number;
  /**
   * @remarks
   * The cron expression for scheduling. This parameter is required when ScheduleType is set to cron.
   * 
   * @example
   * 5m
   */
  scheduleExpression?: string;
  /**
   * @remarks
   * The maximum number of retries after a timeout. The value can be from 1 to 100.
   * 
   * @example
   * 1
   */
  scheduleMaxRetries?: number;
  /**
   * @remarks
   * The maximum timeout period, in seconds. The value can be from 60 to 1800.
   * 
   * @example
   * 60
   */
  scheduleMaxTimeout?: number;
  /**
   * @remarks
   * The scheduling type. Valid values:
   * 
   * - fixed_rate: fixed interval
   * 
   * - cron: cron expression
   * 
   * @example
   * fixed_rate
   */
  scheduleType?: string;
  /**
   * @remarks
   * The length of the scheduling window.
   * 
   * @example
   * 5m
   */
  scheduleWindow?: string;
  /**
   * @remarks
   * The update time.
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
   * The pagination parameter. This specifies the current page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The pagination parameter. This specifies the number of entries per page.
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

