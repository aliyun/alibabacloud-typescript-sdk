// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextDatabaseMembersResponseBodyMembersKeys extends $dara.Model {
  /**
   * @example
   * 2026-05-28T17:59:55Z
   */
  createdAt?: string;
  /**
   * @example
   * data pipeline key
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
   * 2026-07-15T08:30:00Z
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

export class ListContextDatabaseMembersResponseBodyMembers extends $dara.Model {
  /**
   * @example
   * 2026-05-28T17:59:55Z
   */
  createdAt?: string;
  keys?: ListContextDatabaseMembersResponseBodyMembersKeys[];
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
      keys: { 'type': 'array', 'itemType': ListContextDatabaseMembersResponseBodyMembersKeys },
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

export class ListContextDatabaseMembersResponseBody extends $dara.Model {
  /**
   * @example
   * (null)
   */
  maxResults?: number;
  members?: ListContextDatabaseMembersResponseBodyMembers[];
  /**
   * @example
   * (null)
   */
  nextToken?: string;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      members: 'Members',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      members: { 'type': 'array', 'itemType': ListContextDatabaseMembersResponseBodyMembers },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

