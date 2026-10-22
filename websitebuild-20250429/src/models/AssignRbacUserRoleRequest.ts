// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignRbacUserRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The role parameters.
   * 
   * @example
   * {"user_id": "c1721c87-5401-40b3-b836-9b2653507feb",
   *     "role_id": "804a6b2a-82ac-49f2-960a-a6c2ed9e73dd",
   *     "org_id": "f0534aa7-94ec-4368-a34a-310390f66253"}
   */
  userRoleData?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      userRoleData: 'UserRoleData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      userRoleData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

