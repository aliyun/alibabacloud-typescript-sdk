// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLhMembersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the users to be added.
   * 
   * This parameter is required.
   */
  membersShrink?: string;
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
      membersShrink: 'Members',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      membersShrink: 'string',
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

