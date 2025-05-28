// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserGroupListByParentIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the parent user group.
   * 
   * *   If you enter the ID of the parent user group, you can obtain the information of the child user group under this ID.
   * *   If you enter -1, you can obtain the sub-user group information under the root directory.
   * 
   * This parameter is required.
   * 
   * @example
   * 3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  parentUserGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      parentUserGroupId: 'ParentUserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentUserGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

