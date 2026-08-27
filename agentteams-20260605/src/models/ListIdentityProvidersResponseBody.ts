// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentityProvidersResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The identity provider type.
   * 
   * @example
   * DingTalk
   */
  identityProviderType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * agentteams-demo
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether logon is enabled.
   * 
   * @example
   * true
   */
  loginEnabled?: boolean;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether synchronization is enabled.
   * 
   * @example
   * false
   */
  syncEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      identityProviderType: 'IdentityProviderType',
      instanceId: 'InstanceId',
      loginEnabled: 'LoginEnabled',
      status: 'Status',
      syncEnabled: 'SyncEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderType: 'string',
      instanceId: 'string',
      loginEnabled: 'boolean',
      status: 'string',
      syncEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityProvidersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of identity provider bindings.
   * 
   * @example
   * [...]
   */
  items?: ListIdentityProvidersResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of entries returned in this query.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page. This parameter is empty if no more data exists.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListIdentityProvidersResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

