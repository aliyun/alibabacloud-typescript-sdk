// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentStorageResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Owner
   */
  key?: string;
  /**
   * @remarks
   * (Deprecated) The tag key.
   * 
   * @example
   * keyTestA
   */
  tagKey?: string;
  /**
   * @remarks
   * (Deprecated) The tag value.
   * 
   * @example
   * 00004a20240452b0
   */
  tagValue?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Tester
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      tagKey: 'string',
      tagValue: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentStorageResponseBody extends $dara.Model {
  /**
   * @remarks
   * agent storage description
   * 
   * @example
   * description for agent storage
   */
  agentStorageDescription?: string;
  /**
   * @remarks
   * agent storage name
   * 
   * @example
   * agent-test
   */
  agentStorageName?: string;
  /**
   * @remarks
   * The specification of the agent storage.
   * 
   * @example
   * SSD
   */
  agentStorageSpecification?: string;
  /**
   * @remarks
   * The status of the agent storage. Valid values:
   * - normal: Normal.
   * - forbidden: Disabled.
   * - deleting: Being released.
   * 
   * @example
   * normal
   */
  agentStorageStatus?: string;
  /**
   * @remarks
   * The alias of the agent storage.
   * 
   * @example
   * agent-test
   */
  aliasName?: string;
  /**
   * @remarks
   * The time when the agent storage was created.
   * 
   * @example
   * 2019-12-23T07:24:33Z
   */
  createTime?: string;
  /**
   * @remarks
   * The list of network sources allowed for the agent storage. TRUST_PROXY: console.
   */
  networkSourceACL?: string[];
  /**
   * @remarks
   * The list of network types allowed for the agent storage. CLASSIC: classic network. INTERNET: Internet. VPC: VPC network.
   */
  networkTypeACL?: string[];
  /**
   * @remarks
   * The access control policy of the agent storage.
   * 
   * @example
   * drop
   */
  policy?: string;
  /**
   * @remarks
   * The version of the agent storage policy.
   * 
   * @example
   * 1
   */
  policyVersion?: number;
  /**
   * @remarks
   * The region ID of the agent storage.
   * 
   * @example
   * cn-chengdu
   */
  regionId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3104C83E-6E82-57FB-BB88-8C64CCFDEF89
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxh4em5jncda
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the agent storage.
   */
  tags?: GetAgentStorageResponseBodyTags[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 16542312566
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentStorageDescription: 'AgentStorageDescription',
      agentStorageName: 'AgentStorageName',
      agentStorageSpecification: 'AgentStorageSpecification',
      agentStorageStatus: 'AgentStorageStatus',
      aliasName: 'AliasName',
      createTime: 'CreateTime',
      networkSourceACL: 'NetworkSourceACL',
      networkTypeACL: 'NetworkTypeACL',
      policy: 'Policy',
      policyVersion: 'PolicyVersion',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStorageDescription: 'string',
      agentStorageName: 'string',
      agentStorageSpecification: 'string',
      agentStorageStatus: 'string',
      aliasName: 'string',
      createTime: 'string',
      networkSourceACL: { 'type': 'array', 'itemType': 'string' },
      networkTypeACL: { 'type': 'array', 'itemType': 'string' },
      policy: 'string',
      policyVersion: 'number',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': GetAgentStorageResponseBodyTags },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkSourceACL)) {
      $dara.Model.validateArray(this.networkSourceACL);
    }
    if(Array.isArray(this.networkTypeACL)) {
      $dara.Model.validateArray(this.networkTypeACL);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

