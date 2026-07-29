// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthenticationTokensResponseBodyEntities extends $dara.Model {
  /**
   * @remarks
   * Authentication token ID.
   * 
   * @example
   * atntkn_01kqflm0sxxx8nmdc1cb5dskxxxxx
   */
  authenticationTokenId?: string;
  /**
   * @remarks
   * Authentication token type. Valid values:
   * 
   * - jwt: JWT authentication token
   * 
   * - oauth_access_token: OAuth Access Token authentication token
   * 
   * @example
   * jwt
   */
  authenticationTokenType?: string;
  /**
   * @remarks
   * ID of the authentication token consumer.
   * 
   * @example
   * test_jwt_subject
   */
  consumerId?: string;
  /**
   * @remarks
   * Type of the authentication token consumer. Valid values:
   * 
   * - application: Application
   * 
   * - custom: Custom type
   * 
   * @example
   * custom
   */
  consumerType?: string;
  /**
   * @remarks
   * Creation time of the authentication token, as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @remarks
   * ID of the authentication token creator.
   * 
   * @example
   * app_ngtkgrrxxxxktg5eao6z4xxxxx
   */
  creatorId?: string;
  /**
   * @remarks
   * Type of the authentication token creator. Valid values:
   * 
   * - application: Application
   * 
   * @example
   * application
   */
  creatorType?: string;
  /**
   * @remarks
   * Credential provider ID.
   * 
   * @example
   * atp_01kr2cmj5gxxx4fvmls2e93dxxxxx
   */
  credentialProviderId?: string;
  /**
   * @remarks
   * Expiration time of the authentication token, as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1772693568000
   */
  expirationTime?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the authentication token is revoked.
   * 
   * @example
   * false
   */
  revoked?: boolean;
  /**
   * @remarks
   * Last update time of the authentication token, as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830225000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      authenticationTokenId: 'authenticationTokenId',
      authenticationTokenType: 'authenticationTokenType',
      consumerId: 'consumerId',
      consumerType: 'consumerType',
      createTime: 'createTime',
      creatorId: 'creatorId',
      creatorType: 'creatorType',
      credentialProviderId: 'credentialProviderId',
      expirationTime: 'expirationTime',
      instanceId: 'instanceId',
      revoked: 'revoked',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationTokenId: 'string',
      authenticationTokenType: 'string',
      consumerId: 'string',
      consumerType: 'string',
      createTime: 'number',
      creatorId: 'string',
      creatorType: 'string',
      credentialProviderId: 'string',
      expirationTime: 'number',
      instanceId: 'string',
      revoked: 'boolean',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthenticationTokensResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of resource entities.
   */
  entities?: ListAuthenticationTokensResponseBodyEntities[];
  /**
   * @remarks
   * Maximum number of records returned in this query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Token returned by this call. Use it for the next paged query to get the next page.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * Total number of resource entities that match the query criteria.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      entities: 'entities',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: { 'type': 'array', 'itemType': ListAuthenticationTokensResponseBodyEntities },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.entities)) {
      $dara.Model.validateArray(this.entities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

