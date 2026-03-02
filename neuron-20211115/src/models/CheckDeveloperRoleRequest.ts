// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDeveloperRoleRequest extends $dara.Model {
  accountId?: string;
  companyId?: number;
  platform?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      companyId: 'companyId',
      platform: 'platform',
      roleName: 'roleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      companyId: 'number',
      platform: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

