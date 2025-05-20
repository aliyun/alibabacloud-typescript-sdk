// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserLogDetailUpdateTo } from "./UserLogDetailUpdateTo";


export class UserLogDetail extends $dara.Model {
  email?: string;
  expiredAt?: number;
  name?: string;
  phone?: string;
  roleId?: string;
  updateTo?: UserLogDetailUpdateTo;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      expiredAt: 'expired_at',
      name: 'name',
      phone: 'phone',
      roleId: 'role_id',
      updateTo: 'update_to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      expiredAt: 'number',
      name: 'string',
      phone: 'string',
      roleId: 'string',
      updateTo: UserLogDetailUpdateTo,
    };
  }

  validate() {
    if(this.updateTo && typeof (this.updateTo as any).validate === 'function') {
      (this.updateTo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

