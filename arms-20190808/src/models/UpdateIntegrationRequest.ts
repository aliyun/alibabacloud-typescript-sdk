// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIntegrationRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically clear alert events. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  autoRecover?: boolean;
  /**
   * @remarks
   * The description of the alert integration.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The fields whose values are deduplicated.
   * 
   * @example
   * LABEL.dimensions::LABEL.ruleId
   */
  duplicateKey?: string;
  /**
   * @remarks
   * The extended mapped fields are mapped to the fields of ARMS alerts. For more information, see the description of the ExtendedFieldRedefineRules parameter.
   * 
   * @example
   * [
   *     {
   *         "redefineType":"EXTRACT",
   *         "matchExpression":null,
   *         "fieldName":"dimensions",
   *         "expression":null,
   *         "mappingRuleList":[
   * 
   *         ],
   *         "name":"dimensions",
   *         "integrationId":1234,
   *         "jsonPath":"$.dimensions",
   *         "id":10013,
   *         "fieldType":"LABEL"
   *     },
   *     {
   *         "redefineType":"EXTRACT",
   *         "matchExpression":null,
   *         "fieldName":"expression",
   *         "expression":null,
   *         "mappingRuleList":[
   * 
   *         ],
   *         "name":"expression",
   *         "integrationId":1234,
   *         "jsonPath":"$.expression",
   *         "id":10014,
   *         "fieldType":"LABEL"
   *     }
   * ]
   */
  extendedFieldRedefineRules?: string;
  /**
   * @remarks
   * The predefined mapped fields are mapped to the fields of ARMS alerts. The predefined mapped fields were generated when the alert integration was created. For more information, see the description of the FieldRedefineRules parameter.
   * 
   * @example
   * [ { "redefineType":"EXTRACT", "matchExpression":null, "fieldName":"alertname", "expression":null, "mappingRuleList":[ ], "name":"Alert name", "integrationId":1234, "jsonPath":"$.alertName", "id":10001, "fieldType":"LABEL" }, { "redefineType":"MAP", "matchExpression":null, "fieldName":"severity", "expression":null, "mappingRuleList":[ { "mappingValue":"critical", "mappingName":"P1", "mappingType":"MAP", "originValue":"CRITICAL" }, { "mappingValue":"error", "mappingName":"P2", "mappingType":"MAP", "originValue":"WARN" }, { "mappingValue":"warning", "mappingName":"P3", "mappingType":"MAP", "originValue":"INFO" } ], "name":"Alert level", "integrationId":1234, "jsonPath":"$.triggerLevel", "id":10002, "fieldType":"LABEL" }, { "redefineType":"EXTRACT", "matchExpression":null, "fieldName":"message", "expression":"{{$labels.namespace}} / {{$labels.dimensions}} Alert content {{ $labels.alertname }}, Current value {{$value}}.", "mappingRuleList":[ ], "name":"Alert description", "integrationId":1234, "jsonPath":null, "id":10003, "fieldType":"ANNOTATION" }, { "redefineType":"EXTRACT", "matchExpression":null, "fieldName":"value", "expression":null, "mappingRuleList":[ ], "name":"Alert sample value", "integrationId":1234, "jsonPath":"$.curValue", "id":10004, "fieldType":"ANNOTATION" }, { "redefineType":"EXTRACT", "matchExpression":null, "fieldName":"source", "expression":null, "mappingRuleList":[ ], "name":"Source", "integrationId":1234, "jsonPath":null, "id":10007, "fieldType":"LABEL" }, { "redefineType":"ADD", "matchExpression":null, "fieldName":"generatorUrl", "expression":"https://cloudmonitor.console.aliyun.com/index.htm#/alarmInfo/name={{$labels.ruleId}}\\&searchValue=\\&searchType=name\\&searchProduct=/history/all/searchKey:{{$labels.ruleId}},startTime:{{sub $startsAt 300000}},endTime:{{$endsAt}}", "mappingRuleList":[ ], "name":"Event URL", "integrationId":1234, "jsonPath":"https://cloudmonitor.console.aliyun.com/index.htm#/alarmInfo/name={{$labels.ruleId}}\\&searchValue=\\&searchType=name\\&searchProduct=/history/all/searchKey:{{$labels.ruleId}},startTime:{{sub $startsAt 300000}},endTime:{{$endsAt}}", "id":10012, "fieldType":"GENERATE_URL" } ]
   */
  fieldRedefineRules?: string;
  /**
   * @remarks
   * The field for clearing alert events. The system queries alert events based on the field of alert clearing events and clears the alert events.
   * 
   * > Only the Log Service alert integration supports the parameter.
   * 
   * @example
   * $.status
   */
  initiativeRecoverField?: string;
  /**
   * @remarks
   * The value of the field for clearing alert events. The system queries alert events based on the field of alert clearing events and clears the alert events.
   * 
   * > Only the Log Service alert integration supports the parameter.
   * 
   * @example
   * ok
   */
  initiativeRecoverValue?: string;
  /**
   * @remarks
   * The ID of the alert integration.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  integrationId?: number;
  /**
   * @remarks
   * The name of the alert integration.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudMonitor integration
   */
  integrationName?: string;
  /**
   * @remarks
   * The service of the alert integration. Valid values:
   * 
   * *   CLOUD_MONITOR: CloudMonitor
   * *   LOG_SERVICE: Log Service
   * 
   * This parameter is required.
   * 
   * @example
   * CLOUD_MONITOR
   */
  integrationProductType?: string;
  /**
   * @remarks
   * The activity of the alert integration
   * 
   * @example
   * ready
   */
  liveness?: string;
  /**
   * @remarks
   * The period of time within which alert events are automatically cleared. Unit: seconds. Default value: 300.
   * 
   * @example
   * 300
   */
  recoverTime?: number;
  /**
   * @remarks
   * The total number of alert events and the number of abnormal alert events in the last hour.
   * 
   * @example
   * [0,0]
   */
  stat?: string;
  /**
   * @remarks
   * Indicates whether the alert integration was enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  state?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoRecover: 'AutoRecover',
      description: 'Description',
      duplicateKey: 'DuplicateKey',
      extendedFieldRedefineRules: 'ExtendedFieldRedefineRules',
      fieldRedefineRules: 'FieldRedefineRules',
      initiativeRecoverField: 'InitiativeRecoverField',
      initiativeRecoverValue: 'InitiativeRecoverValue',
      integrationId: 'IntegrationId',
      integrationName: 'IntegrationName',
      integrationProductType: 'IntegrationProductType',
      liveness: 'Liveness',
      recoverTime: 'RecoverTime',
      stat: 'Stat',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRecover: 'boolean',
      description: 'string',
      duplicateKey: 'string',
      extendedFieldRedefineRules: 'string',
      fieldRedefineRules: 'string',
      initiativeRecoverField: 'string',
      initiativeRecoverValue: 'string',
      integrationId: 'number',
      integrationName: 'string',
      integrationProductType: 'string',
      liveness: 'string',
      recoverTime: 'number',
      stat: 'string',
      state: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

