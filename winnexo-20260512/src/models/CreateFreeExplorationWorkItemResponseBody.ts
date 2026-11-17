// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFreeExplorationWorkItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The technical names of the selected digital workers.
   * 
   * @example
   * ["sales-agent"]
   */
  agentNames?: string[];
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the collaboration workspace to which the work item belongs.
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The actual group topic ID, which can be associated in queryWorkItemFeed. It cannot be used as a workItemId in Workflow.
   * 
   * @example
   * conv_20261105_9f2c
   */
  conversationId?: string;
  /**
   * @remarks
   * The user ID of the creator on the platform.
   * 
   * @example
   * 10001
   */
  createdByUserId?: number;
  /**
   * @remarks
   * The work item mode. The value is fixed to FREE_EXPLORATION.
   * 
   * @example
   * FREE_EXPLORATION
   */
  itemType?: string;
  /**
   * @remarks
   * The actual members of the topic, including the creator. For public topics, members of the entire workspace are not enumerated.
   * 
   * @example
   * [43]
   */
  memberUserIds?: number[];
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The title of the work item.
   * 
   * @example
   * Investigate sales opportunities
   */
  title?: string;
  /**
   * @remarks
   * The actual visibility scope. Valid values: PRIVATE, COLLABORATIVE, and PUBLIC.
   * 
   * @example
   * PRIVATE
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      agentNames: 'agentNames',
      code: 'code',
      collaborationGroupId: 'collaborationGroupId',
      conversationId: 'conversationId',
      createdByUserId: 'createdByUserId',
      itemType: 'itemType',
      memberUserIds: 'memberUserIds',
      message: 'message',
      requestId: 'requestId',
      title: 'title',
      visibility: 'visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentNames: { 'type': 'array', 'itemType': 'string' },
      code: 'string',
      collaborationGroupId: 'string',
      conversationId: 'string',
      createdByUserId: 'number',
      itemType: 'string',
      memberUserIds: { 'type': 'array', 'itemType': 'number' },
      message: 'string',
      requestId: 'string',
      title: 'string',
      visibility: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentNames)) {
      $dara.Model.validateArray(this.agentNames);
    }
    if(Array.isArray(this.memberUserIds)) {
      $dara.Model.validateArray(this.memberUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

