// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkloadIdentityResponseBodyWorkloadIdentity extends $dara.Model {
  allowedResourceOAuth2ReturnURLs?: string[];
  /**
   * @example
   * 2025-12-18T06:19:17Z
   */
  createTime?: string;
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
   * 2025-12-18T06:19:17Z
   */
  updateTime?: string;
  /**
   * @example
   * acs:agentidentity:cn-beijing:123456:workloadidentitydirectory/default/workloadidentity/agent-101
   */
  workloadIdentityArn?: string;
  /**
   * @example
   * agent-101
   */
  workloadIdentityName?: string;
  static names(): { [key: string]: string } {
    return {
      allowedResourceOAuth2ReturnURLs: 'AllowedResourceOAuth2ReturnURLs',
      createTime: 'CreateTime',
      description: 'Description',
      identityProviderName: 'IdentityProviderName',
      roleArn: 'RoleArn',
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

export class CreateWorkloadIdentityResponseBody extends $dara.Model {
  /**
   * @example
   * D325DF9D-7CA8-5C47-BA0C-9A74873F2BE3
   */
  requestId?: string;
  workloadIdentity?: CreateWorkloadIdentityResponseBodyWorkloadIdentity;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workloadIdentity: 'WorkloadIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workloadIdentity: CreateWorkloadIdentityResponseBodyWorkloadIdentity,
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

