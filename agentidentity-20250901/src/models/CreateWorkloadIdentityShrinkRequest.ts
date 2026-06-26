// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkloadIdentityShrinkRequest extends $dara.Model {
  allowedResourceOAuth2ReturnURLsShrink?: string;
  createRAMRole?: boolean;
  description?: string;
  identityProviderName?: string;
  roleArn?: string;
  sessionBindingEnabled?: boolean;
  sourceAgentArn?: string;
  sourcePlatform?: string;
  workloadIdentityName?: string;
  static names(): { [key: string]: string } {
    return {
      allowedResourceOAuth2ReturnURLsShrink: 'AllowedResourceOAuth2ReturnURLs',
      createRAMRole: 'CreateRAMRole',
      description: 'Description',
      identityProviderName: 'IdentityProviderName',
      roleArn: 'RoleArn',
      sessionBindingEnabled: 'SessionBindingEnabled',
      sourceAgentArn: 'SourceAgentArn',
      sourcePlatform: 'SourcePlatform',
      workloadIdentityName: 'WorkloadIdentityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedResourceOAuth2ReturnURLsShrink: 'string',
      createRAMRole: 'boolean',
      description: 'string',
      identityProviderName: 'string',
      roleArn: 'string',
      sessionBindingEnabled: 'boolean',
      sourceAgentArn: 'string',
      sourcePlatform: 'string',
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

