// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFreeExplorationWorkItemShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The technical names of the selected digital workers.
   * 
   * This parameter is required.
   * 
   * @example
   * ["sales-agent"]
   */
  agentNamesShrink?: string;
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
  memberUserIdsShrink?: string;
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
      agentNamesShrink: 'agentNames',
      collaborationGroupId: 'collaborationGroupId',
      memberUserIdsShrink: 'memberUserIds',
      tenantId: 'tenantId',
      title: 'title',
      visibility: 'visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentNamesShrink: 'string',
      collaborationGroupId: 'string',
      memberUserIdsShrink: 'string',
      tenantId: 'string',
      title: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

