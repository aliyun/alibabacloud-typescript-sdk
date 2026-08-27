// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUserGroupMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID. This is a common parameter. You can explicitly pass this parameter in winnexo-cli by using `--tenant-id`.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the target user group.
   * 
   * This parameter is required.
   * 
   * @example
   * 7ea8973f-7a5c-4e8a-956b-4fe0e7e2eb11
   */
  userGroupId?: string;
  /**
   * @remarks
   * The list of platform user IDs to be removed. You can specify one or more IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userIds?: number[];
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
      userGroupId: 'userGroupId',
      userIds: 'userIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
      userGroupId: 'string',
      userIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

