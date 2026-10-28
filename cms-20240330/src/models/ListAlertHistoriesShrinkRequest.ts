// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertHistoriesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier (transId) of an alert history record.
   * 
   * @example
   * lme6hk5qih5o769m379jjuo5i1
   */
  alertHistoryId?: string;
  /**
   * @remarks
   * Filters the history records by a specific alert rule. Specify the unique identifier (ruleUuid) of the alert rule.
   * 
   * @example
   * mig_prom_v2_11308451
   */
  alertRuleId?: string;
  /**
   * @remarks
   * The business source of the alert history. For example, `managed_service_for_prometheus` indicates the managed type of the Prometheus integration center. The default value is empty. Leave this parameter empty if you are unsure about the value.
   * 
   * @example
   * managed_service_for_prometheus
   */
  bizSource?: string;
  /**
   * @remarks
   * The namespace of CloudMonitor. Examples: acs_rds_dashboard and acs_ecs_dashboard.
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
   * The keyword used for fuzzy matching and filtering based on the display name of the alert rule.
   * 
   * @example
   * keyword
   */
  displayNameKeyWord?: string;
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
   * The filter condition for rule labels. The value is a JSON-formatted string that supports filtering by label key-value pairs.
   */
  labelFilterShrink?: string;
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
   * The maximum number of results to return on each page. This parameter is not supported. Use pageSize and pageNumber for pagination.
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
   * The pagination token used for the next query. This parameter is not supported. Use pageSize and pageNumber for pagination.
   * 
   * @example
   * 2-ba4d-4b9f-aa24-dcb067a30f1c
   */
  nextToken?: string;
  /**
   * @remarks
   * Filters alert rules that contain specific notification recipients. Only rules that contain at least one of the notification recipients specified in notifyTargets are returned in the result list.
   */
  notificationFilterShrink?: string;
  /**
   * @remarks
   * The relation type of the observed object. Examples: GROUP, INSTANCE, and TAG.
   * 
   * @example
   * INSTANCE
   */
  observeRelationType?: string;
  /**
   * @remarks
   * The dimension column (domain) of the observed object.
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
   * Filters the alert history by resource instance ID.
   * 
   * @example
   * i-bp1234567890abcdef
   */
  observeResourceInstanceId?: string;
  /**
   * @remarks
   * The type of the observed object. Examples: PROMETHEUS, APM, RUM, and cms_basic.
   * 
   * @example
   * PROMETHEUS
   */
  observeResourceType?: string;
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
   * The number of alert history records to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The key used for data partitioning. Typically, you do not need to specify this parameter.
   * 
   * @example
   * cn-hangzhou
   */
  partitionKey?: string;
  /**
   * @remarks
   * The start timestamp of the time range for the alert start time. The value is a UNIX timestamp in milliseconds. If not specified, the default value is the time 30 days ago.
   * 
   * @example
   * 1739866071668
   */
  startTimeFrom?: number;
  /**
   * @remarks
   * The end timestamp of the time range for the alert start time. The value is a UNIX timestamp in milliseconds. If not specified, the default value is the current time.
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
   * The identifier of the workspace to which the alert history belongs. If not specified, the default workspace is used.
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
      labelFilterShrink: 'labelFilter',
      latestLevel: 'latestLevel',
      maxLevel: 'maxLevel',
      maxResults: 'maxResults',
      migrationStatus: 'migrationStatus',
      nextToken: 'nextToken',
      notificationFilterShrink: 'notificationFilter',
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
      labelFilterShrink: 'string',
      latestLevel: 'string',
      maxLevel: 'string',
      maxResults: 'number',
      migrationStatus: 'number',
      nextToken: 'string',
      notificationFilterShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

