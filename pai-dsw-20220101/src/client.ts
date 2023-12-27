// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DemoCategory extends $tea.Model {
  categoryCode?: string;
  categoryName?: string;
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
  containerName?: string;
  eipAllocationId?: string;
  enable?: boolean;
  natGatewayId?: string;
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
  containerName?: string;
  eipAllocationId?: string;
  enable?: boolean;
  natGatewayId?: string;
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
  cpuPercentThreshold?: number;
  gpuPercentThreshold?: number;
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
  code?: string;
  instanceId?: string;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateIdleInstanceCullerResponseBody;
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
  accessibility?: string;
  cloudDisks?: CreateInstanceRequestCloudDisks[];
  datasets?: CreateInstanceRequestDatasets[];
  driver?: string;
  ecsSpec?: string;
  environmentVariables?: { [key: string]: string };
  imageId?: string;
  imageUrl?: string;
  instanceName?: string;
  labels?: CreateInstanceRequestLabels[];
  priority?: number;
  requestedResource?: CreateInstanceRequestRequestedResource;
  resourceId?: string;
  userId?: string;
  userVpc?: CreateInstanceRequestUserVpc;
  workspaceId?: string;
  workspaceSource?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      cloudDisks: 'CloudDisks',
      datasets: 'Datasets',
      driver: 'Driver',
      ecsSpec: 'EcsSpec',
      environmentVariables: 'EnvironmentVariables',
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
      cloudDisks: { 'type': 'array', 'itemType': CreateInstanceRequestCloudDisks },
      datasets: { 'type': 'array', 'itemType': CreateInstanceRequestDatasets },
      driver: 'string',
      ecsSpec: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  code?: string;
  httpStatusCode?: number;
  instanceId?: string;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateInstanceResponseBody;
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
  dueTime?: string;
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
  code?: string;
  httpStatusCode?: number;
  instanceId?: string;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateInstanceShutdownTimerResponseBody;
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
  imageUrl?: string;
  labels?: CreateInstanceSnapshotRequestLabels[];
  overwrite?: boolean;
  snapshotDescription?: string;
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
  code?: string;
  httpStatusCode?: number;
  instanceId?: string;
  message?: string;
  requestId?: string;
  snapshotId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateInstanceSnapshotResponseBody;
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
  code?: string;
  instanceId?: string;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteIdleInstanceCullerResponseBody;
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
  code?: string;
  httpStatusCode?: number;
  instanceId?: string;
  message?: string;
  requestId?: string;
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

export class DeleteInstanceShutdownTimerResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  instanceId?: string;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteInstanceShutdownTimerResponseBody;
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
  code?: string;
  httpStatusCode?: number;
  instanceId?: string;
  message?: string;
  requestId?: string;
  snapshotId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteInstanceSnapshotResponseBody;
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
  code?: string;
  cpuPercentThreshold?: number;
  gpuPercentThreshold?: number;
  idleTimeInMinutes?: number;
  instanceId?: string;
  maxIdleTimeInMinutes?: number;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIdleInstanceCullerResponseBody;
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
  acceleratorType?: string;
  accessibility?: string;
  accumulatedRunningTimeInMs?: number;
  cloudDisks?: GetInstanceResponseBodyCloudDisks[];
  code?: string;
  datasets?: GetInstanceResponseBodyDatasets[];
  driver?: string;
  ecsSpec?: string;
  environmentVariables?: { [key: string]: string };
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  httpStatusCode?: number;
  idleInstanceCuller?: GetInstanceResponseBodyIdleInstanceCuller;
  imageId?: string;
  imageName?: string;
  imageUrl?: string;
  instanceId?: string;
  instanceName?: string;
  instanceShutdownTimer?: GetInstanceResponseBodyInstanceShutdownTimer;
  instanceSnapshotList?: GetInstanceResponseBodyInstanceSnapshotList[];
  instanceUrl?: string;
  jupyterlabUrl?: string;
  labels?: GetInstanceResponseBodyLabels[];
  latestSnapshot?: GetInstanceResponseBodyLatestSnapshot;
  message?: string;
  paymentType?: string;
  priority?: number;
  reasonCode?: string;
  reasonMessage?: string;
  requestId?: string;
  requestedResource?: GetInstanceResponseBodyRequestedResource;
  resourceId?: string;
  resourceName?: string;
  status?: string;
  success?: boolean;
  terminalUrl?: string;
  userId?: string;
  userName?: string;
  userVpc?: GetInstanceResponseBodyUserVpc;
  webIDEUrl?: string;
  workspaceId?: string;
  workspaceName?: string;
  workspaceSource?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      accessibility: 'Accessibility',
      accumulatedRunningTimeInMs: 'AccumulatedRunningTimeInMs',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceResponseBody;
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

