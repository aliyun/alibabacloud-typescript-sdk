// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CredentialConfig extends $tea.Model {
  /**
   * @example
   * 0
   */
  aliyunEnvRoleKey?: string;
  configs?: CredentialConfigConfigs[];
  /**
   * @example
   * true
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliyunEnvRoleKey: 'AliyunEnvRoleKey',
      configs: 'Configs',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunEnvRoleKey: 'string',
      configs: { 'type': 'array', 'itemType': CredentialConfigConfigs },
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DemoCategory extends $tea.Model {
  /**
   * @example
   * sdk
   */
  categoryCode?: string;
  /**
   * @example
   * SDK Usage
   */
  categoryName?: string;
  /**
   * @example
   * 12
   */
  order?: number;
  subCategories?: DemoCategory[];
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'CategoryCode',
      categoryName: 'CategoryName',
      order: 'Order',
      subCategories: 'SubCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'string',
      categoryName: 'string',
      order: 'number',
      subCategories: { 'type': 'array', 'itemType': DemoCategory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForwardInfo extends $tea.Model {
  /**
   * @example
   * dsw-notebook
   */
  containerName?: string;
  /**
   * @example
   * eip-25877c70gddh****
   */
  eipAllocationId?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  /**
   * @example
   * 22
   */
  port?: string;
  SSHPublicKey?: string;
  static names(): { [key: string]: string } {
    return {
      containerName: 'ContainerName',
      eipAllocationId: 'EipAllocationId',
      enable: 'Enable',
      natGatewayId: 'NatGatewayId',
      port: 'Port',
      SSHPublicKey: 'SSHPublicKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerName: 'string',
      eipAllocationId: 'string',
      enable: 'boolean',
      natGatewayId: 'string',
      port: 'string',
      SSHPublicKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForwardInfoResponse extends $tea.Model {
  connectInfo?: ForwardInfoResponseConnectInfo;
  /**
   * @example
   * dsw-notebook
   */
  containerName?: string;
  /**
   * @example
   * eip-25877c70gddh****
   */
  eipAllocationId?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  /**
   * @example
   * 22
   */
  port?: string;
  SSHPublicKey?: string;
  static names(): { [key: string]: string } {
    return {
      connectInfo: 'ConnectInfo',
      containerName: 'ContainerName',
      eipAllocationId: 'EipAllocationId',
      enable: 'Enable',
      natGatewayId: 'NatGatewayId',
      port: 'Port',
      SSHPublicKey: 'SSHPublicKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectInfo: ForwardInfoResponseConnectInfo,
      containerName: 'string',
      eipAllocationId: 'string',
      enable: 'boolean',
      natGatewayId: 'string',
      port: 'string',
      SSHPublicKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdleInstanceCullerRequest extends $tea.Model {
  /**
   * @example
   * 20
   */
  cpuPercentThreshold?: number;
  /**
   * @example
   * 10
   */
  gpuPercentThreshold?: number;
  /**
   * @example
   * 60
   */
  maxIdleTimeInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      cpuPercentThreshold: 'CpuPercentThreshold',
      gpuPercentThreshold: 'GpuPercentThreshold',
      maxIdleTimeInMinutes: 'MaxIdleTimeInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuPercentThreshold: 'number',
      gpuPercentThreshold: 'number',
      maxIdleTimeInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdleInstanceCullerResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdleInstanceCullerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIdleInstanceCullerResponseBody;
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
      body: CreateIdleInstanceCullerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  affinity?: CreateInstanceRequestAffinity;
  /**
   * @example
   * []
   */
  cloudDisks?: CreateInstanceRequestCloudDisks[];
  credentialConfig?: CredentialConfig;
  datasets?: CreateInstanceRequestDatasets[];
  /**
   * @example
   * 535.54.03
   */
  driver?: string;
  /**
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  /**
   * @example
   * {userName: "Chris"}
   */
  environmentVariables?: { [key: string]: string };
  imageAuth?: string;
  /**
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @example
   * training_data
   */
  instanceName?: string;
  /**
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: CreateInstanceRequestLabels[];
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * {"CPU":"4","Memory":"8Gi","SharedMemory":"4Gi","GPU":"1","GPUType":"Tesla-V100-16G"}
   */
  requestedResource?: CreateInstanceRequestRequestedResource;
  /**
   * @example
   * dsw-123456789
   */
  resourceId?: string;
  /**
   * @example
   * 1612285282502324
   */
  userId?: string;
  userVpc?: CreateInstanceRequestUserVpc;
  /**
   * @example
   * 40823
   */
  workspaceId?: string;
  /**
   * @example
   * d-123456789
   */
  workspaceSource?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      affinity: 'Affinity',
      cloudDisks: 'CloudDisks',
      credentialConfig: 'CredentialConfig',
      datasets: 'Datasets',
      driver: 'Driver',
      ecsSpec: 'EcsSpec',
      environmentVariables: 'EnvironmentVariables',
      imageAuth: 'ImageAuth',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceName: 'InstanceName',
      labels: 'Labels',
      priority: 'Priority',
      requestedResource: 'RequestedResource',
      resourceId: 'ResourceId',
      userId: 'UserId',
      userVpc: 'UserVpc',
      workspaceId: 'WorkspaceId',
      workspaceSource: 'WorkspaceSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      affinity: CreateInstanceRequestAffinity,
      cloudDisks: { 'type': 'array', 'itemType': CreateInstanceRequestCloudDisks },
      credentialConfig: CredentialConfig,
      datasets: { 'type': 'array', 'itemType': CreateInstanceRequestDatasets },
      driver: 'string',
      ecsSpec: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      imageAuth: 'string',
      imageId: 'string',
      imageUrl: 'string',
      instanceName: 'string',
      labels: { 'type': 'array', 'itemType': CreateInstanceRequestLabels },
      priority: 'number',
      requestedResource: CreateInstanceRequestRequestedResource,
      resourceId: 'string',
      userId: 'string',
      userVpc: CreateInstanceRequestUserVpc,
      workspaceId: 'string',
      workspaceSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class CreateInstanceShutdownTimerRequest extends $tea.Model {
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  dueTime?: string;
  /**
   * @example
   * 3600000
   */
  remainingTimeInMs?: number;
  static names(): { [key: string]: string } {
    return {
      dueTime: 'DueTime',
      remainingTimeInMs: 'RemainingTimeInMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dueTime: 'string',
      remainingTimeInMs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceShutdownTimerResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceShutdownTimerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceShutdownTimerResponseBody;
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
      body: CreateInstanceShutdownTimerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceSnapshotRequest extends $tea.Model {
  excludePaths?: string[];
  /**
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: CreateInstanceSnapshotRequestLabels[];
  overwrite?: boolean;
  /**
   * @example
   * training_data_env
   */
  snapshotDescription?: string;
  /**
   * @example
   * training_data_env
   */
  snapshotName?: string;
  static names(): { [key: string]: string } {
    return {
      excludePaths: 'ExcludePaths',
      imageUrl: 'ImageUrl',
      labels: 'Labels',
      overwrite: 'Overwrite',
      snapshotDescription: 'SnapshotDescription',
      snapshotName: 'SnapshotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludePaths: { 'type': 'array', 'itemType': 'string' },
      imageUrl: 'string',
      labels: { 'type': 'array', 'itemType': CreateInstanceSnapshotRequestLabels },
      overwrite: 'boolean',
      snapshotDescription: 'string',
      snapshotName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceSnapshotResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * snp-05cexxxxxxxxx
   */
  snapshotId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      snapshotId: 'SnapshotId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      snapshotId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceSnapshotResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceSnapshotResponseBody;
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
      body: CreateInstanceSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIdleInstanceCullerResponseBody extends $tea.Model {
  /**
   * @example
   * ValidationError
   */
  code?: string;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIdleInstanceCullerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIdleInstanceCullerResponseBody;
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
      body: DeleteIdleInstanceCullerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
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

export class DeleteInstanceLabelsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * labelKey1,labelKey2,labelKey3
   */
  labelKeys?: string;
  static names(): { [key: string]: string } {
    return {
      labelKeys: 'LabelKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelKeys: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceLabelsResponseBody extends $tea.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
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

export class DeleteInstanceLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceLabelsResponseBody;
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
      body: DeleteInstanceLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceShutdownTimerResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceShutdownTimerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceShutdownTimerResponseBody;
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
      body: DeleteInstanceShutdownTimerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceSnapshotResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * snp-05cexxxxxxxxx
   */
  snapshotId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      snapshotId: 'SnapshotId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      snapshotId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceSnapshotResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceSnapshotResponseBody;
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
      body: DeleteInstanceSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdleInstanceCullerResponseBody extends $tea.Model {
  /**
   * @example
   * ValidationError
   */
  code?: string;
  /**
   * @example
   * 20
   */
  cpuPercentThreshold?: number;
  /**
   * @example
   * 10
   */
  gpuPercentThreshold?: number;
  /**
   * @example
   * 30
   */
  idleTimeInMinutes?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 60
   */
  maxIdleTimeInMinutes?: number;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cpuPercentThreshold: 'CpuPercentThreshold',
      gpuPercentThreshold: 'GpuPercentThreshold',
      idleTimeInMinutes: 'IdleTimeInMinutes',
      instanceId: 'InstanceId',
      maxIdleTimeInMinutes: 'MaxIdleTimeInMinutes',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      cpuPercentThreshold: 'number',
      gpuPercentThreshold: 'number',
      idleTimeInMinutes: 'number',
      instanceId: 'string',
      maxIdleTimeInMinutes: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdleInstanceCullerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIdleInstanceCullerResponseBody;
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
      body: GetIdleInstanceCullerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @example
   * 3600000
   */
  accumulatedRunningTimeInMs?: number;
  affinity?: GetInstanceResponseBodyAffinity;
  /**
   * @example
   * []
   */
  cloudDisks?: GetInstanceResponseBodyCloudDisks[];
  /**
   * @example
   * null
   */
  code?: string;
  datasets?: GetInstanceResponseBodyDatasets[];
  /**
   * @example
   * 535.54.03
   */
  driver?: string;
  /**
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  /**
   * @example
   * {userName: "Chris"}
   */
  environmentVariables?: { [key: string]: string };
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * {"InstanceId":"dsw-05cefd0be2e5a278","CpuPercentThreshold":20,"GpuPercentThreshold":10,"MaxIdleTimeInMinutes":120,"IdleTimeInMinutes":30}
   */
  idleInstanceCuller?: GetInstanceResponseBodyIdleInstanceCuller;
  imageAuth?: string;
  /**
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @example
   * py36_cpu_tf1.12_ubuntu
   */
  imageName?: string;
  /**
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * training_data
   */
  instanceName?: string;
  instanceShutdownTimer?: GetInstanceResponseBodyInstanceShutdownTimer;
  /**
   * @example
   * []
   */
  instanceSnapshotList?: GetInstanceResponseBodyInstanceSnapshotList[];
  /**
   * @example
   * https://dsw-cn-shanghai.data.aliyun.com/notebook.htm?instance=39772#/
   */
  instanceUrl?: string;
  /**
   * @remarks
   * Jupyterlab Url。
   * 
   * @example
   * https://dsw-gateway-cn-shanghai.aliyun.com/dsw-39772/lab/
   */
  jupyterlabUrl?: string;
  /**
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: GetInstanceResponseBodyLabels[];
  latestSnapshot?: GetInstanceResponseBodyLatestSnapshot;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  nodeErrorRecovery?: GetInstanceResponseBodyNodeErrorRecovery;
  /**
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Internal Error
   */
  reasonCode?: string;
  /**
   * @example
   * ImagePullBackOff
   */
  reasonMessage?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * {"CPU":"4","Memory":"8Gi","SharedMemory":"4Gi","GPU":"1","GPUType":"Tesla-V100-16G"}
   */
  requestedResource?: GetInstanceResponseBodyRequestedResource;
  /**
   * @example
   * dsw-123456789
   */
  resourceId?: string;
  /**
   * @example
   * ecs.g7.xlarge
   */
  resourceName?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * https://dsw-gateway-cn-shanghai.aliyun.com/dsw-39772/tty/
   */
  terminalUrl?: string;
  /**
   * @example
   * 1612285282502324
   */
  userId?: string;
  /**
   * @example
   * 测试用户
   */
  userName?: string;
  userVpc?: GetInstanceResponseBodyUserVpc;
  /**
   * @remarks
   * Web IDE url。
   * 
   * @example
   * https://dsw-gateway-cn-shanghai.aliyun.com/dsw-39772/ide/
   */
  webIDEUrl?: string;
  /**
   * @example
   * 40823
   */
  workspaceId?: string;
  /**
   * @example
   * training_data
   */
  workspaceName?: string;
  /**
   * @example
   * d-123456789
   */
  workspaceSource?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      accessibility: 'Accessibility',
      accumulatedRunningTimeInMs: 'AccumulatedRunningTimeInMs',
      affinity: 'Affinity',
      cloudDisks: 'CloudDisks',
      code: 'Code',
      datasets: 'Datasets',
      driver: 'Driver',
      ecsSpec: 'EcsSpec',
      environmentVariables: 'EnvironmentVariables',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      httpStatusCode: 'HttpStatusCode',
      idleInstanceCuller: 'IdleInstanceCuller',
      imageAuth: 'ImageAuth',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceShutdownTimer: 'InstanceShutdownTimer',
      instanceSnapshotList: 'InstanceSnapshotList',
      instanceUrl: 'InstanceUrl',
      jupyterlabUrl: 'JupyterlabUrl',
      labels: 'Labels',
      latestSnapshot: 'LatestSnapshot',
      message: 'Message',
      nodeErrorRecovery: 'NodeErrorRecovery',
      paymentType: 'PaymentType',
      priority: 'Priority',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      requestedResource: 'RequestedResource',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      status: 'Status',
      success: 'Success',
      terminalUrl: 'TerminalUrl',
      userId: 'UserId',
      userName: 'UserName',
      userVpc: 'UserVpc',
      webIDEUrl: 'WebIDEUrl',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
      workspaceSource: 'WorkspaceSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      accessibility: 'string',
      accumulatedRunningTimeInMs: 'number',
      affinity: GetInstanceResponseBodyAffinity,
      cloudDisks: { 'type': 'array', 'itemType': GetInstanceResponseBodyCloudDisks },
      code: 'string',
      datasets: { 'type': 'array', 'itemType': GetInstanceResponseBodyDatasets },
      driver: 'string',
      ecsSpec: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      httpStatusCode: 'number',
      idleInstanceCuller: GetInstanceResponseBodyIdleInstanceCuller,
      imageAuth: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceShutdownTimer: GetInstanceResponseBodyInstanceShutdownTimer,
      instanceSnapshotList: { 'type': 'array', 'itemType': GetInstanceResponseBodyInstanceSnapshotList },
      instanceUrl: 'string',
      jupyterlabUrl: 'string',
      labels: { 'type': 'array', 'itemType': GetInstanceResponseBodyLabels },
      latestSnapshot: GetInstanceResponseBodyLatestSnapshot,
      message: 'string',
      nodeErrorRecovery: GetInstanceResponseBodyNodeErrorRecovery,
      paymentType: 'string',
      priority: 'number',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      requestedResource: GetInstanceResponseBodyRequestedResource,
      resourceId: 'string',
      resourceName: 'string',
      status: 'string',
      success: 'boolean',
      terminalUrl: 'string',
      userId: 'string',
      userName: 'string',
      userVpc: GetInstanceResponseBodyUserVpc,
      webIDEUrl: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
      workspaceSource: 'string',
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

export class GetInstanceEventsRequest extends $tea.Model {
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 2000
   */
  maxEventsNum?: number;
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      maxEventsNum: 'MaxEventsNum',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxEventsNum: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceEventsResponseBody extends $tea.Model {
  /**
   * @example
   * None
   */
  code?: string;
  events?: string[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * XXX
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      events: 'Events',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      events: { 'type': 'array', 'itemType': 'string' },
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceEventsResponseBody;
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
      body: GetInstanceEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMetricsRequest extends $tea.Model {
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GpuCoreUsage
   */
  metricType?: string;
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * 15m
   */
  timeStep?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      metricType: 'MetricType',
      startTime: 'StartTime',
      timeStep: 'TimeStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      metricType: 'string',
      startTime: 'string',
      timeStep: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMetricsResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  podMetrics?: GetInstanceMetricsResponseBodyPodMetrics[];
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      podMetrics: 'PodMetrics',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      podMetrics: { 'type': 'array', 'itemType': GetInstanceMetricsResponseBodyPodMetrics },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMetricsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceMetricsResponseBody;
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
      body: GetInstanceMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceShutdownTimerResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  dueTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * 3600000
   */
  remainingTimeInMs?: number;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dueTime: 'DueTime',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      remainingTimeInMs: 'RemainingTimeInMs',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dueTime: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      remainingTimeInMs: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceShutdownTimerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceShutdownTimerResponseBody;
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
      body: GetInstanceShutdownTimerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSnapshotResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  excludePaths?: string[];
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * {\"foo\": \"bar\"}
   */
  labels?: GetInstanceSnapshotResponseBodyLabels[];
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * Internal Error
   */
  reasonCode?: string;
  /**
   * @example
   * ImagePullBackOff
   */
  reasonMessage?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * snp-05cexxxxxxxxx
   */
  snapshotId?: string;
  /**
   * @example
   * training_data_env
   */
  snapshotName?: string;
  /**
   * @example
   * Pushing
   */
  status?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      excludePaths: 'ExcludePaths',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      httpStatusCode: 'HttpStatusCode',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      labels: 'Labels',
      message: 'Message',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      excludePaths: { 'type': 'array', 'itemType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      httpStatusCode: 'number',
      imageId: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      labels: { 'type': 'array', 'itemType': GetInstanceSnapshotResponseBodyLabels },
      message: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSnapshotResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceSnapshotResponseBody;
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
      body: GetInstanceSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLifecycleRequest extends $tea.Model {
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  limit?: number;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  sessionNumber?: number;
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      limit: 'Limit',
      order: 'Order',
      sessionNumber: 'SessionNumber',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      limit: 'number',
      order: 'string',
      sessionNumber: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLifecycleResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * [[{"Status":"Creating","GmtCreateTime":"2022-09-19T22:38:00Z","Reason":"","ReasonCode":""}]]
   */
  lifecycle?: GetLifecycleResponseBodyLifecycle[][];
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 35
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      lifecycle: 'Lifecycle',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      lifecycle: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': GetLifecycleResponseBodyLifecycle } },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLifecycleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLifecycleResponseBody;
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
      body: GetLifecycleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricsRequest extends $tea.Model {
  /**
   * @example
   * {"userId":"16122852825*****","jobId":"dsw-328d2bbf605*****","regionId":"cn-wulanchabu","pod":"dsw-45680-76766f8778-95gxh"}
   */
  dimensions?: string;
  /**
   * @example
   * 2020-11-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  length?: string;
  /**
   * @example
   * INSTANCE_SPEC_MEMORY_SWAP
   */
  metricName?: string;
  /**
   * @example
   * acs_pai_dsw
   */
  namespace?: string;
  /**
   * @example
   * 15761485350009dd70bb64cff1f0fff750b08ffff073be5fb1e785e2b020f1a949d5ea14aea7fed82f01dd8****
   */
  nextToken?: string;
  /**
   * @example
   * 60
   */
  period?: string;
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      length: 'Length',
      metricName: 'MetricName',
      namespace: 'Namespace',
      nextToken: 'NextToken',
      period: 'Period',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      endTime: 'string',
      length: 'string',
      metricName: 'string',
      namespace: 'string',
      nextToken: 'string',
      period: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * [{"timestamp":1548777660000,"userId":"120886317861****","instanceId":"i-abc****","Minimum":9.92,"Average":9.92,"Maximum":9.92}]
   */
  dataPoints?: string;
  /**
   * @example
   * Succeed
   */
  message?: string;
  /**
   * @example
   * 15761485350009dd70bb64cff1f0fff750b08ffff073be5fb1e785e2b020f1a949d5ea14aea7fed82f01dd8****
   */
  nextToken?: string;
  /**
   * @example
   * 60
   */
  period?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataPoints: 'DataPoints',
      message: 'Message',
      nextToken: 'NextToken',
      period: 'Period',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataPoints: 'string',
      message: 'string',
      nextToken: 'string',
      period: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMetricsResponseBody;
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
      body: GetMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupStatisticsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-11-08T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rg-123456789
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 27218,34956
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      resourceId: 'ResourceId',
      startTime: 'StartTime',
      workspaceIds: 'WorkspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      resourceId: 'string',
      startTime: 'string',
      workspaceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupStatisticsResponseBody extends $tea.Model {
  /**
   * @example
   * InternalError
   */
  code?: string;
  /**
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  statistics?: { [key: string]: {[key: string]: any} };
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      statistics: 'Statistics',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      statistics: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceGroupStatisticsResponseBody;
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
      body: GetResourceGroupStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenRequest extends $tea.Model {
  /**
   * @example
   * 60
   */
  expireTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBody extends $tea.Model {
  /**
   * @example
   * ValidationError
   */
  code?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * *******
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTokenResponseBody;
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
      body: GetTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserConfigResponseBody extends $tea.Model {
  /**
   * @example
   * false
   */
  accountSufficient?: boolean;
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * true
   */
  enableEciDisk?: boolean;
  freeTier?: GetUserConfigResponseBodyFreeTier;
  /**
   * @example
   * true
   */
  freeTierSpecAvailable?: boolean;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * "Access denied"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountSufficient: 'AccountSufficient',
      code: 'Code',
      enableEciDisk: 'EnableEciDisk',
      freeTier: 'FreeTier',
      freeTierSpecAvailable: 'FreeTierSpecAvailable',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountSufficient: 'boolean',
      code: 'string',
      enableEciDisk: 'boolean',
      freeTier: GetUserConfigResponseBodyFreeTier,
      freeTierSpecAvailable: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserConfigResponseBody;
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
      body: GetUserConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PRIVATE
   */
  acceleratorType?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * gmtCreate
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  ecsSpecs?: ListEcsSpecsResponseBodyEcsSpecs[];
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 35
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ecsSpecs: 'EcsSpecs',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      ecsSpecs: { 'type': 'array', 'itemType': ListEcsSpecsResponseBodyEcsSpecs },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEcsSpecsResponseBody;
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
      body: ListEcsSpecsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSnapshotRequest extends $tea.Model {
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * gmtCreate
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSnapshotResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  snapshots?: ListInstanceSnapshotResponseBodySnapshots[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 35
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': ListInstanceSnapshotResponseBodySnapshots },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSnapshotResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceSnapshotResponseBody;
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
      body: ListInstanceSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatisticsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 27218,34956
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceIds: 'WorkspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatisticsResponseBody extends $tea.Model {
  /**
   * @example
   * InternalError
   */
  code?: string;
  /**
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  statistics?: { [key: string]: {[key: string]: any} };
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      statistics: 'Statistics',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      statistics: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceStatisticsResponseBody;
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
      body: ListInstanceStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  /**
   * @example
   * AcceleratorType
   */
  acceleratorType?: string;
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  createUserId?: string;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * training_data
   */
  instanceName?: string;
  labels?: { [key: string]: any };
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @example
   * rg-123456789
   */
  resourceId?: string;
  /**
   * @example
   * gmtCreate
   */
  sortBy?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * 40823
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      accessibility: 'Accessibility',
      createUserId: 'CreateUserId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      labels: 'Labels',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentType: 'PaymentType',
      resourceId: 'ResourceId',
      sortBy: 'SortBy',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      accessibility: 'string',
      createUserId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentType: 'string',
      resourceId: 'string',
      sortBy: 'string',
      status: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesShrinkRequest extends $tea.Model {
  /**
   * @example
   * AcceleratorType
   */
  acceleratorType?: string;
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  createUserId?: string;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * training_data
   */
  instanceName?: string;
  labelsShrink?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @example
   * rg-123456789
   */
  resourceId?: string;
  /**
   * @example
   * gmtCreate
   */
  sortBy?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * 40823
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      accessibility: 'Accessibility',
      createUserId: 'CreateUserId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      labelsShrink: 'Labels',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentType: 'PaymentType',
      resourceId: 'ResourceId',
      sortBy: 'SortBy',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      accessibility: 'string',
      createUserId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      labelsShrink: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentType: 'string',
      resourceId: 'string',
      sortBy: 'string',
      status: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 35
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instances: 'Instances',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class StartInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartInstanceResponseBody;
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

export class StopInstanceRequest extends $tea.Model {
  /**
   * @example
   * false
   */
  saveImage?: boolean;
  static names(): { [key: string]: string } {
    return {
      saveImage: 'SaveImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saveImage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopInstanceResponseBody;
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
      body: StopInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequest extends $tea.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  affinity?: UpdateInstanceRequestAffinity;
  /**
   * @example
   * []
   */
  cloudDisks?: UpdateInstanceRequestCloudDisks[];
  credentialConfig?: CredentialConfig;
  datasets?: UpdateInstanceRequestDatasets[];
  disassociateCredential?: boolean;
  /**
   * @example
   * false
   */
  disassociateDatasets?: boolean;
  /**
   * @example
   * false
   */
  disassociateDriver?: boolean;
  /**
   * @example
   * false
   */
  disassociateForwardInfos?: boolean;
  /**
   * @example
   * false
   */
  disassociateVpc?: boolean;
  /**
   * @example
   * 535.54.03
   */
  driver?: string;
  /**
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  imageAuth?: string;
  /**
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @example
   * training_data
   */
  instanceName?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * {"CPU":"4","Memory":"8Gi","SharedMemory":"4Gi","GPU":"1","GPUType":"Tesla-V100-16G"}
   */
  requestedResource?: UpdateInstanceRequestRequestedResource;
  /**
   * @example
   * 1612285282502324
   */
  userId?: string;
  userVpc?: UpdateInstanceRequestUserVpc;
  /**
   * @example
   * d-123456789
   */
  workspaceSource?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      affinity: 'Affinity',
      cloudDisks: 'CloudDisks',
      credentialConfig: 'CredentialConfig',
      datasets: 'Datasets',
      disassociateCredential: 'DisassociateCredential',
      disassociateDatasets: 'DisassociateDatasets',
      disassociateDriver: 'DisassociateDriver',
      disassociateForwardInfos: 'DisassociateForwardInfos',
      disassociateVpc: 'DisassociateVpc',
      driver: 'Driver',
      ecsSpec: 'EcsSpec',
      imageAuth: 'ImageAuth',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceName: 'InstanceName',
      priority: 'Priority',
      requestedResource: 'RequestedResource',
      userId: 'UserId',
      userVpc: 'UserVpc',
      workspaceSource: 'WorkspaceSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      affinity: UpdateInstanceRequestAffinity,
      cloudDisks: { 'type': 'array', 'itemType': UpdateInstanceRequestCloudDisks },
      credentialConfig: CredentialConfig,
      datasets: { 'type': 'array', 'itemType': UpdateInstanceRequestDatasets },
      disassociateCredential: 'boolean',
      disassociateDatasets: 'boolean',
      disassociateDriver: 'boolean',
      disassociateForwardInfos: 'boolean',
      disassociateVpc: 'boolean',
      driver: 'string',
      ecsSpec: 'string',
      imageAuth: 'string',
      imageId: 'string',
      imageUrl: 'string',
      instanceName: 'string',
      priority: 'number',
      requestedResource: UpdateInstanceRequestRequestedResource,
      userId: 'string',
      userVpc: UpdateInstanceRequestUserVpc,
      workspaceSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class UpdateInstanceLabelsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  labels?: UpdateInstanceLabelsRequestLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': UpdateInstanceLabelsRequestLabels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceLabelsResponseBody extends $tea.Model {
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
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

export class UpdateInstanceLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceLabelsResponseBody;
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
      body: UpdateInstanceLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialConfigConfigsRolesUserInfo extends $tea.Model {
  /**
   * @example
   * LT********
   */
  accessKeyId?: string;
  /**
   * @example
   * 456******
   */
  id?: string;
  /**
   * @example
   * ********
   */
  securityToken?: string;
  /**
   * @example
   * S
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      id: 'Id',
      securityToken: 'SecurityToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      id: 'string',
      securityToken: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialConfigConfigsRoles extends $tea.Model {
  /**
   * @example
   * 123******
   */
  assumeRoleFor?: string;
  /**
   * @example
   * {}
   */
  policy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::123******:role/****
   */
  roleArn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * service
   */
  roleType?: string;
  userInfo?: CredentialConfigConfigsRolesUserInfo;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      policy: 'Policy',
      roleArn: 'RoleArn',
      roleType: 'RoleType',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'string',
      policy: 'string',
      roleArn: 'string',
      roleType: 'string',
      userInfo: CredentialConfigConfigsRolesUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialConfigConfigs extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  key?: string;
  roles?: CredentialConfigConfigsRoles[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Role
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      roles: 'Roles',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      roles: { 'type': 'array', 'itemType': CredentialConfigConfigsRoles },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForwardInfoResponseConnectInfoInternet extends $tea.Model {
  /**
   * @example
   * 47.111.119.114
   */
  endpoint?: string;
  /**
   * @example
   * 22
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForwardInfoResponseConnectInfoIntranet extends $tea.Model {
  /**
   * @example
   * dsw-notebook-22-urz3u6cnu0uts7ej9r.dsw-5cc6083084818f60.dsw.pai.alibaba.com
   */
  endpoint?: string;
  /**
   * @example
   * 22
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForwardInfoResponseConnectInfo extends $tea.Model {
  internet?: ForwardInfoResponseConnectInfoInternet;
  intranet?: ForwardInfoResponseConnectInfoIntranet;
  /**
   * @example
   * DNAT and privateZone are both ready.
   */
  message?: string;
  /**
   * @example
   * Ready
   */
  phase?: string;
  static names(): { [key: string]: string } {
    return {
      internet: 'Internet',
      intranet: 'Intranet',
      message: 'Message',
      phase: 'Phase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internet: ForwardInfoResponseConnectInfoInternet,
      intranet: ForwardInfoResponseConnectInfoIntranet,
      message: 'string',
      phase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestAffinityCPU extends $tea.Model {
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestAffinity extends $tea.Model {
  CPU?: CreateInstanceRequestAffinityCPU;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: CreateInstanceRequestAffinityCPU,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestCloudDisksStatus extends $tea.Model {
  available?: number;
  capacity?: number;
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      capacity: 'Capacity',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'number',
      capacity: 'number',
      usage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestCloudDisks extends $tea.Model {
  /**
   * @example
   * 30Gi
   */
  capacity?: string;
  /**
   * @example
   * /mmt/workspace
   */
  mountPath?: string;
  /**
   * @example
   * workspace
   */
  path?: string;
  status?: CreateInstanceRequestCloudDisksStatus;
  /**
   * @example
   * rootfs
   */
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      mountPath: 'MountPath',
      path: 'Path',
      status: 'Status',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      mountPath: 'string',
      path: 'string',
      status: CreateInstanceRequestCloudDisksStatus,
      subType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestDatasets extends $tea.Model {
  /**
   * @example
   * d-vsqjvsjp4orp5l206u
   */
  datasetId?: string;
  /**
   * @example
   * /mnt/data
   */
  mountPath?: string;
  optionType?: string;
  options?: string;
  /**
   * @example
   * oss://bucket.oss-cn-shanghai.aliyuncs.com/data/path/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      mountPath: 'MountPath',
      optionType: 'OptionType',
      options: 'Options',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      mountPath: 'string',
      optionType: 'string',
      options: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestLabels extends $tea.Model {
  /**
   * @example
   * stsTokenOwner
   */
  key?: string;
  /**
   * @example
   * 123xxxxxxxx
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

export class CreateInstanceRequestRequestedResource extends $tea.Model {
  /**
   * @example
   * 32
   */
  CPU?: string;
  /**
   * @example
   * 4
   */
  GPU?: string;
  /**
   * @example
   * v100
   */
  GPUType?: string;
  /**
   * @example
   * 32
   */
  memory?: string;
  /**
   * @example
   * 32
   */
  sharedMemory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUType: 'GPUType',
      memory: 'Memory',
      sharedMemory: 'SharedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      GPUType: 'string',
      memory: 'string',
      sharedMemory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestUserVpc extends $tea.Model {
  /**
   * @example
   * eth0 | eth1
   */
  defaultRoute?: string;
  /**
   * @example
   * ["192.168.0.1/24", "192.168.1.1/24"]
   */
  extendedCIDRs?: string[];
  forwardInfos?: ForwardInfo[];
  /**
   * @example
   * sg-xxxxxx
   */
  securityGroupId?: string;
  /**
   * @example
   * vsw-xxxxx
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-xxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRoute: 'DefaultRoute',
      extendedCIDRs: 'ExtendedCIDRs',
      forwardInfos: 'ForwardInfos',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRoute: 'string',
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      forwardInfos: { 'type': 'array', 'itemType': ForwardInfo },
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceSnapshotRequestLabels extends $tea.Model {
  /**
   * @example
   * stsTokenOwner
   */
  key?: string;
  /**
   * @example
   * 123xxxxxxxx
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

export class GetInstanceResponseBodyAffinityCPU extends $tea.Model {
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyAffinity extends $tea.Model {
  CPU?: GetInstanceResponseBodyAffinityCPU;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: GetInstanceResponseBodyAffinityCPU,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyCloudDisks extends $tea.Model {
  /**
   * @example
   * 30Gi
   */
  capacity?: string;
  /**
   * @example
   * /mmt/workspace
   */
  mountPath?: string;
  /**
   * @example
   * /workspace
   */
  path?: string;
  /**
   * @example
   * rootfs
   */
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      mountPath: 'MountPath',
      path: 'Path',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      mountPath: 'string',
      path: 'string',
      subType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDatasets extends $tea.Model {
  /**
   * @example
   * d-vsqjvsjp4orp5l206u
   */
  datasetId?: string;
  /**
   * @example
   * /mnt/data
   */
  mountPath?: string;
  optionType?: string;
  options?: string;
  /**
   * @example
   * oss://bucket.oss-cn-shanghai.aliyuncs.com/data/path/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      mountPath: 'MountPath',
      optionType: 'OptionType',
      options: 'Options',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      mountPath: 'string',
      optionType: 'string',
      options: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyIdleInstanceCuller extends $tea.Model {
  /**
   * @example
   * 20
   */
  cpuPercentThreshold?: number;
  /**
   * @example
   * 10
   */
  gpuPercentThreshold?: number;
  /**
   * @example
   * 30
   */
  idleTimeInMinutes?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 60
   */
  maxIdleTimeInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      cpuPercentThreshold: 'CpuPercentThreshold',
      gpuPercentThreshold: 'GpuPercentThreshold',
      idleTimeInMinutes: 'IdleTimeInMinutes',
      instanceId: 'InstanceId',
      maxIdleTimeInMinutes: 'MaxIdleTimeInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuPercentThreshold: 'number',
      gpuPercentThreshold: 'number',
      idleTimeInMinutes: 'number',
      instanceId: 'string',
      maxIdleTimeInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceShutdownTimer extends $tea.Model {
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  dueTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 3600000
   */
  remainingTimeInMs?: number;
  static names(): { [key: string]: string } {
    return {
      dueTime: 'DueTime',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      remainingTimeInMs: 'RemainingTimeInMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dueTime: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      remainingTimeInMs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceSnapshotList extends $tea.Model {
  /**
   * @remarks
   * 快照创建时间
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * 快照修改时间
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * 镜像Id
   * 
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @remarks
   * 镜像名称
   * 
   * @example
   * py36_cpu_tf1.12_ubuntu
   */
  imageName?: string;
  /**
   * @remarks
   * 镜像Url
   * 
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @remarks
   * 实例快照错误代码
   * 
   * @example
   * Internal Error
   */
  reasonCode?: string;
  /**
   * @remarks
   * 实例快照错误消息
   * 
   * @example
   * ImagePullBackOff
   */
  reasonMessage?: string;
  /**
   * @remarks
   * 镜像仓库Url
   * 
   * @example
   * https://cr.console.aliyun.com/repository/cn-hangzhou/zouxu/kf/images
   */
  repositoryUrl?: string;
  /**
   * @remarks
   * 实例快照状态
   * 
   * @example
   * Pushing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageUrl: 'ImageUrl',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      repositoryUrl: 'RepositoryUrl',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      repositoryUrl: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyLabels extends $tea.Model {
  /**
   * @example
   * stsTokenOwner
   */
  key?: string;
  /**
   * @example
   * 123xxxxxxxx
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

export class GetInstanceResponseBodyLatestSnapshot extends $tea.Model {
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @example
   * py36_cpu_tf1.12_ubuntu
   */
  imageName?: string;
  /**
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @remarks
   * 实例快照错误代码
   * 
   * @example
   * Internal Error
   */
  reasonCode?: string;
  /**
   * @remarks
   * 实例快照错误消息
   * 
   * @example
   * ImagePullBackOff
   */
  reasonMessage?: string;
  /**
   * @example
   * https://cr.console.aliyun.com/repository/cn-hangzhou/zouxu/kf/images
   */
  repositoryUrl?: string;
  /**
   * @remarks
   * 实例快照状态
   * 
   * @example
   * Pushing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageUrl: 'ImageUrl',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      repositoryUrl: 'RepositoryUrl',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      repositoryUrl: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyNodeErrorRecovery extends $tea.Model {
  autoSwitchCountdownSeconds?: number;
  enableAutoSwitchOnNodeError?: boolean;
  hasNodeError?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoSwitchCountdownSeconds: 'autoSwitchCountdownSeconds',
      enableAutoSwitchOnNodeError: 'enableAutoSwitchOnNodeError',
      hasNodeError: 'hasNodeError',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSwitchCountdownSeconds: 'number',
      enableAutoSwitchOnNodeError: 'boolean',
      hasNodeError: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyRequestedResource extends $tea.Model {
  /**
   * @example
   * 32
   */
  CPU?: string;
  /**
   * @example
   * 4
   */
  GPU?: string;
  /**
   * @example
   * v100
   */
  GPUType?: string;
  /**
   * @example
   * 32
   */
  memory?: string;
  /**
   * @example
   * 32
   */
  sharedMemory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUType: 'GPUType',
      memory: 'Memory',
      sharedMemory: 'SharedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      GPUType: 'string',
      memory: 'string',
      sharedMemory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyUserVpc extends $tea.Model {
  /**
   * @example
   * eth0 | eth1
   */
  defaultRoute?: string;
  /**
   * @example
   * ["192.168.0.1/24", "192.168.1.1/24"]
   */
  extendedCIDRs?: string[];
  forwardInfos?: ForwardInfoResponse[];
  /**
   * @example
   * sg-xxxxxx
   */
  securityGroupId?: string;
  /**
   * @example
   * vsw-xxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Vpc Id。
   * 
   * @example
   * vpc-xxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRoute: 'DefaultRoute',
      extendedCIDRs: 'ExtendedCIDRs',
      forwardInfos: 'ForwardInfos',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRoute: 'string',
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      forwardInfos: { 'type': 'array', 'itemType': ForwardInfoResponse },
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMetricsResponseBodyPodMetricsMetrics extends $tea.Model {
  /**
   * @example
   * 1670890560
   */
  time?: number;
  /**
   * @example
   * 25.901031
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMetricsResponseBodyPodMetrics extends $tea.Model {
  metrics?: GetInstanceMetricsResponseBodyPodMetricsMetrics[];
  /**
   * @example
   * dsw-15870-695f44c5bc-hd6xm
   */
  podId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      podId: 'PodId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': GetInstanceMetricsResponseBodyPodMetricsMetrics },
      podId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSnapshotResponseBodyLabels extends $tea.Model {
  /**
   * @example
   * stsTokenOwner
   */
  key?: string;
  /**
   * @example
   * 123xxxxxxxx
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

export class GetLifecycleResponseBodyLifecycle extends $tea.Model {
  /**
   * @example
   * Starting
   */
  status?: string;
  /**
   * @example
   * “”
   */
  reasonCode?: string;
  /**
   * @example
   * “”
   */
  reasonMessage?: string;
  /**
   * @example
   * 2022-10-21T07:27:44Z
   */
  gmtCreateTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      gmtCreateTime: 'GmtCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      gmtCreateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserConfigResponseBodyFreeTier extends $tea.Model {
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 个
   */
  initBaseUnit?: string;
  /**
   * @example
   * 5000
   */
  initBaseValue?: number;
  /**
   * @example
   * 个
   */
  initShowUnit?: string;
  /**
   * @example
   * 5000
   */
  initShowValue?: string;
  /**
   * @example
   * true
   */
  isFreeTierUser?: boolean;
  /**
   * @example
   * 个
   */
  periodBaseUnit?: string;
  /**
   * @example
   * 3000
   */
  periodBaseValue?: number;
  /**
   * @example
   * 个
   */
  periodShowUnit?: string;
  /**
   * @example
   * 3000
   */
  periodShowValue?: string;
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * valid
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      initBaseUnit: 'InitBaseUnit',
      initBaseValue: 'InitBaseValue',
      initShowUnit: 'InitShowUnit',
      initShowValue: 'InitShowValue',
      isFreeTierUser: 'IsFreeTierUser',
      periodBaseUnit: 'PeriodBaseUnit',
      periodBaseValue: 'PeriodBaseValue',
      periodShowUnit: 'PeriodShowUnit',
      periodShowValue: 'PeriodShowValue',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      initBaseUnit: 'string',
      initBaseValue: 'number',
      initShowUnit: 'string',
      initShowValue: 'string',
      isFreeTierUser: 'boolean',
      periodBaseUnit: 'string',
      periodBaseValue: 'number',
      periodShowUnit: 'string',
      periodShowValue: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsResponseBodyEcsSpecsLabels extends $tea.Model {
  /**
   * @example
   * stsTokenOwner
   */
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

export class ListEcsSpecsResponseBodyEcsSpecs extends $tea.Model {
  /**
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @example
   * 32
   */
  CPU?: number;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 4
   */
  GPU?: number;
  /**
   * @example
   * v100
   */
  GPUType?: string;
  /**
   * @example
   * 5120000
   */
  instanceBandwidthRx?: number;
  /**
   * @example
   * ecs.gn5-c28g1.7xlarge
   */
  instanceType?: string;
  /**
   * @example
   * True
   */
  isAvailable?: boolean;
  /**
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: ListEcsSpecsResponseBodyEcsSpecsLabels[];
  /**
   * @example
   * 32
   */
  memory?: number;
  /**
   * @example
   * 22.8
   */
  price?: number;
  /**
   * @example
   * 500
   */
  systemDiskCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      CPU: 'CPU',
      currency: 'Currency',
      GPU: 'GPU',
      GPUType: 'GPUType',
      instanceBandwidthRx: 'InstanceBandwidthRx',
      instanceType: 'InstanceType',
      isAvailable: 'IsAvailable',
      labels: 'Labels',
      memory: 'Memory',
      price: 'Price',
      systemDiskCapacity: 'SystemDiskCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      CPU: 'number',
      currency: 'string',
      GPU: 'number',
      GPUType: 'string',
      instanceBandwidthRx: 'number',
      instanceType: 'string',
      isAvailable: 'boolean',
      labels: { 'type': 'array', 'itemType': ListEcsSpecsResponseBodyEcsSpecsLabels },
      memory: 'number',
      price: 'number',
      systemDiskCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSnapshotResponseBodySnapshotsLabels extends $tea.Model {
  /**
   * @example
   * stsTokenOwner
   */
  key?: string;
  /**
   * @example
   * 123xxxxxxxx
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

export class ListInstanceSnapshotResponseBodySnapshots extends $tea.Model {
  /**
   * @example
   * ["/path1","/path2"]
   */
  excludePaths?: string[];
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: ListInstanceSnapshotResponseBodySnapshotsLabels[];
  /**
   * @example
   * Internal Error
   */
  reasonCode?: string;
  /**
   * @example
   * ImagePullBackOff
   */
  reasonMessage?: string;
  /**
   * @example
   * snp-05cexxxxxxxxx
   */
  snapshotId?: string;
  /**
   * @example
   * training_data_env
   */
  snapshotName?: string;
  /**
   * @example
   * Pushing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      excludePaths: 'ExcludePaths',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      labels: 'Labels',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludePaths: { 'type': 'array', 'itemType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      labels: { 'type': 'array', 'itemType': ListInstanceSnapshotResponseBodySnapshotsLabels },
      reasonCode: 'string',
      reasonMessage: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesAffinityCPU extends $tea.Model {
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesAffinity extends $tea.Model {
  CPU?: ListInstancesResponseBodyInstancesAffinityCPU;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: ListInstancesResponseBodyInstancesAffinityCPU,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesCloudDisks extends $tea.Model {
  /**
   * @example
   * 30Gi
   */
  capacity?: string;
  /**
   * @example
   * /mmt/workspace
   */
  mountPath?: string;
  /**
   * @example
   * /workspace
   */
  path?: string;
  /**
   * @example
   * rootfs
   */
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      mountPath: 'MountPath',
      path: 'Path',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      mountPath: 'string',
      path: 'string',
      subType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesDatasets extends $tea.Model {
  /**
   * @example
   * d-vsqjvsjp4orp5l206u
   */
  datasetId?: string;
  /**
   * @example
   * /mnt/data
   */
  mountPath?: string;
  optionType?: string;
  options?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      mountPath: 'MountPath',
      optionType: 'OptionType',
      options: 'Options',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      mountPath: 'string',
      optionType: 'string',
      options: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesIdleInstanceCuller extends $tea.Model {
  /**
   * @example
   * 20
   */
  cpuPercentThreshold?: number;
  /**
   * @example
   * 10
   */
  gpuPercentThreshold?: number;
  /**
   * @example
   * 30
   */
  idleTimeInMinutes?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 60
   */
  maxIdleTimeInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      cpuPercentThreshold: 'CpuPercentThreshold',
      gpuPercentThreshold: 'GpuPercentThreshold',
      idleTimeInMinutes: 'IdleTimeInMinutes',
      instanceId: 'InstanceId',
      maxIdleTimeInMinutes: 'MaxIdleTimeInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuPercentThreshold: 'number',
      gpuPercentThreshold: 'number',
      idleTimeInMinutes: 'number',
      instanceId: 'string',
      maxIdleTimeInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesInstanceShutdownTimer extends $tea.Model {
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  dueTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 3600000
   */
  remainingTimeInMs?: number;
  static names(): { [key: string]: string } {
    return {
      dueTime: 'DueTime',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      remainingTimeInMs: 'RemainingTimeInMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dueTime: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      remainingTimeInMs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesInstanceSnapshotList extends $tea.Model {
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @example
   * py36_cpu_tf1.12_ubuntu
   */
  imageName?: string;
  /**
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @example
   * Internal Error
   */
  reasonCode?: string;
  /**
   * @example
   * ImagePullBackOff
   */
  reasonMessage?: string;
  /**
   * @example
   * https://cr.console.aliyun.com/repository/cn-hangzhou/zouxu/kf/images
   */
  repositoryUrl?: string;
  /**
   * @example
   * Pushing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageUrl: 'ImageUrl',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      repositoryUrl: 'RepositoryUrl',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      repositoryUrl: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesLabels extends $tea.Model {
  /**
   * @example
   * stsTokenOwner
   */
  key?: string;
  /**
   * @example
   * 123xxxxxxxx
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

export class ListInstancesResponseBodyInstancesLatestSnapshot extends $tea.Model {
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @example
   * py36_cpu_tf1.12_ubuntu
   */
  imageName?: string;
  /**
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @example
   * Internal Error
   */
  reasonCode?: string;
  /**
   * @example
   * ImagePullBackOff
   */
  reasonMessage?: string;
  /**
   * @example
   * https://cr.console.aliyun.com/repository/cn-hangzhou/zouxu/kf/images
   */
  repositoryUrl?: string;
  /**
   * @example
   * Pushing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageUrl: 'ImageUrl',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      repositoryUrl: 'RepositoryUrl',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      repositoryUrl: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesRequestedResource extends $tea.Model {
  /**
   * @example
   * 32
   */
  CPU?: string;
  /**
   * @example
   * 4
   */
  GPU?: string;
  /**
   * @example
   * v100
   */
  GPUType?: string;
  /**
   * @example
   * 32
   */
  memory?: string;
  /**
   * @example
   * 32
   */
  sharedMemory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUType: 'GPUType',
      memory: 'Memory',
      sharedMemory: 'SharedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      GPUType: 'string',
      memory: 'string',
      sharedMemory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesUserVpc extends $tea.Model {
  /**
   * @example
   * eth0 | eth1
   */
  defaultRoute?: string;
  /**
   * @example
   * ["192.168.0.1/24", "192.168.1.1/24"]
   */
  extendedCIDRs?: string[];
  forwardInfos?: ForwardInfoResponse[];
  /**
   * @example
   * sg-xxxxxx
   */
  securityGroupId?: string;
  /**
   * @example
   * vsw-xxxxx
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-xxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRoute: 'DefaultRoute',
      extendedCIDRs: 'ExtendedCIDRs',
      forwardInfos: 'ForwardInfos',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRoute: 'string',
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      forwardInfos: { 'type': 'array', 'itemType': ForwardInfoResponse },
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $tea.Model {
  /**
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @example
   * 3600000
   */
  accumulatedRunningTimeInMs?: number;
  affinity?: ListInstancesResponseBodyInstancesAffinity;
  /**
   * @example
   * []
   */
  cloudDisks?: ListInstancesResponseBodyInstancesCloudDisks[];
  datasets?: ListInstancesResponseBodyInstancesDatasets[];
  /**
   * @example
   * 535.54.03
   */
  driver?: string;
  /**
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  /**
   * @example
   * {userName: "Chris"}
   */
  environmentVariables?: { [key: string]: string };
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * {"InstanceId":"dsw-05cefd0be2e5a278","CpuPercentThreshold":20,"GpuPercentThreshold":10,"MaxIdleTimeInMinutes":120,"IdleTimeInMinutes":30}
   */
  idleInstanceCuller?: ListInstancesResponseBodyInstancesIdleInstanceCuller;
  imageAuth?: string;
  /**
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @example
   * py36_cpu_tf1.12_ubuntu
   */
  imageName?: string;
  /**
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * training_data
   */
  instanceName?: string;
  instanceShutdownTimer?: ListInstancesResponseBodyInstancesInstanceShutdownTimer;
  /**
   * @example
   * []
   */
  instanceSnapshotList?: ListInstancesResponseBodyInstancesInstanceSnapshotList[];
  /**
   * @example
   * https://dsw-cn-shanghai.data.aliyun.com/notebook.htm?instance=39772#/
   */
  instanceUrl?: string;
  /**
   * @remarks
   * Jupyterlab Url。
   * 
   * @example
   * https://dsw-gateway-cn-shanghai.aliyun.com/dsw-39772/lab/
   */
  jupyterlabUrl?: string;
  /**
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: ListInstancesResponseBodyInstancesLabels[];
  latestSnapshot?: ListInstancesResponseBodyInstancesLatestSnapshot;
  /**
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Internal Error
   */
  reasonCode?: string;
  /**
   * @example
   * ImagePullBackOff
   */
  reasonMessage?: string;
  /**
   * @example
   * {"CPU":"4","Memory":"8Gi","SharedMemory":"4Gi","GPU":"1","GPUType":"Tesla-V100-16G"}
   */
  requestedResource?: ListInstancesResponseBodyInstancesRequestedResource;
  /**
   * @example
   * dsw-123456789
   */
  resourceId?: string;
  /**
   * @example
   * resource_group
   */
  resourceName?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * https://dsw-gateway-cn-shanghai.aliyun.com/dsw-39772/tty/
   */
  terminalUrl?: string;
  /**
   * @example
   * 1612285282502324
   */
  userId?: string;
  /**
   * @example
   * 测试用户
   */
  userName?: string;
  userVpc?: ListInstancesResponseBodyInstancesUserVpc;
  /**
   * @remarks
   * Web IDE url。
   * 
   * @example
   * https://dsw-gateway-cn-shanghai.aliyun.com/dsw-39772/ide/
   */
  webIDEUrl?: string;
  /**
   * @example
   * 40823
   */
  workspaceId?: string;
  /**
   * @example
   * training_data
   */
  workspaceName?: string;
  /**
   * @example
   * d-123456789
   */
  workspaceSource?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      accessibility: 'Accessibility',
      accumulatedRunningTimeInMs: 'AccumulatedRunningTimeInMs',
      affinity: 'Affinity',
      cloudDisks: 'CloudDisks',
      datasets: 'Datasets',
      driver: 'Driver',
      ecsSpec: 'EcsSpec',
      environmentVariables: 'EnvironmentVariables',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      idleInstanceCuller: 'IdleInstanceCuller',
      imageAuth: 'ImageAuth',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceShutdownTimer: 'InstanceShutdownTimer',
      instanceSnapshotList: 'InstanceSnapshotList',
      instanceUrl: 'InstanceUrl',
      jupyterlabUrl: 'JupyterlabUrl',
      labels: 'Labels',
      latestSnapshot: 'LatestSnapshot',
      paymentType: 'PaymentType',
      priority: 'Priority',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestedResource: 'RequestedResource',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      status: 'Status',
      terminalUrl: 'TerminalUrl',
      userId: 'UserId',
      userName: 'UserName',
      userVpc: 'UserVpc',
      webIDEUrl: 'WebIDEUrl',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
      workspaceSource: 'WorkspaceSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      accessibility: 'string',
      accumulatedRunningTimeInMs: 'number',
      affinity: ListInstancesResponseBodyInstancesAffinity,
      cloudDisks: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesCloudDisks },
      datasets: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesDatasets },
      driver: 'string',
      ecsSpec: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      idleInstanceCuller: ListInstancesResponseBodyInstancesIdleInstanceCuller,
      imageAuth: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceShutdownTimer: ListInstancesResponseBodyInstancesInstanceShutdownTimer,
      instanceSnapshotList: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesInstanceSnapshotList },
      instanceUrl: 'string',
      jupyterlabUrl: 'string',
      labels: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesLabels },
      latestSnapshot: ListInstancesResponseBodyInstancesLatestSnapshot,
      paymentType: 'string',
      priority: 'number',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestedResource: ListInstancesResponseBodyInstancesRequestedResource,
      resourceId: 'string',
      resourceName: 'string',
      status: 'string',
      terminalUrl: 'string',
      userId: 'string',
      userName: 'string',
      userVpc: ListInstancesResponseBodyInstancesUserVpc,
      webIDEUrl: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
      workspaceSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestAffinityCPU extends $tea.Model {
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestAffinity extends $tea.Model {
  CPU?: UpdateInstanceRequestAffinityCPU;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: UpdateInstanceRequestAffinityCPU,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestCloudDisks extends $tea.Model {
  /**
   * @example
   * 30Gi
   */
  capacity?: string;
  /**
   * @example
   * rootfs
   */
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      subType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestDatasets extends $tea.Model {
  /**
   * @example
   * d-vsqjvsjp4orp5l206u
   */
  datasetId?: string;
  /**
   * @example
   * /mnt/data
   */
  mountPath?: string;
  optionType?: string;
  options?: string;
  /**
   * @example
   * oss://bucket.oss-cn-shanghai.aliyuncs.com/data/path/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      mountPath: 'MountPath',
      optionType: 'OptionType',
      options: 'Options',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      mountPath: 'string',
      optionType: 'string',
      options: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestRequestedResource extends $tea.Model {
  /**
   * @example
   * 32
   */
  CPU?: string;
  /**
   * @example
   * 4
   */
  GPU?: string;
  /**
   * @example
   * v100
   */
  GPUType?: string;
  /**
   * @example
   * 32
   */
  memory?: string;
  /**
   * @example
   * 32
   */
  sharedMemory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUType: 'GPUType',
      memory: 'Memory',
      sharedMemory: 'SharedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      GPUType: 'string',
      memory: 'string',
      sharedMemory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestUserVpc extends $tea.Model {
  /**
   * @example
   * eth0 | eth1
   */
  defaultRoute?: string;
  /**
   * @example
   * ["192.168.0.1/24", "192.168.1.1/24"]
   */
  extendedCIDRs?: string[];
  forwardInfos?: ForwardInfo[];
  /**
   * @example
   * sg-xxxxxx
   */
  securityGroupId?: string;
  /**
   * @example
   * vsw-xxxxx
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-xxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRoute: 'DefaultRoute',
      extendedCIDRs: 'ExtendedCIDRs',
      forwardInfos: 'ForwardInfos',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRoute: 'string',
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      forwardInfos: { 'type': 'array', 'itemType': ForwardInfo },
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceLabelsRequestLabels extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * customLabelKey
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * labelValue
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
    this._endpoint = this.getEndpoint("pai-dsw", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - CreateIdleInstanceCullerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIdleInstanceCullerResponse
   */
  async createIdleInstanceCullerWithOptions(InstanceId: string, request: CreateIdleInstanceCullerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateIdleInstanceCullerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cpuPercentThreshold)) {
      body["CpuPercentThreshold"] = request.cpuPercentThreshold;
    }

    if (!Util.isUnset(request.gpuPercentThreshold)) {
      body["GpuPercentThreshold"] = request.gpuPercentThreshold;
    }

    if (!Util.isUnset(request.maxIdleTimeInMinutes)) {
      body["MaxIdleTimeInMinutes"] = request.maxIdleTimeInMinutes;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateIdleInstanceCuller",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/idleinstanceculler`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateIdleInstanceCullerResponse>(await this.callApi(params, req, runtime), new CreateIdleInstanceCullerResponse({}));
  }

  /**
   * @param request - CreateIdleInstanceCullerRequest
   * @returns CreateIdleInstanceCullerResponse
   */
  async createIdleInstanceCuller(InstanceId: string, request: CreateIdleInstanceCullerRequest): Promise<CreateIdleInstanceCullerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIdleInstanceCullerWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建实例
   * 
   * @param request - CreateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.affinity)) {
      body["Affinity"] = request.affinity;
    }

    if (!Util.isUnset(request.cloudDisks)) {
      body["CloudDisks"] = request.cloudDisks;
    }

    if (!Util.isUnset(request.credentialConfig)) {
      body["CredentialConfig"] = request.credentialConfig;
    }

    if (!Util.isUnset(request.datasets)) {
      body["Datasets"] = request.datasets;
    }

    if (!Util.isUnset(request.driver)) {
      body["Driver"] = request.driver;
    }

    if (!Util.isUnset(request.ecsSpec)) {
      body["EcsSpec"] = request.ecsSpec;
    }

    if (!Util.isUnset(request.environmentVariables)) {
      body["EnvironmentVariables"] = request.environmentVariables;
    }

    if (!Util.isUnset(request.imageAuth)) {
      body["ImageAuth"] = request.imageAuth;
    }

    if (!Util.isUnset(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.requestedResource)) {
      body["RequestedResource"] = request.requestedResource;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userVpc)) {
      body["UserVpc"] = request.userVpc;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    if (!Util.isUnset(request.workspaceSource)) {
      body["WorkspaceSource"] = request.workspaceSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  /**
   * 创建实例
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
   * 创建定时关机任务
   * 
   * @param request - CreateInstanceShutdownTimerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceShutdownTimerResponse
   */
  async createInstanceShutdownTimerWithOptions(InstanceId: string, request: CreateInstanceShutdownTimerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceShutdownTimerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dueTime)) {
      body["DueTime"] = request.dueTime;
    }

    if (!Util.isUnset(request.remainingTimeInMs)) {
      body["RemainingTimeInMs"] = request.remainingTimeInMs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstanceShutdownTimer",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/shutdowntimer`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceShutdownTimerResponse>(await this.callApi(params, req, runtime), new CreateInstanceShutdownTimerResponse({}));
  }

  /**
   * 创建定时关机任务
   * 
   * @param request - CreateInstanceShutdownTimerRequest
   * @returns CreateInstanceShutdownTimerResponse
   */
  async createInstanceShutdownTimer(InstanceId: string, request: CreateInstanceShutdownTimerRequest): Promise<CreateInstanceShutdownTimerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceShutdownTimerWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建实例快照
   * 
   * @param request - CreateInstanceSnapshotRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceSnapshotResponse
   */
  async createInstanceSnapshotWithOptions(InstanceId: string, request: CreateInstanceSnapshotRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceSnapshotResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.excludePaths)) {
      body["ExcludePaths"] = request.excludePaths;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.overwrite)) {
      body["Overwrite"] = request.overwrite;
    }

    if (!Util.isUnset(request.snapshotDescription)) {
      body["SnapshotDescription"] = request.snapshotDescription;
    }

    if (!Util.isUnset(request.snapshotName)) {
      body["SnapshotName"] = request.snapshotName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstanceSnapshot",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/snapshots`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceSnapshotResponse>(await this.callApi(params, req, runtime), new CreateInstanceSnapshotResponse({}));
  }

  /**
   * 创建实例快照
   * 
   * @param request - CreateInstanceSnapshotRequest
   * @returns CreateInstanceSnapshotResponse
   */
  async createInstanceSnapshot(InstanceId: string, request: CreateInstanceSnapshotRequest): Promise<CreateInstanceSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceSnapshotWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIdleInstanceCullerResponse
   */
  async deleteIdleInstanceCullerWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteIdleInstanceCullerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteIdleInstanceCuller",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/idleinstanceculler`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteIdleInstanceCullerResponse>(await this.callApi(params, req, runtime), new DeleteIdleInstanceCullerResponse({}));
  }

  /**
   * @returns DeleteIdleInstanceCullerResponse
   */
  async deleteIdleInstanceCuller(InstanceId: string): Promise<DeleteIdleInstanceCullerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIdleInstanceCullerWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 删除实例
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
  }

  /**
   * 删除实例
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(InstanceId: string): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 删除DSW实例的标签
   * 
   * @param request - DeleteInstanceLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceLabelsResponse
   */
  async deleteInstanceLabelsWithOptions(InstanceId: string, request: DeleteInstanceLabelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceLabelsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelKeys)) {
      query["LabelKeys"] = request.labelKeys;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstanceLabels",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/labels`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceLabelsResponse>(await this.callApi(params, req, runtime), new DeleteInstanceLabelsResponse({}));
  }

  /**
   * 删除DSW实例的标签
   * 
   * @param request - DeleteInstanceLabelsRequest
   * @returns DeleteInstanceLabelsResponse
   */
  async deleteInstanceLabels(InstanceId: string, request: DeleteInstanceLabelsRequest): Promise<DeleteInstanceLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceLabelsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 删除定时关机任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceShutdownTimerResponse
   */
  async deleteInstanceShutdownTimerWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceShutdownTimerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstanceShutdownTimer",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/shutdowntimer`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceShutdownTimerResponse>(await this.callApi(params, req, runtime), new DeleteInstanceShutdownTimerResponse({}));
  }

  /**
   * 删除定时关机任务
   * @returns DeleteInstanceShutdownTimerResponse
   */
  async deleteInstanceShutdownTimer(InstanceId: string): Promise<DeleteInstanceShutdownTimerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceShutdownTimerWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 获取实例快照详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceSnapshotResponse
   */
  async deleteInstanceSnapshotWithOptions(InstanceId: string, SnapshotId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceSnapshotResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstanceSnapshot",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/snapshots/${OpenApiUtil.getEncodeParam(SnapshotId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceSnapshotResponse>(await this.callApi(params, req, runtime), new DeleteInstanceSnapshotResponse({}));
  }

  /**
   * 获取实例快照详情
   * @returns DeleteInstanceSnapshotResponse
   */
  async deleteInstanceSnapshot(InstanceId: string, SnapshotId: string): Promise<DeleteInstanceSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceSnapshotWithOptions(InstanceId, SnapshotId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdleInstanceCullerResponse
   */
  async getIdleInstanceCullerWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetIdleInstanceCullerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetIdleInstanceCuller",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/idleinstanceculler`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetIdleInstanceCullerResponse>(await this.callApi(params, req, runtime), new GetIdleInstanceCullerResponse({}));
  }

  /**
   * @returns GetIdleInstanceCullerResponse
   */
  async getIdleInstanceCuller(InstanceId: string): Promise<GetIdleInstanceCullerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIdleInstanceCullerWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 获取实例详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
  }

  /**
   * 获取实例详情
   * @returns GetInstanceResponse
   */
  async getInstance(InstanceId: string): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(InstanceId, headers, runtime);
  }

  /**
   * @param request - GetInstanceEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceEventsResponse
   */
  async getInstanceEventsWithOptions(InstanceId: string, request: GetInstanceEventsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceEventsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.maxEventsNum)) {
      query["MaxEventsNum"] = request.maxEventsNum;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceEvents",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceEventsResponse>(await this.callApi(params, req, runtime), new GetInstanceEventsResponse({}));
  }

  /**
   * @param request - GetInstanceEventsRequest
   * @returns GetInstanceEventsResponse
   */
  async getInstanceEvents(InstanceId: string, request: GetInstanceEventsRequest): Promise<GetInstanceEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceEventsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @param request - GetInstanceMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceMetricsResponse
   */
  async getInstanceMetricsWithOptions(InstanceId: string, request: GetInstanceMetricsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceMetricsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.timeStep)) {
      query["TimeStep"] = request.timeStep;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceMetrics",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instance/${OpenApiUtil.getEncodeParam(InstanceId)}/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceMetricsResponse>(await this.callApi(params, req, runtime), new GetInstanceMetricsResponse({}));
  }

  /**
   * @param request - GetInstanceMetricsRequest
   * @returns GetInstanceMetricsResponse
   */
  async getInstanceMetrics(InstanceId: string, request: GetInstanceMetricsRequest): Promise<GetInstanceMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceMetricsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取定时关机任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceShutdownTimerResponse
   */
  async getInstanceShutdownTimerWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceShutdownTimerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceShutdownTimer",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/shutdowntimer`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceShutdownTimerResponse>(await this.callApi(params, req, runtime), new GetInstanceShutdownTimerResponse({}));
  }

  /**
   * 获取定时关机任务
   * @returns GetInstanceShutdownTimerResponse
   */
  async getInstanceShutdownTimer(InstanceId: string): Promise<GetInstanceShutdownTimerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceShutdownTimerWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 获取实例快照详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceSnapshotResponse
   */
  async getInstanceSnapshotWithOptions(InstanceId: string, SnapshotId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceSnapshotResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceSnapshot",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/snapshots/${OpenApiUtil.getEncodeParam(SnapshotId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceSnapshotResponse>(await this.callApi(params, req, runtime), new GetInstanceSnapshotResponse({}));
  }

  /**
   * 获取实例快照详情
   * @returns GetInstanceSnapshotResponse
   */
  async getInstanceSnapshot(InstanceId: string, SnapshotId: string): Promise<GetInstanceSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceSnapshotWithOptions(InstanceId, SnapshotId, headers, runtime);
  }

  /**
   * @param request - GetLifecycleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLifecycleResponse
   */
  async getLifecycleWithOptions(InstanceId: string, request: GetLifecycleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLifecycleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.sessionNumber)) {
      query["SessionNumber"] = request.sessionNumber;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLifecycle",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/lifecycle`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLifecycleResponse>(await this.callApi(params, req, runtime), new GetLifecycleResponse({}));
  }

  /**
   * @param request - GetLifecycleRequest
   * @returns GetLifecycleResponse
   */
  async getLifecycle(InstanceId: string, request: GetLifecycleRequest): Promise<GetLifecycleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLifecycleWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取metrics数据
   * 
   * @param request - GetMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetricsResponse
   */
  async getMetricsWithOptions(InstanceId: string, request: GetMetricsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMetricsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMetrics",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instance/${OpenApiUtil.getEncodeParam(InstanceId)}/cms/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMetricsResponse>(await this.callApi(params, req, runtime), new GetMetricsResponse({}));
  }

  /**
   * 获取metrics数据
   * 
   * @param request - GetMetricsRequest
   * @returns GetMetricsResponse
   */
  async getMetrics(InstanceId: string, request: GetMetricsRequest): Promise<GetMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMetricsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @param request - GetResourceGroupStatisticsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceGroupStatisticsResponse
   */
  async getResourceGroupStatisticsWithOptions(request: GetResourceGroupStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetResourceGroupStatisticsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceGroupStatistics",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resourcegroupstatistics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetResourceGroupStatisticsResponse>(await this.callApi(params, req, runtime), new GetResourceGroupStatisticsResponse({}));
  }

  /**
   * @param request - GetResourceGroupStatisticsRequest
   * @returns GetResourceGroupStatisticsResponse
   */
  async getResourceGroupStatistics(request: GetResourceGroupStatisticsRequest): Promise<GetResourceGroupStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceGroupStatisticsWithOptions(request, headers, runtime);
  }

  /**
   * @param request - GetTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenResponse
   */
  async getTokenWithOptions(request: GetTokenRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTokenResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetToken",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/tokens`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTokenResponse>(await this.callApi(params, req, runtime), new GetTokenResponse({}));
  }

  /**
   * @param request - GetTokenRequest
   * @returns GetTokenResponse
   */
  async getToken(request: GetTokenRequest): Promise<GetTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenWithOptions(request, headers, runtime);
  }

  /**
   * 获取用户配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserConfigResponse
   */
  async getUserConfigWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUserConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetUserConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/userconfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserConfigResponse>(await this.callApi(params, req, runtime), new GetUserConfigResponse({}));
  }

  /**
   * 获取用户配置
   * @returns GetUserConfigResponse
   */
  async getUserConfig(): Promise<GetUserConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserConfigWithOptions(headers, runtime);
  }

  /**
   * 获取ECS规格列表
   * 
   * @param request - ListEcsSpecsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEcsSpecsResponse
   */
  async listEcsSpecsWithOptions(request: ListEcsSpecsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEcsSpecsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceleratorType)) {
      query["AcceleratorType"] = request.acceleratorType;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEcsSpecs",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/ecsspecs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEcsSpecsResponse>(await this.callApi(params, req, runtime), new ListEcsSpecsResponse({}));
  }

  /**
   * 获取ECS规格列表
   * 
   * @param request - ListEcsSpecsRequest
   * @returns ListEcsSpecsResponse
   */
  async listEcsSpecs(request: ListEcsSpecsRequest): Promise<ListEcsSpecsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEcsSpecsWithOptions(request, headers, runtime);
  }

  /**
   * 查询实例快照列表
   * 
   * @param request - ListInstanceSnapshotRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceSnapshotResponse
   */
  async listInstanceSnapshotWithOptions(InstanceId: string, request: ListInstanceSnapshotRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceSnapshotResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceSnapshot",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/snapshots`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceSnapshotResponse>(await this.callApi(params, req, runtime), new ListInstanceSnapshotResponse({}));
  }

  /**
   * 查询实例快照列表
   * 
   * @param request - ListInstanceSnapshotRequest
   * @returns ListInstanceSnapshotResponse
   */
  async listInstanceSnapshot(InstanceId: string, request: ListInstanceSnapshotRequest): Promise<ListInstanceSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceSnapshotWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取实例统计信息
   * 
   * @param request - ListInstanceStatisticsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceStatisticsResponse
   */
  async listInstanceStatisticsWithOptions(request: ListInstanceStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceStatisticsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceStatistics",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instancestatistics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceStatisticsResponse>(await this.callApi(params, req, runtime), new ListInstanceStatisticsResponse({}));
  }

  /**
   * 获取实例统计信息
   * 
   * @param request - ListInstanceStatisticsRequest
   * @returns ListInstanceStatisticsResponse
   */
  async listInstanceStatistics(request: ListInstanceStatisticsRequest): Promise<ListInstanceStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceStatisticsWithOptions(request, headers, runtime);
  }

  /**
   * @param tmpReq - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(tmpReq: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.labels)) {
      request.labelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labels, "Labels", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceleratorType)) {
      query["AcceleratorType"] = request.acceleratorType;
    }

    if (!Util.isUnset(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.createUserId)) {
      query["CreateUserId"] = request.createUserId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.labelsShrink)) {
      query["Labels"] = request.labelsShrink;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstances",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  /**
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * 启动实例
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstanceResponse
   */
  async startInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartInstanceResponse>(await this.callApi(params, req, runtime), new StartInstanceResponse({}));
  }

  /**
   * 启动实例
   * @returns StartInstanceResponse
   */
  async startInstance(InstanceId: string): Promise<StartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startInstanceWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 停止实例
   * 
   * @param request - StopInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstanceResponse
   */
  async stopInstanceWithOptions(InstanceId: string, request: StopInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.saveImage)) {
      query["SaveImage"] = request.saveImage;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopInstanceResponse>(await this.callApi(params, req, runtime), new StopInstanceResponse({}));
  }

  /**
   * 停止实例
   * 
   * @param request - StopInstanceRequest
   * @returns StopInstanceResponse
   */
  async stopInstance(InstanceId: string, request: StopInstanceRequest): Promise<StopInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 更新实例
   * 
   * @param request - UpdateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(InstanceId: string, request: UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.affinity)) {
      body["Affinity"] = request.affinity;
    }

    if (!Util.isUnset(request.cloudDisks)) {
      body["CloudDisks"] = request.cloudDisks;
    }

    if (!Util.isUnset(request.credentialConfig)) {
      body["CredentialConfig"] = request.credentialConfig;
    }

    if (!Util.isUnset(request.datasets)) {
      body["Datasets"] = request.datasets;
    }

    if (!Util.isUnset(request.disassociateCredential)) {
      body["DisassociateCredential"] = request.disassociateCredential;
    }

    if (!Util.isUnset(request.disassociateDatasets)) {
      body["DisassociateDatasets"] = request.disassociateDatasets;
    }

    if (!Util.isUnset(request.disassociateDriver)) {
      body["DisassociateDriver"] = request.disassociateDriver;
    }

    if (!Util.isUnset(request.disassociateForwardInfos)) {
      body["DisassociateForwardInfos"] = request.disassociateForwardInfos;
    }

    if (!Util.isUnset(request.disassociateVpc)) {
      body["DisassociateVpc"] = request.disassociateVpc;
    }

    if (!Util.isUnset(request.driver)) {
      body["Driver"] = request.driver;
    }

    if (!Util.isUnset(request.ecsSpec)) {
      body["EcsSpec"] = request.ecsSpec;
    }

    if (!Util.isUnset(request.imageAuth)) {
      body["ImageAuth"] = request.imageAuth;
    }

    if (!Util.isUnset(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.requestedResource)) {
      body["RequestedResource"] = request.requestedResource;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userVpc)) {
      body["UserVpc"] = request.userVpc;
    }

    if (!Util.isUnset(request.workspaceSource)) {
      body["WorkspaceSource"] = request.workspaceSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceResponse>(await this.callApi(params, req, runtime), new UpdateInstanceResponse({}));
  }

  /**
   * 更新实例
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(InstanceId: string, request: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 修改DSW实例的标签
   * 
   * @param request - UpdateInstanceLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceLabelsResponse
   */
  async updateInstanceLabelsWithOptions(InstanceId: string, request: UpdateInstanceLabelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceLabelsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstanceLabels",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/labels`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceLabelsResponse>(await this.callApi(params, req, runtime), new UpdateInstanceLabelsResponse({}));
  }

  /**
   * 修改DSW实例的标签
   * 
   * @param request - UpdateInstanceLabelsRequest
   * @returns UpdateInstanceLabelsResponse
   */
  async updateInstanceLabels(InstanceId: string, request: UpdateInstanceLabelsRequest): Promise<UpdateInstanceLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceLabelsWithOptions(InstanceId, request, headers, runtime);
  }

}
