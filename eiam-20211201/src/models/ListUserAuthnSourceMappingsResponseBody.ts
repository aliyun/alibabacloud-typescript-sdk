// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserAuthnSourceMappingsResponseBodyUserAuthnSourceMappings extends $dara.Model {
  /**
   * @remarks
   * The authentication source type of the source IdP.
   * 
   * @example
   * urn:alibaba:idaas:authntype:oidc
   */
  authnSourceType?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1762309642177
   */
  createTime?: number;
  /**
   * @remarks
   * The association information of the third-party account.
   * 
   * @example
   * {\\"userId\\":\\"xxxx\\",\\"name\\":\\"xxx\\",\\"bindTime\\":\\"1766050298872\\",\\"description\\":\\"bind request id: reqpre_xxx\\"}
   */
  externalData?: string;
  /**
   * @remarks
   * The source IdP ID.
   * 
   * @example
   * idp_my664lwkhpicbyzirog3xxxxx
   */
  identityProviderId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The last update time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1762309642177
   */
  updateTime?: number;
  /**
   * @remarks
   * The external ID.
   * 
   * @example
   * user_123131xxasasa
   */
  userExternalId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * user_ue2jvisn35exxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      authnSourceType: 'AuthnSourceType',
      createTime: 'CreateTime',
      externalData: 'ExternalData',
      identityProviderId: 'IdentityProviderId',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
      userExternalId: 'UserExternalId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnSourceType: 'string',
      createTime: 'number',
      externalData: 'string',
      identityProviderId: 'string',
      instanceId: 'string',
      updateTime: 'number',
      userExternalId: 'string',
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

export class ListUserAuthnSourceMappingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of rows per page in a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned by this call.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The pagination token returned by this call.
   * 
   * @example
   * PTxxxexample
   */
  previousToken?: string;
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
   * The list of third-party account login bindings.
   */
  userAuthnSourceMappings?: ListUserAuthnSourceMappingsResponseBodyUserAuthnSourceMappings[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      userAuthnSourceMappings: 'UserAuthnSourceMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      previousToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      userAuthnSourceMappings: { 'type': 'array', 'itemType': ListUserAuthnSourceMappingsResponseBodyUserAuthnSourceMappings },
    };
  }

  validate() {
    if(Array.isArray(this.userAuthnSourceMappings)) {
      $dara.Model.validateArray(this.userAuthnSourceMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

