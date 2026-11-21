// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleLabelFilter } from "./AlertRuleLabelFilter";
import { AlertRuleNotificationFilter } from "./AlertRuleNotificationFilter";


export class ListAlertHistoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of an alert history record, which is the transId.
   * 
   * @example
   * lme6hk5qih5o769m379jjuo5i1
   */
  alertHistoryId?: string;
  /**
   * @remarks
   * The unique identifier of the alert rule used to filter the history records of a specific alert rule. Pass the ruleUuid of the alert rule.
   * 
   * @example
   * mig_prom_v2_11308451
   */
  alertRuleId?: string;
  /**
   * @remarks
   * The business source of the alert history. For example, `managed_service_for_prometheus` indicates the managed type of the Prometheus integration center. Default value: empty. Leave this parameter empty if you are unsure about the value.
   * 
   * @example
   * managed_service_for_prometheus
   */
  bizSource?: string;
  /**
   * @remarks
   * The namespace of CloudMonitor, such as acs_rds_dashboard and acs_ecs_dashboard.
   * 
   * @example
   * acs_rds_dashboard
   */
  cmsNamespace?: string;
  /**
   * @remarks
   * The product category of CloudMonitor.
   * 
   * @example
   * rds
   */
  cmsProductCategory?: string;
  /**
   * @remarks
   * The keyword used for fuzzy match filtering based on the display name of the alert rule.
   * 
   * @example
   * keyword
   */
  displayNameKeyWord?: string;
  /**
   * @remarks
   * The unique key value used to identify the alert object instance, which is the instanceKey.
   * 
   * @example
   * entity/apm/apm.service/6dc9e46fda6d012537b48c3250ff806b
   */
  instanceKey?: string;
  /**
   * @remarks
   * The filter condition for rule labels. The value is a JSON-formatted string that supports filtering by label key-value pairs.
   */
  labelFilter?: AlertRuleLabelFilter;
  /**
   * @remarks
   * The level of the most recent alert during the alert duration. Valid values: CRITICAL, WARN, and INFO.
   * 
   * @example
   * CRITICAL
   */
  latestLevel?: string;
  /**
   * @remarks
   * The highest alert level reached during the alert duration. Valid values: CRITICAL, WARN, and INFO.
   * 
   * @example
   * CRITICAL
   */
  maxLevel?: string;
  /**
   * @remarks
   * The maximum number of results to return on each page during paging for a paged query. This parameter is not supported. Use pageSize and pageNumber for a paged query.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The migration status of the alert history.
   * 
   * @example
   * 0
   */
  migrationStatus?: number;
  /**
   * @remarks
   * The paging token used to query the next page. This parameter is not supported. Use pageSize and pageNumber for a paged query.
   * 
   * @example
   * 2-ba4d-4b9f-aa24-dcb067a30f1c
   */
  nextToken?: string;
  /**
   * @remarks
   * The filter used to filter alert rules that contain specific notification recipients. Only rules that contain at least one notification recipient specified in notifyTargets are returned in the result list.
   */
  notificationFilter?: AlertRuleNotificationFilter;
  /**
   * @remarks
   * The relation type of the observed object, such as GROUP, INSTANCE, and TAG.
   * 
   * @example
   * INSTANCE
   */
  observeRelationType?: string;
  /**
   * @remarks
   * The domain of the observed object.
   * 
   * @example
   * acs
   */
  observeResourceDomain?: string;
  /**
   * @remarks
   * Specifies whether the observed object is in the global scope.
   * 
   * @example
   * false
   */
  observeResourceGlobalScope?: boolean;
  /**
   * @remarks
   * The resource instance ID used to filter the alert history.
   * 
   * @example
   * i-bp1234567890abcdef
   */
  observeResourceInstanceId?: string;
  /**
   * @remarks
   * The type of the observed object, such as PROMETHEUS, APM, RUM, and cms_basic.
   * 
   * @example
   * PROMETHEUS
   */
  observeResourceType?: string;
  /**
   * @remarks
   * The page number for paging in a paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of alert history records to return on each page during paging for a paged query. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The key value used for data partitioning. You do not need to specify this parameter in most cases.
   * 
   * @example
   * cn-hangzhou
   */
  partitionKey?: string;
  /**
   * @remarks
   * The start timestamp of the time range for the alert start time. The value is a UNIX timestamp in milliseconds. If you do not specify this parameter, the default value is the timestamp 30 days ago.
   * 
   * @example
   * 1739866071668
   */
  startTimeFrom?: number;
  /**
   * @remarks
   * The end timestamp of the time range for the alert start time. The value is a UNIX timestamp in milliseconds. If you do not specify this parameter, the default value is the current timestamp.
   * 
   * @example
   * 1739866071668
   */
  startTimeTo?: number;
  /**
   * @remarks
   * The current status of the alert history. Valid values: OK and ALARM.
   * 
   * @example
   * ALARM
   */
  status?: string;
  /**
   * @remarks
   * The identifier of the workspace to which the alert history belongs. If you do not specify this parameter, the default workspace is used.
   * 
   * @example
   * default-cms-<userId>-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      alertHistoryId: 'alertHistoryId',
      alertRuleId: 'alertRuleId',
      bizSource: 'bizSource',
      cmsNamespace: 'cmsNamespace',
      cmsProductCategory: 'cmsProductCategory',
      displayNameKeyWord: 'displayNameKeyWord',
      instanceKey: 'instanceKey',
      labelFilter: 'labelFilter',
      latestLevel: 'latestLevel',
      maxLevel: 'maxLevel',
      maxResults: 'maxResults',
      migrationStatus: 'migrationStatus',
      nextToken: 'nextToken',
      notificationFilter: 'notificationFilter',
      observeRelationType: 'observeRelationType',
      observeResourceDomain: 'observeResourceDomain',
      observeResourceGlobalScope: 'observeResourceGlobalScope',
      observeResourceInstanceId: 'observeResourceInstanceId',
      observeResourceType: 'observeResourceType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      partitionKey: 'partitionKey',
      startTimeFrom: 'startTimeFrom',
      startTimeTo: 'startTimeTo',
      status: 'status',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertHistoryId: 'string',
      alertRuleId: 'string',
      bizSource: 'string',
      cmsNamespace: 'string',
      cmsProductCategory: 'string',
      displayNameKeyWord: 'string',
      instanceKey: 'string',
      labelFilter: AlertRuleLabelFilter,
      latestLevel: 'string',
      maxLevel: 'string',
      maxResults: 'number',
      migrationStatus: 'number',
      nextToken: 'string',
      notificationFilter: AlertRuleNotificationFilter,
      observeRelationType: 'string',
      observeResourceDomain: 'string',
      observeResourceGlobalScope: 'boolean',
      observeResourceInstanceId: 'string',
      observeResourceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      partitionKey: 'string',
      startTimeFrom: 'number',
      startTimeTo: 'number',
      status: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.labelFilter && typeof (this.labelFilter as any).validate === 'function') {
      (this.labelFilter as any).validate();
    }
    if(this.notificationFilter && typeof (this.notificationFilter as any).validate === 'function') {
      (this.notificationFilter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

