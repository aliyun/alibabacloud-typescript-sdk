// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDetectionRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ATT\\&CK tactic of the alert.
   * 
   * @example
   * Discovery
   */
  alertAttCk?: string;
  alertAttCkMapping?: string;
  /**
   * @remarks
   * The description of the alert. You can use $$ to reference fields from the query output.
   * 
   * @example
   * Alert from: $product_code$, detected network attack from $src_ip$, affected assets include: $dst_ip$
   */
  alertDescription?: string;
  /**
   * @remarks
   * The threat level of the alert. Valid values:
   * 
   * - 5: Critical.
   * 
   * - 4: Important.
   * 
   * - 3: Medium.
   * 
   * - 2: Low.
   * 
   * - 1: Informational.
   * 
   * @example
   * 1
   */
  alertLevel?: string;
  alertLevelMapping?: string;
  /**
   * @remarks
   * The name of the alert. You can use $$ to reference fields from the query output.
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
   * The ATT\\&CK tactic ID of the alert.
   * 
   * @example
   * TA0042
   */
  alertTacticId?: string;
  /**
   * @remarks
   * The number of alerts for the alert threshold.
   * 
   * @example
   * 10
   */
  alertThresholdCount?: number;
  /**
   * @remarks
   * The fields for the alert threshold. Separate multiple fields with commas.
   * 
   * @example
   * alert_type,ip
   */
  alertThresholdGroup?: string;
  /**
   * @remarks
   * The period for the alert threshold.
   * 
   * @example
   * 5m
   */
  alertThresholdPeriod?: string;
  /**
   * @remarks
   * The type of the alert.
   * 
   * @example
   * siem_rule_type_alert_storm
   */
  alertType?: string;
  alertTypeMapping?: string;
  /**
   * @remarks
   * The content of the detection expression.
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
   * The type of the detection expression.
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
   * 
   * - preset: a preset detection rule.
   * 
   * - custom: a custom detection rule.
   * 
   * - custom_template: a rule template.
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
   * The configuration of the event aggregation period.
   * 
   * @example
   * 60m
   */
  incidentAggregationExpression?: string;
  /**
   * @remarks
   * The type of event aggregation. Valid values:
   * 
   * - none: Events are not generated.
   * 
   * - graph_compute: graph computing (supported by predefined rules).
   * 
   * - expert: expert rule.
   * 
   * - passthrough: pass-through (one-to-one mapping with alerts).
   * 
   * - window: window-based aggregation of similar events.
   * 
   * @example
   * window
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
   * The custom parameters for the playbook.
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
   * The unique ID of the playbook.
   * 
   * @example
   * 31568394-7a86-487c-b8ec-b3f42b59****
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The region of the Data Management center for Threat Analysis. Select the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: The Chinese mainland.
   * 
   * - ap-southeast-1: Regions outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start time for scheduling. This is a 13-digit UNIX timestamp.
   * 
   * @example
   * 1733269771123
   */
  scheduleBeginTime?: number;
  /**
   * @remarks
   * The cron expression for scheduling. This parameter is required when you set ScheduleType to cron.
   * 
   * @example
   * 1h
   */
  scheduleExpression?: string;
  /**
   * @remarks
   * The maximum number of retries after a timeout. The value must be between 1 and 100.
   * 
   * @example
   * 1
   */
  scheduleMaxRetries?: number;
  /**
   * @remarks
   * The maximum timeout period. Unit: seconds. The value must be between 60 and 1800.
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
   * 
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

