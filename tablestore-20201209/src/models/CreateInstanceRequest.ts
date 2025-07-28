// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * p_instance
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 64 characters in length.
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

export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * SSD
   */
  clusterType?: string;
  /**
   * @remarks
   * (Deprecated) Specifies whether to enable disaster recovery for the instance.
   * 
   * Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  disableReplication?: boolean;
  /**
   * @remarks
   * The description of the instance. The instance description must be 3 to 256 characters in length.
   * 
   * @example
   * the test instance
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The name of the instance. Instance naming conventions:
   * 
   * *   The name can contain only letters, digits, and hyphens (-).
   * *   The name must start with a letter.
   * *   The name cannot end with a hyphen (-).
   * *   The name is case-insensitive.
   * *   The name must be 3 to 16 characters in length.
   * *   The name cannot contain the following words: ali, ay, ots, taobao, and admin.
   * 
   * This parameter is required.
   * 
   * @example
   * instance-test
   */
  instanceName?: string;
  /**
   * @remarks
   * (Deprecated) The network type of the instance. Valid values: NORMAL and VPC_CONSOLE. Default value: NORMAL.
   * 
   * @example
   * NORMAL
   */
  network?: string;
  /**
   * @remarks
   * The types of the source from which access is allowed. By default, the following source type is allowed:
   * 
   * TRUST_PROXY: console
   */
  networkSourceACL?: string[];
  /**
   * @remarks
   * The types of the network from which access is allowed. By default, the following network types are allowed:
   * 
   * *   INTERNET: Internet
   * *   VPC: virtual private cloud (VPC)
   * *   CLASSIC: classic network
   */
  networkTypeACL?: string[];
  /**
   * @remarks
   * The instance policy in the JSON format.
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
   *                 "acs:ots:*:13791xxxxxxxxxxx:instance/myinstance*"
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
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmxh4em5jnbcd
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: CreateInstanceRequestTags[];
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      disableReplication: 'DisableReplication',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
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
      clusterType: 'string',
      disableReplication: 'boolean',
      instanceDescription: 'string',
      instanceName: 'string',
      network: 'string',
      networkSourceACL: { 'type': 'array', 'itemType': 'string' },
      networkTypeACL: { 'type': 'array', 'itemType': 'string' },
      policy: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateInstanceRequestTags },
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

