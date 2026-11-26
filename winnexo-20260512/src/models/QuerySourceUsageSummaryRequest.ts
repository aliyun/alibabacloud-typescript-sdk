// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySourceUsageSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The platform application token issued by the console. If specified, the request is executed as the user identified by opsUserId or opsUserCode.
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The ID of the collaboration group to which the resource belongs, such as cg_101. If specified, a group workspace task is created, and the caller must be a valid group member. If left empty, a personal task is created.
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
   * ALL
   */
  eventType?: string;
  /**
   * @remarks
   * The IDs of the knowledge base folders.
   */
  knowledgeBaseIds?: string[];
  /**
   * @remarks
   * The proxy user code, which is unique within the tenant. This parameter is used only when the application credential is configured as source_uid.
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * The proxy user ID, which is the WINNEXO platform user ID. This parameter is used only when the application credential is configured as winnexo_uid.
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The role scope type. Valid values:
   * - **ALL_VISIBLE**: All members.
   * - **PART_VISIBLE**: Partial members.
   * 
   * This parameter is required.
   * 
   * @example
   * TENANT
   */
  scopeType?: string;
  /**
   * @remarks
   * The source IDs.
   */
  sourceIds?: string[];
  /**
   * @remarks
   * The resume channel source.
   * 
   * @example
   * Source name content
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
   * The tenant ID. This is a common parameter. For winnexo-cli, this parameter is explicitly passed by using --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      collaborationGroupId: 'collaborationGroupId',
      endTime: 'endTime',
      eventType: 'eventType',
      knowledgeBaseIds: 'knowledgeBaseIds',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      scopeType: 'scopeType',
      sourceIds: 'sourceIds',
      sourceName: 'sourceName',
      startTime: 'startTime',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      collaborationGroupId: 'string',
      endTime: 'string',
      eventType: 'string',
      knowledgeBaseIds: { 'type': 'array', 'itemType': 'string' },
      opsUserCode: 'string',
      opsUserId: 'string',
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

