// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDetectionRulesResponseBodyDetectionRulesEntityMappingsNormalizationFieldMappings extends $dara.Model {
  /**
   * @example
   * ip
   */
  mappingFieldName?: string;
  /**
   * @example
   * src_ip
   */
  normalizationFieldName?: string;
  /**
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
  normalizationFieldMappings?: ListDetectionRulesResponseBodyDetectionRulesEntityMappingsNormalizationFieldMappings[];
  /**
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
   * WebShell
   */
  alertType?: string;
  /**
   * @example
   * 2023-03-21 13:47:01
   */
  createTime?: number;
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
   * playbook
   */
  detectionExpressionType?: string;
  /**
   * @example
   * Check the enumeration behavior of local system groups. An attacker may attempt to find the Local Systems group and its permission settings.
   */
  detectionRuleDescription?: string;
  /**
   * @example
   * jndi-attack-success_http_netstat
   */
  detectionRuleId?: string;
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
   * custom
   */
  detectionRuleType?: string;
  entityMappings?: ListDetectionRulesResponseBodyDetectionRulesEntityMappings[];
  /**
   * @example
   * 5m
   */
  incidentAggregationExpression?: string;
  /**
   * @example
   * passthrough
   */
  incidentAggregationType?: string;
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
  playbook?: ListDetectionRulesResponseBodyDetectionRulesPlaybook;
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
   * dde983ed-eb56-45ea-ac2e-3b12b2a9****
   */
  playbookUuid?: string;
  /**
   * @example
   * 1733269771123
   */
  scheduleBeginTime?: number;
  /**
   * @example
   * 5m
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
  /**
   * @example
   * 2023-04-16 10:51:00
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      alertAttCk: 'AlertAttCk',
      alertLevel: 'AlertLevel',
      alertSchemaId: 'AlertSchemaId',
      alertTacticId: 'AlertTacticId',
      alertThresholdCount: 'AlertThresholdCount',
      alertThresholdGroup: 'AlertThresholdGroup',
      alertThresholdPeriod: 'AlertThresholdPeriod',
      alertType: 'AlertType',
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
      alertLevel: 'string',
      alertSchemaId: 'string',
      alertTacticId: 'string',
      alertThresholdCount: 'number',
      alertThresholdGroup: 'string',
      alertThresholdPeriod: 'string',
      alertType: 'string',
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
  detectionRules?: ListDetectionRulesResponseBodyDetectionRules[];
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
   * 2
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 508DCFFD-4508-54BF-A8A0-E97A0FA6****
   */
  requestId?: string;
  /**
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

