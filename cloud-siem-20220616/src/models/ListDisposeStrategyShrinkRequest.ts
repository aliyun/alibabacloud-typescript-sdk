// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDisposeStrategyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the alert.
   */
  alertUuid?: string;
  /**
   * @remarks
   * The number of the current page. The value must be greater than or equal to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * - 0: invalid
   * - 1: valid
   * 
   * @example
   * 0
   */
  effectiveStatus?: number;
  /**
   * @remarks
   * The end time of the query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The identity value of the entity. You can use this parameter to perform a fuzzy search for response entities.
   * 
   * @example
   * test22.php
   */
  entityIdentity?: string;
  /**
   * @remarks
   * The type of the entity. Valid values:
   * - ip: IP address
   * - process: process
   * - file: file
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * The list of entity UUIDs.
   */
  entityUuidListShrink?: string;
  /**
   * @remarks
   * The grouping dimension.
   * 
   * @example
   * Incident
   */
  groupBy?: string;
  /**
   * @remarks
   * The grouping key value.
   * 
   * @example
   * 0123456789abcdef0123456789abcdef
   */
  groupKey?: string;
  /**
   * @remarks
   * The ID of the incident.
   * 
   * @example
   * 49670d3bbf7aa9556a2fff3dbaa9****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The maximum number of records to return in a single query.
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to query the next page.
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - desc: descending order
   * - asc: ascending order
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The field used for sorting. Valid values:
   * - GmtModified: sort by update time
   * - GmtCreate: sort by creation time
   * - FinishTime: sort by policy end time
   * 
   * @example
   * GmtModified
   */
  orderField?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique name of the playbook.
   * 
   * @example
   * WafBlockIP
   */
  playbookName?: string;
  /**
   * @remarks
   * The type of the playbook. Valid values:
   * - system: manual response
   * - custom: event-triggered playbook
   * - custom_alert: alert-triggered playbook
   * - soar-manual: manually run playbook
   * - soar-mdr: MDR-run playbook
   * 
   * @example
   * system
   */
  playbookTypes?: string;
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
   * The query mode.
   * 
   * @example
   * Group
   */
  queryMode?: string;
  /**
   * @remarks
   * The region where the data management center of Cloud Threat Detection and Response (CTDR) is located. You must select the region of the management center based on the region where your assets reside. Valid values:
   * - cn-hangzhou: assets reside in the Chinese mainland and Hong Kong (China)
   * - ap-southeast-1: assets reside in regions outside China
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the response rule.
   */
  responseRuleId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member whose perspective the administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * 
   * - 0: view of the current Alibaba Cloud account
   * - 1: view of all accounts in the enterprise
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The ID of the Security Orchestration, Automation, and Response (SOAR) response policy.
   * 
   * @example
   * a50a49b7-6044-4593-ab15-2b46567c****
   */
  sophonTaskId?: string;
  /**
   * @remarks
   * The start time of the query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the response policy.
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * The ID of the response policy.
   */
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      alertUuid: 'AlertUuid',
      currentPage: 'CurrentPage',
      effectiveStatus: 'EffectiveStatus',
      endTime: 'EndTime',
      entityIdentity: 'EntityIdentity',
      entityType: 'EntityType',
      entityUuidListShrink: 'EntityUuidList',
      groupBy: 'GroupBy',
      groupKey: 'GroupKey',
      incidentUuid: 'IncidentUuid',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      orderField: 'OrderField',
      pageSize: 'PageSize',
      playbookName: 'PlaybookName',
      playbookTypes: 'PlaybookTypes',
      playbookUuid: 'PlaybookUuid',
      queryMode: 'QueryMode',
      regionId: 'RegionId',
      responseRuleId: 'ResponseRuleId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      sophonTaskId: 'SophonTaskId',
      startTime: 'StartTime',
      status: 'Status',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertUuid: 'string',
      currentPage: 'number',
      effectiveStatus: 'number',
      endTime: 'number',
      entityIdentity: 'string',
      entityType: 'string',
      entityUuidListShrink: 'string',
      groupBy: 'string',
      groupKey: 'string',
      incidentUuid: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      orderField: 'string',
      pageSize: 'number',
      playbookName: 'string',
      playbookTypes: 'string',
      playbookUuid: 'string',
      queryMode: 'string',
      regionId: 'string',
      responseRuleId: 'string',
      roleFor: 'number',
      roleType: 'number',
      sophonTaskId: 'string',
      startTime: 'number',
      status: 'number',
      strategyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

