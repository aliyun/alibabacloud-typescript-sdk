// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAgentStorageRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. The key can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * created
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. The value can be up to 64 characters in length.
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
   * The description of the agent storage. The description must be 3 to 256 characters in length.
   * 
   * @example
   * description for agent storage
   */
  agentStorageDescription?: string;
  /**
   * @remarks
   * The name of the agent storage. The naming conventions are as follows:
   * - The name can contain only letters, digits, and hyphens (-).
   * - The name must start with a letter.
   * - The name cannot end with a hyphen (-).
   * - The name is case-insensitive.
   * - The name must be 3 to 16 characters in length.
   * - The name cannot contain the following words: ali, ay, ots, taobao, or admin.
   * 
   * This parameter is required.
   * 
   * @example
   * first-agent
   */
  agentStorageName?: string;
  /**
   * @remarks
   * (Deprecated) The network type of the agent storage. Valid values: NORMAL and VPC_CONSOLE. Default value: NORMAL.
   * 
   * @example
   * VPC
   */
  network?: string;
  /**
   * @remarks
   * The list of allowed network sources for the agent storage. All sources are allowed by default. Valid values:
   * - TRUST_PROXY: console.
   */
  networkSourceACL?: string[];
  /**
   * @remarks
   * The list of allowed network types for the agent storage. All types are allowed by default. Valid values:
   * - CLASSIC: classic network.
   * - INTERNET: public network.
   * - VPC: VPC network.
   */
  networkTypeACL?: string[];
  /**
   * @remarks
   * The access control policy for the agent storage in JSON format. For the syntax, see https://www.alibabacloud.com/help/en/ram/user-guide/policy-structure-and-syntax.
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmxh4em5jnbcd
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
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

