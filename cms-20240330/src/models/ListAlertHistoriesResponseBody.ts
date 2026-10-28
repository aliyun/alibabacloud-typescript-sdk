// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleSend } from "./AlertRuleSend";


export class ListAlertHistoriesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the alert history.
   * 
   * @example
   * u1oe4i7c197uucfmvscum4u797
   */
  alertHistoryId?: string;
  /**
   * @remarks
   * The unique identifier of the alert rule that generated the alert history.
   * 
   * @example
   * 51d0da46-bb65-4a14-8d65-de73f41e495f
   */
  alertRuleId?: string;
  /**
   * @remarks
   * The snapshot of the annotations of the alert rule. The annotations are stored as key-value pairs and copied from the rule when the alert is triggered.
   * 
   * @example
   * {"_cms_alert_explore_url":"https://sls.console.aliyun.com/..."}
   */
  annotations?: { [key: string]: string };
  /**
   * @remarks
   * The business source.
   * 
   * @example
   * managed_service_for_prometheus
   */
  bizSource?: string;
  /**
   * @remarks
   * The cumulative number of alerts (alert events) during the alert duration.
   * 
   * @example
   * 200
   */
  count?: number;
  /**
   * @remarks
   * The end time (recovery time) of the alert. This field has a value only when the alert history enters the OK state. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1740535517000
   */
  endTime?: number;
  /**
   * @remarks
   * The creation time of the alert history record. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1751608363000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The last modification time of the alert history record. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1751608363000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The detailed information of the alert object. The information is stored as key-value pairs.
   * 
   * @example
   * {"datasourceInfo":{"type":"SLS_MULTI_DS"}}
   */
  instanceDetail?: { [key: string]: string };
  /**
   * @remarks
   * The unique key (instanceKey) used to identify the alert object instance.
   * 
   * @example
   * entity/apm/apm.service/6dc9e46fda6d012537b48c3250ff806b
   */
  instanceKey?: string;
  /**
   * @remarks
   * The snapshot of the labels of the alert rule. The labels are stored as key-value pairs and copied from the rule when the alert is triggered.
   * 
   * @example
   * {"_cms_rule_id":"42c0f464-a3b0-4c4b-b426-6242289244f8","tenant_id":"mygt"}
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The level of the most recent alert during the alert duration, such as CRITICAL, WARN, or INFO.
   * 
   * @example
   * CRITICAL
   */
  latestLevel?: string;
  /**
   * @remarks
   * The highest alert level reached during the alert duration.
   * 
   * @example
   * CRITICAL
   */
  maxLevel?: string;
  /**
   * @remarks
   * The content of the latest alert message.
   * 
   * @example
   * The number of zombie child processes of the process {{$tags.comm}} running on the instance {{$tags.instanceId}} is greater than 128
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the observed object is in the global scope. The value is copied from the rule when the alert history is created.
   * 
   * @example
   * false
   */
  observeResourceGlobalScope?: boolean;
  /**
   * @remarks
   * The serialized string of the observed object list. The value is copied from the rule when the alert history is created.
   * 
   * @example
   * [{"resourceId":"i-bp1234567890abcdef","resourceType":"ACS::ECS::Instance"}]
   */
  observeResourceList?: string;
  /**
   * @remarks
   * The type of the observed object, such as PROMETHEUS, APM, RUM, or cms_basic. The value is copied from the rule when the alert history is created.
   * 
   * @example
   * PROMETHEUS
   */
  observeResourceType?: string;
  /**
   * @remarks
   * The ID of the region to which the alert history belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The display name of the corresponding rule.
   * 
   * @example
   * myTestRule
   */
  ruleDisplayName?: string;
  /**
   * @remarks
   * The notification sending configuration information corresponding to the alert history.
   * 
   * @example
   * {"notification":{"contacts":["ops-team"],"silenceTime":3600}}
   */
  send?: AlertRuleSend;
  /**
   * @remarks
   * The start time of the alert history. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1751508233000
   */
  startTime?: number;
  /**
   * @remarks
   * The current alert status of the rule. Valid values: OK (recovered) and ALARM (alerting).
   * 
   * @example
   * ALARM
   */
  status?: string;
  /**
   * @remarks
   * The identifier of the workspace to which the alert history belongs.
   * 
   * @example
   * default-cms-<userId>-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      alertHistoryId: 'alertHistoryId',
      alertRuleId: 'alertRuleId',
      annotations: 'annotations',
      bizSource: 'bizSource',
      count: 'count',
      endTime: 'endTime',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      instanceDetail: 'instanceDetail',
      instanceKey: 'instanceKey',
      labels: 'labels',
      latestLevel: 'latestLevel',
      maxLevel: 'maxLevel',
      message: 'message',
      observeResourceGlobalScope: 'observeResourceGlobalScope',
      observeResourceList: 'observeResourceList',
      observeResourceType: 'observeResourceType',
      regionId: 'regionId',
      ruleDisplayName: 'ruleDisplayName',
      send: 'send',
      startTime: 'startTime',
      status: 'status',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertHistoryId: 'string',
      alertRuleId: 'string',
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      bizSource: 'string',
      count: 'number',
      endTime: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      instanceDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      instanceKey: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      latestLevel: 'string',
      maxLevel: 'string',
      message: 'string',
      observeResourceGlobalScope: 'boolean',
      observeResourceList: 'string',
      observeResourceType: 'string',
      regionId: 'string',
      ruleDisplayName: 'string',
      send: AlertRuleSend,
      startTime: 'number',
      status: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.annotations) {
      $dara.Model.validateMap(this.annotations);
    }
    if(this.instanceDetail) {
      $dara.Model.validateMap(this.instanceDetail);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.send && typeof (this.send as any).validate === 'function') {
      (this.send as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertHistoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of alert histories that match the query conditions.
   * 
   * @example
   * [{"alertHistoryId":"ah_123456","alertRuleId":"rule_789","status":"ALARM","startTime":1704067200000}]
   */
  data?: ListAlertHistoriesResponseBodyData[];
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * 2-ba4d-4b9f-aa24-dcb067a30f1c
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
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
   * The unique identifier of the request.
   * 
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of alert history records that match the query conditions.
   * 
   * @example
   * 81
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAlertHistoriesResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

