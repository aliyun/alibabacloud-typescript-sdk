// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySourceUsageSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the collaboration group to which the resource belongs, such as cg_101. If you specify this parameter, a group workspace task is created, and the caller must be a valid group member. If you leave this parameter empty, a personal task is created.
   * 
   * @example
   * exampleCollaborationGroupId
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
   * UserOperator
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the knowledge base folder.
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
   * Report perspective: TENANT for enterprise knowledge, GROUP for a single workspace, and ALL_GROUPS for all workspaces of the current tenant (platform super administrator only). Valid values: TENANT, GROUP, and ALL_GROUPS
   */
  scopeType?: string;
  /**
   * @remarks
   * The source ID.
   */
  sourceIds?: string[];
  /**
   * @remarks
   * The resume channel source.
   * 
   * @example
   * The name of the source
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
   * The tenant ID, which is a common parameter. If you use winnexo-cli, pass this parameter explicitly by using --tenant-id.
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
      knowledgeBaseIds: 'knowledgeBaseIds',
      scopeType: 'scopeType',
      sourceIds: 'sourceIds',
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
      knowledgeBaseIds: { 'type': 'array', 'itemType': 'string' },
      scopeType: 'string',
      sourceIds: { 'type': 'array', 'itemType': 'string' },
      sourceName: 'string',
      startTime: 'string',
      tenantId: 'string',
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

