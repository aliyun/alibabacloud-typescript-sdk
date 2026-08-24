// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextDatabaseMembersResponseBodyMembersKeys extends $dara.Model {
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
   * The time when the key was last used. This field is populated after the key has been authenticated and used. This field is empty for keys that have never been used.
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

export class ListContextDatabaseMembersResponseBodyMembers extends $dara.Model {
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
  keys?: ListContextDatabaseMembersResponseBodyMembersKeys[];
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
   * @remarks
   * The maximum number of entries per page. This field is empty.
   * 
   * @example
   * (null)
   */
  maxResults?: number;
  /**
   * @remarks
   * The list of members.
   */
  members?: ListContextDatabaseMembersResponseBodyMembers[];
  /**
   * @remarks
   * The pagination token for the next page. This field is empty.
   * 
   * @example
   * (null)
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

