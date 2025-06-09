// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceResponseBodyAffinity } from "./GetInstanceResponseBodyAffinity";
import { GetInstanceResponseBodyCloudDisks } from "./GetInstanceResponseBodyCloudDisks";
import { CredentialConfig } from "./CredentialConfig";
import { GetInstanceResponseBodyDatasets } from "./GetInstanceResponseBodyDatasets";
import { DynamicMount } from "./DynamicMount";
import { GetInstanceResponseBodyIdleInstanceCuller } from "./GetInstanceResponseBodyIdleInstanceCuller";
import { GetInstanceResponseBodyInstanceShutdownTimer } from "./GetInstanceResponseBodyInstanceShutdownTimer";
import { GetInstanceResponseBodyInstanceSnapshotList } from "./GetInstanceResponseBodyInstanceSnapshotList";
import { GetInstanceResponseBodyLabels } from "./GetInstanceResponseBodyLabels";
import { GetInstanceResponseBodyLatestSnapshot } from "./GetInstanceResponseBodyLatestSnapshot";
import { GetInstanceResponseBodyNodeErrorRecovery } from "./GetInstanceResponseBodyNodeErrorRecovery";
import { GetInstanceResponseBodyRequestedResource } from "./GetInstanceResponseBodyRequestedResource";
import { GetInstanceResponseBodyTags } from "./GetInstanceResponseBodyTags";
import { GetInstanceResponseBodyUserVpc } from "./GetInstanceResponseBodyUserVpc";


