// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContextDatabaseMemberResponseBodyKeys extends $dara.Model {
  /**
   * @remarks
   * The time when the member was created.
   * 
   * @example
   * 2026-05-28T17:59:55Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The API key description.
   * 
   * @example
   * data pipeline key
   */
  description?: string;
  /**
   * @remarks
   * This field is empty.
   * 
   * @example
   * (null)
   */
  expiresAt?: string;
  /**
   * @remarks
   * The suffix of the API key.
   * 
   * @example
   * 33631c
   */
  keyDisplaySuffix?: string;
  /**
   * @remarks
   * The key ID.
   * 
   * @example
   * 1
   */
  keyId?: number;
  /**
   * @remarks
   * The prefix of the API key.
   * 
   * @example
   * ctxdb-
   */
  keyPrefix?: string;
  /**
   * @remarks
   * The time when the API key was last used.
   * 
   * @example
   * 2026-07-15T08:30:00Z
   */
  lastUsedAt?: string;
  /**
   * @remarks
   * The API key name.
   * 
   * @example
   * my-key
   */
  name?: string;
  /**
   * @remarks
   * This field is empty.
   * 
   * @example
   * (null)
   */
  revokedAt?: string;
  /**
   * @remarks
   * The API key status.
   * 
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

export class UpdateContextDatabaseMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the member was created.
   * 
   * @example
   * 2026-05-28T17:59:55Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The list of API keys.
   */
  keys?: UpdateContextDatabaseMemberResponseBodyKeys[];
  /**
   * @remarks
   * The member ID.
   * 
   * @example
   * mb-cz51tnnp8****
   */
  memberId?: string;
  /**
   * @remarks
   * The member name.
   * 
   * @example
   * Alice
   */
  memberName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * The member role.
   * 
   * @example
   * admin
   */
  role?: string;
  /**
   * @remarks
   * The member status.
   * 
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
      requestId: 'RequestId',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      keys: { 'type': 'array', 'itemType': UpdateContextDatabaseMemberResponseBodyKeys },
      memberId: 'string',
      memberName: 'string',
      requestId: 'string',
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

