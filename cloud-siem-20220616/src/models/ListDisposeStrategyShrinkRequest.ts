// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDisposeStrategyShrinkRequest extends $dara.Model {
  alertUuid?: string;
  /**
   * @remarks
   * The current page number, which must be greater than or equal to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The policy status. Valid values:
   * 
   * @example
   * 0
   */
  effectiveStatus?: number;
  /**
   * @remarks
   * The query end time, in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The entity characteristic value, which can be used for fuzzy match on response entities.
   * 
   * @example
   * test22.php
   */
  entityIdentity?: string;
  /**
   * @remarks
   * The entity type. Valid values:
   * 
   * @example
   * ip
   */
  entityType?: string;
  entityUuidListShrink?: string;
  groupBy?: string;
  groupKey?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 49670d3bbf7aa9556a2fff3dbaa9****
   */
  incidentUuid?: string;
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * The sort direction. Valid values:
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The field used to sort results. Valid values:
   * - GmtModified: sorts results by update time.
   * - GmtCreate: sorts results by creation time.
   * - FinishTime: sorts results by policy end time.
   * 
   * @example
   * GmtModified
   */
  orderField?: string;
  /**
   * @remarks
   * The number of entries per page, with a maximum of 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier name of the playbook.
   * 
   * @example
   * WafBlockIP
   */
  playbookName?: string;
  /**
   * @remarks
   * The playbook type. Valid values:
   * - system: manual handling
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
   * The playbook UUID.
   * 
   * @example
   * system_aliyun_clb_process_book
   */
  playbookUuid?: string;
  queryMode?: string;
  /**
   * @remarks
   * The region where the data management center of Cloud Threat Detection and Response (CTDR) is located. Specify the management center based on the region of your assets. Valid values:
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  responseRuleId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member to which the administrator switches the view.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The SOAR response policy ID.
   * 
   * @example
   * a50a49b7-6044-4593-ab15-2b46567c****
   */
  sophonTaskId?: string;
  /**
   * @remarks
   * The query start time, in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  /**
   * @remarks
   * The response policy status.
   * 
   * @example
   * 200
   */
  status?: number;
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

