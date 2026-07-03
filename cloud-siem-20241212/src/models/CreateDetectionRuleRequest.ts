// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDetectionRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ATT\\&CK stage of the alert.
   * 
   * @example
   * Discovery
   */
  alertAttCk?: string;
  alertAttCkMapping?: string;
  /**
   * @remarks
   * The alert description. You can use $$ to reference fields from the query output.
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
   * This parameter is required.
   * 
   * @example
   * 1
   */
  alertLevel?: string;
  alertLevelMapping?: string;
  /**
   * @remarks
   * The alert name. You can use $$ to reference fields from the query output.
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
   * This parameter is required.
   * 
   * @example
   * ALERT_ACTIVITY
   */
  alertSchemaId?: string;
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
   * The count for the alert threshold.
   * 
   * @example
   * 10
   */
  alertThresholdCount?: number;
  /**
   * @remarks
   * The list of fields for the alert threshold. Separate multiple fields with commas.
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
   * This parameter is required.
   * 
   * @example
   * WebShell
   */
  alertType?: string;
  alertTypeMapping?: string;
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
   * The type of the detection rule expression. Valid values:
   * 
   * - sql: SQL.
   * 
   * - playbook: playbook.
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
   * dr-123
   */
  detectionRuleDescription?: string;
  /**
   * @remarks
   * The name of the detection rule.
   * 
   * This parameter is required.
   * 
   * @example
   * dr-ha1i09ob3zmqrs85****
   */
  detectionRuleName?: string;
  /**
   * @remarks
   * The status of the detection rule.
   * 
   * @example
   * 0
   */
  detectionRuleStatus?: string;
  /**
   * @remarks
   * The ID of the detection rule template.
   * 
   * @example
   * cfw-out-ip_aegis-netstat
   */
  detectionRuleTemplateId?: string;
  /**
   * @remarks
   * The version of the detection rule template.
   * 
   * @example
   * v1.0.0
   */
  detectionRuleTemplateVersion?: string;
  /**
   * @remarks
   * The type of the detection rule. Valid values:
   * 
   * - preset: predefined detection rule.
   * 
   * - custom: custom detection rule.
   * 
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
   * - none: Events are not generated.
   * 
   * - graph_compute: graph computing (supported by predefined rules).
   * 
   * - expert: expert rules.
   * 
   * - passthrough: Alerts are passed through (one-to-one).
   * 
   * - window: Similar alerts are aggregated (window).
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
   * This parameter is required.
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
   * The UUID of the playbook.
   * 
   * @example
   * system_aliyun_clb_process_book
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The region where the Data Management center of Threat Analysis is located. Select a region based on the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: Your assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID that an administrator uses to switch to the perspective of another member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
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
   * The cron expression for scheduling. This parameter is required if you set ScheduleType to cron.
   * 
   * @example
   * 0/5 * * * *
   */
  scheduleExpression?: string;
  /**
   * @remarks
   * The maximum number of retries after a timeout. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  scheduleMaxRetries?: number;
  /**
   * @remarks
   * The maximum timeout period in seconds. Valid values: 60 to 1800.
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
      detectionRuleName: 'DetectionRuleName',
      detectionRuleStatus: 'DetectionRuleStatus',
      detectionRuleTemplateId: 'DetectionRuleTemplateId',
      detectionRuleTemplateVersion: 'DetectionRuleTemplateVersion',
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
      roleFor: 'RoleFor',
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
      detectionRuleName: 'string',
      detectionRuleStatus: 'string',
      detectionRuleTemplateId: 'string',
      detectionRuleTemplateVersion: 'string',
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
      roleFor: 'number',
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