export class GetInstanceMetricsRequest extends $tea.Model {
  endTime?: string;
  metricType?: string;
  startTime?: string;
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
  code?: string;
  httpStatusCode?: number;
  instanceId?: string;
  message?: string;
  podMetrics?: GetInstanceMetricsResponseBodyPodMetrics[];
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceMetricsResponseBody;
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
  code?: string;
  dueTime?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  httpStatusCode?: number;
  instanceId?: string;
  message?: string;
  remainingTimeInMs?: number;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceShutdownTimerResponseBody;
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
  code?: string;
  excludePaths?: string[];
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  httpStatusCode?: number;
  imageId?: string;
  imageUrl?: string;
  instanceId?: string;
  labels?: GetInstanceSnapshotResponseBodyLabels[];
  message?: string;
  reasonCode?: string;
  reasonMessage?: string;
  requestId?: string;
  snapshotId?: string;
  snapshotName?: string;
  status?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceSnapshotResponseBody;
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
  endTime?: string;
  limit?: number;
  order?: string;
  sessionNumber?: number;
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
  code?: string;
  lifecycle?: GetLifecycleResponseBodyLifecycle[][];
  message?: string;
  requestId?: string;
  success?: boolean;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLifecycleResponseBody;
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

export class GetResourceGroupStatisticsRequest extends $tea.Model {
  endTime?: string;
  resourceId?: string;
  startTime?: string;
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
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  statistics?: { [key: string]: {[key: string]: any} };
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourceGroupStatisticsResponseBody;
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
  expireTime?: number;
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTokenResponseBody;
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
  accountSufficient?: boolean;
  code?: string;
  enableEciDisk?: boolean;
  freeTier?: GetUserConfigResponseBodyFreeTier;
  freeTierSpecAvailable?: boolean;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserConfigResponseBody;
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
  acceleratorType?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
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
  code?: string;
  ecsSpecs?: ListEcsSpecsResponseBodyEcsSpecs[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListEcsSpecsResponseBody;
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
  order?: string;
  pageNumber?: number;
  pageSize?: number;
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
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  snapshots?: ListInstanceSnapshotResponseBodySnapshots[];
  success?: boolean;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInstanceSnapshotResponseBody;
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
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  statistics?: { [key: string]: {[key: string]: any} };
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInstanceStatisticsResponseBody;
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
  acceleratorType?: string;
  accessibility?: string;
  instanceId?: string;
  instanceName?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  paymentType?: string;
  resourceId?: string;
  sortBy?: string;
  status?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      accessibility: 'Accessibility',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
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
      instanceId: 'string',
      instanceName: 'string',
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
  code?: string;
  httpStatusCode?: number;
  instances?: ListInstancesResponseBodyInstances[];
  message?: string;
  requestId?: string;
  success?: boolean;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInstancesResponseBody;
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
  code?: string;
  httpStatusCode?: number;
  instanceId?: string;
  message?: string;
  requestId?: string;
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

export class StopInstanceRequest extends $tea.Model {
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
  code?: string;
  httpStatusCode?: number;
  instanceId?: string;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: StopInstanceResponseBody;
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
  accessibility?: string;
  datasets?: UpdateInstanceRequestDatasets[];
  disassociateDatasets?: boolean;
  disassociateDriver?: boolean;
  disassociateVpc?: boolean;
  driver?: string;
  ecsSpec?: string;
  imageId?: string;
  imageUrl?: string;
  instanceName?: string;
  priority?: number;
  requestedResource?: UpdateInstanceRequestRequestedResource;
  userId?: string;
  userVpc?: UpdateInstanceRequestUserVpc;
  workspaceSource?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      datasets: 'Datasets',
      disassociateDatasets: 'DisassociateDatasets',
      disassociateDriver: 'DisassociateDriver',
      disassociateVpc: 'DisassociateVpc',
      driver: 'Driver',
      ecsSpec: 'EcsSpec',
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
      datasets: { 'type': 'array', 'itemType': UpdateInstanceRequestDatasets },
      disassociateDatasets: 'boolean',
      disassociateDriver: 'boolean',
      disassociateVpc: 'boolean',
      driver: 'string',
      ecsSpec: 'string',
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
  code?: string;
  httpStatusCode?: number;
  instanceId?: string;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateInstanceResponseBody;
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

export class ForwardInfoResponseConnectInfoInternet extends $tea.Model {
  endpoint?: string;
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
  endpoint?: string;
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
  message?: string;
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

export class CreateInstanceRequestCloudDisks extends $tea.Model {
  capacity?: string;
  mountPath?: string;
  path?: string;
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

export class CreateInstanceRequestDatasets extends $tea.Model {
  datasetId?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      mountPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestLabels extends $tea.Model {
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

export class CreateInstanceRequestRequestedResource extends $tea.Model {
  CPU?: string;
  GPU?: string;
  GPUType?: string;
  memory?: string;
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
  defaultRoute?: string;
  extendedCIDRs?: string[];
  forwardInfos?: ForwardInfo[];
  securityGroupId?: string;
  vSwitchId?: string;
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

export class GetInstanceResponseBodyCloudDisks extends $tea.Model {
  capacity?: string;
  mountPath?: string;
  path?: string;
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
  datasetId?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      mountPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyIdleInstanceCuller extends $tea.Model {
  cpuPercentThreshold?: number;
  gpuPercentThreshold?: number;
  idleTimeInMinutes?: number;
  instanceId?: string;
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
  dueTime?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  instanceId?: string;
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
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  imageId?: string;
  imageName?: string;
  imageUrl?: string;
  reasonCode?: string;
  reasonMessage?: string;
  repositoryUrl?: string;
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

export class GetInstanceResponseBodyLatestSnapshot extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  imageId?: string;
  imageName?: string;
  imageUrl?: string;
  reasonCode?: string;
  reasonMessage?: string;
  repositoryUrl?: string;
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

export class GetInstanceResponseBodyRequestedResource extends $tea.Model {
  CPU?: string;
  GPU?: string;
  GPUType?: string;
  memory?: string;
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
  defaultRoute?: string;
  extendedCIDRs?: string[];
  forwardInfos?: ForwardInfoResponse[];
  securityGroupId?: string;
  vSwitchId?: string;
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
  time?: number;
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

export class GetLifecycleResponseBodyLifecycle extends $tea.Model {
  status?: string;
  reasonCode?: string;
  reasonMessage?: string;
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
  endTime?: string;
  initBaseUnit?: string;
  initBaseValue?: number;
  initShowUnit?: string;
  initShowValue?: string;
  isFreeTierUser?: boolean;
  periodBaseUnit?: string;
  periodBaseValue?: number;
  periodShowUnit?: string;
  periodShowValue?: string;
  startTime?: string;
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
  acceleratorType?: string;
  CPU?: number;
  currency?: string;
  GPU?: number;
  GPUType?: string;
  instanceBandwidthRx?: number;
  instanceType?: string;
  isAvailable?: boolean;
  labels?: ListEcsSpecsResponseBodyEcsSpecsLabels[];
  memory?: number;
  price?: number;
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

export class ListInstanceSnapshotResponseBodySnapshots extends $tea.Model {
  excludePaths?: string[];
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  imageId?: string;
  imageUrl?: string;
  instanceId?: string;
  labels?: ListInstanceSnapshotResponseBodySnapshotsLabels[];
  reasonCode?: string;
  reasonMessage?: string;
  snapshotId?: string;
  snapshotName?: string;
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

export class ListInstancesResponseBodyInstancesCloudDisks extends $tea.Model {
  capacity?: string;
  mountPath?: string;
  path?: string;
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
  datasetId?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      mountPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesIdleInstanceCuller extends $tea.Model {
  cpuPercentThreshold?: number;
  gpuPercentThreshold?: number;
  idleTimeInMinutes?: number;
  instanceId?: string;
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
  dueTime?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  instanceId?: string;
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
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  imageId?: string;
  imageName?: string;
  imageUrl?: string;
  reasonCode?: string;
  reasonMessage?: string;
  repositoryUrl?: string;
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

export class ListInstancesResponseBodyInstancesLatestSnapshot extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  imageId?: string;
  imageName?: string;
  imageUrl?: string;
  reasonCode?: string;
  reasonMessage?: string;
  repositoryUrl?: string;
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
  CPU?: string;
  GPU?: string;
  GPUType?: string;
  memory?: string;
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
  defaultRoute?: string;
  extendedCIDRs?: string[];
  forwardInfos?: ForwardInfoResponse[];
  securityGroupId?: string;
  vSwitchId?: string;
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
  acceleratorType?: string;
  accessibility?: string;
  accumulatedRunningTimeInMs?: number;
  cloudDisks?: ListInstancesResponseBodyInstancesCloudDisks[];
  datasets?: ListInstancesResponseBodyInstancesDatasets[];
  driver?: string;
  ecsSpec?: string;
  environmentVariables?: { [key: string]: string };
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  idleInstanceCuller?: ListInstancesResponseBodyInstancesIdleInstanceCuller;
  imageId?: string;
  imageName?: string;
  imageUrl?: string;
  instanceId?: string;
  instanceName?: string;
  instanceShutdownTimer?: ListInstancesResponseBodyInstancesInstanceShutdownTimer;
  instanceSnapshotList?: ListInstancesResponseBodyInstancesInstanceSnapshotList[];
  instanceUrl?: string;
  jupyterlabUrl?: string;
  labels?: ListInstancesResponseBodyInstancesLabels[];
  latestSnapshot?: ListInstancesResponseBodyInstancesLatestSnapshot;
  paymentType?: string;
  priority?: number;
  reasonCode?: string;
  reasonMessage?: string;
  requestedResource?: ListInstancesResponseBodyInstancesRequestedResource;
  resourceId?: string;
  resourceName?: string;
  status?: string;
  terminalUrl?: string;
  userId?: string;
  userName?: string;
  userVpc?: ListInstancesResponseBodyInstancesUserVpc;
  webIDEUrl?: string;
  workspaceId?: string;
  workspaceName?: string;
  workspaceSource?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      accessibility: 'Accessibility',
      accumulatedRunningTimeInMs: 'AccumulatedRunningTimeInMs',
      cloudDisks: 'CloudDisks',
      datasets: 'Datasets',
      driver: 'Driver',
      ecsSpec: 'EcsSpec',
      environmentVariables: 'EnvironmentVariables',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      idleInstanceCuller: 'IdleInstanceCuller',
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
      cloudDisks: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesCloudDisks },
      datasets: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesDatasets },
      driver: 'string',
      ecsSpec: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      idleInstanceCuller: ListInstancesResponseBodyInstancesIdleInstanceCuller,
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

export class UpdateInstanceRequestDatasets extends $tea.Model {
  datasetId?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      mountPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestRequestedResource extends $tea.Model {
  CPU?: string;
  GPU?: string;
  GPUType?: string;
  memory?: string;
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
  defaultRoute?: string;
  extendedCIDRs?: string[];
  forwardInfos?: ForwardInfo[];
  securityGroupId?: string;
  vSwitchId?: string;
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

  async createIdleInstanceCuller(InstanceId: string, request: CreateIdleInstanceCullerRequest): Promise<CreateIdleInstanceCullerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIdleInstanceCullerWithOptions(InstanceId, request, headers, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.cloudDisks)) {
      body["CloudDisks"] = request.cloudDisks;
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

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

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

  async createInstanceShutdownTimer(InstanceId: string, request: CreateInstanceShutdownTimerRequest): Promise<CreateInstanceShutdownTimerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceShutdownTimerWithOptions(InstanceId, request, headers, runtime);
  }

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

  async createInstanceSnapshot(InstanceId: string, request: CreateInstanceSnapshotRequest): Promise<CreateInstanceSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceSnapshotWithOptions(InstanceId, request, headers, runtime);
  }

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

  async deleteIdleInstanceCuller(InstanceId: string): Promise<DeleteIdleInstanceCullerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIdleInstanceCullerWithOptions(InstanceId, headers, runtime);
  }

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

  async deleteInstance(InstanceId: string): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(InstanceId, headers, runtime);
  }

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

  async deleteInstanceShutdownTimer(InstanceId: string): Promise<DeleteInstanceShutdownTimerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceShutdownTimerWithOptions(InstanceId, headers, runtime);
  }

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

  async deleteInstanceSnapshot(InstanceId: string, SnapshotId: string): Promise<DeleteInstanceSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceSnapshotWithOptions(InstanceId, SnapshotId, headers, runtime);
  }

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

  async getIdleInstanceCuller(InstanceId: string): Promise<GetIdleInstanceCullerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIdleInstanceCullerWithOptions(InstanceId, headers, runtime);
  }

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

  async getInstance(InstanceId: string): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(InstanceId, headers, runtime);
  }

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

  async getInstanceMetrics(InstanceId: string, request: GetInstanceMetricsRequest): Promise<GetInstanceMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceMetricsWithOptions(InstanceId, request, headers, runtime);
  }

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

  async getInstanceShutdownTimer(InstanceId: string): Promise<GetInstanceShutdownTimerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceShutdownTimerWithOptions(InstanceId, headers, runtime);
  }

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

  async getInstanceSnapshot(InstanceId: string, SnapshotId: string): Promise<GetInstanceSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceSnapshotWithOptions(InstanceId, SnapshotId, headers, runtime);
  }

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

  async getLifecycle(InstanceId: string, request: GetLifecycleRequest): Promise<GetLifecycleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLifecycleWithOptions(InstanceId, request, headers, runtime);
  }

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

  async getResourceGroupStatistics(request: GetResourceGroupStatisticsRequest): Promise<GetResourceGroupStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceGroupStatisticsWithOptions(request, headers, runtime);
  }

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

  async getToken(request: GetTokenRequest): Promise<GetTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenWithOptions(request, headers, runtime);
  }

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

