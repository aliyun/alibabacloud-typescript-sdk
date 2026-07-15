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
  requestedTokenType?: string;
  /**
   * @remarks
   * The permission scopes.
   * 
   * This parameter is required.
   */
  scopeValues?: string[];
  subjectToken?: string;
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