export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The accelerator type of the instance.
   * 
   * Valid values:
   * 
   * *   CPU
   * *   GPU
   * 
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The accessibility. Valid values:
   * 
   * *   PRIVATE: Accessible only to you and the administrator of the workspace.
   * *   PUBLIC: Accessible to all members in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The accumulated running duration. Unit: milliseconds.
   * 
   * @example
   * 3600000
   */
  accumulatedRunningTimeInMs?: number;
  /**
   * @remarks
   * The affinity configuration.
   */
  affinity?: GetInstanceResponseBodyAffinity;
  /**
   * @remarks
   * The cloud disks of the instance.
   * 
   * @example
   * []
   */
  cloudDisks?: GetInstanceResponseBodyCloudDisks[];
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: All errors, except for parameter validation errors, are internal errors.
   * *   ValidationError: A parameter validation error.
   * 
   * @example
   * null
   */
  code?: string;
  /**
   * @remarks
   * The credential injection configuration.
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The datasets.
   */
  datasets?: GetInstanceResponseBodyDatasets[];
  /**
   * @remarks
   * The NVIDIA driver configuration.
   * 
   * @example
   * 535.54.03
   */
  driver?: string;
  /**
   * @remarks
   * The dynamic mount configuration.
   */
  dynamicMount?: DynamicMount;
  /**
   * @remarks
   * The ECS instance type of the instance.
   * 
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  /**
   * @remarks
   * The environment variables.
   * 
   * @example
   * {userName: "Chris"}
   */
  environmentVariables?: { [key: string]: string };
  /**
   * @remarks
   * The creation time of the instance.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modified time of the instance.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   400
   * *   404
   * 
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The automatic shutdown settings.
   * 
   * @example
   * {"InstanceId":"dsw-05cefd0be2e5a278","CpuPercentThreshold":20,"GpuPercentThreshold":10,"MaxIdleTimeInMinutes":120,"IdleTimeInMinutes":30}
   */
  idleInstanceCuller?: GetInstanceResponseBodyIdleInstanceCuller;
  /**
   * @remarks
   * The Base64-encoded account and password for the user‘s private image. The password will be hidden.
   * 
   * @example
   * YWxpeXVuNjUzMzM5MjIwMzoqKioqKio=
   */
  imageAuth?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * py36_cpu_tf1.12_ubuntu
   */
  imageName?: string;
  /**
   * @remarks
   * The image address.
   * 
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * training_data
   */
  instanceName?: string;
  /**
   * @remarks
   * The scheduled stop tasks.
   */
  instanceShutdownTimer?: GetInstanceResponseBodyInstanceShutdownTimer;
  /**
   * @remarks
   * The instance snapshots.
   * 
   * @example
   * []
   */
  instanceSnapshotList?: GetInstanceResponseBodyInstanceSnapshotList[];
  /**
   * @remarks
   * The instance URL.
   * 
   * @example
   * https://dsw-cn-shanghai.data.aliyun.com/notebook.htm?instance=39772#/
   */
  instanceUrl?: string;
  /**
   * @remarks
   * The JupyterLab URL.
   * 
   * @example
   * https://dsw-gateway-cn-shanghai.aliyun.com/dsw-39772/lab/
   */
  jupyterlabUrl?: string;
  /**
   * @remarks
   * The custom tags.
   * 
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: GetInstanceResponseBodyLabels[];
  /**
   * @remarks
   * The latest user image saved.
   */
  latestSnapshot?: GetInstanceResponseBodyLatestSnapshot;
  /**
   * @remarks
   * The error message. Valid values:
   * 
   * *   If the request is successful, null is returned.
   * *   If the request fails, the cause for the failure is returned.
   * 
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @remarks
   * The error recovery configuration of the node.
   */
  nodeErrorRecovery?: GetInstanceResponseBodyNodeErrorRecovery;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   PayAsYouGo
   * *   Subscription
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The priority based on which resources are allocated to instances.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The proxy path.
   * 
   * @example
   * dsw-170197/proxy/
   */
  proxyPath?: string;
  /**
   * @remarks
   * The error code of the instance.
   * 
   * @example
   * Internal Error
   */
  reasonCode?: string;
  /**
   * @remarks
   * The cause of the instance error.
   * 
   * @example
   * ImagePullBackOff
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @remarks
   * The resource configurations in subscription scenarios.
   * 
   * @example
   * {"CPU":"4","Memory":"8Gi","SharedMemory":"4Gi","GPU":"1","GPUType":"Tesla-V100-16G"}
   */
  requestedResource?: GetInstanceResponseBodyRequestedResource;
  /**
   * @remarks
   * The resource ID. This parameter is available if the billing method is subscription.
   * 
   * @example
   * dsw-123456789
   */
  resourceId?: string;
  /**
   * @remarks
   * The specification type.
   * 
   * *   For subscription, this is the requested CPU and memory size.
   * *   For pay-as-you-go, this is the selected ECS instance type.
   * 
   * @example
   * ecs.g7.xlarge
   */
  resourceName?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * Valid values:
   * 
   * *   Creating
   * *   SaveFailed
   * *   Stopped
   * *   Failed
   * *   ResourceAllocating
   * *   Stopping
   * *   Updating
   * *   Saving
   * *   Queuing
   * *   Recovering
   * *   Starting
   * *   Running
   * *   Saved
   * *   Deleting
   * *   EnvPreparing
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetInstanceResponseBodyTags[];
  /**
   * @remarks
   * The terminal URL.
   * 
   * @example
   * https://dsw-gateway-cn-shanghai.aliyun.com/dsw-39772/tty/
   */
  terminalUrl?: string;
  userCommandId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1612285282502324
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * 测试用户
   */
  userName?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) configurations.
   */
  userVpc?: GetInstanceResponseBodyUserVpc;
  /**
   * @remarks
   * The Web IDE URL.
   * 
   * @example
   * https://dsw-gateway-cn-shanghai.aliyun.com/dsw-39772/ide/
   */
  webIDEUrl?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 40823
   */
  workspaceId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * training_data
   */
  workspaceName?: string;
  /**
   * @remarks
   * The storage for the workspace. If you leave this parameter empty, the workspace uses File Storage NAS (NAS) storage, cloud disks, or local disks in sequence.
   * 
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
      credentialConfig: 'CredentialConfig',
      datasets: 'Datasets',
      driver: 'Driver',
      dynamicMount: 'DynamicMount',
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
      proxyPath: 'ProxyPath',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      requestedResource: 'RequestedResource',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      status: 'Status',
      success: 'Success',
      tags: 'Tags',
      terminalUrl: 'TerminalUrl',
      userCommandId: 'UserCommandId',
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
      credentialConfig: CredentialConfig,
      datasets: { 'type': 'array', 'itemType': GetInstanceResponseBodyDatasets },
      driver: 'string',
      dynamicMount: DynamicMount,
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
      proxyPath: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      requestedResource: GetInstanceResponseBodyRequestedResource,
      resourceId: 'string',
      resourceName: 'string',
      status: 'string',
      success: 'boolean',
      tags: { 'type': 'array', 'itemType': GetInstanceResponseBodyTags },
      terminalUrl: 'string',
      userCommandId: 'string',
      userId: 'string',
      userName: 'string',
      userVpc: GetInstanceResponseBodyUserVpc,
      webIDEUrl: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
      workspaceSource: 'string',
    };
  }

  validate() {
    if(this.affinity && typeof (this.affinity as any).validate === 'function') {
      (this.affinity as any).validate();
    }
    if(Array.isArray(this.cloudDisks)) {
      $dara.Model.validateArray(this.cloudDisks);
    }
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(Array.isArray(this.datasets)) {
      $dara.Model.validateArray(this.datasets);
    }
    if(this.dynamicMount && typeof (this.dynamicMount as any).validate === 'function') {
      (this.dynamicMount as any).validate();
    }
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
    }
    if(this.idleInstanceCuller && typeof (this.idleInstanceCuller as any).validate === 'function') {
      (this.idleInstanceCuller as any).validate();
    }
    if(this.instanceShutdownTimer && typeof (this.instanceShutdownTimer as any).validate === 'function') {
      (this.instanceShutdownTimer as any).validate();
    }
    if(Array.isArray(this.instanceSnapshotList)) {
      $dara.Model.validateArray(this.instanceSnapshotList);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.latestSnapshot && typeof (this.latestSnapshot as any).validate === 'function') {
      (this.latestSnapshot as any).validate();
    }
    if(this.nodeErrorRecovery && typeof (this.nodeErrorRecovery as any).validate === 'function') {
      (this.nodeErrorRecovery as any).validate();
    }
    if(this.requestedResource && typeof (this.requestedResource as any).validate === 'function') {
      (this.requestedResource as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.userVpc && typeof (this.userVpc as any).validate === 'function') {
      (this.userVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

