// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

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

export class DescribeRegionsResponseBodyRegions extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListInstancesRequestTag extends $dara.Model {
  key?: string;
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

export class ListInstancesResponseBodyInstances extends $dara.Model {
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
   * *   normal: The instance works as expected.
   * *   forbidden: The instance is disabled.
   * *   deleting: The instance is being deleted.
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
   * The instance ID.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTags extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTags extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstancePolicyRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstancePolicyResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstancePolicyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
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

export class CreateInstanceResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstancePolicyRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstancePolicyResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstancePolicyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceRequest extends $dara.Model {
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

export class GetInstanceResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $dara.Model {
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
   * @example
   * normal
   */
  status?: string;
  tag?: ListInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      instanceNameList: 'InstanceNameList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
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
      tag: { 'type': 'array', 'itemType': ListInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.instanceNameList)) {
      $dara.Model.validateArray(this.instanceNameList);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesShrinkRequest extends $dara.Model {
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
   * @example
   * normal
   */
  status?: string;
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      instanceNameListShrink: 'InstanceNameList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tagShrink: 'Tag',
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
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the instances.
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

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
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

export class ListTagResourcesShrinkRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
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

export class TagResourcesResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resources. Default value: false.
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

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.networkSourceACL)) {
      $dara.Model.validateArray(this.networkSourceACL);
    }
    if(Array.isArray(this.networkTypeACL)) {
      $dara.Model.validateArray(this.networkTypeACL);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceElasticVCUUpperLimitRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceElasticVCUUpperLimitResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceElasticVCUUpperLimitResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstancePolicyRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstancePolicyResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstancePolicyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("tablestore", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Changes the resource group to which an instance belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      body["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
    } else {
      return $dara.cast<ChangeResourceGroupResponse>(await this.execute(params, req, runtime), new ChangeResourceGroupResponse({}));
    }

  }

  /**
   * Changes the resource group to which an instance belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async checkInstancePolicyWithOptions(request: CheckInstancePolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CheckInstancePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.policy)) {
      body["Policy"] = request.policy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckInstancePolicyResponse>(await this.callApi(params, req, runtime), new CheckInstancePolicyResponse({}));
    } else {
      return $dara.cast<CheckInstancePolicyResponse>(await this.execute(params, req, runtime), new CheckInstancePolicyResponse({}));
    }

  }

  /**
   * Checks the validity of a Resource Access Management (RAM) policy for an instance.
   * 
   * @param request - CheckInstancePolicyRequest
   * @returns CheckInstancePolicyResponse
   */
  async checkInstancePolicy(request: CheckInstancePolicyRequest): Promise<CheckInstancePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createInstanceWithOptions(request: CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterType)) {
      body["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.disableReplication)) {
      body["DisableReplication"] = request.disableReplication;
    }

    if (!$dara.isNull(request.instanceDescription)) {
      body["InstanceDescription"] = request.instanceDescription;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.network)) {
      body["Network"] = request.network;
    }

    if (!$dara.isNull(request.networkSourceACL)) {
      body["NetworkSourceACL"] = request.networkSourceACL;
    }

    if (!$dara.isNull(request.networkTypeACL)) {
      body["NetworkTypeACL"] = request.networkTypeACL;
    }

    if (!$dara.isNull(request.policy)) {
      body["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
    } else {
      return $dara.cast<CreateInstanceResponse>(await this.execute(params, req, runtime), new CreateInstanceResponse({}));
    }

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
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteInstanceWithOptions(request: DeleteInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
    } else {
      return $dara.cast<DeleteInstanceResponse>(await this.execute(params, req, runtime), new DeleteInstanceResponse({}));
    }

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
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteInstancePolicyWithOptions(request: DeleteInstancePolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteInstancePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.policyVersion)) {
      body["PolicyVersion"] = request.policyVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteInstancePolicyResponse>(await this.callApi(params, req, runtime), new DeleteInstancePolicyResponse({}));
    } else {
      return $dara.cast<DeleteInstancePolicyResponse>(await this.execute(params, req, runtime), new DeleteInstancePolicyResponse({}));
    }

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
    let runtime = new $dara.RuntimeOptions({ });
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
  async describeRegionsWithOptions(request: DescribeRegionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeRegionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
    } else {
      return $dara.cast<DescribeRegionsResponse>(await this.execute(params, req, runtime), new DescribeRegionsResponse({}));
    }

  }

