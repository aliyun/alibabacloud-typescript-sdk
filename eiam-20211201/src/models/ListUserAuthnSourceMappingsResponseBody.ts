// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserAuthnSourceMappingsResponseBodyUserAuthnSourceMappings extends $dara.Model {
  /**
   * @remarks
   * The authentication source type.
   * 
   * @example
   * urn:alibaba:idaas:authntype:oidc
   */
  authnSourceType?: string;
  /**
   * @remarks
   * The time when the binding was created.
   * 
   * @example
   * 1762309642177
   */
  createTime?: number;
  /**
   * @remarks
   * Information about the associated third-party account.
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
   * The time when the binding was last updated.
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
   * xxxxxx
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
   * The maximum number of entries returned on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The token to retrieve the previous page of results.
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
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * A list of bindings for third-party account logons.
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

