// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ChangeResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aek3bgek3kxhyky
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The resource ID, which is the instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * first-ins
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID, which can be used to troubleshoot issues.
   * 
   * @example
   * 39871ED2-62C0-578F-A32E-B88072D5582F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstancePolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * workshop-bj-ots1
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance policy in the JSON format.
   * 
   * This parameter is required.
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
   *                         "172.16.0.1"
   *                     ]
   *                 }
   *             }
   *         }
   *     ]
   * }
   */
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      policy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstancePolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Verification passed.
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which can be used to troubleshoot issues.
   * 
   * @example
   * 757E172A-F94B-5E78-8A23-D9068E42F2E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstancePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckInstancePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckInstancePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the instance.
   * 
   * *   SSD: high-performance instance
   * *   HYBRID: capacity instance
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which can be used to troubleshoot issues.
   * 
   * @example
   * 39871ED2-62C0-578F-A32E-B88072D5582F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * instance-test
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID, which can be used to troubleshoot issues.
   * 
   * @example
   * 17827FB1-CC71-559D-BBDF-9D41534322E7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstancePolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * my-test-12345
   */
  instanceName?: string;
  /**
   * @remarks
   * The version of the instance policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  policyVersion?: number;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      policyVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstancePolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which can be used to troubleshoot issues.
   * 
   * @example
   * 3104C83E-6E82-57FB-BB88-8C64CCFDEF89
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstancePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstancePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstancePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * >  #### You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The regions.
   */
  regions?: DescribeRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The request ID, which can be used to troubleshoot issues.
   * 
   * @example
   * B37BBA04-D827-55C8-B901-5264B904E8C6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * instance-test
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The alias of the instance.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the instance. Fuzzy search is supported.
   * 
   * @example
   * instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The names of the instances. This parameter is used to specify multiple instances that you want to query at the same time.
   */
  instanceNameList?: string[];
  /**
   * @remarks
   * The maximum number of instances that you want to return. Valid values: 0 to 200. If you do not configure this parameter or set this parameter to 0, the default value of 100 is used.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start position of the query. Set this parameter to the value of the NextToken parameter that is returned from the last call. Instances are returned in lexicographical order starting from the position that is specified by this parameter. The first time you call the operation, leave this parameter empty.
   * 
   * @example
   * CAESCG15aC1xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource group ID. You can query the ID on the Resource Group page in the Resource Management console.
   * 
   * @example
   * rg-aek24upgom6p5ri
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * *   normal: The instance is running as expected.
   * *   forbidden: The instance is disabled.
   * *   Deleting: The instance is being deleted.
   * 
   * @example
   * normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      instanceNameList: 'InstanceNameList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      instanceNameList: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the instance. Fuzzy search is supported.
   * 
   * @example
   * instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The names of the instances. This parameter is used to specify multiple instances that you want to query at the same time.
   */
  instanceNameListShrink?: string;
  /**
   * @remarks
   * The maximum number of instances that you want to return. Valid values: 0 to 200. If you do not configure this parameter or set this parameter to 0, the default value of 100 is used.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start position of the query. Set this parameter to the value of the NextToken parameter that is returned from the last call. Instances are returned in lexicographical order starting from the position that is specified by this parameter. The first time you call the operation, leave this parameter empty.
   * 
   * @example
   * CAESCG15aC1xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource group ID. You can query the ID on the Resource Group page in the Resource Management console.
   * 
   * @example
   * rg-aek24upgom6p5ri
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * *   normal: The instance is running as expected.
   * *   forbidden: The instance is disabled.
   * *   Deleting: The instance is being deleted.
   * 
   * @example
   * normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      instanceNameListShrink: 'InstanceNameList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      instanceNameListShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The instances.
   */
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The token that determines the start position of the next query. If this parameter is empty, all instances that you want to query are returned.
   * 
   * @example
   * CAESCG15aC1xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID, which can be used to troubleshoot issues.
   * 
   * @example
   * E734979F-5A44-5993-9CE5-C23103576923
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The maximum number of tagged resources that you want to return. Valid values: 0 to 200. If you do not specify this parameter or set the parameter to 0, the default value of 100 is used.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken. Tagged resources are returned in lexicographical order starting from the position that is specified by this parameter.
   * 
   * @example
   * CAESCG15aC1xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource IDs, which are instance names.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the resource. valid value:
   * 
   * instance: instance
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListTagResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': ListTagResourcesRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The maximum number of tagged resources that you want to return. Valid values: 0 to 200. If you do not specify this parameter or set the parameter to 0, the default value of 100 is used.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken. Tagged resources are returned in lexicographical order starting from the position that is specified by this parameter.
   * 
   * @example
   * CAESCG15aC1xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource IDs, which are instance names.
   */
  resourceIdsShrink?: string;
  /**
   * @remarks
   * The type of the resource. valid value:
   * 
   * instance: instance
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceIdsShrink: 'ResourceIds',
      resourceType: 'ResourceType',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceIdsShrink: 'string',
      resourceType: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The maximum number of tagged resources that are returned for the query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * CAESCG15aC1xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The tags.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  /**
   * @remarks
   * The request ID, which can be used to troubleshoot issues.
   * 
   * @example
   * 31D8120C-AC52-5CA9-BE4A-E4C6316E19AD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      tagResources: 'TagResources',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The resource IDs, which are instance names.
   * 
   * This parameter is required.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the resource. valid value:
   * 
   * instance: instance
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * This parameter is required.
   */
  tags?: TagResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': TagResourcesRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID, which can be used to troubleshoot issues.
   * 
   * @example
   * 44FDC379-4443-560E-B652-9F7476D8854F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resources. Default value: false. Valid values:
   * 
   * *   true: removes all tags from the resources.
   * *   false: removes the tags that are specified by the TagKeys parameter from the resources.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The resource IDs, which are instance names.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the resource. valid value:
   * 
   * instance: instance
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys.
   */
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID, which can be used to troubleshoot issues.
   * 
   * @example
   * 26B43C99-F5C9-5341-B462-37427C5BF201
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The alias of the instance.
   * 
   * @example
   * instance-test
   */
  aliasName?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * the test instance
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The name of the instance whose information you want to update.
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
   * VPC
   */
  network?: string;
  /**
   * @remarks
   * The new sources of the network from which access is allowed. By default, all sources of networks are allowed. Valid value:
   * 
   * TRUST_PROXY: the console
   */
  networkSourceACL?: string[];
  /**
   * @remarks
   * The new types of the network from which access is allowed. By default, all types of networks are allowed. Valid values:
   * 
   * *   INTERNET: the Internet
   * *   VPC: VPCs
   * *   CLASSIC: the classic network
   */
  networkTypeACL?: string[];
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      network: 'Network',
      networkSourceACL: 'NetworkSourceACL',
      networkTypeACL: 'NetworkTypeACL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      instanceDescription: 'string',
      instanceName: 'string',
      network: 'string',
      networkSourceACL: { 'type': 'array', 'itemType': 'string' },
      networkTypeACL: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID, which can be used to troubleshoot issues.
   * 
   * @example
   * 3104C83E-6E82-57FB-BB88-8C64CCFDEF89
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceElasticVCUUpperLimitRequest extends $tea.Model {
  /**
   * @remarks
   * The upper limit for the VCUs of the instance.
   * 
   * >  Valid values of the upper limit for the VCUs of an instance: **Number of reserved VCUs+0.1 to 2000**. You can upgrade or downgrade configurations to modify the number of reserved VCUs by increments or decrements of 1. You can dynamically modify the upper limit for the VCUs of an instance by increments or decrements of 0.1
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  elasticVCUUpperLimit?: number;
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * workshop-bj-ots1
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      elasticVCUUpperLimit: 'ElasticVCUUpperLimit',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticVCUUpperLimit: 'number',
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceElasticVCUUpperLimitResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID, which can be used to troubleshoot issues.
   * 
   * @example
   * B37BBA04-D827-55C8-B901-5264B904E8C6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceElasticVCUUpperLimitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceElasticVCUUpperLimitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstanceElasticVCUUpperLimitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstancePolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * my-test-12345
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance policy in the JSON format.
   * 
   * This parameter is required.
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
   *                         "172.16.0.1"
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
   * This parameter is required.
   * 
   * @example
   * 2
   */
  policyVersion?: number;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      policy: 'Policy',
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      policy: 'string',
      policyVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstancePolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which can be used to troubleshoot issues.
   * 
   * @example
   * 31D8120C-AC52-5CA9-BE4A-E4C6316E19AD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstancePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstancePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstancePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestTags extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  /**
   * @remarks
   * The key of the region.
   * 
   * @example
   * yunjiankong.cloud.region.cn-hangzhou
   */
  i18nKey?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      i18nKey: 'I18nKey',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      i18nKey: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyTags extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $tea.Model {
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
   * 2019-04-07T09:19:21Z
   */
  createTime?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * Description of the test instance.
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The name of the instance, which is used to uniquely identify the instance.
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
   * HYBRID
   */
  instanceSpecification?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * normal
   */
  instanceStatus?: string;
  isMultiAZ?: boolean;
  /**
   * @remarks
   * The billing method.
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay as you go
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxh4em5jnbcd
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ots_standard_public_cn-g4t3igqjj002
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
   * The user ID.
   * 
   * @example
   * 13542356466
   */
  userId?: string;
  /**
   * @remarks
   * The VCU quota.
   * 
   * @example
   * 3
   */
  VCUQuota?: number;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      createTime: 'CreateTime',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      instanceSpecification: 'InstanceSpecification',
      instanceStatus: 'InstanceStatus',
      isMultiAZ: 'IsMultiAZ',
      paymentType: 'PaymentType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      SPInstanceId: 'SPInstanceId',
      storageType: 'StorageType',
      userId: 'UserId',
      VCUQuota: 'VCUQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      createTime: 'string',
      instanceDescription: 'string',
      instanceName: 'string',
      instanceSpecification: 'string',
      instanceStatus: 'string',
      isMultiAZ: 'boolean',
      paymentType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      SPInstanceId: 'string',
      storageType: 'string',
      userId: 'string',
      VCUQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTags extends $tea.Model {
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
   * The tag value.
   * 
   * @example
   * Tester
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  /**
   * @remarks
   * The resource ID, which is the instance name.
   * 
   * @example
   * instance-test
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ALIYUN::OTS::INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Owner
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Tester
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * This parameter is required.
   * 
   * @example
   * created
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * This parameter is required.
   * 
   * @example
   * job-0007z8j1omiabo5i872l
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("tablestore", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Changes the resource group to which an instance belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.newResourceGroupId)) {
      body["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/changeresourcegroup`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  /**
   * Changes the resource group to which an instance belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(request, headers, runtime);
  }

  /**
   * Checks the validity of a Resource Access Management (RAM) policy for an instance.
   * 
   * @param request - CheckInstancePolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckInstancePolicyResponse
   */
  async checkInstancePolicyWithOptions(request: CheckInstancePolicyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckInstancePolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.policy)) {
      body["Policy"] = request.policy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckInstancePolicy",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/checkinstancepolicy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CheckInstancePolicyResponse>(await this.callApi(params, req, runtime), new CheckInstancePolicyResponse({}));
  }

  /**
   * Checks the validity of a Resource Access Management (RAM) policy for an instance.
   * 
   * @param request - CheckInstancePolicyRequest
   * @returns CheckInstancePolicyResponse
   */
  async checkInstancePolicy(request: CheckInstancePolicyRequest): Promise<CheckInstancePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkInstancePolicyWithOptions(request, headers, runtime);
  }

  /**
   * Creates an instance.
   * 
   * @remarks
   *   **Before you call this operation, you must understand the billing and pricing of Tablestore. For more information, see [Billing overview](https://help.aliyun.com/document_detail/27291.html).**
   * *   Each Alibaba Cloud account can create up to 10 instances. The name of an instance must be unique within the region in which the instance resides.
   * *   After you create an instance, you cannot change the type of the instance. Proceed with caution.
   * 
   * @param request - CreateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterType)) {
      body["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.disableReplication)) {
      body["DisableReplication"] = request.disableReplication;
    }

    if (!Util.isUnset(request.instanceDescription)) {
      body["InstanceDescription"] = request.instanceDescription;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.network)) {
      body["Network"] = request.network;
    }

    if (!Util.isUnset(request.networkSourceACL)) {
      body["NetworkSourceACL"] = request.networkSourceACL;
    }

    if (!Util.isUnset(request.networkTypeACL)) {
      body["NetworkTypeACL"] = request.networkTypeACL;
    }

    if (!Util.isUnset(request.policy)) {
      body["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/createinstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  /**
   * Creates an instance.
   * 
   * @remarks
   *   **Before you call this operation, you must understand the billing and pricing of Tablestore. For more information, see [Billing overview](https://help.aliyun.com/document_detail/27291.html).**
   * *   Each Alibaba Cloud account can create up to 10 instances. The name of an instance must be unique within the region in which the instance resides.
   * *   After you create an instance, you cannot change the type of the instance. Proceed with caution.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an instance.
   * 
   * @remarks
   *   Before you delete an instance, make sure that all data tables and time series tables in the instance are deleted and virtual private clouds (VPCs) are unbound from the instance.
   * *   To prevent conflicts, do not create an instance that has the same name as the instance that is being deleted.
   * *   After an instance is deleted, the instance becomes unavailable and the tables, table data, and related indexes in the instance cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: DeleteInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstance",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/deleteinstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
  }

  /**
   * Deletes an instance.
   * 
   * @remarks
   *   Before you delete an instance, make sure that all data tables and time series tables in the instance are deleted and virtual private clouds (VPCs) are unbound from the instance.
   * *   To prevent conflicts, do not create an instance that has the same name as the instance that is being deleted.
   * *   After an instance is deleted, the instance becomes unavailable and the tables, table data, and related indexes in the instance cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a Resource Access Management (RAM) policy of an instance.
   * 
   * @remarks
   *   You cannot recover a deleted instance policy. Proceed with caution.
   * *   After you delete an instance policy, the access control that is specified by the instance policy becomes invalid. Make sure that your instance is in a secure environment.
   * 
   * @param request - DeleteInstancePolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstancePolicyResponse
   */
  async deleteInstancePolicyWithOptions(request: DeleteInstancePolicyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstancePolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.policyVersion)) {
      body["PolicyVersion"] = request.policyVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstancePolicy",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/deleteinstancepolicy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstancePolicyResponse>(await this.callApi(params, req, runtime), new DeleteInstancePolicyResponse({}));
  }

  /**
   * Deletes a Resource Access Management (RAM) policy of an instance.
   * 
   * @remarks
   *   You cannot recover a deleted instance policy. Proceed with caution.
   * *   After you delete an instance policy, the access control that is specified by the instance policy becomes invalid. Make sure that your instance is in a secure environment.
   * 
   * @param request - DeleteInstancePolicyRequest
   * @returns DeleteInstancePolicyResponse
   */
  async deleteInstancePolicy(request: DeleteInstancePolicyRequest): Promise<DeleteInstancePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstancePolicyWithOptions(request, headers, runtime);
  }

  /**
   * Queries supported regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/region/DescribeRegions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * Queries supported regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(request, headers, runtime);
  }

  /**
   * Queries instance information.
   * 
   * @param request - GetInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(request: GetInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstance",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/getinstance`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
  }

  /**
   * Queries instance information.
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Queries instances.
   * 
   * @param tmpReq - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(tmpReq: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instanceNameList)) {
      request.instanceNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceNameList, "InstanceNameList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.instanceNameListShrink)) {
      query["InstanceNameList"] = request.instanceNameListShrink;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstances",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/listinstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  /**
   * Queries instances.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * Queries tagged resources.
   * 
   * @param tmpReq - ListTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(tmpReq: ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "simple");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/listtagresources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * Queries tagged resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Adds tags to instances.
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/tagresources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Adds tags to instances.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Removes tags from resources.
   * 
   * @remarks
   * Removing tags from resources helps simplify resource management, optimize system performance, and mitigate potential security vulnerabilities. After a tag is removed from a resource, the system automatically deletes the tag if the tag is not added to other resources.
   * 
   * @param request - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      body["All"] = request.all;
    }

    if (!Util.isUnset(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKeys)) {
      body["TagKeys"] = request.tagKeys;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/untagresources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * Removes tags from resources.
   * 
   * @remarks
   * Removing tags from resources helps simplify resource management, optimize system performance, and mitigate potential security vulnerabilities. After a tag is removed from a resource, the system automatically deletes the tag if the tag is not added to other resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Updates instance information.
   * 
   * @param request - UpdateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(request: UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliasName)) {
      body["AliasName"] = request.aliasName;
    }

    if (!Util.isUnset(request.instanceDescription)) {
      body["InstanceDescription"] = request.instanceDescription;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.network)) {
      body["Network"] = request.network;
    }

    if (!Util.isUnset(request.networkSourceACL)) {
      body["NetworkSourceACL"] = request.networkSourceACL;
    }

    if (!Util.isUnset(request.networkTypeACL)) {
      body["NetworkTypeACL"] = request.networkTypeACL;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstance",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/updateinstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceResponse>(await this.callApi(params, req, runtime), new UpdateInstanceResponse({}));
  }

  /**
   * Updates instance information.
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(request: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the upper limit for the VCUs of an instance in VCU mode (formerly reserved mode).
   * 
   * @remarks
   *   **Before you call this operation, you must understand the billing and pricing of Tablestore. For more information, see [Billing overview](https://help.aliyun.com/document_detail/27291.html).**
   * *   After you enable scalability for an instance, the default upper limit for the VCUs of the instance is the sum of the scalability and the reserved VCUs.
   * *   To use more computing resources when your business grows, you can modify the upper limit for the VCUs of your instance. The new upper limit for the VCUs of your instance immediately takes effect.
   * 
   * @param request - UpdateInstanceElasticVCUUpperLimitRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceElasticVCUUpperLimitResponse
   */
  async updateInstanceElasticVCUUpperLimitWithOptions(request: UpdateInstanceElasticVCUUpperLimitRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceElasticVCUUpperLimitResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.elasticVCUUpperLimit)) {
      body["ElasticVCUUpperLimit"] = request.elasticVCUUpperLimit;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstanceElasticVCUUpperLimit",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/updateinstanceelasticvcuupperlimit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceElasticVCUUpperLimitResponse>(await this.callApi(params, req, runtime), new UpdateInstanceElasticVCUUpperLimitResponse({}));
  }

  /**
   * Modifies the upper limit for the VCUs of an instance in VCU mode (formerly reserved mode).
   * 
   * @remarks
   *   **Before you call this operation, you must understand the billing and pricing of Tablestore. For more information, see [Billing overview](https://help.aliyun.com/document_detail/27291.html).**
   * *   After you enable scalability for an instance, the default upper limit for the VCUs of the instance is the sum of the scalability and the reserved VCUs.
   * *   To use more computing resources when your business grows, you can modify the upper limit for the VCUs of your instance. The new upper limit for the VCUs of your instance immediately takes effect.
   * 
   * @param request - UpdateInstanceElasticVCUUpperLimitRequest
   * @returns UpdateInstanceElasticVCUUpperLimitResponse
   */
  async updateInstanceElasticVCUUpperLimit(request: UpdateInstanceElasticVCUUpperLimitRequest): Promise<UpdateInstanceElasticVCUUpperLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceElasticVCUUpperLimitWithOptions(request, headers, runtime);
  }

  /**
   * Modifies a Resource Access Management (RAM) policy for an instance.
   * 
   * @param request - UpdateInstancePolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstancePolicyResponse
   */
  async updateInstancePolicyWithOptions(request: UpdateInstancePolicyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstancePolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.policy)) {
      body["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.policyVersion)) {
      body["PolicyVersion"] = request.policyVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstancePolicy",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/updateinstancepolicy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstancePolicyResponse>(await this.callApi(params, req, runtime), new UpdateInstancePolicyResponse({}));
  }

  /**
   * Modifies a Resource Access Management (RAM) policy for an instance.
   * 
   * @param request - UpdateInstancePolicyRequest
   * @returns UpdateInstancePolicyResponse
   */
  async updateInstancePolicy(request: UpdateInstancePolicyRequest): Promise<UpdateInstancePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstancePolicyWithOptions(request, headers, runtime);
  }

}
