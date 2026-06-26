// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkloadIdentitiesResponseBodyWorkloadIdentities extends $dara.Model {
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

export class ListWorkloadIdentitiesResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  workloadIdentities?: ListWorkloadIdentitiesResponseBodyWorkloadIdentities[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      workloadIdentities: 'WorkloadIdentities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      workloadIdentities: { 'type': 'array', 'itemType': ListWorkloadIdentitiesResponseBodyWorkloadIdentities },
    };
  }

  validate() {
    if(Array.isArray(this.workloadIdentities)) {
      $dara.Model.validateArray(this.workloadIdentities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

