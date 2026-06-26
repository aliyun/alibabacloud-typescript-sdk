// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkloadIdentityResponseBodyWorkloadIdentity extends $dara.Model {
  allowedResourceOAuth2ReturnURLs?: string[];
  createTime?: string;
  description?: string;
  identityProviderName?: string;
  roleArn?: string;
  sessionBindingEnabled?: boolean;
  sourceAgentArn?: string;
  sourcePlatform?: string;
  updateTime?: string;
  workloadIdentityArn?: string;
  workloadIdentityName?: string;
  static names(): { [key: string]: string } {
    return {
      allowedResourceOAuth2ReturnURLs: 'AllowedResourceOAuth2ReturnURLs',
      createTime: 'CreateTime',
      description: 'Description',
      identityProviderName: 'IdentityProviderName',
      roleArn: 'RoleArn',
      sessionBindingEnabled: 'SessionBindingEnabled',
      sourceAgentArn: 'SourceAgentArn',
      sourcePlatform: 'SourcePlatform',
      updateTime: 'UpdateTime',
      workloadIdentityArn: 'WorkloadIdentityArn',
      workloadIdentityName: 'WorkloadIdentityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedResourceOAuth2ReturnURLs: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
      identityProviderName: 'string',
      roleArn: 'string',
      sessionBindingEnabled: 'boolean',
      sourceAgentArn: 'string',
      sourcePlatform: 'string',
      updateTime: 'string',
      workloadIdentityArn: 'string',
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

export class GetWorkloadIdentityResponseBody extends $dara.Model {
  requestId?: string;
  workloadIdentity?: GetWorkloadIdentityResponseBodyWorkloadIdentity;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workloadIdentity: 'WorkloadIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workloadIdentity: GetWorkloadIdentityResponseBodyWorkloadIdentity,
    };
  }

  validate() {
    if(this.workloadIdentity && typeof (this.workloadIdentity as any).validate === 'function') {
      (this.workloadIdentity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