  async getUserConfig(): Promise<GetUserConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserConfigWithOptions(headers, runtime);
  }

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

  async listEcsSpecs(request: ListEcsSpecsRequest): Promise<ListEcsSpecsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEcsSpecsWithOptions(request, headers, runtime);
  }

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

  async listInstanceSnapshot(InstanceId: string, request: ListInstanceSnapshotRequest): Promise<ListInstanceSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceSnapshotWithOptions(InstanceId, request, headers, runtime);
  }

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

  async listInstanceStatistics(request: ListInstanceStatisticsRequest): Promise<ListInstanceStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceStatisticsWithOptions(request, headers, runtime);
  }

  async listInstancesWithOptions(request: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceleratorType)) {
      query["AcceleratorType"] = request.acceleratorType;
    }

    if (!Util.isUnset(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
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

  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

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

  async startInstance(InstanceId: string): Promise<StartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startInstanceWithOptions(InstanceId, headers, runtime);
  }

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

  async stopInstance(InstanceId: string, request: StopInstanceRequest): Promise<StopInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  async updateInstanceWithOptions(InstanceId: string, request: UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.datasets)) {
      body["Datasets"] = request.datasets;
    }

    if (!Util.isUnset(request.disassociateDatasets)) {
      body["DisassociateDatasets"] = request.disassociateDatasets;
    }

    if (!Util.isUnset(request.disassociateDriver)) {
      body["DisassociateDriver"] = request.disassociateDriver;
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

  async updateInstance(InstanceId: string, request: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceWithOptions(InstanceId, request, headers, runtime);
  }

}
