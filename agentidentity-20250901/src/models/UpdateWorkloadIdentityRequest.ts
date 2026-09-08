// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkloadIdentityRequest extends $dara.Model {
  allowedConsentCallbackURLs?: string[];
  /**
   * **if can be null:**
   * false
   */
  allowedResourceOAuth2ReturnURLs?: string[];
  description?: string;
  identityProviderName?: string;
  roleArn?: string;
  sessionBindingEnabled?: string;
  workloadIdentityName?: string;
  static names(): { [key: string]: string } {
    return {
      allowedConsentCallbackURLs: 'AllowedConsentCallbackURLs',
      allowedResourceOAuth2ReturnURLs: 'AllowedResourceOAuth2ReturnURLs',
      description: 'Description',
      identityProviderName: 'IdentityProviderName',
      roleArn: 'RoleArn',
      sessionBindingEnabled: 'SessionBindingEnabled',
      workloadIdentityName: 'WorkloadIdentityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedConsentCallbackURLs: { 'type': 'array', 'itemType': 'string' },
      allowedResourceOAuth2ReturnURLs: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      identityProviderName: 'string',
      roleArn: 'string',
      sessionBindingEnabled: 'string',
      workloadIdentityName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedConsentCallbackURLs)) {
      $dara.Model.validateArray(this.allowedConsentCallbackURLs);
    }
    if(Array.isArray(this.allowedResourceOAuth2ReturnURLs)) {
      $dara.Model.validateArray(this.allowedResourceOAuth2ReturnURLs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

