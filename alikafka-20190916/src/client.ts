// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ConvertPostPayOrderRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertPostPayOrderResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  orderId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      orderId: 'OrderId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      orderId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertPostPayOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConvertPostPayOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConvertPostPayOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  username?: string;
  aclResourceType?: string;
  aclResourceName?: string;
  aclResourcePatternType?: string;
  aclOperationType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      username: 'Username',
      aclResourceType: 'AclResourceType',
      aclResourceName: 'AclResourceName',
      aclResourcePatternType: 'AclResourcePatternType',
      aclOperationType: 'AclOperationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      username: 'string',
      aclResourceType: 'string',
      aclResourceName: 'string',
      aclResourcePatternType: 'string',
      aclOperationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupRequest extends $tea.Model {
  instanceId?: string;
  consumerId?: string;
  regionId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      consumerId: 'ConsumerId',
      regionId: 'RegionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      consumerId: 'string',
      regionId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConsumerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateConsumerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostPayOrderRequest extends $tea.Model {
  regionId?: string;
  topicQuota?: number;
  diskType?: string;
  diskSize?: number;
  deployType?: number;
  ioMax?: number;
  eipMax?: number;
  specType?: string;
  ioMaxSpec?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      topicQuota: 'TopicQuota',
      diskType: 'DiskType',
      diskSize: 'DiskSize',
      deployType: 'DeployType',
      ioMax: 'IoMax',
      eipMax: 'EipMax',
      specType: 'SpecType',
      ioMaxSpec: 'IoMaxSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      topicQuota: 'number',
      diskType: 'string',
      diskSize: 'number',
      deployType: 'number',
      ioMax: 'number',
      eipMax: 'number',
      specType: 'string',
      ioMaxSpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostPayOrderResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  orderId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      orderId: 'OrderId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      orderId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostPayOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePostPayOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePostPayOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrePayOrderRequest extends $tea.Model {
  regionId?: string;
  topicQuota?: number;
  diskType?: string;
  diskSize?: number;
  deployType?: number;
  ioMax?: number;
  eipMax?: number;
  specType?: string;
  ioMaxSpec?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      topicQuota: 'TopicQuota',
      diskType: 'DiskType',
      diskSize: 'DiskSize',
      deployType: 'DeployType',
      ioMax: 'IoMax',
      eipMax: 'EipMax',
      specType: 'SpecType',
      ioMaxSpec: 'IoMaxSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      topicQuota: 'number',
      diskType: 'string',
      diskSize: 'number',
      deployType: 'number',
      ioMax: 'number',
      eipMax: 'number',
      specType: 'string',
      ioMaxSpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrePayOrderResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  orderId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      orderId: 'OrderId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      orderId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrePayOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePrePayOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePrePayOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSaslUserRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  username?: string;
  password?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      username: 'Username',
      password: 'Password',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      username: 'string',
      password: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSaslUserResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSaslUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSaslUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSaslUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicRequest extends $tea.Model {
  instanceId?: string;
  topic?: string;
  remark?: string;
  regionId?: string;
  partitionNum?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      topic: 'Topic',
      remark: 'Remark',
      regionId: 'RegionId',
      partitionNum: 'PartitionNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      topic: 'string',
      remark: 'string',
      regionId: 'string',
      partitionNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  username?: string;
  aclResourceType?: string;
  aclResourceName?: string;
  aclResourcePatternType?: string;
  aclOperationType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      username: 'Username',
      aclResourceType: 'AclResourceType',
      aclResourceName: 'AclResourceName',
      aclResourcePatternType: 'AclResourcePatternType',
      aclOperationType: 'AclOperationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      username: 'string',
      aclResourceType: 'string',
      aclResourceName: 'string',
      aclResourcePatternType: 'string',
      aclOperationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupRequest extends $tea.Model {
  instanceId?: string;
  consumerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      consumerId: 'ConsumerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      consumerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConsumerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSaslUserRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  username?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      username: 'Username',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      username: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSaslUserResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSaslUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSaslUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSaslUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicRequest extends $tea.Model {
  instanceId?: string;
  topic?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      topic: 'Topic',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      topic: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclsRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  username?: string;
  aclResourceType?: string;
  aclResourceName?: string;
  aclResourcePatternType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      username: 'Username',
      aclResourceType: 'AclResourceType',
      aclResourceName: 'AclResourceName',
      aclResourcePatternType: 'AclResourcePatternType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      username: 'string',
      aclResourceType: 'string',
      aclResourceName: 'string',
      aclResourcePatternType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  kafkaAclList?: DescribeAclsResponseBodyKafkaAclList;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      kafkaAclList: 'KafkaAclList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      kafkaAclList: DescribeAclsResponseBodyKafkaAclList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAclsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAclsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeStatusRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeStatusResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  statusList?: DescribeNodeStatusResponseBodyStatusList;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      statusList: 'StatusList',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      statusList: DescribeNodeStatusResponseBodyStatusList,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNodeStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNodeStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSaslUsersRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSaslUsersResponseBody extends $tea.Model {
  saslUserList?: DescribeSaslUsersResponseBodySaslUserList;
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      saslUserList: 'SaslUserList',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saslUserList: DescribeSaslUsersResponseBodySaslUserList,
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSaslUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSaslUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSaslUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowedIpListRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowedIpListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  allowedList?: GetAllowedIpListResponseBodyAllowedList;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      allowedList: 'AllowedList',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      allowedList: GetAllowedIpListResponseBodyAllowedList,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowedIpListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAllowedIpListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAllowedIpListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerListRequest extends $tea.Model {
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

export class GetConsumerListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  consumerList?: GetConsumerListResponseBodyConsumerList;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      consumerList: 'ConsumerList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      consumerList: GetConsumerListResponseBodyConsumerList,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConsumerListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConsumerListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressRequest extends $tea.Model {
  instanceId?: string;
  consumerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      consumerId: 'ConsumerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      consumerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  consumerProgress?: GetConsumerProgressResponseBodyConsumerProgress;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      consumerProgress: 'ConsumerProgress',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      consumerProgress: GetConsumerProgressResponseBodyConsumerProgress,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConsumerProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConsumerProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListRequest extends $tea.Model {
  regionId?: string;
  orderId?: string;
  instanceId?: string[];
  tag?: GetInstanceListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      orderId: 'OrderId',
      instanceId: 'InstanceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      orderId: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': GetInstanceListRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  instanceList?: GetInstanceListResponseBodyInstanceList;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      instanceList: 'InstanceList',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      instanceList: GetInstanceListResponseBodyInstanceList,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaProductListRequest extends $tea.Model {
  listNormal?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      listNormal: 'ListNormal',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listNormal: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaProductListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  metaData?: GetMetaProductListResponseBodyMetaData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      metaData: 'MetaData',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      metaData: GetMetaProductListResponseBodyMetaData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaProductListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetaProductListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetaProductListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicListRequest extends $tea.Model {
  instanceId?: string;
  currentPage?: string;
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      currentPage: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicListResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageSize?: number;
  currentPage?: number;
  total?: number;
  topicList?: GetTopicListResponseBodyTopicList;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      total: 'Total',
      topicList: 'TopicList',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      currentPage: 'number',
      total: 'number',
      topicList: GetTopicListResponseBodyTopicList,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTopicListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTopicListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicStatusRequest extends $tea.Model {
  instanceId?: string;
  topic?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      topic: 'Topic',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      topic: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicStatusResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  topicStatus?: GetTopicStatusResponseBodyTopicStatus;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      topicStatus: 'TopicStatus',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      topicStatus: GetTopicStatusResponseBodyTopicStatus,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTopicStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTopicStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNameRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNameResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPartitionNumRequest extends $tea.Model {
  instanceId?: string;
  topic?: string;
  regionId?: string;
  addPartitionNum?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      topic: 'Topic',
      regionId: 'RegionId',
      addPartitionNum: 'AddPartitionNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      topic: 'string',
      regionId: 'string',
      addPartitionNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPartitionNumResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPartitionNumResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyPartitionNumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPartitionNumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTopicRemarkRequest extends $tea.Model {
  instanceId?: string;
  topic?: string;
  regionId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      topic: 'Topic',
      regionId: 'RegionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      topic: 'string',
      regionId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTopicRemarkResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTopicRemarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyTopicRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyTopicRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  forceDeleteInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      forceDeleteInstance: 'ForceDeleteInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      forceDeleteInstance: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  vpcId?: string;
  vSwitchId?: string;
  deployModule?: string;
  zoneId?: string;
  isEipInner?: boolean;
  isSetUserAndPassword?: boolean;
  username?: string;
  password?: string;
  name?: string;
  securityGroup?: string;
  serviceVersion?: string;
  config?: string;
  KMSKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      deployModule: 'DeployModule',
      zoneId: 'ZoneId',
      isEipInner: 'IsEipInner',
      isSetUserAndPassword: 'IsSetUserAndPassword',
      username: 'Username',
      password: 'Password',
      name: 'Name',
      securityGroup: 'SecurityGroup',
      serviceVersion: 'ServiceVersion',
      config: 'Config',
      KMSKeyId: 'KMSKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      deployModule: 'string',
      zoneId: 'string',
      isEipInner: 'boolean',
      isSetUserAndPassword: 'boolean',
      username: 'string',
      password: 'string',
      name: 'string',
      securityGroup: 'string',
      serviceVersion: 'string',
      config: 'string',
      KMSKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAllowedIpRequest extends $tea.Model {
  regionId?: string;
  updateType?: string;
  portRange?: string;
  allowedListType?: string;
  allowedListIp?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      updateType: 'UpdateType',
      portRange: 'PortRange',
      allowedListType: 'AllowedListType',
      allowedListIp: 'AllowedListIp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      updateType: 'string',
      portRange: 'string',
      allowedListType: 'string',
      allowedListIp: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAllowedIpResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAllowedIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAllowedIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAllowedIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceConfigRequest extends $tea.Model {
  config?: string;
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateInstanceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateInstanceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceVersionRequest extends $tea.Model {
  instanceId?: string;
  targetVersion?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      targetVersion: 'TargetVersion',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      targetVersion: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceVersionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeInstanceVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeInstanceVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePostPayOrderRequest extends $tea.Model {
  instanceId?: string;
  topicQuota?: number;
  diskSize?: number;
  regionId?: string;
  ioMax?: number;
  specType?: string;
  eipMax?: number;
  ioMaxSpec?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      topicQuota: 'TopicQuota',
      diskSize: 'DiskSize',
      regionId: 'RegionId',
      ioMax: 'IoMax',
      specType: 'SpecType',
      eipMax: 'EipMax',
      ioMaxSpec: 'IoMaxSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      topicQuota: 'number',
      diskSize: 'number',
      regionId: 'string',
      ioMax: 'number',
      specType: 'string',
      eipMax: 'number',
      ioMaxSpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePostPayOrderResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePostPayOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradePostPayOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradePostPayOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePrePayOrderRequest extends $tea.Model {
  instanceId?: string;
  topicQuota?: number;
  diskSize?: number;
  regionId?: string;
  ioMax?: number;
  specType?: string;
  eipMax?: number;
  ioMaxSpec?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      topicQuota: 'TopicQuota',
      diskSize: 'DiskSize',
      regionId: 'RegionId',
      ioMax: 'IoMax',
      specType: 'SpecType',
      eipMax: 'EipMax',
      ioMaxSpec: 'IoMaxSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      topicQuota: 'number',
      diskSize: 'number',
      regionId: 'string',
      ioMax: 'number',
      specType: 'string',
      eipMax: 'number',
      ioMaxSpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePrePayOrderResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePrePayOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradePrePayOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradePrePayOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclsResponseBodyKafkaAclListKafkaAclVO extends $tea.Model {
  aclResourceType?: string;
  host?: string;
  aclOperationType?: string;
  aclResourceName?: string;
  aclResourcePatternType?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aclResourceType: 'AclResourceType',
      host: 'Host',
      aclOperationType: 'AclOperationType',
      aclResourceName: 'AclResourceName',
      aclResourcePatternType: 'AclResourcePatternType',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclResourceType: 'string',
      host: 'string',
      aclOperationType: 'string',
      aclResourceName: 'string',
      aclResourcePatternType: 'string',
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
  type?: string;
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      password: 'string',
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
  portRange?: string;
  allowedIpList?: string[];
  static names(): { [key: string]: string } {
    return {
      portRange: 'PortRange',
      allowedIpList: 'AllowedIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portRange: 'string',
      allowedIpList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowedIpListResponseBodyAllowedListVpcList extends $tea.Model {
  portRange?: string;
  allowedIpList?: string[];
  static names(): { [key: string]: string } {
    return {
      portRange: 'PortRange',
      allowedIpList: 'AllowedIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portRange: 'string',
      allowedIpList: { 'type': 'array', 'itemType': 'string' },
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
  remark?: string;
  tags?: GetConsumerListResponseBodyConsumerListConsumerVOTags;
  consumerId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      tags: 'Tags',
      consumerId: 'ConsumerId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      tags: GetConsumerListResponseBodyConsumerListConsumerVOTags,
      consumerId: 'string',
      instanceId: 'string',
      regionId: 'string',
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
  totalDiff?: number;
  lastTimestamp?: number;
  topic?: string;
  offsetList?: GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetList;
  static names(): { [key: string]: string } {
    return {
      totalDiff: 'TotalDiff',
      lastTimestamp: 'LastTimestamp',
      topic: 'Topic',
      offsetList: 'OffsetList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalDiff: 'number',
      lastTimestamp: 'number',
      topic: 'string',
      offsetList: GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetList,
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
  topicList?: GetConsumerProgressResponseBodyConsumerProgressTopicList;
  lastTimestamp?: number;
  totalDiff?: number;
  static names(): { [key: string]: string } {
    return {
      topicList: 'TopicList',
      lastTimestamp: 'LastTimestamp',
      totalDiff: 'TotalDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicList: GetConsumerProgressResponseBodyConsumerProgressTopicList,
      lastTimestamp: 'number',
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
  vpcId?: string;
  createTime?: number;
  deployType?: number;
  tags?: GetInstanceListResponseBodyInstanceListInstanceVOTags;
  diskType?: number;
  sslEndPoint?: string;
  allConfig?: string;
  paidType?: number;
  name?: string;
  upgradeServiceDetailInfo?: GetInstanceListResponseBodyInstanceListInstanceVOUpgradeServiceDetailInfo;
  specType?: string;
  diskSize?: number;
  securityGroup?: string;
  instanceId?: string;
  serviceStatus?: number;
  eipMax?: number;
  regionId?: string;
  msgRetain?: number;
  vSwitchId?: string;
  expiredTime?: number;
  topicNumLimit?: number;
  zoneId?: string;
  ioMax?: number;
  endPoint?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      createTime: 'CreateTime',
      deployType: 'DeployType',
      tags: 'Tags',
      diskType: 'DiskType',
      sslEndPoint: 'SslEndPoint',
      allConfig: 'AllConfig',
      paidType: 'PaidType',
      name: 'Name',
      upgradeServiceDetailInfo: 'UpgradeServiceDetailInfo',
      specType: 'SpecType',
      diskSize: 'DiskSize',
      securityGroup: 'SecurityGroup',
      instanceId: 'InstanceId',
      serviceStatus: 'ServiceStatus',
      eipMax: 'EipMax',
      regionId: 'RegionId',
      msgRetain: 'MsgRetain',
      vSwitchId: 'VSwitchId',
      expiredTime: 'ExpiredTime',
      topicNumLimit: 'TopicNumLimit',
      zoneId: 'ZoneId',
      ioMax: 'IoMax',
      endPoint: 'EndPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      createTime: 'number',
      deployType: 'number',
      tags: GetInstanceListResponseBodyInstanceListInstanceVOTags,
      diskType: 'number',
      sslEndPoint: 'string',
      allConfig: 'string',
      paidType: 'number',
      name: 'string',
      upgradeServiceDetailInfo: GetInstanceListResponseBodyInstanceListInstanceVOUpgradeServiceDetailInfo,
      specType: 'string',
      diskSize: 'number',
      securityGroup: 'string',
      instanceId: 'string',
      serviceStatus: 'number',
      eipMax: 'number',
      regionId: 'string',
      msgRetain: 'number',
      vSwitchId: 'string',
      expiredTime: 'number',
      topicNumLimit: 'number',
      zoneId: 'string',
      ioMax: 'number',
      endPoint: 'string',
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

export class GetMetaProductListResponseBodyMetaDataProductsNormalSpecVO extends $tea.Model {
  topicQuota?: string;
  specType?: string;
  deployType?: string;
  diskSize?: string;
  ioMax?: number;
  diskType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      topicQuota: 'TopicQuota',
      specType: 'SpecType',
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      ioMax: 'IoMax',
      diskType: 'DiskType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicQuota: 'string',
      specType: 'string',
      deployType: 'string',
      diskSize: 'string',
      ioMax: 'number',
      diskType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaProductListResponseBodyMetaDataProductsNormal extends $tea.Model {
  specVO?: GetMetaProductListResponseBodyMetaDataProductsNormalSpecVO[];
  static names(): { [key: string]: string } {
    return {
      specVO: 'SpecVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specVO: { 'type': 'array', 'itemType': GetMetaProductListResponseBodyMetaDataProductsNormalSpecVO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaProductListResponseBodyMetaDataProductsProfessionalSpecVO extends $tea.Model {
  topicQuota?: string;
  specType?: string;
  deployType?: string;
  diskSize?: string;
  ioMax?: number;
  diskType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      topicQuota: 'TopicQuota',
      specType: 'SpecType',
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      ioMax: 'IoMax',
      diskType: 'DiskType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicQuota: 'string',
      specType: 'string',
      deployType: 'string',
      diskSize: 'string',
      ioMax: 'number',
      diskType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaProductListResponseBodyMetaDataProductsProfessional extends $tea.Model {
  specVO?: GetMetaProductListResponseBodyMetaDataProductsProfessionalSpecVO[];
  static names(): { [key: string]: string } {
    return {
      specVO: 'SpecVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specVO: { 'type': 'array', 'itemType': GetMetaProductListResponseBodyMetaDataProductsProfessionalSpecVO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaProductListResponseBodyMetaData extends $tea.Model {
  productsNormal?: GetMetaProductListResponseBodyMetaDataProductsNormal;
  productsProfessional?: GetMetaProductListResponseBodyMetaDataProductsProfessional;
  names?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      productsNormal: 'ProductsNormal',
      productsProfessional: 'ProductsProfessional',
      names: 'Names',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productsNormal: GetMetaProductListResponseBodyMetaDataProductsNormal,
      productsProfessional: GetMetaProductListResponseBodyMetaDataProductsProfessional,
      names: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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
  status?: number;
  remark?: string;
  createTime?: number;
  topic?: string;
  statusName?: string;
  tags?: GetTopicListResponseBodyTopicListTopicVOTags;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      remark: 'Remark',
      createTime: 'CreateTime',
      topic: 'Topic',
      statusName: 'StatusName',
      tags: 'Tags',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      remark: 'string',
      createTime: 'number',
      topic: 'string',
      statusName: 'string',
      tags: GetTopicListResponseBodyTopicListTopicVOTags,
      instanceId: 'string',
      regionId: 'string',
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
  minOffset?: number;
  topic?: string;
  partition?: number;
  lastUpdateTimestamp?: number;
  maxOffset?: number;
  static names(): { [key: string]: string } {
    return {
      minOffset: 'MinOffset',
      topic: 'Topic',
      partition: 'Partition',
      lastUpdateTimestamp: 'LastUpdateTimestamp',
      maxOffset: 'MaxOffset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minOffset: 'number',
      topic: 'string',
      partition: 'number',
      lastUpdateTimestamp: 'number',
      maxOffset: 'number',
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
  totalCount?: number;
  offsetTable?: GetTopicStatusResponseBodyTopicStatusOffsetTable;
  static names(): { [key: string]: string } {
    return {
      lastTimeStamp: 'LastTimeStamp',
      totalCount: 'TotalCount',
      offsetTable: 'OffsetTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTimeStamp: 'number',
      totalCount: 'number',
      offsetTable: GetTopicStatusResponseBodyTopicStatusOffsetTable,
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
  resourceType?: string;
  tagValue?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagValue: 'string',
      resourceId: 'string',
      tagKey: 'string',
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

  async convertPostPayOrderWithOptions(request: ConvertPostPayOrderRequest, runtime: $Util.RuntimeOptions): Promise<ConvertPostPayOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConvertPostPayOrderResponse>(await this.doRPCRequest("ConvertPostPayOrder", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new ConvertPostPayOrderResponse({}));
  }

  async convertPostPayOrder(request: ConvertPostPayOrderRequest): Promise<ConvertPostPayOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.convertPostPayOrderWithOptions(request, runtime);
  }

  async createAclWithOptions(request: CreateAclRequest, runtime: $Util.RuntimeOptions): Promise<CreateAclResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAclResponse>(await this.doRPCRequest("CreateAcl", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAclResponse({}));
  }

  async createAcl(request: CreateAclRequest): Promise<CreateAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAclWithOptions(request, runtime);
  }

  async createConsumerGroupWithOptions(request: CreateConsumerGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateConsumerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateConsumerGroupResponse>(await this.doRPCRequest("CreateConsumerGroup", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreateConsumerGroupResponse({}));
  }

  async createConsumerGroup(request: CreateConsumerGroupRequest): Promise<CreateConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConsumerGroupWithOptions(request, runtime);
  }

  async createPostPayOrderWithOptions(request: CreatePostPayOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreatePostPayOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePostPayOrderResponse>(await this.doRPCRequest("CreatePostPayOrder", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePostPayOrderResponse({}));
  }

  async createPostPayOrder(request: CreatePostPayOrderRequest): Promise<CreatePostPayOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPostPayOrderWithOptions(request, runtime);
  }

  async createPrePayOrderWithOptions(request: CreatePrePayOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreatePrePayOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePrePayOrderResponse>(await this.doRPCRequest("CreatePrePayOrder", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePrePayOrderResponse({}));
  }

  async createPrePayOrder(request: CreatePrePayOrderRequest): Promise<CreatePrePayOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPrePayOrderWithOptions(request, runtime);
  }

  async createSaslUserWithOptions(request: CreateSaslUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateSaslUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSaslUserResponse>(await this.doRPCRequest("CreateSaslUser", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSaslUserResponse({}));
  }

  async createSaslUser(request: CreateSaslUserRequest): Promise<CreateSaslUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSaslUserWithOptions(request, runtime);
  }

  async createTopicWithOptions(request: CreateTopicRequest, runtime: $Util.RuntimeOptions): Promise<CreateTopicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTopicResponse>(await this.doRPCRequest("CreateTopic", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTopicResponse({}));
  }

  async createTopic(request: CreateTopicRequest): Promise<CreateTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTopicWithOptions(request, runtime);
  }

  async deleteAclWithOptions(request: DeleteAclRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAclResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAclResponse>(await this.doRPCRequest("DeleteAcl", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAclResponse({}));
  }

  async deleteAcl(request: DeleteAclRequest): Promise<DeleteAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAclWithOptions(request, runtime);
  }

  async deleteConsumerGroupWithOptions(request: DeleteConsumerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConsumerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteConsumerGroupResponse>(await this.doRPCRequest("DeleteConsumerGroup", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteConsumerGroupResponse({}));
  }

  async deleteConsumerGroup(request: DeleteConsumerGroupRequest): Promise<DeleteConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConsumerGroupWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteInstanceResponse>(await this.doRPCRequest("DeleteInstance", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async deleteSaslUserWithOptions(request: DeleteSaslUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSaslUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSaslUserResponse>(await this.doRPCRequest("DeleteSaslUser", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSaslUserResponse({}));
  }

  async deleteSaslUser(request: DeleteSaslUserRequest): Promise<DeleteSaslUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSaslUserWithOptions(request, runtime);
  }

  async deleteTopicWithOptions(request: DeleteTopicRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTopicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTopicResponse>(await this.doRPCRequest("DeleteTopic", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTopicResponse({}));
  }

  async deleteTopic(request: DeleteTopicRequest): Promise<DeleteTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTopicWithOptions(request, runtime);
  }

  async describeAclsWithOptions(request: DescribeAclsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAclsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAclsResponse>(await this.doRPCRequest("DescribeAcls", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAclsResponse({}));
  }

  async describeAcls(request: DescribeAclsRequest): Promise<DescribeAclsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAclsWithOptions(request, runtime);
  }

  async describeNodeStatusWithOptions(request: DescribeNodeStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNodeStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeNodeStatusResponse>(await this.doRPCRequest("DescribeNodeStatus", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeNodeStatusResponse({}));
  }

  async describeNodeStatus(request: DescribeNodeStatusRequest): Promise<DescribeNodeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNodeStatusWithOptions(request, runtime);
  }

  async describeSaslUsersWithOptions(request: DescribeSaslUsersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSaslUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSaslUsersResponse>(await this.doRPCRequest("DescribeSaslUsers", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSaslUsersResponse({}));
  }

  async describeSaslUsers(request: DescribeSaslUsersRequest): Promise<DescribeSaslUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSaslUsersWithOptions(request, runtime);
  }

  async getAllowedIpListWithOptions(request: GetAllowedIpListRequest, runtime: $Util.RuntimeOptions): Promise<GetAllowedIpListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAllowedIpListResponse>(await this.doRPCRequest("GetAllowedIpList", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new GetAllowedIpListResponse({}));
  }

  async getAllowedIpList(request: GetAllowedIpListRequest): Promise<GetAllowedIpListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllowedIpListWithOptions(request, runtime);
  }

  async getConsumerListWithOptions(request: GetConsumerListRequest, runtime: $Util.RuntimeOptions): Promise<GetConsumerListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetConsumerListResponse>(await this.doRPCRequest("GetConsumerList", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new GetConsumerListResponse({}));
  }

  async getConsumerList(request: GetConsumerListRequest): Promise<GetConsumerListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConsumerListWithOptions(request, runtime);
  }

  async getConsumerProgressWithOptions(request: GetConsumerProgressRequest, runtime: $Util.RuntimeOptions): Promise<GetConsumerProgressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetConsumerProgressResponse>(await this.doRPCRequest("GetConsumerProgress", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new GetConsumerProgressResponse({}));
  }

  async getConsumerProgress(request: GetConsumerProgressRequest): Promise<GetConsumerProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConsumerProgressWithOptions(request, runtime);
  }

  async getInstanceListWithOptions(request: GetInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceListResponse>(await this.doRPCRequest("GetInstanceList", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceListResponse({}));
  }

  async getInstanceList(request: GetInstanceListRequest): Promise<GetInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceListWithOptions(request, runtime);
  }

  async getMetaProductListWithOptions(request: GetMetaProductListRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaProductListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMetaProductListResponse>(await this.doRPCRequest("GetMetaProductList", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new GetMetaProductListResponse({}));
  }

  async getMetaProductList(request: GetMetaProductListRequest): Promise<GetMetaProductListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaProductListWithOptions(request, runtime);
  }

  async getTopicListWithOptions(request: GetTopicListRequest, runtime: $Util.RuntimeOptions): Promise<GetTopicListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTopicListResponse>(await this.doRPCRequest("GetTopicList", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new GetTopicListResponse({}));
  }

  async getTopicList(request: GetTopicListRequest): Promise<GetTopicListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTopicListWithOptions(request, runtime);
  }

  async getTopicStatusWithOptions(request: GetTopicStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetTopicStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTopicStatusResponse>(await this.doRPCRequest("GetTopicStatus", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new GetTopicStatusResponse({}));
  }

  async getTopicStatus(request: GetTopicStatusRequest): Promise<GetTopicStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTopicStatusWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async modifyInstanceNameWithOptions(request: ModifyInstanceNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceNameResponse>(await this.doRPCRequest("ModifyInstanceName", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceNameResponse({}));
  }

  async modifyInstanceName(request: ModifyInstanceNameRequest): Promise<ModifyInstanceNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceNameWithOptions(request, runtime);
  }

  async modifyPartitionNumWithOptions(request: ModifyPartitionNumRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPartitionNumResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPartitionNumResponse>(await this.doRPCRequest("ModifyPartitionNum", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPartitionNumResponse({}));
  }

  async modifyPartitionNum(request: ModifyPartitionNumRequest): Promise<ModifyPartitionNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPartitionNumWithOptions(request, runtime);
  }

  async modifyTopicRemarkWithOptions(request: ModifyTopicRemarkRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTopicRemarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyTopicRemarkResponse>(await this.doRPCRequest("ModifyTopicRemark", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyTopicRemarkResponse({}));
  }

  async modifyTopicRemark(request: ModifyTopicRemarkRequest): Promise<ModifyTopicRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTopicRemarkWithOptions(request, runtime);
  }

  async releaseInstanceWithOptions(request: ReleaseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseInstanceResponse>(await this.doRPCRequest("ReleaseInstance", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseInstanceResponse({}));
  }

  async releaseInstance(request: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  async startInstanceWithOptions(request: StartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartInstanceResponse>(await this.doRPCRequest("StartInstance", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new StartInstanceResponse({}));
  }

  async startInstance(request: StartInstanceRequest): Promise<StartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateAllowedIpWithOptions(request: UpdateAllowedIpRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAllowedIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAllowedIpResponse>(await this.doRPCRequest("UpdateAllowedIp", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAllowedIpResponse({}));
  }

  async updateAllowedIp(request: UpdateAllowedIpRequest): Promise<UpdateAllowedIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAllowedIpWithOptions(request, runtime);
  }

  async updateInstanceConfigWithOptions(request: UpdateInstanceConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateInstanceConfigResponse>(await this.doRPCRequest("UpdateInstanceConfig", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateInstanceConfigResponse({}));
  }

  async updateInstanceConfig(request: UpdateInstanceConfigRequest): Promise<UpdateInstanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceConfigWithOptions(request, runtime);
  }

  async upgradeInstanceVersionWithOptions(request: UpgradeInstanceVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeInstanceVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeInstanceVersionResponse>(await this.doRPCRequest("UpgradeInstanceVersion", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeInstanceVersionResponse({}));
  }

  async upgradeInstanceVersion(request: UpgradeInstanceVersionRequest): Promise<UpgradeInstanceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeInstanceVersionWithOptions(request, runtime);
  }

  async upgradePostPayOrderWithOptions(request: UpgradePostPayOrderRequest, runtime: $Util.RuntimeOptions): Promise<UpgradePostPayOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradePostPayOrderResponse>(await this.doRPCRequest("UpgradePostPayOrder", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradePostPayOrderResponse({}));
  }

  async upgradePostPayOrder(request: UpgradePostPayOrderRequest): Promise<UpgradePostPayOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradePostPayOrderWithOptions(request, runtime);
  }

  async upgradePrePayOrderWithOptions(request: UpgradePrePayOrderRequest, runtime: $Util.RuntimeOptions): Promise<UpgradePrePayOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradePrePayOrderResponse>(await this.doRPCRequest("UpgradePrePayOrder", "2019-09-16", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradePrePayOrderResponse({}));
  }

  async upgradePrePayOrder(request: UpgradePrePayOrderRequest): Promise<UpgradePrePayOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradePrePayOrderWithOptions(request, runtime);
  }

}
