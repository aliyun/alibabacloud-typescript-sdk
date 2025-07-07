// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class EnterpriseAccountQueryAccountGrantedRolesResponseBodyData extends $dara.Model {
  bizRoleCode?: string;
  bizRoleName?: string;
  static names(): { [key: string]: string } {
    return {
      bizRoleCode: 'BizRoleCode',
      bizRoleName: 'BizRoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRoleCode: 'string',
      bizRoleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

