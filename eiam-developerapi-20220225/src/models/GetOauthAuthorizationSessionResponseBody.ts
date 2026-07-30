// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOAuthAuthorizationSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authentication token ID.
   * 
   * @example
   * atntkn_01l6lot7o4e4r77oelp6qtuxxxxx
   */
  authenticationTokenId?: string;
  /**
   * @remarks
   * The user authorization URL.
   * 
   * @example
   * https://login.dingtalk.com/oauth2/auth?client_id=...
   */
  authorizationUrl?: string;
  /**
   * @remarks
   * The authentication token consumer ID.
   * 
   * @example
   * app_ngtkgrrxxxxktg5eao6z4xxxxx
   */
  consumerId?: string;
  /**
   * @remarks
   * The authentication token consumer type.
   * 
   * @example
   * application
   */
  consumerType?: string;
  /**
   * @remarks
   * The authentication token creator ID.
   * 
   * @example
   * app_ngtkgrrxxxxktg5eao6z4xxxxx
   */
  creatorId?: string;
  /**
   * @remarks
   * The authentication token creator type.
   * 
   * @example
   * application
   */
  creatorType?: string;
  /**
   * @remarks
   * The credential provider business identifier.
   * 
   * @example
   * test_example_identifier
   */
  credentialProviderIdentifier?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * access_denied
   */
  errorCode?: string;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * The user denied the authorization request
   */
  errorDescription?: string;
  /**
   * @remarks
   * The authentication token expiration time. UNIX timestamp in milliseconds.
   * 
   * @example
   * 1704153600000
   */
  expirationTime?: number;
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
   * The authorization session ID.
   * 
   * @example
   * atpoas_01l6losojlojbbv01adsq56xxxxx
   */
  sessionId?: string;
  /**
   * @remarks
   * The authorization session status.
   * 
   * @example
   * pending
   */
  sessionStatus?: string;
  /**
   * @remarks
   * The authorization session URI.
   * 
   * @example
   * urn:ietf:params:oauth:request_uri:atpoas_01l6ljnvrpc5niakl3gj3amxxxxxx
   */
  sessionUri?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationTokenId: 'authenticationTokenId',
      authorizationUrl: 'authorizationUrl',
      consumerId: 'consumerId',
      consumerType: 'consumerType',
      creatorId: 'creatorId',
      creatorType: 'creatorType',
      credentialProviderIdentifier: 'credentialProviderIdentifier',
      errorCode: 'errorCode',
      errorDescription: 'errorDescription',
      expirationTime: 'expirationTime',
      instanceId: 'instanceId',
      sessionId: 'sessionId',
      sessionStatus: 'sessionStatus',
      sessionUri: 'sessionUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationTokenId: 'string',
      authorizationUrl: 'string',
      consumerId: 'string',
      consumerType: 'string',
      creatorId: 'string',
      creatorType: 'string',
      credentialProviderIdentifier: 'string',
      errorCode: 'string',
      errorDescription: 'string',
      expirationTime: 'number',
      instanceId: 'string',
      sessionId: 'string',
      sessionStatus: 'string',
      sessionUri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

