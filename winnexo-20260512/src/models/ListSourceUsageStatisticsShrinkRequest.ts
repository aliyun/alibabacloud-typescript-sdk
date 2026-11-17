// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSourceUsageStatisticsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the collaboration group to which the resource belongs, such as cg_101. If you specify this parameter, a group workspace task is created, and the caller must be a valid group member. If you leave this parameter empty, a personal task is created.
   * 
   * @example
   * 1112
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The actual end timestamp, in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-08T23:59:59+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * HealthCheck
   */
  eventType?: string;
  /**
   * @remarks
   * The root IDs of the enterprise knowledge bases, which are available only for TENANT. The knowledge bases are filtered based on current directory bindings, not historical ownership. Maximum number of items: 100.
   * 
   * @example
   * ["kb_9401"]
   */
  knowledgeBaseIdsShrink?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The report perspective. Valid values: TENANT (enterprise knowledge), GROUP (a single workspace), and ALL_GROUPS (all workspaces of the current tenant, only for platform super administrators).
   * 
   * This parameter is required.
   * 
   * @example
   * Report perspective: TENANT for enterprise knowledge, GROUP for a single workspace, ALL_GROUPS for all workspaces of the current tenant (platform super administrator only). Valid values: TENANT, GROUP, ALL_GROUPS
   */
  scopeType?: string;
  /**
   * @remarks
   * The content of the sort clause.
   * 
   * @example
   * 1
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. This parameter takes effect only when sortBy is specified. Valid values: ASC and DESC. The values are case-insensitive.
   * 
   * @example
   * asc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The IDs of the associated sources.
   * 
   * @example
   * ["src_9401"]
   */
  sourceIdsShrink?: string;
  /**
   * @remarks
   * The name of the source.
   * 
   * @example
   * The naming content of the source
   */
  sourceName?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The effective tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      endTime: 'endTime',
      eventType: 'eventType',
      knowledgeBaseIdsShrink: 'knowledgeBaseIds',
      page: 'page',
      pageSize: 'pageSize',
      scopeType: 'scopeType',
      sortBy: 'sortBy',
      sortOrder: 'sortOrder',
      sourceIdsShrink: 'sourceIds',
      sourceName: 'sourceName',
      startTime: 'startTime',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      endTime: 'string',
      eventType: 'string',
      knowledgeBaseIdsShrink: 'string',
      page: 'number',
      pageSize: 'number',
      scopeType: 'string',
      sortBy: 'string',
      sortOrder: 'string',
      sourceIdsShrink: 'string',
      sourceName: 'string',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

