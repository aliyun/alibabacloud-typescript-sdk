// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkloadIdentityRequest extends $dara.Model {
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
      allowedResourceOAuth2ReturnURLs: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      identityProviderName: 'string',
      roleArn: 'string',
      sessionBindingEnabled: 'string',
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

