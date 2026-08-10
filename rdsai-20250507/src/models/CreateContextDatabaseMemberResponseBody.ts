// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextDatabaseMemberResponseBodyMemberKeys extends $dara.Model {
  /**
   * @example
   * 2026-05-28T17:59:55Z
   */
  createdAt?: string;
  /**
   * @example
   * 111
   */
  description?: string;
  /**
   * @example
   * (null)
   */
  expiresAt?: string;
  /**
   * @example
   * 33631c
   */
  keyDisplaySuffix?: string;
  /**
   * @example
   * 1
   */
  keyId?: number;
  /**
   * @example
   * ctxdb-
   */
  keyPrefix?: string;
  /**
   * @example
   * (null)
   */
  lastUsedAt?: string;
  /**
   * @example
   * my-key
   */
  name?: string;
  /**
   * @example
   * (null)
   */
  revokedAt?: string;
  /**
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      description: 'Description',
      expiresAt: 'ExpiresAt',
      keyDisplaySuffix: 'KeyDisplaySuffix',
      keyId: 'KeyId',
      keyPrefix: 'KeyPrefix',
      lastUsedAt: 'LastUsedAt',
      name: 'Name',
      revokedAt: 'RevokedAt',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      expiresAt: 'string',
      keyDisplaySuffix: 'string',
      keyId: 'number',
      keyPrefix: 'string',
      lastUsedAt: 'string',
      name: 'string',
      revokedAt: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContextDatabaseMemberResponseBodyMember extends $dara.Model {
  /**
   * @example
   * 2026-05-28T17:59:55Z
   */
  createdAt?: string;
  keys?: CreateContextDatabaseMemberResponseBodyMemberKeys[];
  /**
   * @example
   * mb-cz51tnnp8****
   */
  memberId?: string;
  /**
   * @example
   * Alice
   */
  memberName?: string;
  /**
   * @example
   * admin
   */
  role?: string;
  /**
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      keys: 'Keys',
      memberId: 'MemberId',
      memberName: 'MemberName',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      keys: { 'type': 'array', 'itemType': CreateContextDatabaseMemberResponseBodyMemberKeys },
      memberId: 'string',
      memberName: 'string',
      role: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContextDatabaseMemberResponseBody extends $dara.Model {
  /**
   * @example
   * ctxdb-*****
   */
  apiKey?: string;
  member?: CreateContextDatabaseMemberResponseBodyMember;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      member: 'Member',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      member: CreateContextDatabaseMemberResponseBodyMember,
      requestId: 'string',
    };
  }

  validate() {
    if(this.member && typeof (this.member as any).validate === 'function') {
      (this.member as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

