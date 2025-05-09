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

