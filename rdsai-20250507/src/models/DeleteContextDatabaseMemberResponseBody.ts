// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContextDatabaseMemberResponseBodyKeys extends $dara.Model {
  /**
   * @remarks
   * The creation time. This field is empty.
   * 
   * @example
   * (null)
   */
  createdAt?: string;
  /**
   * @remarks
   * The API key description. This field is empty.
   * 
   * @example
   * (null)
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
   * The API key suffix. This field is empty.
   * 
   * @example
   * (null)
   */
  keyDisplaySuffix?: string;
  /**
   * @remarks
   * The key ID. This field is empty.
   * 
   * @example
   * (null)
   */
  keyId?: number;
  /**
   * @remarks
   * The API key prefix. This field is empty.
   * 
   * @example
   * (null)
   */
  keyPrefix?: string;
  /**
   * @remarks
   * This field is empty.
   * 
   * @example
   * (null)
   */
  lastUsedAt?: string;
  /**
   * @remarks
   * The API key name. This field is empty.
   * 
   * @example
   * (null)
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
   * The API key status. This field is empty.
   * 
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
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-05-28T17:59:55Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The API key details. An empty array is returned.
   */
  keys?: DeleteContextDatabaseMemberResponseBodyKeys[];
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

