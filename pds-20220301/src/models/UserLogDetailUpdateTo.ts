// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserLogDetailUpdateTo extends $dara.Model {
  email?: string;
  expiredAt?: number;
  name?: string;
  phone?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      expiredAt: 'expired_at',
      name: 'name',
      phone: 'phone',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      expiredAt: 'number',
      name: 'string',
      phone: 'string',
      roleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

