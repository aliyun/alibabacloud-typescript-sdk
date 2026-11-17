// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySourceUsageTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the collaboration group to which the resource belongs, such as cg_101. If this parameter is specified, a group workspace task is created, and the caller must be a valid group member. If this parameter is left empty, a personal task is created.
   * 
   * @example
   * example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The actual end timestamp of the live stream, in milliseconds.
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
   * MAIN
   */
  eventType?: string;
  /**
   * @remarks
   * The aggregation granularity. Valid values: hourly and daily.
   * 
   * @example
   * daily
   */
  granularity?: string;
  /**
   * @remarks
   * The IDs of the knowledge base folders.
   * 
   * @example
   * ["kb_9401"]
   */
  knowledgeBaseIds?: string[];
  /**
   * @remarks
   * The role scope type. Valid values:
   * - **ALL_VISIBLE**: All members.
   * - **PART_VISIBLE**: Partial members.
   * 
   * This parameter is required.
   * 
   * @example
   * Report perspective: TENANT for enterprise knowledge, GROUP for a single workspace, ALL_GROUPS for all workspaces of the current tenant (platform super administrator only). Valid values: TENANT, GROUP, and ALL_GROUPS
   */
  scopeType?: string;
  /**
   * @remarks
   * The IDs of the resource sources.
   * 
   * @example
   * ["src_9401"]
   */
  sourceIds?: string[];
  /**
   * @remarks
   * The resume channel source.
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
   * 2026-09-01T00:00:00+08:00
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
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      endTime: 'endTime',
      eventType: 'eventType',
      granularity: 'granularity',
      knowledgeBaseIds: 'knowledgeBaseIds',
      scopeType: 'scopeType',
      sourceIds: 'sourceIds',
      sourceName: 'sourceName',
      startTime: 'startTime',
      tenantId: 'tenantId',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      endTime: 'string',
      eventType: 'string',
      granularity: 'string',
      knowledgeBaseIds: { 'type': 'array', 'itemType': 'string' },
      scopeType: 'string',
      sourceIds: { 'type': 'array', 'itemType': 'string' },
      sourceName: 'string',
      startTime: 'string',
      tenantId: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeBaseIds)) {
      $dara.Model.validateArray(this.knowledgeBaseIds);
    }
    if(Array.isArray(this.sourceIds)) {
      $dara.Model.validateArray(this.sourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

