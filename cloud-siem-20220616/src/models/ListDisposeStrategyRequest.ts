// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDisposeStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * Current page number. Must be greater than or equal to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Strategy status. Valid values:
   * 
   * - 0: disabled
   * 
   * - 1: enabled
   * 
   * @example
   * 0
   */
  effectiveStatus?: number;
  /**
   * @remarks
   * End time of the query, in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * Entity feature value. Use this to perform a fuzzy search on entities.
   * 
   * @example
   * test22.php
   */
  entityIdentity?: string;
  /**
   * @remarks
   * Entity type. Valid values:
   * 
   * - ip
   * 
   * - process
   * 
   * - file
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * Event ID.
   * 
   * @example
   * 49670d3bbf7aa9556a2fff3dbaa9****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * Sort order. Valid values:
   * 
   * - desc: descending
   * 
   * - asc: ascending
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * Sort field. Valid values:
   * 
   * - GmtModified: sort by last modified time
   * 
   * - GmtCreate: sort by creation time
   * 
   * - FinishTime: sort by strategy end time
   * 
   * @example
   * GmtModified
   */
  orderField?: string;
  /**
   * @remarks
   * Number of entries per page. Maximum value is 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Unique name of the playbook.
   * 
   * @example
   * WafBlockIP
   */
  playbookName?: string;
  /**
   * @remarks
   * Playbook type. Valid values:
   * 
   * - system: manual disposal
   * 
   * - custom: event-triggered playbook
   * 
   * - custom_alert: alert-triggered playbook
   * 
   * - soar-manual: manually run playbook
   * 
   * - soar-mdr: MDR-run playbook
   * 
   * @example
   * system
   */
  playbookTypes?: string;
  /**
   * @remarks
   * UUID of the playbook.
   * 
   * @example
   * system_aliyun_clb_process_book
   */
  playbookUuid?: string;
  /**
   * @remarks
   * Location of the Data Management center for Threat Analysis and Response. Select the location based on where your assets are deployed. Valid values:
   * 
   * - cn-hangzhou: assets in the Chinese mainland or Hong Kong (China)
   * 
   * - ap-southeast-1: assets outside China
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Alibaba Cloud account ID when an administrator switches to another member\\"s perspective.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * View type. Valid values:
   * 
   * - 0: view for the current Alibaba Cloud account
   * 
   * - 1: view for all accounts under the enterprise
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * ID of the security orchestration and automated response disposal strategy.
   * 
   * @example
   * a50a49b7-6044-4593-ab15-2b46567c****
   */
  sophonTaskId?: string;
  /**
   * @remarks
   * Start time of the query, in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  /**
   * @remarks
   * Disposal strategy status.
   * 
   * @example
   * 200
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      effectiveStatus: 'EffectiveStatus',
      endTime: 'EndTime',
      entityIdentity: 'EntityIdentity',
      entityType: 'EntityType',
      incidentUuid: 'IncidentUuid',
      order: 'Order',
      orderField: 'OrderField',
      pageSize: 'PageSize',
      playbookName: 'PlaybookName',
      playbookTypes: 'PlaybookTypes',
      playbookUuid: 'PlaybookUuid',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      sophonTaskId: 'SophonTaskId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      effectiveStatus: 'number',
      endTime: 'number',
      entityIdentity: 'string',
      entityType: 'string',
      incidentUuid: 'string',
      order: 'string',
      orderField: 'string',
      pageSize: 'number',
      playbookName: 'string',
      playbookTypes: 'string',
      playbookUuid: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      sophonTaskId: 'string',
      startTime: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