  /**
   * Queries supported regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getInstanceWithOptions(request: GetInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
    } else {
      return $dara.cast<GetInstanceResponse>(await this.execute(params, req, runtime), new GetInstanceResponse({}));
    }

  }

  /**
   * Queries instance information.
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listInstancesWithOptions(tmpReq: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstancesResponse> {
    tmpReq.validate();
    let request = new ListInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceNameList)) {
      request.instanceNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceNameList, "InstanceNameList", "simple");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceNameListShrink)) {
      query["InstanceNameList"] = request.instanceNameListShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
    } else {
      return $dara.cast<ListInstancesResponse>(await this.execute(params, req, runtime), new ListInstancesResponse({}));
    }

  }

  /**
   * Queries instances.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listTagResourcesWithOptions(tmpReq: ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    tmpReq.validate();
    let request = new ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "simple");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $dara.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * Queries tagged resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async tagResourcesWithOptions(request: TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $dara.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
   * Adds tags to instances.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async untagResourcesWithOptions(request: UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      body["All"] = request.all;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKeys)) {
      body["TagKeys"] = request.tagKeys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    } else {
      return $dara.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
    }

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
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateInstanceWithOptions(request: UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliasName)) {
      body["AliasName"] = request.aliasName;
    }

    if (!$dara.isNull(request.instanceDescription)) {
      body["InstanceDescription"] = request.instanceDescription;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.network)) {
      body["Network"] = request.network;
    }

    if (!$dara.isNull(request.networkSourceACL)) {
      body["NetworkSourceACL"] = request.networkSourceACL;
    }

    if (!$dara.isNull(request.networkTypeACL)) {
      body["NetworkTypeACL"] = request.networkTypeACL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateInstanceResponse>(await this.callApi(params, req, runtime), new UpdateInstanceResponse({}));
    } else {
      return $dara.cast<UpdateInstanceResponse>(await this.execute(params, req, runtime), new UpdateInstanceResponse({}));
    }

  }

  /**
   * Updates instance information.
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(request: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateInstanceElasticVCUUpperLimitWithOptions(request: UpdateInstanceElasticVCUUpperLimitRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateInstanceElasticVCUUpperLimitResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elasticVCUUpperLimit)) {
      body["ElasticVCUUpperLimit"] = request.elasticVCUUpperLimit;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateInstanceElasticVCUUpperLimitResponse>(await this.callApi(params, req, runtime), new UpdateInstanceElasticVCUUpperLimitResponse({}));
    } else {
      return $dara.cast<UpdateInstanceElasticVCUUpperLimitResponse>(await this.execute(params, req, runtime), new UpdateInstanceElasticVCUUpperLimitResponse({}));
    }

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
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateInstancePolicyWithOptions(request: UpdateInstancePolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateInstancePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.policy)) {
      body["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.policyVersion)) {
      body["PolicyVersion"] = request.policyVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateInstancePolicyResponse>(await this.callApi(params, req, runtime), new UpdateInstancePolicyResponse({}));
    } else {
      return $dara.cast<UpdateInstancePolicyResponse>(await this.execute(params, req, runtime), new UpdateInstancePolicyResponse({}));
    }

  }

  /**
   * Modifies a Resource Access Management (RAM) policy for an instance.
   * 
   * @param request - UpdateInstancePolicyRequest
   * @returns UpdateInstancePolicyResponse
   */
  async updateInstancePolicy(request: UpdateInstancePolicyRequest): Promise<UpdateInstancePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstancePolicyWithOptions(request, headers, runtime);
  }

}
