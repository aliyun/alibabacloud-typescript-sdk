// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContextDatabaseMemberResponseBodyKeys extends $dara.Model {
  /**
   * @example
   * (null)
   */
  createdAt?: string;
  /**
   * @example
   * (null)
   */
  description?: string;
  /**
   * @example
   * (null)
   */
  expiresAt?: string;
  /**
   * @example
   * (null)
   */
  keyDisplaySuffix?: string;
  /**
   * @example
   * (null)
   */
  keyId?: number;
  /**
   * @example
   * (null)
   */
  keyPrefix?: string;
  /**
   * @example
   * (null)
   */
  lastUsedAt?: string;
  /**
   * @example
   * (null)
   */
  name?: string;
  /**
   * @example
   * (null)
   */
  revokedAt?: string;
  /**
   * @example
   * (null)
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

export class DeleteContextDatabaseMemberResponseBody extends $dara.Model {
  /**
   * @example
   * 2026-05-28T17:59:55Z
   */
  createdAt?: string;
  keys?: DeleteContextDatabaseMemberResponseBodyKeys[];
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
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @example
   * admin
   */
  role?: string;
  /**
   * @example
   * deleted
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
      keys: { 'type': 'array', 'itemType': DeleteContextDatabaseMemberResponseBodyKeys },
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

