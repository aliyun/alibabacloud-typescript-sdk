// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ChangeResourceGroupRequest extends $tea.Model {
  newResourceGroupId?: string;
  regionId?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  newResourceGroupId?: string;
  requestId?: string;
  success?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      newResourceGroupId: 'NewResourceGroupId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      newResourceGroupId: 'string',
      requestId: 'string',
      success: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeResourceGroupResponseBody;
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

export class ConvertPostPayOrderRequest extends $tea.Model {
  duration?: number;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertPostPayOrderResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  orderId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertPostPayOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ConvertPostPayOrderResponseBody;
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
      body: ConvertPostPayOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclRequest extends $tea.Model {
  aclOperationType?: string;
  aclResourceName?: string;
  aclResourcePatternType?: string;
  aclResourceType?: string;
  instanceId?: string;
  regionId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aclOperationType: 'AclOperationType',
      aclResourceName: 'AclResourceName',
      aclResourcePatternType: 'AclResourcePatternType',
      aclResourceType: 'AclResourceType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclOperationType: 'string',
      aclResourceName: 'string',
      aclResourcePatternType: 'string',
      aclResourceType: 'string',
      instanceId: 'string',
      regionId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAclResponseBody;
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
      body: CreateAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupRequest extends $tea.Model {
  consumerId?: string;
  instanceId?: string;
  regionId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateConsumerGroupResponseBody;
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
      body: CreateConsumerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostPayOrderRequest extends $tea.Model {
  deployType?: number;
  diskSize?: number;
  diskType?: string;
  eipMax?: number;
  ioMax?: number;
  ioMaxSpec?: string;
  regionId?: string;
  resourceGroupId?: string;
  specType?: string;
  topicQuota?: number;
  static names(): { [key: string]: string } {
    return {
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      eipMax: 'EipMax',
      ioMax: 'IoMax',
      ioMaxSpec: 'IoMaxSpec',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      specType: 'SpecType',
      topicQuota: 'TopicQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployType: 'number',
      diskSize: 'number',
      diskType: 'string',
      eipMax: 'number',
      ioMax: 'number',
      ioMaxSpec: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      specType: 'string',
      topicQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostPayOrderResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  orderId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostPayOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePostPayOrderResponseBody;
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
      body: CreatePostPayOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrePayOrderRequest extends $tea.Model {
  deployType?: number;
  diskSize?: number;
  diskType?: string;
  eipMax?: number;
  ioMax?: number;
  ioMaxSpec?: string;
  regionId?: string;
  resourceGroupId?: string;
  specType?: string;
  topicQuota?: number;
  static names(): { [key: string]: string } {
    return {
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      eipMax: 'EipMax',
      ioMax: 'IoMax',
      ioMaxSpec: 'IoMaxSpec',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      specType: 'SpecType',
      topicQuota: 'TopicQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployType: 'number',
      diskSize: 'number',
      diskType: 'string',
      eipMax: 'number',
      ioMax: 'number',
      ioMaxSpec: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      specType: 'string',
      topicQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrePayOrderResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  orderId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrePayOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePrePayOrderResponseBody;
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
      body: CreatePrePayOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSaslUserRequest extends $tea.Model {
  instanceId?: string;
  password?: string;
  regionId?: string;
  type?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      password: 'Password',
      regionId: 'RegionId',
      type: 'Type',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      password: 'string',
      regionId: 'string',
      type: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSaslUserResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSaslUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSaslUserResponseBody;
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
      body: CreateSaslUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicRequest extends $tea.Model {
  compactTopic?: boolean;
  config?: { [key: string]: any };
  instanceId?: string;
  localTopic?: boolean;
  minInsyncReplicas?: number;
  partitionNum?: string;
  regionId?: string;
  remark?: string;
  replicationFactor?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      compactTopic: 'CompactTopic',
      config: 'Config',
      instanceId: 'InstanceId',
      localTopic: 'LocalTopic',
      minInsyncReplicas: 'MinInsyncReplicas',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      remark: 'Remark',
      replicationFactor: 'ReplicationFactor',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compactTopic: 'boolean',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
      localTopic: 'boolean',
      minInsyncReplicas: 'number',
      partitionNum: 'string',
      regionId: 'string',
      remark: 'string',
      replicationFactor: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicShrinkRequest extends $tea.Model {
  compactTopic?: boolean;
  configShrink?: string;
  instanceId?: string;
  localTopic?: boolean;
  minInsyncReplicas?: number;
  partitionNum?: string;
  regionId?: string;
  remark?: string;
  replicationFactor?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      compactTopic: 'CompactTopic',
      configShrink: 'Config',
      instanceId: 'InstanceId',
      localTopic: 'LocalTopic',
      minInsyncReplicas: 'MinInsyncReplicas',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      remark: 'Remark',
      replicationFactor: 'ReplicationFactor',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compactTopic: 'boolean',
      configShrink: 'string',
      instanceId: 'string',
      localTopic: 'boolean',
      minInsyncReplicas: 'number',
      partitionNum: 'string',
      regionId: 'string',
      remark: 'string',
      replicationFactor: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTopicResponseBody;
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
      body: CreateTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclRequest extends $tea.Model {
  aclOperationType?: string;
  aclResourceName?: string;
  aclResourcePatternType?: string;
  aclResourceType?: string;
  instanceId?: string;
  regionId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aclOperationType: 'AclOperationType',
      aclResourceName: 'AclResourceName',
      aclResourcePatternType: 'AclResourcePatternType',
      aclResourceType: 'AclResourceType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclOperationType: 'string',
      aclResourceName: 'string',
      aclResourcePatternType: 'string',
      aclResourceType: 'string',
      instanceId: 'string',
      regionId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAclResponseBody;
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
      body: DeleteAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupRequest extends $tea.Model {
  consumerId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteConsumerGroupResponseBody;
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
      body: DeleteConsumerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteInstanceResponseBody;
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

export class DeleteSaslUserRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  type?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      type: 'Type',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      type: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSaslUserResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSaslUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSaslUserResponseBody;
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
      body: DeleteSaslUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTopicResponseBody;
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
      body: DeleteTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclsRequest extends $tea.Model {
  aclResourceName?: string;
  aclResourcePatternType?: string;
  aclResourceType?: string;
  instanceId?: string;
  regionId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aclResourceName: 'AclResourceName',
      aclResourcePatternType: 'AclResourcePatternType',
      aclResourceType: 'AclResourceType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclResourceName: 'string',
      aclResourcePatternType: 'string',
      aclResourceType: 'string',
      instanceId: 'string',
      regionId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclsResponseBody extends $tea.Model {
  code?: number;
  kafkaAclList?: DescribeAclsResponseBodyKafkaAclList;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      kafkaAclList: 'KafkaAclList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      kafkaAclList: DescribeAclsResponseBodyKafkaAclList,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAclsResponseBody;
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
      body: DescribeAclsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeStatusRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeStatusResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  statusList?: DescribeNodeStatusResponseBodyStatusList;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      statusList: 'StatusList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      statusList: DescribeNodeStatusResponseBodyStatusList,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeNodeStatusResponseBody;
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
      body: DescribeNodeStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSaslUsersRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSaslUsersResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  saslUserList?: DescribeSaslUsersResponseBodySaslUserList;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      saslUserList: 'SaslUserList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      saslUserList: DescribeSaslUsersResponseBodySaslUserList,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSaslUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSaslUsersResponseBody;
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
      body: DescribeSaslUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllInstanceIdListRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllInstanceIdListResponseBody extends $tea.Model {
  code?: number;
  instanceIds?: { [key: string]: any };
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceIds: 'InstanceIds',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllInstanceIdListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAllInstanceIdListResponseBody;
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
      body: GetAllInstanceIdListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowedIpListRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowedIpListResponseBody extends $tea.Model {
  allowedList?: GetAllowedIpListResponseBodyAllowedList;
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowedList: 'AllowedList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedList: GetAllowedIpListResponseBodyAllowedList,
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowedIpListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAllowedIpListResponseBody;
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
      body: GetAllowedIpListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerListRequest extends $tea.Model {
  consumerId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerListResponseBody extends $tea.Model {
  code?: number;
  consumerList?: GetConsumerListResponseBodyConsumerList;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      consumerList: 'ConsumerList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      consumerList: GetConsumerListResponseBodyConsumerList,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetConsumerListResponseBody;
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
      body: GetConsumerListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressRequest extends $tea.Model {
  consumerId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBody extends $tea.Model {
  code?: number;
  consumerProgress?: GetConsumerProgressResponseBodyConsumerProgress;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      consumerProgress: 'ConsumerProgress',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      consumerProgress: GetConsumerProgressResponseBodyConsumerProgress,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetConsumerProgressResponseBody;
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
      body: GetConsumerProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListRequest extends $tea.Model {
  instanceId?: string[];
  orderId?: string;
  regionId?: string;
  resourceGroupId?: string;
  tag?: GetInstanceListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': GetInstanceListRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBody extends $tea.Model {
  code?: number;
  instanceList?: GetInstanceListResponseBodyInstanceList;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceList: 'InstanceList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceList: GetInstanceListResponseBodyInstanceList,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceListResponseBody;
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
      body: GetInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicListRequest extends $tea.Model {
  currentPage?: string;
  instanceId?: string;
  pageSize?: string;
  regionId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      instanceId: 'string',
      pageSize: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicListResponseBody extends $tea.Model {
  code?: number;
  currentPage?: number;
  message?: string;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  topicList?: GetTopicListResponseBodyTopicList;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      topicList: 'TopicList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      currentPage: 'number',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      topicList: GetTopicListResponseBodyTopicList,
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTopicListResponseBody;
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
      body: GetTopicListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicStatusRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicStatusResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  topicStatus?: GetTopicStatusResponseBodyTopicStatus;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      topicStatus: 'TopicStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      topicStatus: GetTopicStatusResponseBodyTopicStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTopicStatusResponseBody;
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
      body: GetTopicStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagResourcesResponseBody;
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

export class ModifyInstanceNameRequest extends $tea.Model {
  instanceId?: string;
  instanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNameResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyInstanceNameResponseBody;
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
      body: ModifyInstanceNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPartitionNumRequest extends $tea.Model {
  addPartitionNum?: number;
  instanceId?: string;
  regionId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      addPartitionNum: 'AddPartitionNum',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addPartitionNum: 'number',
      instanceId: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPartitionNumResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPartitionNumResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyPartitionNumResponseBody;
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
      body: ModifyPartitionNumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTopicRemarkRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  remark?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      remark: 'Remark',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTopicRemarkResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTopicRemarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyTopicRemarkResponseBody;
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
      body: ModifyTopicRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceRequest extends $tea.Model {
  forceDeleteInstance?: boolean;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      forceDeleteInstance: 'ForceDeleteInstance',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceDeleteInstance: 'boolean',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleaseInstanceResponseBody;
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
      body: ReleaseInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRequest extends $tea.Model {
  config?: string;
  deployModule?: string;
  instanceId?: string;
  isEipInner?: boolean;
  isForceSelectedZones?: boolean;
  isSetUserAndPassword?: boolean;
  KMSKeyId?: string;
  name?: string;
  notifier?: string;
  password?: string;
  regionId?: string;
  securityGroup?: string;
  selectedZones?: string;
  serviceVersion?: string;
  userPhoneNum?: string;
  username?: string;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      deployModule: 'DeployModule',
      instanceId: 'InstanceId',
      isEipInner: 'IsEipInner',
      isForceSelectedZones: 'IsForceSelectedZones',
      isSetUserAndPassword: 'IsSetUserAndPassword',
      KMSKeyId: 'KMSKeyId',
      name: 'Name',
      notifier: 'Notifier',
      password: 'Password',
      regionId: 'RegionId',
      securityGroup: 'SecurityGroup',
      selectedZones: 'SelectedZones',
      serviceVersion: 'ServiceVersion',
      userPhoneNum: 'UserPhoneNum',
      username: 'Username',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      deployModule: 'string',
      instanceId: 'string',
      isEipInner: 'boolean',
      isForceSelectedZones: 'boolean',
      isSetUserAndPassword: 'boolean',
      KMSKeyId: 'string',
      name: 'string',
      notifier: 'string',
      password: 'string',
      regionId: 'string',
      securityGroup: 'string',
      selectedZones: 'string',
      serviceVersion: 'string',
      userPhoneNum: 'string',
      username: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartInstanceResponseBody;
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
      body: StartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TagResourcesResponseBody;
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
  all?: boolean;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
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

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UntagResourcesResponseBody;
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

export class UpdateAllowedIpRequest extends $tea.Model {
  allowedListIp?: string;
  allowedListType?: string;
  instanceId?: string;
  portRange?: string;
  regionId?: string;
  updateType?: string;
  static names(): { [key: string]: string } {
    return {
      allowedListIp: 'AllowedListIp',
      allowedListType: 'AllowedListType',
      instanceId: 'InstanceId',
      portRange: 'PortRange',
      regionId: 'RegionId',
      updateType: 'UpdateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedListIp: 'string',
      allowedListType: 'string',
      instanceId: 'string',
      portRange: 'string',
      regionId: 'string',
      updateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAllowedIpResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAllowedIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAllowedIpResponseBody;
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
      body: UpdateAllowedIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceConfigRequest extends $tea.Model {
  config?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceConfigResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateInstanceConfigResponseBody;
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
      body: UpdateInstanceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceVersionRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      targetVersion: 'TargetVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      targetVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceVersionResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpgradeInstanceVersionResponseBody;
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
      body: UpgradeInstanceVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePostPayOrderRequest extends $tea.Model {
  diskSize?: number;
  eipMax?: number;
  eipModel?: boolean;
  instanceId?: string;
  ioMax?: number;
  ioMaxSpec?: string;
  regionId?: string;
  specType?: string;
  topicQuota?: number;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      eipMax: 'EipMax',
      eipModel: 'EipModel',
      instanceId: 'InstanceId',
      ioMax: 'IoMax',
      ioMaxSpec: 'IoMaxSpec',
      regionId: 'RegionId',
      specType: 'SpecType',
      topicQuota: 'TopicQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      eipMax: 'number',
      eipModel: 'boolean',
      instanceId: 'string',
      ioMax: 'number',
      ioMaxSpec: 'string',
      regionId: 'string',
      specType: 'string',
      topicQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePostPayOrderResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePostPayOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpgradePostPayOrderResponseBody;
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
      body: UpgradePostPayOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePrePayOrderRequest extends $tea.Model {
  diskSize?: number;
  eipMax?: number;
  eipModel?: boolean;
  instanceId?: string;
  ioMax?: number;
  ioMaxSpec?: string;
  regionId?: string;
  specType?: string;
  topicQuota?: number;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      eipMax: 'EipMax',
      eipModel: 'EipModel',
      instanceId: 'InstanceId',
      ioMax: 'IoMax',
      ioMaxSpec: 'IoMaxSpec',
      regionId: 'RegionId',
      specType: 'SpecType',
      topicQuota: 'TopicQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      eipMax: 'number',
      eipModel: 'boolean',
      instanceId: 'string',
      ioMax: 'number',
      ioMaxSpec: 'string',
      regionId: 'string',
      specType: 'string',
      topicQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePrePayOrderResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePrePayOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpgradePrePayOrderResponseBody;
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
      body: UpgradePrePayOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclsResponseBodyKafkaAclListKafkaAclVO extends $tea.Model {
  aclOperationType?: string;
  aclResourceName?: string;
  aclResourcePatternType?: string;
  aclResourceType?: string;
  host?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aclOperationType: 'AclOperationType',
      aclResourceName: 'AclResourceName',
      aclResourcePatternType: 'AclResourcePatternType',
      aclResourceType: 'AclResourceType',
      host: 'Host',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclOperationType: 'string',
      aclResourceName: 'string',
      aclResourcePatternType: 'string',
      aclResourceType: 'string',
      host: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclsResponseBodyKafkaAclList extends $tea.Model {
  kafkaAclVO?: DescribeAclsResponseBodyKafkaAclListKafkaAclVO[];
  static names(): { [key: string]: string } {
    return {
      kafkaAclVO: 'KafkaAclVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kafkaAclVO: { 'type': 'array', 'itemType': DescribeAclsResponseBodyKafkaAclListKafkaAclVO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeStatusResponseBodyStatusList extends $tea.Model {
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSaslUsersResponseBodySaslUserListSaslUserVO extends $tea.Model {
  password?: string;
  type?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      type: 'Type',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      type: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSaslUsersResponseBodySaslUserList extends $tea.Model {
  saslUserVO?: DescribeSaslUsersResponseBodySaslUserListSaslUserVO[];
  static names(): { [key: string]: string } {
    return {
      saslUserVO: 'SaslUserVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saslUserVO: { 'type': 'array', 'itemType': DescribeSaslUsersResponseBodySaslUserListSaslUserVO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowedIpListResponseBodyAllowedListInternetList extends $tea.Model {
  allowedIpList?: string[];
  portRange?: string;
  static names(): { [key: string]: string } {
    return {
      allowedIpList: 'AllowedIpList',
      portRange: 'PortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedIpList: { 'type': 'array', 'itemType': 'string' },
      portRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowedIpListResponseBodyAllowedListVpcList extends $tea.Model {
  allowedIpList?: string[];
  portRange?: string;
  static names(): { [key: string]: string } {
    return {
      allowedIpList: 'AllowedIpList',
      portRange: 'PortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedIpList: { 'type': 'array', 'itemType': 'string' },
      portRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowedIpListResponseBodyAllowedList extends $tea.Model {
  deployType?: number;
  internetList?: GetAllowedIpListResponseBodyAllowedListInternetList[];
  vpcList?: GetAllowedIpListResponseBodyAllowedListVpcList[];
  static names(): { [key: string]: string } {
    return {
      deployType: 'DeployType',
      internetList: 'InternetList',
      vpcList: 'VpcList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployType: 'number',
      internetList: { 'type': 'array', 'itemType': GetAllowedIpListResponseBodyAllowedListInternetList },
      vpcList: { 'type': 'array', 'itemType': GetAllowedIpListResponseBodyAllowedListVpcList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerListResponseBodyConsumerListConsumerVOTagsTagVO extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerListResponseBodyConsumerListConsumerVOTags extends $tea.Model {
  tagVO?: GetConsumerListResponseBodyConsumerListConsumerVOTagsTagVO[];
  static names(): { [key: string]: string } {
    return {
      tagVO: 'TagVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagVO: { 'type': 'array', 'itemType': GetConsumerListResponseBodyConsumerListConsumerVOTagsTagVO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerListResponseBodyConsumerListConsumerVO extends $tea.Model {
  consumerId?: string;
  instanceId?: string;
  regionId?: string;
  remark?: string;
  tags?: GetConsumerListResponseBodyConsumerListConsumerVOTags;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      remark: 'Remark',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
      tags: GetConsumerListResponseBodyConsumerListConsumerVOTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerListResponseBodyConsumerList extends $tea.Model {
  consumerVO?: GetConsumerListResponseBodyConsumerListConsumerVO[];
  static names(): { [key: string]: string } {
    return {
      consumerVO: 'ConsumerVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerVO: { 'type': 'array', 'itemType': GetConsumerListResponseBodyConsumerListConsumerVO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetListOffsetList extends $tea.Model {
  brokerOffset?: number;
  consumerOffset?: number;
  lastTimestamp?: number;
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      brokerOffset: 'BrokerOffset',
      consumerOffset: 'ConsumerOffset',
      lastTimestamp: 'LastTimestamp',
      partition: 'Partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brokerOffset: 'number',
      consumerOffset: 'number',
      lastTimestamp: 'number',
      partition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetList extends $tea.Model {
  offsetList?: GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetListOffsetList[];
  static names(): { [key: string]: string } {
    return {
      offsetList: 'OffsetList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offsetList: { 'type': 'array', 'itemType': GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetListOffsetList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBodyConsumerProgressTopicListTopicList extends $tea.Model {
  lastTimestamp?: number;
  offsetList?: GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetList;
  topic?: string;
  totalDiff?: number;
  static names(): { [key: string]: string } {
    return {
      lastTimestamp: 'LastTimestamp',
      offsetList: 'OffsetList',
      topic: 'Topic',
      totalDiff: 'TotalDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTimestamp: 'number',
      offsetList: GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetList,
      topic: 'string',
      totalDiff: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBodyConsumerProgressTopicList extends $tea.Model {
  topicList?: GetConsumerProgressResponseBodyConsumerProgressTopicListTopicList[];
  static names(): { [key: string]: string } {
    return {
      topicList: 'TopicList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicList: { 'type': 'array', 'itemType': GetConsumerProgressResponseBodyConsumerProgressTopicListTopicList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBodyConsumerProgress extends $tea.Model {
  lastTimestamp?: number;
  topicList?: GetConsumerProgressResponseBodyConsumerProgressTopicList;
  totalDiff?: number;
  static names(): { [key: string]: string } {
    return {
      lastTimestamp: 'LastTimestamp',
      topicList: 'TopicList',
      totalDiff: 'TotalDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTimestamp: 'number',
      topicList: GetConsumerProgressResponseBodyConsumerProgressTopicList,
      totalDiff: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBodyInstanceListInstanceVOTagsTagVO extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBodyInstanceListInstanceVOTags extends $tea.Model {
  tagVO?: GetInstanceListResponseBodyInstanceListInstanceVOTagsTagVO[];
  static names(): { [key: string]: string } {
    return {
      tagVO: 'TagVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagVO: { 'type': 'array', 'itemType': GetInstanceListResponseBodyInstanceListInstanceVOTagsTagVO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBodyInstanceListInstanceVOUpgradeServiceDetailInfo extends $tea.Model {
  current2OpenSourceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      current2OpenSourceVersion: 'Current2OpenSourceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current2OpenSourceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBodyInstanceListInstanceVO extends $tea.Model {
  allConfig?: string;
  createTime?: number;
  deployType?: number;
  diskSize?: number;
  diskType?: number;
  domainEndpoint?: string;
  eipMax?: number;
  endPoint?: string;
  expiredTime?: number;
  instanceId?: string;
  ioMax?: number;
  msgRetain?: number;
  name?: string;
  paidType?: number;
  regionId?: string;
  resourceGroupId?: string;
  saslDomainEndpoint?: string;
  securityGroup?: string;
  serviceStatus?: number;
  specType?: string;
  sslDomainEndpoint?: string;
  sslEndPoint?: string;
  tags?: GetInstanceListResponseBodyInstanceListInstanceVOTags;
  topicNumLimit?: number;
  upgradeServiceDetailInfo?: GetInstanceListResponseBodyInstanceListInstanceVOUpgradeServiceDetailInfo;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allConfig: 'AllConfig',
      createTime: 'CreateTime',
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      domainEndpoint: 'DomainEndpoint',
      eipMax: 'EipMax',
      endPoint: 'EndPoint',
      expiredTime: 'ExpiredTime',
      instanceId: 'InstanceId',
      ioMax: 'IoMax',
      msgRetain: 'MsgRetain',
      name: 'Name',
      paidType: 'PaidType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      saslDomainEndpoint: 'SaslDomainEndpoint',
      securityGroup: 'SecurityGroup',
      serviceStatus: 'ServiceStatus',
      specType: 'SpecType',
      sslDomainEndpoint: 'SslDomainEndpoint',
      sslEndPoint: 'SslEndPoint',
      tags: 'Tags',
      topicNumLimit: 'TopicNumLimit',
      upgradeServiceDetailInfo: 'UpgradeServiceDetailInfo',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allConfig: 'string',
      createTime: 'number',
      deployType: 'number',
      diskSize: 'number',
      diskType: 'number',
      domainEndpoint: 'string',
      eipMax: 'number',
      endPoint: 'string',
      expiredTime: 'number',
      instanceId: 'string',
      ioMax: 'number',
      msgRetain: 'number',
      name: 'string',
      paidType: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      saslDomainEndpoint: 'string',
      securityGroup: 'string',
      serviceStatus: 'number',
      specType: 'string',
      sslDomainEndpoint: 'string',
      sslEndPoint: 'string',
      tags: GetInstanceListResponseBodyInstanceListInstanceVOTags,
      topicNumLimit: 'number',
      upgradeServiceDetailInfo: GetInstanceListResponseBodyInstanceListInstanceVOUpgradeServiceDetailInfo,
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBodyInstanceList extends $tea.Model {
  instanceVO?: GetInstanceListResponseBodyInstanceListInstanceVO[];
  static names(): { [key: string]: string } {
    return {
      instanceVO: 'InstanceVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceVO: { 'type': 'array', 'itemType': GetInstanceListResponseBodyInstanceListInstanceVO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicListResponseBodyTopicListTopicVOTagsTagVO extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicListResponseBodyTopicListTopicVOTags extends $tea.Model {
  tagVO?: GetTopicListResponseBodyTopicListTopicVOTagsTagVO[];
  static names(): { [key: string]: string } {
    return {
      tagVO: 'TagVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagVO: { 'type': 'array', 'itemType': GetTopicListResponseBodyTopicListTopicVOTagsTagVO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicListResponseBodyTopicListTopicVO extends $tea.Model {
  compactTopic?: boolean;
  createTime?: number;
  instanceId?: string;
  localTopic?: boolean;
  partitionNum?: number;
  regionId?: string;
  remark?: string;
  status?: number;
  statusName?: string;
  tags?: GetTopicListResponseBodyTopicListTopicVOTags;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      compactTopic: 'CompactTopic',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      localTopic: 'LocalTopic',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      remark: 'Remark',
      status: 'Status',
      statusName: 'StatusName',
      tags: 'Tags',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compactTopic: 'boolean',
      createTime: 'number',
      instanceId: 'string',
      localTopic: 'boolean',
      partitionNum: 'number',
      regionId: 'string',
      remark: 'string',
      status: 'number',
      statusName: 'string',
      tags: GetTopicListResponseBodyTopicListTopicVOTags,
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicListResponseBodyTopicList extends $tea.Model {
  topicVO?: GetTopicListResponseBodyTopicListTopicVO[];
  static names(): { [key: string]: string } {
    return {
      topicVO: 'TopicVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicVO: { 'type': 'array', 'itemType': GetTopicListResponseBodyTopicListTopicVO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicStatusResponseBodyTopicStatusOffsetTableOffsetTable extends $tea.Model {
  lastUpdateTimestamp?: number;
  maxOffset?: number;
  minOffset?: number;
  partition?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      lastUpdateTimestamp: 'LastUpdateTimestamp',
      maxOffset: 'MaxOffset',
      minOffset: 'MinOffset',
      partition: 'Partition',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastUpdateTimestamp: 'number',
      maxOffset: 'number',
      minOffset: 'number',
      partition: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicStatusResponseBodyTopicStatusOffsetTable extends $tea.Model {
  offsetTable?: GetTopicStatusResponseBodyTopicStatusOffsetTableOffsetTable[];
  static names(): { [key: string]: string } {
    return {
      offsetTable: 'OffsetTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offsetTable: { 'type': 'array', 'itemType': GetTopicStatusResponseBodyTopicStatusOffsetTableOffsetTable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicStatusResponseBodyTopicStatus extends $tea.Model {
  lastTimeStamp?: number;
  offsetTable?: GetTopicStatusResponseBodyTopicStatusOffsetTable;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lastTimeStamp: 'LastTimeStamp',
      offsetTable: 'OffsetTable',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTimeStamp: 'number',
      offsetTable: GetTopicStatusResponseBodyTopicStatusOffsetTable,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
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

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-2-pop': "alikafka.aliyuncs.com",
      'ap-southeast-2': "alikafka.aliyuncs.com",
      'cn-beijing-finance-1': "alikafka.aliyuncs.com",
      'cn-beijing-finance-pop': "alikafka.aliyuncs.com",
      'cn-beijing-gov-1': "alikafka.aliyuncs.com",
      'cn-beijing-nu16-b01': "alikafka.aliyuncs.com",
      'cn-edge-1': "alikafka.aliyuncs.com",
      'cn-fujian': "alikafka.aliyuncs.com",
      'cn-haidian-cm12-c01': "alikafka.aliyuncs.com",
      'cn-hangzhou-bj-b01': "alikafka.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "alikafka.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "alikafka.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "alikafka.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "alikafka.aliyuncs.com",
      'cn-hangzhou-test-306': "alikafka.aliyuncs.com",
      'cn-hongkong-finance-pop': "alikafka.aliyuncs.com",
      'cn-huhehaote-nebula-1': "alikafka.aliyuncs.com",
      'cn-qingdao-nebula': "alikafka.aliyuncs.com",
      'cn-shanghai-et15-b01': "alikafka.aliyuncs.com",
      'cn-shanghai-et2-b01': "alikafka.aliyuncs.com",
      'cn-shanghai-inner': "alikafka.aliyuncs.com",
      'cn-shanghai-internal-test-1': "alikafka.aliyuncs.com",
      'cn-shenzhen-inner': "alikafka.aliyuncs.com",
      'cn-shenzhen-st4-d01': "alikafka.aliyuncs.com",
      'cn-shenzhen-su18-b01': "alikafka.aliyuncs.com",
      'cn-wuhan': "alikafka.aliyuncs.com",
      'cn-wulanchabu': "alikafka.aliyuncs.com",
      'cn-yushanfang': "alikafka.aliyuncs.com",
      'cn-zhangbei': "alikafka.aliyuncs.com",
      'cn-zhangbei-na61-b01': "alikafka.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "alikafka.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "alikafka.aliyuncs.com",
      'eu-west-1-oxs': "alikafka.aliyuncs.com",
      'me-east-1': "alikafka.aliyuncs.com",
      'rus-west-1-pop': "alikafka.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("alikafka", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  async convertPostPayOrderWithOptions(request: ConvertPostPayOrderRequest, runtime: $Util.RuntimeOptions): Promise<ConvertPostPayOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConvertPostPayOrder",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConvertPostPayOrderResponse>(await this.callApi(params, req, runtime), new ConvertPostPayOrderResponse({}));
  }

  async convertPostPayOrder(request: ConvertPostPayOrderRequest): Promise<ConvertPostPayOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.convertPostPayOrderWithOptions(request, runtime);
  }

  async createAclWithOptions(request: CreateAclRequest, runtime: $Util.RuntimeOptions): Promise<CreateAclResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclOperationType)) {
      query["AclOperationType"] = request.aclOperationType;
    }

    if (!Util.isUnset(request.aclResourceName)) {
      query["AclResourceName"] = request.aclResourceName;
    }

    if (!Util.isUnset(request.aclResourcePatternType)) {
      query["AclResourcePatternType"] = request.aclResourcePatternType;
    }

    if (!Util.isUnset(request.aclResourceType)) {
      query["AclResourceType"] = request.aclResourceType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAcl",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAclResponse>(await this.callApi(params, req, runtime), new CreateAclResponse({}));
  }

  async createAcl(request: CreateAclRequest): Promise<CreateAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAclWithOptions(request, runtime);
  }

  async createConsumerGroupWithOptions(request: CreateConsumerGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateConsumerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateConsumerGroup",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateConsumerGroupResponse>(await this.callApi(params, req, runtime), new CreateConsumerGroupResponse({}));
  }

  async createConsumerGroup(request: CreateConsumerGroupRequest): Promise<CreateConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConsumerGroupWithOptions(request, runtime);
  }

  async createPostPayOrderWithOptions(request: CreatePostPayOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreatePostPayOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!Util.isUnset(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!Util.isUnset(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!Util.isUnset(request.eipMax)) {
      query["EipMax"] = request.eipMax;
    }

    if (!Util.isUnset(request.ioMax)) {
      query["IoMax"] = request.ioMax;
    }

    if (!Util.isUnset(request.ioMaxSpec)) {
      query["IoMaxSpec"] = request.ioMaxSpec;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!Util.isUnset(request.topicQuota)) {
      query["TopicQuota"] = request.topicQuota;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePostPayOrder",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePostPayOrderResponse>(await this.callApi(params, req, runtime), new CreatePostPayOrderResponse({}));
  }

  async createPostPayOrder(request: CreatePostPayOrderRequest): Promise<CreatePostPayOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPostPayOrderWithOptions(request, runtime);
  }

  async createPrePayOrderWithOptions(request: CreatePrePayOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreatePrePayOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!Util.isUnset(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!Util.isUnset(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!Util.isUnset(request.eipMax)) {
      query["EipMax"] = request.eipMax;
    }

    if (!Util.isUnset(request.ioMax)) {
      query["IoMax"] = request.ioMax;
    }

    if (!Util.isUnset(request.ioMaxSpec)) {
      query["IoMaxSpec"] = request.ioMaxSpec;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!Util.isUnset(request.topicQuota)) {
      query["TopicQuota"] = request.topicQuota;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePrePayOrder",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePrePayOrderResponse>(await this.callApi(params, req, runtime), new CreatePrePayOrderResponse({}));
  }

  async createPrePayOrder(request: CreatePrePayOrderRequest): Promise<CreatePrePayOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPrePayOrderWithOptions(request, runtime);
  }

  async createSaslUserWithOptions(request: CreateSaslUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateSaslUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSaslUser",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSaslUserResponse>(await this.callApi(params, req, runtime), new CreateSaslUserResponse({}));
  }

  async createSaslUser(request: CreateSaslUserRequest): Promise<CreateSaslUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSaslUserWithOptions(request, runtime);
  }

  async createTopicWithOptions(tmpReq: CreateTopicRequest, runtime: $Util.RuntimeOptions): Promise<CreateTopicResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTopicShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.config)) {
      request.configShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.config, "Config", "json");
    }

    let query = { };
    if (!Util.isUnset(request.compactTopic)) {
      query["CompactTopic"] = request.compactTopic;
    }

    if (!Util.isUnset(request.configShrink)) {
      query["Config"] = request.configShrink;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.localTopic)) {
      query["LocalTopic"] = request.localTopic;
    }

    if (!Util.isUnset(request.minInsyncReplicas)) {
      query["MinInsyncReplicas"] = request.minInsyncReplicas;
    }

    if (!Util.isUnset(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.replicationFactor)) {
      query["ReplicationFactor"] = request.replicationFactor;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTopic",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTopicResponse>(await this.callApi(params, req, runtime), new CreateTopicResponse({}));
  }

  async createTopic(request: CreateTopicRequest): Promise<CreateTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTopicWithOptions(request, runtime);
  }

  async deleteAclWithOptions(request: DeleteAclRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAclResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclOperationType)) {
      query["AclOperationType"] = request.aclOperationType;
    }

    if (!Util.isUnset(request.aclResourceName)) {
      query["AclResourceName"] = request.aclResourceName;
    }

    if (!Util.isUnset(request.aclResourcePatternType)) {
      query["AclResourcePatternType"] = request.aclResourcePatternType;
    }

    if (!Util.isUnset(request.aclResourceType)) {
      query["AclResourceType"] = request.aclResourceType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAcl",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAclResponse>(await this.callApi(params, req, runtime), new DeleteAclResponse({}));
  }

  async deleteAcl(request: DeleteAclRequest): Promise<DeleteAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAclWithOptions(request, runtime);
  }

  async deleteConsumerGroupWithOptions(request: DeleteConsumerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConsumerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConsumerGroup",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteConsumerGroupResponse>(await this.callApi(params, req, runtime), new DeleteConsumerGroupResponse({}));
  }

  async deleteConsumerGroup(request: DeleteConsumerGroupRequest): Promise<DeleteConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConsumerGroupWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstance",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async deleteSaslUserWithOptions(request: DeleteSaslUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSaslUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSaslUser",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSaslUserResponse>(await this.callApi(params, req, runtime), new DeleteSaslUserResponse({}));
  }

  async deleteSaslUser(request: DeleteSaslUserRequest): Promise<DeleteSaslUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSaslUserWithOptions(request, runtime);
  }

  async deleteTopicWithOptions(request: DeleteTopicRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTopicResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTopic",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTopicResponse>(await this.callApi(params, req, runtime), new DeleteTopicResponse({}));
  }

  async deleteTopic(request: DeleteTopicRequest): Promise<DeleteTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTopicWithOptions(request, runtime);
  }

  async describeAclsWithOptions(request: DescribeAclsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAclsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclResourceName)) {
      query["AclResourceName"] = request.aclResourceName;
    }

    if (!Util.isUnset(request.aclResourcePatternType)) {
      query["AclResourcePatternType"] = request.aclResourcePatternType;
    }

    if (!Util.isUnset(request.aclResourceType)) {
      query["AclResourceType"] = request.aclResourceType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAcls",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAclsResponse>(await this.callApi(params, req, runtime), new DescribeAclsResponse({}));
  }

  async describeAcls(request: DescribeAclsRequest): Promise<DescribeAclsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAclsWithOptions(request, runtime);
  }

  async describeNodeStatusWithOptions(request: DescribeNodeStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNodeStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNodeStatus",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNodeStatusResponse>(await this.callApi(params, req, runtime), new DescribeNodeStatusResponse({}));
  }

  async describeNodeStatus(request: DescribeNodeStatusRequest): Promise<DescribeNodeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNodeStatusWithOptions(request, runtime);
  }

  async describeSaslUsersWithOptions(request: DescribeSaslUsersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSaslUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSaslUsers",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSaslUsersResponse>(await this.callApi(params, req, runtime), new DescribeSaslUsersResponse({}));
  }

  async describeSaslUsers(request: DescribeSaslUsersRequest): Promise<DescribeSaslUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSaslUsersWithOptions(request, runtime);
  }

  async getAllInstanceIdListWithOptions(request: GetAllInstanceIdListRequest, runtime: $Util.RuntimeOptions): Promise<GetAllInstanceIdListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAllInstanceIdList",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAllInstanceIdListResponse>(await this.callApi(params, req, runtime), new GetAllInstanceIdListResponse({}));
  }

  async getAllInstanceIdList(request: GetAllInstanceIdListRequest): Promise<GetAllInstanceIdListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllInstanceIdListWithOptions(request, runtime);
  }

  async getAllowedIpListWithOptions(request: GetAllowedIpListRequest, runtime: $Util.RuntimeOptions): Promise<GetAllowedIpListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAllowedIpList",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAllowedIpListResponse>(await this.callApi(params, req, runtime), new GetAllowedIpListResponse({}));
  }

  async getAllowedIpList(request: GetAllowedIpListRequest): Promise<GetAllowedIpListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllowedIpListWithOptions(request, runtime);
  }

  async getConsumerListWithOptions(request: GetConsumerListRequest, runtime: $Util.RuntimeOptions): Promise<GetConsumerListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetConsumerList",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConsumerListResponse>(await this.callApi(params, req, runtime), new GetConsumerListResponse({}));
  }

  async getConsumerList(request: GetConsumerListRequest): Promise<GetConsumerListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConsumerListWithOptions(request, runtime);
  }

  async getConsumerProgressWithOptions(request: GetConsumerProgressRequest, runtime: $Util.RuntimeOptions): Promise<GetConsumerProgressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetConsumerProgress",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConsumerProgressResponse>(await this.callApi(params, req, runtime), new GetConsumerProgressResponse({}));
  }

  async getConsumerProgress(request: GetConsumerProgressRequest): Promise<GetConsumerProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConsumerProgressWithOptions(request, runtime);
  }

  async getInstanceListWithOptions(request: GetInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceList",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceListResponse>(await this.callApi(params, req, runtime), new GetInstanceListResponse({}));
  }

  async getInstanceList(request: GetInstanceListRequest): Promise<GetInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceListWithOptions(request, runtime);
  }

  async getTopicListWithOptions(request: GetTopicListRequest, runtime: $Util.RuntimeOptions): Promise<GetTopicListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTopicList",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTopicListResponse>(await this.callApi(params, req, runtime), new GetTopicListResponse({}));
  }

  async getTopicList(request: GetTopicListRequest): Promise<GetTopicListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTopicListWithOptions(request, runtime);
  }

  async getTopicStatusWithOptions(request: GetTopicStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetTopicStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTopicStatus",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTopicStatusResponse>(await this.callApi(params, req, runtime), new GetTopicStatusResponse({}));
  }

  async getTopicStatus(request: GetTopicStatusRequest): Promise<GetTopicStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTopicStatusWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async modifyInstanceNameWithOptions(request: ModifyInstanceNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceName",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceNameResponse>(await this.callApi(params, req, runtime), new ModifyInstanceNameResponse({}));
  }

  async modifyInstanceName(request: ModifyInstanceNameRequest): Promise<ModifyInstanceNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceNameWithOptions(request, runtime);
  }

  async modifyPartitionNumWithOptions(request: ModifyPartitionNumRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPartitionNumResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addPartitionNum)) {
      query["AddPartitionNum"] = request.addPartitionNum;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPartitionNum",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPartitionNumResponse>(await this.callApi(params, req, runtime), new ModifyPartitionNumResponse({}));
  }

  async modifyPartitionNum(request: ModifyPartitionNumRequest): Promise<ModifyPartitionNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPartitionNumWithOptions(request, runtime);
  }

  async modifyTopicRemarkWithOptions(request: ModifyTopicRemarkRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTopicRemarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTopicRemark",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTopicRemarkResponse>(await this.callApi(params, req, runtime), new ModifyTopicRemarkResponse({}));
  }

  async modifyTopicRemark(request: ModifyTopicRemarkRequest): Promise<ModifyTopicRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTopicRemarkWithOptions(request, runtime);
  }

  async releaseInstanceWithOptions(request: ReleaseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.forceDeleteInstance)) {
      query["ForceDeleteInstance"] = request.forceDeleteInstance;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseInstance",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseInstanceResponse>(await this.callApi(params, req, runtime), new ReleaseInstanceResponse({}));
  }

  async releaseInstance(request: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  async startInstanceWithOptions(request: StartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.deployModule)) {
      query["DeployModule"] = request.deployModule;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isEipInner)) {
      query["IsEipInner"] = request.isEipInner;
    }

    if (!Util.isUnset(request.isForceSelectedZones)) {
      query["IsForceSelectedZones"] = request.isForceSelectedZones;
    }

    if (!Util.isUnset(request.isSetUserAndPassword)) {
      query["IsSetUserAndPassword"] = request.isSetUserAndPassword;
    }

    if (!Util.isUnset(request.KMSKeyId)) {
      query["KMSKeyId"] = request.KMSKeyId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.notifier)) {
      query["Notifier"] = request.notifier;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityGroup)) {
      query["SecurityGroup"] = request.securityGroup;
    }

    if (!Util.isUnset(request.selectedZones)) {
      query["SelectedZones"] = request.selectedZones;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.userPhoneNum)) {
      query["UserPhoneNum"] = request.userPhoneNum;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartInstance",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartInstanceResponse>(await this.callApi(params, req, runtime), new StartInstanceResponse({}));
  }

  async startInstance(request: StartInstanceRequest): Promise<StartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateAllowedIpWithOptions(request: UpdateAllowedIpRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAllowedIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allowedListIp)) {
      query["AllowedListIp"] = request.allowedListIp;
    }

    if (!Util.isUnset(request.allowedListType)) {
      query["AllowedListType"] = request.allowedListType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.portRange)) {
      query["PortRange"] = request.portRange;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.updateType)) {
      query["UpdateType"] = request.updateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAllowedIp",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAllowedIpResponse>(await this.callApi(params, req, runtime), new UpdateAllowedIpResponse({}));
  }

  async updateAllowedIp(request: UpdateAllowedIpRequest): Promise<UpdateAllowedIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAllowedIpWithOptions(request, runtime);
  }

  async updateInstanceConfigWithOptions(request: UpdateInstanceConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstanceConfig",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceConfigResponse>(await this.callApi(params, req, runtime), new UpdateInstanceConfigResponse({}));
  }

  async updateInstanceConfig(request: UpdateInstanceConfigRequest): Promise<UpdateInstanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceConfigWithOptions(request, runtime);
  }

  async upgradeInstanceVersionWithOptions(request: UpgradeInstanceVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeInstanceVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.targetVersion)) {
      query["TargetVersion"] = request.targetVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeInstanceVersion",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeInstanceVersionResponse>(await this.callApi(params, req, runtime), new UpgradeInstanceVersionResponse({}));
  }

  async upgradeInstanceVersion(request: UpgradeInstanceVersionRequest): Promise<UpgradeInstanceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeInstanceVersionWithOptions(request, runtime);
  }

  async upgradePostPayOrderWithOptions(request: UpgradePostPayOrderRequest, runtime: $Util.RuntimeOptions): Promise<UpgradePostPayOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!Util.isUnset(request.eipMax)) {
      query["EipMax"] = request.eipMax;
    }

    if (!Util.isUnset(request.eipModel)) {
      query["EipModel"] = request.eipModel;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ioMax)) {
      query["IoMax"] = request.ioMax;
    }

    if (!Util.isUnset(request.ioMaxSpec)) {
      query["IoMaxSpec"] = request.ioMaxSpec;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!Util.isUnset(request.topicQuota)) {
      query["TopicQuota"] = request.topicQuota;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradePostPayOrder",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradePostPayOrderResponse>(await this.callApi(params, req, runtime), new UpgradePostPayOrderResponse({}));
  }

  async upgradePostPayOrder(request: UpgradePostPayOrderRequest): Promise<UpgradePostPayOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradePostPayOrderWithOptions(request, runtime);
  }

  async upgradePrePayOrderWithOptions(request: UpgradePrePayOrderRequest, runtime: $Util.RuntimeOptions): Promise<UpgradePrePayOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!Util.isUnset(request.eipMax)) {
      query["EipMax"] = request.eipMax;
    }

    if (!Util.isUnset(request.eipModel)) {
      query["EipModel"] = request.eipModel;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ioMax)) {
      query["IoMax"] = request.ioMax;
    }

    if (!Util.isUnset(request.ioMaxSpec)) {
      query["IoMaxSpec"] = request.ioMaxSpec;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!Util.isUnset(request.topicQuota)) {
      query["TopicQuota"] = request.topicQuota;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradePrePayOrder",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradePrePayOrderResponse>(await this.callApi(params, req, runtime), new UpgradePrePayOrderResponse({}));
  }

  async upgradePrePayOrder(request: UpgradePrePayOrderRequest): Promise<UpgradePrePayOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradePrePayOrderWithOptions(request, runtime);
  }

}
