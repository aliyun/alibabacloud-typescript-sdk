// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrivilegePopCmd extends $dara.Model {
  accountId?: string;
  actions?: string;
  resource?: string;
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      actions: 'actions',
      resource: 'resource',
      roleId: 'roleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      actions: 'string',
      resource: 'string',
      roleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

