// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLhMembersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user to be removed. You can call the [ListUsers](https://help.aliyun.com/document_detail/141938.html) or [GetUser](https://help.aliyun.com/document_detail/147098.html) operation to obtain the user ID.
   * 
   * This parameter is required.
   */
  memberIdsShrink?: string;
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
   * 9***
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
   * 1
   */
  objectType?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      memberIdsShrink: 'MemberIds',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberIdsShrink: 'string',
      objectId: 'number',
      objectType: 'number',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

