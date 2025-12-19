// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkloadIdentitiesResponseBodyWorkloadIdentities extends $dara.Model {
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
  identityProviderName?: string;
  /**
   * @example
   * acs:ram::1953507478506681:role/test-rrsa-cb5ca90a20f854671adbac6ed4559a654
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

export class ListWorkloadIdentitiesResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAcCoknY19uiBwPrAe1W7XMikkA6+rCQddIGHccphiDPypD8zCxQkHV2pg8CkZvyRKg==
   */
  nextToken?: string;
  /**
   * @example
   * 173C69C9-9C07-5B25-9477-603A33E5DA32
   */
  requestId?: string;
  /**
   * @example
   * 33
   */
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

