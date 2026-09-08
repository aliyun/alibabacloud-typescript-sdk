// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkloadIdentityShrinkRequest extends $dara.Model {
  allowedConsentCallbackURLsShrink?: string;
  /**
   * **if can be null:**
   * false
   */
  allowedResourceOAuth2ReturnURLsShrink?: string;
  description?: string;
  identityProviderName?: string;
  roleArn?: string;
  sessionBindingEnabled?: string;
  workloadIdentityName?: string;
  static names(): { [key: string]: string } {
    return {
      allowedConsentCallbackURLsShrink: 'AllowedConsentCallbackURLs',
      allowedResourceOAuth2ReturnURLsShrink: 'AllowedResourceOAuth2ReturnURLs',
      description: 'Description',
      identityProviderName: 'IdentityProviderName',
      roleArn: 'RoleArn',
      sessionBindingEnabled: 'SessionBindingEnabled',
      workloadIdentityName: 'WorkloadIdentityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedConsentCallbackURLsShrink: 'string',
      allowedResourceOAuth2ReturnURLsShrink: 'string',
      description: 'string',
      identityProviderName: 'string',
      roleArn: 'string',
      sessionBindingEnabled: 'string',
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

