// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass this parameter explicitly by using `--tenant-id`.
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
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
      userGroupId: 'userGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

