// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLhMembersRequestMembers extends $dara.Model {
  /**
   * @remarks
   * The role. Valid values:
   * 
   * *   **ADMIN**: workspace administrator. You can add a workspace administrator only as a DMS administrator or a DBA.
   * *   **MEMBER**: workspace member.
   * *   **DEVELOPER**: task flow developer. Only a workspace member can be added as a task flow developer.
   * 
   * This parameter is required.
   */
  roles?: string[];
  /**
   * @remarks
   * The ID of the user to be added. You can call the [ListUsers](https://help.aliyun.com/document_detail/141938.html) or [GetUser](https://help.aliyun.com/document_detail/147098.html) operation to obtain the user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 15****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      roles: 'Roles',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roles: { 'type': 'array', 'itemType': 'string' },
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLhMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the users to be added.
   * 
   * This parameter is required.
   */
  members?: AddLhMembersRequestMembers[];
  /**
   * @remarks
   * The ID of the object.
   * 
   * *   If the object is a workspace, you can call the [GetLhSpaceByName](https://help.aliyun.com/document_detail/424379.html) operation to obtain the workspace ID.
   * *   If the object is a task flow, you can call the [ListLhTaskFlowAndScenario](https://help.aliyun.com/document_detail/426672.html) operation to obtain the task flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  objectId?: number;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   **0**: workspace
   * *   **1**: task flow
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  objectType?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3000
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': AddLhMembersRequestMembers },
      objectId: 'number',
      objectType: 'number',
      tid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

