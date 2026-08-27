// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the user group.
   * 
   * @example
   * Sales organization
   */
  description?: string;
  /**
   * @remarks
   * The ID of the parent user group. If this parameter is not specified, a root node is created.
   * 
   * @example
   * 7ea8973f-7a5c-4e8a-956b-4fe0e7e2eb11
   */
  parentId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The name of the user group. The name must be unique under the same parent node.
   * 
   * This parameter is required.
   * 
   * @example
   * East China Sales
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      parentId: 'parentId',
      tenantId: 'tenantId',
      userGroupName: 'userGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      parentId: 'string',
      tenantId: 'string',
      userGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

