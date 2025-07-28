// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag
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
   * 333
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

export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance alias.
   * 
   * @example
   * instance-test
   */
  aliasName?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2019-12-23T07:24:33Z
   */
  createTime?: string;
  /**
   * @remarks
   * The upper limit for the VCUs of the instance.
   * 
   * @example
   * 6
   */
  elasticVCUUpperLimit?: number;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * Description of the test instance.
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * instance-test
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * *   SSD: high-performance instance
   * *   HYBRID: capacity instance
   * 
   * @example
   * SSD
   */
  instanceSpecification?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * *   normal: The instance works as expected.
   * *   forbidden: The instance is disabled.
   * *   Deleting: The instance is being deleted.
   * 
   * @example
   * normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * Indicates whether zone-redundant storage (ZRS) is enabled for the instance.
   * 
   * *   true: ZRS is enabled for the instance.
   * *   false: Locally redundant storage (LRS) is enabled for the instance.
   * 
   * @example
   * true
   */
  isMultiAZ?: boolean;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   VPC: The instance can be accessed only over the bound virtual private clouds (VPCs).
   * *   VPC_CONSOLE: The instance can be accessed from the Tablestore console or over the bound VPCs.
   * *   NORMAL: The instance can be accessed from networks of the custom types.
   * 
   * @example
   * VPC
   */
  network?: string;
  /**
   * @remarks
   * The sources of the network from which access is allowed. Valid value:
   * 
   * TRUST_PROXY: console
   */
  networkSourceACL?: string[];
  /**
   * @remarks
   * The types of the network from which access is allowed. Valid values:
   * 
   * *   CLASSIC: the classic network
   * *   INTERNET: the Internet
   * *   VPC: VPCs
   */
  networkTypeACL?: string[];
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay-as-you-go
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The instance policy.
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
   * The version of the instance policy.
   * 
   * @example
   * 1
   */
  policyVersion?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-chengdu
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID, which can be used to troubleshoot issues.
   * 
   * @example
   * 757E172A-F94B-5E78-8A23-D9068E42F2E9
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmxh4em5jncda
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ots_standard_public_cn-9lb34u7u5001
   */
  SPInstanceId?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * *   SSD: high-performance
   * *   HYBRID: capacity
   * 
   * @example
   * HYBRID
   */
  storageType?: string;
  /**
   * @remarks
   * The total number of tables in the instance.
   * 
   * @example
   * 100
   */
  tableQuota?: number;
  /**
   * @remarks
   * The tags of the instance.
   */
  tags?: GetInstanceResponseBodyTags[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 16542312566
   */
  userId?: string;
  /**
   * @remarks
   * The VCU quota.
   * 
   * @example
   * 20
   */
  VCUQuota?: number;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      createTime: 'CreateTime',
      elasticVCUUpperLimit: 'ElasticVCUUpperLimit',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      instanceSpecification: 'InstanceSpecification',
      instanceStatus: 'InstanceStatus',
      isMultiAZ: 'IsMultiAZ',
      network: 'Network',
      networkSourceACL: 'NetworkSourceACL',
      networkTypeACL: 'NetworkTypeACL',
      paymentType: 'PaymentType',
      policy: 'Policy',
      policyVersion: 'PolicyVersion',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      SPInstanceId: 'SPInstanceId',
      storageType: 'StorageType',
      tableQuota: 'TableQuota',
      tags: 'Tags',
      userId: 'UserId',
      VCUQuota: 'VCUQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      createTime: 'string',
      elasticVCUUpperLimit: 'number',
      instanceDescription: 'string',
      instanceName: 'string',
      instanceSpecification: 'string',
      instanceStatus: 'string',
      isMultiAZ: 'boolean',
      network: 'string',
      networkSourceACL: { 'type': 'array', 'itemType': 'string' },
      networkTypeACL: { 'type': 'array', 'itemType': 'string' },
      paymentType: 'string',
      policy: 'string',
      policyVersion: 'number',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      SPInstanceId: 'string',
      storageType: 'string',
      tableQuota: 'number',
      tags: { 'type': 'array', 'itemType': GetInstanceResponseBodyTags },
      userId: 'string',
      VCUQuota: 'number',
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

