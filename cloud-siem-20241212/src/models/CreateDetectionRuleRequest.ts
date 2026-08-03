// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDetectionRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The alert ATT&CK technique.
   * 
   * @example
   * Discovery
   */
  alertAttCk?: string;
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
   * The ID of the detection rule alert template. Valid values:
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
   * The alert tactic stage.
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
   * The list of alert threshold fields, separated by commas (,).
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
   * The Alarm Metric of the alerting rule.
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
   * - sql: SQL.
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
   * - preset: preset detection rule.
   * - custom: custom detection rule.
   * - custom_template: rule template.
   * 
   * @example
   * custom
   */
  detectionRuleType?: string;
  detectionRules?: string;
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
   * 5m
   */
  incidentAggregationExpression?: string;
  /**
   * @remarks
   * The event aggregation type. Valid values:
   * - none: No event is generated.
   * - graph_compute: Graph computing. This value is supported by predefined rules.
   * - expert: Expert rule.
   * - passthrough: Alerting pass-through (one-to-one).
   * - window: Same-type aggregation (window).
   * 
   * @example
   * window
   */
  incidentAggregationType?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
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
   * system_aliyun_clb_process_book
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the region where your assets reside. Valid values:
   * - cn-hangzhou: Your assets reside in the Chinese mainland.
   * - ap-southeast-1: Your assets reside outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member to which the administrator switches the view.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The scheduling start time. The value is a 13-digit UNIX timestamp.
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
   * 0/5 * * * *
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
      detectionRuleName: 'DetectionRuleName',
      detectionRuleStatus: 'DetectionRuleStatus',
      detectionRuleTemplateId: 'DetectionRuleTemplateId',
      detectionRuleTemplateVersion: 'DetectionRuleTemplateVersion',
      detectionRuleType: 'DetectionRuleType',
      detectionRules: 'DetectionRules',
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
      detectionRules: 'string',
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

