// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancesResponseBodyInstancesAffinity } from "./ListInstancesResponseBodyInstancesAffinity";
import { ListInstancesResponseBodyInstancesCloudDisks } from "./ListInstancesResponseBodyInstancesCloudDisks";
import { CredentialConfig } from "./CredentialConfig";
import { ListInstancesResponseBodyInstancesDatasets } from "./ListInstancesResponseBodyInstancesDatasets";
import { DynamicMount } from "./DynamicMount";
import { ListInstancesResponseBodyInstancesIdleInstanceCuller } from "./ListInstancesResponseBodyInstancesIdleInstanceCuller";
import { ListInstancesResponseBodyInstancesInstanceShutdownTimer } from "./ListInstancesResponseBodyInstancesInstanceShutdownTimer";
import { ListInstancesResponseBodyInstancesInstanceSnapshotList } from "./ListInstancesResponseBodyInstancesInstanceSnapshotList";
import { ListInstancesResponseBodyInstancesLabels } from "./ListInstancesResponseBodyInstancesLabels";
import { ListInstancesResponseBodyInstancesLatestSnapshot } from "./ListInstancesResponseBodyInstancesLatestSnapshot";
import { ListInstancesResponseBodyInstancesRequestedResource } from "./ListInstancesResponseBodyInstancesRequestedResource";
import { ListInstancesResponseBodyInstancesTags } from "./ListInstancesResponseBodyInstancesTags";
import { ListInstancesResponseBodyInstancesUserVpc } from "./ListInstancesResponseBodyInstancesUserVpc";


export class ListInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The accelerator type of the instance. Valid values:
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
   * *   PRIVATE (default): The instances are accessible only to you and the administrator of the workspace.
   * *   PUBLIC: The instances are accessible only to all members in the workspace.
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
  affinity?: ListInstancesResponseBodyInstancesAffinity;
  /**
   * @remarks
   * The cloud disks of the instance.
   * 
   * @example
   * []
   */
  cloudDisks?: ListInstancesResponseBodyInstancesCloudDisks[];
  /**
   * @remarks
   * The credential configuration.
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The datasets.
   */
  datasets?: ListInstancesResponseBodyInstancesDatasets[];
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
   * The dynamic mount configurations.
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
   * The time when the instance was created.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the instance was modified.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The rule for stopping idle instances.
   * 
   * @example
   * {"InstanceId":"dsw-05cefd0be2e5a278","CpuPercentThreshold":20,"GpuPercentThreshold":10,"MaxIdleTimeInMinutes":120,"IdleTimeInMinutes":30}
   */
  idleInstanceCuller?: ListInstancesResponseBodyInstancesIdleInstanceCuller;
  /**
   * @remarks
   * The Base64-encoded account and password for the user\\"s private image. The password will be hidden.
   * 
   * @example
   * aGFyYm9yYWlAeGltYWxheWE6KioqKioq
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
   * The scheduled stop task.
   */
  instanceShutdownTimer?: ListInstancesResponseBodyInstancesInstanceShutdownTimer;
  /**
   * @remarks
   * The instance snapshots.
   * 
   * @example
   * []
   */
  instanceSnapshotList?: ListInstancesResponseBodyInstancesInstanceSnapshotList[];
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
   * The custom labels.
   * 
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: ListInstancesResponseBodyInstancesLabels[];
  /**
   * @remarks
   * The user image that was latest saved.
   */
  latestSnapshot?: ListInstancesResponseBodyInstancesLatestSnapshot;
  oversoldInfo?: string;
  oversoldType?: string;
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
   * The priority based on which resources are allocated to instances. Resources are preferentially allocated to instances with higher priorities.
   * 
   * @example
   * 1
   */
  priority?: number;
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
   * The resource configurations.
   * 
   * @example
   * {"CPU":"4","Memory":"8Gi","SharedMemory":"4Gi","GPU":"1","GPUType":"Tesla-V100-16G"}
   */
  requestedResource?: ListInstancesResponseBodyInstancesRequestedResource;
  /**
   * @remarks
   * The resource ID. This parameter is valid only if you set PaymentType to Subscription.
   * 
   * @example
   * dsw-123456789
   */
  resourceId?: string;
  /**
   * @remarks
   * The specifications.
   * 
   * *   In pay-as-you-go scenarios, the value is the specifications of the purchased ECS instance type.
   * *   In subscription scenarios, the value is the requested number of CPU cores and memory size.
   * 
   * @example
   * resource_group
   */
  resourceName?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListInstancesResponseBodyInstancesTags[];
  /**
   * @remarks
   * The terminal URL.
   * 
   * @example
   * https://dsw-gateway-cn-shanghai.aliyun.com/dsw-39772/tty/
   */
  terminalUrl?: string;
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
  userVpc?: ListInstancesResponseBodyInstancesUserVpc;
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
      credentialConfig: 'CredentialConfig',
      datasets: 'Datasets',
      driver: 'Driver',
      dynamicMount: 'DynamicMount',
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
      oversoldInfo: 'OversoldInfo',
      oversoldType: 'OversoldType',
      paymentType: 'PaymentType',
      priority: 'Priority',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestedResource: 'RequestedResource',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      status: 'Status',
      tags: 'Tags',
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
      credentialConfig: CredentialConfig,
      datasets: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesDatasets },
      driver: 'string',
      dynamicMount: DynamicMount,
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
      oversoldInfo: 'string',
      oversoldType: 'string',
      paymentType: 'string',
      priority: 'number',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestedResource: ListInstancesResponseBodyInstancesRequestedResource,
      resourceId: 'string',
      resourceName: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesTags },
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

