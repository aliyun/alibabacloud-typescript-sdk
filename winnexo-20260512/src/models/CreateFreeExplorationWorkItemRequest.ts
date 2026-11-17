// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFreeExplorationWorkItemRequest extends $dara.Model {
  /**
   * @remarks
   * The technical names of the selected digital workers.
   * 
   * This parameter is required.
   * 
   * @example
   * ["sales-agent"]
   */
  agentNames?: string[];
  /**
   * @remarks
   * The ID of the collaboration workspace to which the work item belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cg_123
   */
  collaborationGroupId?: string;
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
   * The tenant ID. This is a common parameter. If this parameter is not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The title of the work item.
   * 
   * This parameter is required.
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
      collaborationGroupId: 'collaborationGroupId',
      memberUserIds: 'memberUserIds',
      tenantId: 'tenantId',
      title: 'title',
      visibility: 'visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentNames: { 'type': 'array', 'itemType': 'string' },
      collaborationGroupId: 'string',
      memberUserIds: { 'type': 'array', 'itemType': 'number' },
      tenantId: 'string',
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

