// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAgentStorageRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * The key can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * created
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * The value can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 0woauavextilfqr61
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class CreateAgentStorageRequest extends $dara.Model {
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
   * This parameter is required.
   * 
   * @example
   * first-ins
   */
  agentStorageName?: string;
  /**
   * @remarks
   * （已弃用）智能体存储网络类型。NORMAL, VPC_CONSOLE。默认为NORMAL。
   * 
   * @example
   * VPC
   */
  network?: string;
  /**
   * @remarks
   * The list of network sources allowed for the agent storage instance. By default, all network sources are allowed. Valid values: TRUST_PROXY: console.
   */
  networkSourceACL?: string[];
  /**
   * @remarks
   * The list of network types allowed for the agent storage instance. By default, all network types are allowed. Valid values: CLASSIC: classic network. INTERNET: Internet. VPC: VPC.
   */
  networkTypeACL?: string[];
  /**
   * @remarks
   * The access control policy of the agent storage instance in JSON format. For the policy syntax, see https://www.alibabacloud.com/help/en/ram/user-guide/policy-structure-and-syntax.
   * 
   * @example
   * {
   *     "Version": "1",
   *     "Statement": [
   *         {
   *             "Action": [
   *                 "ots:*"
   *             ],
   *             "Resource": [
   *                 "acs:ots:*:13791xxxxxxxxxxx:agentstorage/myagentstorage*"
   *             ],
   *             "Principal": [
   *                 "*"
   *             ],
   *             "Effect": "Allow",
   *             "Condition": {
   *                 "StringEquals": {
   *                     "ots:TLSVersion": [
   *                         "1.2"
   *                     ]
   *                 },
   *                 "IpAddress": {
   *                     "acs:SourceIp": [
   *                         "192.168.0.1",
   *                         "198.51.100.1"
   *                     ]
   *                 }
   *             }
   *         }
   *     ]
   * }
   */
  policy?: string;
  /**
   * @remarks
   * resource group id
   * 
   * @example
   * rg-acfmxh4em5jnbcd
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * tag
   */
  tags?: CreateAgentStorageRequestTags[];
  static names(): { [key: string]: string } {
    return {
      agentStorageDescription: 'AgentStorageDescription',
      agentStorageName: 'AgentStorageName',
      network: 'Network',
      networkSourceACL: 'NetworkSourceACL',
      networkTypeACL: 'NetworkTypeACL',
      policy: 'Policy',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStorageDescription: 'string',
      agentStorageName: 'string',
      network: 'string',
      networkSourceACL: { 'type': 'array', 'itemType': 'string' },
      networkTypeACL: { 'type': 'array', 'itemType': 'string' },
      policy: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateAgentStorageRequestTags },
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

