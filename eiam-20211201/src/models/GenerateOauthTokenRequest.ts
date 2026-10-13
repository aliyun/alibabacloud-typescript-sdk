// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateOauthTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The audience identifier of the resource server.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com
   */
  audience?: string;
  /**
   * @remarks
   * The grant type.
   * 
   * @example
   * client_credentials
   */
  grantType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The requested token type.
   * 
   * @example
   * urn:ietf:params:oauth:token-type:access_token
   */
  requestedTokenType?: string;
  /**
   * @remarks
   * The permission scope.
   * 
   * This parameter is required.
   */
  scopeValues?: string[];
  /**
   * @remarks
   * The subject token.
   * 
   * @example
   * subject001
   */
  subjectToken?: string;
  /**
   * @remarks
   * The subject token type.
   * 
   * @example
   * urn:ietf:params:oauth:token-type:access_token
   */
  subjectTokenType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      audience: 'Audience',
      grantType: 'GrantType',
      instanceId: 'InstanceId',
      requestedTokenType: 'RequestedTokenType',
      scopeValues: 'ScopeValues',
      subjectToken: 'SubjectToken',
      subjectTokenType: 'SubjectTokenType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      audience: 'string',
      grantType: 'string',
      instanceId: 'string',
      requestedTokenType: 'string',
      scopeValues: { 'type': 'array', 'itemType': 'string' },
      subjectToken: 'string',
      subjectTokenType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scopeValues)) {
      $dara.Model.validateArray(this.scopeValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

