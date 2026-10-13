// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersForResourceServerResponseBodyUsersResourceServerScopes extends $dara.Model {
  /**
   * @remarks
   * The scope permission ID.
   * 
   * @example
   * ress_nbte4bb3qqqnaq73rlmkqixxxx
   */
  resourceServerScopeId?: string;
  /**
   * @remarks
   * The scope permission name.
   * 
   * @example
   * Read All User
   */
  resourceServerScopeName?: string;
  static names(): { [key: string]: string } {
    return {
      resourceServerScopeId: 'ResourceServerScopeId',
      resourceServerScopeName: 'ResourceServerScopeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceServerScopeId: 'string',
      resourceServerScopeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForResourceServerResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_qsw77zl5vrllwzyrrfwbmpxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of granted scope permissions.
   */
  resourceServerScopes?: ListUsersForResourceServerResponseBodyUsersResourceServerScopes[];
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * user_nbsomva32b6utec3hgi7scxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceServerScopes: 'ResourceServerScopes',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceServerScopes: { 'type': 'array', 'itemType': ListUsersForResourceServerResponseBodyUsersResourceServerScopes },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceServerScopes)) {
      $dara.Model.validateArray(this.resourceServerScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForResourceServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the list.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of accounts.
   */
  users?: ListUsersForResourceServerResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': ListUsersForResourceServerResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

