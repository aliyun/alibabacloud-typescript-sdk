// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountLinkInfo extends $dara.Model {
  authenticationType?: string;
  createdAt?: number;
  displayName?: string;
  domainId?: string;
  extra?: string;
  identity?: string;
  lastLoginTime?: number;
  status?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'authentication_type',
      createdAt: 'created_at',
      displayName: 'display_name',
      domainId: 'domain_id',
      extra: 'extra',
      identity: 'identity',
      lastLoginTime: 'last_login_time',
      status: 'status',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'string',
      createdAt: 'number',
      displayName: 'string',
      domainId: 'string',
      extra: 'string',
      identity: 'string',
      lastLoginTime: 'number',
      status: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

