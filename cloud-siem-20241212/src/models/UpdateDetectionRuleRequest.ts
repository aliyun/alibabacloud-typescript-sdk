// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDetectionRuleRequest extends $dara.Model {
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
   * The MITRE ATT&CK technique mapping.
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
   * - 5: critical.
   * - 4: high.
   * - 3: medium.
   * - 2: low.
   * - 1: informational.
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
   * The ID of the alert template for the detection rule.
   * 
   * @example
   * ALERT_ACTIVITY
   */
  alertSchemaId?: string;
  /**
   * @remarks
   * The ATT&CK tactic phase of the alert.
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
   * The length of the alert threshold period.
   * 
   * @example
   * 5m
   */
  alertThresholdPeriod?: string;
  /**
   * @remarks
   * The Alarm Metric for alerting.
   * 
   * @example
   * siem_rule_type_alert_storm
   */
  alertType?: string;
  /**
   * @remarks
   * The Alarm Metric mapping for alerting.
   */
  alertTypeMapping?: string;
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
   * sql
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
   * This parameter is required.
   * 
   * @example
   * jndi-attack-success_http_dns
   */
  detectionRuleId?: string;
  /**
   * @remarks
   * The name of the detection rule.
   * 
   * @example
   * CTDR Port Scan Behavior
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
   * - preset: preset detection rule.
   * - custom: custom detection rule.
   * - custom_template: rule template.
   * 
   * This parameter is required.
   * 
   * @example
   * custom
   */
  detectionRuleType?: string;
  /**
   * @remarks
   * The entity mapping configuration.
   * 
   * @example
   * [{\\"NormalizationSchemaId\\":\\"host\\",\\"NormalizationFieldMappings\\":[{\\"NormalizationFieldName\\":\\"uuid\\",\\"MappingFieldName\\":\\"host\\",\\"NormalizationFieldType\\":\\"varchar\\"}]}]
   */
  entityMappings?: string;
  /**
   * @remarks
   * The event aggregation period configuration.
   * 
   * @example
   * 60m
   */
  incidentAggregationExpression?: string;
  /**
   * @remarks
   * The event aggregation type. Valid values:
   * - none: no event is generated.
   * - graph_compute: graph computing (supported by predefined rules).
   * - expert: expert rule.
   * - passthrough: alert pass-through (one-to-one).
   * - window: same-type aggregation (window).
   * 
   * @example
   * window
   */
  incidentAggregationType?: string;
  /**
   * @remarks
   * The language of the response messages. Valid values:
   * - **zh** (default): Chinese.
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
   * The unique identifier of the playbook.
   * 
   * @example
   * 31568394-7a86-487c-b8ec-b3f42b59****
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The region where the data management center of Cloud Threat Detection and Response is located. Select the management center region based on the region where your assets reside. Valid values:
   * - cn-hangzhou: Your assets reside in the Chinese mainland.
   * - ap-southeast-1: Your assets reside outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The scheduling start time, expressed as a 13-digit timestamp.
   * 
   * @example
   * 1733269771123
   */
  scheduleBeginTime?: number;
  /**
   * @remarks
   * The cron expression for scheduling. Required when ScheduleType is set to cron.
   * 
   * @example
   * 1h
   */
  scheduleExpression?: string;
  /**
   * @remarks
   * The maximum number of retries on timeout. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  scheduleMaxRetries?: number;
  /**
   * @remarks
   * The maximum timeout duration, in seconds. Valid values: 60 to 1800.
   * 
   * @example
   * 60
   */
  scheduleMaxTimeout?: number;
  /**
   * @remarks
   * The scheduling type. Valid values:
   * - fixed_rate: fixed interval.
   * - cron: cron expression.
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
      lang: 'Lang',
      logCategoryId: 'LogCategoryId',
      logSchemaId: 'LogSchemaId',
      playbookParameters: 'PlaybookParameters',
      playbookUuid: 'PlaybookUuid',
      regionId: 'RegionId',
      scheduleBeginTime: 'ScheduleBeginTime',
      scheduleExpression: 'ScheduleExpression',
      scheduleMaxRetries: 'ScheduleMaxRetries',
      scheduleMaxTimeout: 'ScheduleMaxTimeout',
      scheduleType: 'ScheduleType',
      scheduleWindow: 'ScheduleWindow',
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
      detectionExpressionContent: 'string',
      detectionExpressionType: 'string',
      detectionRuleDescription: 'string',
      detectionRuleId: 'string',
      detectionRuleName: 'string',
      detectionRuleStatus: 'string',
      detectionRuleType: 'string',
      entityMappings: 'string',
      incidentAggregationExpression: 'string',
      incidentAggregationType: 'string',
      lang: 'string',
      logCategoryId: 'string',
      logSchemaId: 'string',
      playbookParameters: 'string',
      playbookUuid: 'string',
      regionId: 'string',
      scheduleBeginTime: 'number',
      scheduleExpression: 'string',
      scheduleMaxRetries: 'number',
      scheduleMaxTimeout: 'number',
      scheduleType: 'string',
      scheduleWindow: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

