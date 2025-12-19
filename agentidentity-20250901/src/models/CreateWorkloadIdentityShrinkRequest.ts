// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkloadIdentityShrinkRequest extends $dara.Model {
  allowedResourceOAuth2ReturnURLsShrink?: string;
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
      allowedResourceOAuth2ReturnURLsShrink: 'AllowedResourceOAuth2ReturnURLs',
      description: 'Description',
      identityProviderName: 'IdentityProviderName',
      roleArn: 'RoleArn',
      workloadIdentityName: 'WorkloadIdentityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedResourceOAuth2ReturnURLsShrink: 'string',
      description: 'string',
      identityProviderName: 'string',
      roleArn: 'string',
      workloadIdentityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

