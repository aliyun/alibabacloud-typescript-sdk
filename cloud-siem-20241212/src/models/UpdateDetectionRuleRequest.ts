// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDetectionRuleRequest extends $dara.Model {
  /**
   * @example
   * Discovery
   */
  alertAttCk?: string;
  alertDescription?: string;
  /**
   * @example
   * 1
   */
  alertLevel?: string;
  alertName?: string;
  /**
   * @example
   * ALERT_ACTIVITY
   */
  alertSchemaId?: string;
  /**
   * @example
   * TA0042
   */
  alertTacticId?: string;
  /**
   * @example
   * 10
   */
  alertThresholdCount?: number;
  /**
   * @example
   * alert_type,ip
   */
  alertThresholdGroup?: string;
  /**
   * @example
   * 5m
   */
  alertThresholdPeriod?: string;
  /**
   * @example
   * siem_rule_type_alert_storm
   */
  alertType?: string;
  /**
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
   * @example
   * sql
   */
  detectionExpressionType?: string;
  /**
   * @example
   * Check the enumeration behavior of local system groups. An attacker may attempt to find the Local Systems group and its permission settings.
   */
  detectionRuleDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * jndi-attack-success_http_dns
   */
  detectionRuleId?: string;
  /**
   * @example
   * CTDR Port Scan Behavior
   */
  detectionRuleName?: string;
  /**
   * @example
   * enabled
   */
  detectionRuleStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * custom
   */
  detectionRuleType?: string;
  /**
   * @example
   * [{\\"NormalizationSchemaId\\":\\"host\\",\\"NormalizationFieldMappings\\":[{\\"NormalizationFieldName\\":\\"uuid\\",\\"MappingFieldName\\":\\"host\\",\\"NormalizationFieldType\\":\\"varchar\\"}]}]
   */
  entityMappings?: string;
  /**
   * @example
   * 60m
   */
  incidentAggregationExpression?: string;
  /**
   * @example
   * window
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
   * {
   *     "ip": {
   *         "ip": "124.23.*.*"
   *     }
   * }
   */
  playbookParameters?: string;
  /**
   * @example
   * 31568394-7a86-487c-b8ec-b3f42b59****
   */
  playbookUuid?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 1733269771123
   */
  scheduleBeginTime?: number;
  /**
   * @example
   * 1h
   */
  scheduleExpression?: string;
  /**
   * @example
   * 1
   */
  scheduleMaxRetries?: number;
  /**
   * @example
   * 60
   */
  scheduleMaxTimeout?: number;
  /**
   * @example
   * fixed_rate
   */
  scheduleType?: string;
  /**
   * @example
   * 5m
   */
  scheduleWindow?: string;
  static names(): { [key: string]: string } {
    return {
      alertAttCk: 'AlertAttCk',
      alertDescription: 'AlertDescription',
      alertLevel: 'AlertLevel',
      alertName: 'AlertName',
      alertSchemaId: 'AlertSchemaId',
      alertTacticId: 'AlertTacticId',
      alertThresholdCount: 'AlertThresholdCount',
      alertThresholdGroup: 'AlertThresholdGroup',
      alertThresholdPeriod: 'AlertThresholdPeriod',
      alertType: 'AlertType',
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
      alertDescription: 'string',
      alertLevel: 'string',
      alertName: 'string',
      alertSchemaId: 'string',
      alertTacticId: 'string',
      alertThresholdCount: 'number',
      alertThresholdGroup: 'string',
      alertThresholdPeriod: 'string',
      alertType: 'string',
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

