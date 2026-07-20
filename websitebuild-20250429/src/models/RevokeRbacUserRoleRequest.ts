// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeRbacUserRoleRequest extends $dara.Model {
  bizId?: string;
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

