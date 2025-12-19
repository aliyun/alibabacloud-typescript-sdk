// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkloadIdentityRequest extends $dara.Model {
  allowedResourceOAuth2ReturnURLs?: string[];
  /**
   * @example
   * example agent
   */
  description?: string;
  /**
   * @example
   * identity-provider-okta
   */
  identityProviderName?: string;
  /**
   * @example
   * acs:ram::123456:role/agent-101-role
   */
  roleArn?: string;
  /**
   * @example
   * agent-101
   */
  workloadIdentityName?: string;
  static names(): { [key: string]: string } {
    return {
      allowedResourceOAuth2ReturnURLs: 'AllowedResourceOAuth2ReturnURLs',
      description: 'Description',
      identityProviderName: 'IdentityProviderName',
      roleArn: 'RoleArn',
      workloadIdentityName: 'WorkloadIdentityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedResourceOAuth2ReturnURLs: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      identityProviderName: 'string',
      roleArn: 'string',
      workloadIdentityName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedResourceOAuth2ReturnURLs)) {
      $dara.Model.validateArray(this.allowedResourceOAuth2ReturnURLs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

