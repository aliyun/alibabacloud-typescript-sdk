// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateOauthTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com
   */
  audience?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scopeValues?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      audience: 'Audience',
      instanceId: 'InstanceId',
      scopeValues: 'ScopeValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      audience: 'string',
      instanceId: 'string',
      scopeValues: { 'type': 'array', 'itemType': 'string' },
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

