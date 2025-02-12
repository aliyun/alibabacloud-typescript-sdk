// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AddImageRequestContainerImageSpecRegistryCredential extends $dara.Model {
  /**
   * @example
   * userpassword
   */
  password?: string;
  /**
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  server?: string;
  /**
   * @example
   * username
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      server: 'Server',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      server: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageRequestContainerImageSpec extends $dara.Model {
  /**
   * @example
   * True
   */
  isACREnterprise?: boolean;
  /**
   * @example
   * True
   */
  isACRRegistry?: boolean;
  registryCredential?: AddImageRequestContainerImageSpecRegistryCredential;
  /**
   * @example
   * cri-xyz795ygf8k9****
   */
  registryCriId?: string;
  /**
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/ehpc_open/nginx:latest
   */
  registryUrl?: string;
  static names(): { [key: string]: string } {
    return {
      isACREnterprise: 'IsACREnterprise',
      isACRRegistry: 'IsACRRegistry',
      registryCredential: 'RegistryCredential',
      registryCriId: 'RegistryCriId',
      registryUrl: 'RegistryUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isACREnterprise: 'boolean',
      isACRRegistry: 'boolean',
      registryCredential: AddImageRequestContainerImageSpecRegistryCredential,
      registryCriId: 'string',
      registryUrl: 'string',
    };
  }

  validate() {
    if(this.registryCredential && typeof (this.registryCredential as any).validate === 'function') {
      (this.registryCredential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageRequestVMImageSpec extends $dara.Model {
  /**
   * @example
   * m-bp1akkkr1rkxtb******
   */
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestDeploymentPolicyNetwork extends $dara.Model {
  enableExternalIpAddress?: boolean;
  vswitch?: string[];
  static names(): { [key: string]: string } {
    return {
      enableExternalIpAddress: 'EnableExternalIpAddress',
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableExternalIpAddress: 'boolean',
      vswitch: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vswitch)) {
      $dara.Model.validateArray(this.vswitch);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestDeploymentPolicyTag extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestDeploymentPolicy extends $dara.Model {
  /**
   * @example
   * Dedicated
   */
  allocationSpec?: string;
  network?: CreateJobRequestDeploymentPolicyNetwork;
  tag?: CreateJobRequestDeploymentPolicyTag[];
  static names(): { [key: string]: string } {
    return {
      allocationSpec: 'AllocationSpec',
      network: 'Network',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationSpec: 'string',
      network: CreateJobRequestDeploymentPolicyNetwork,
      tag: { 'type': 'array', 'itemType': CreateJobRequestDeploymentPolicyTag },
    };
  }

  validate() {
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
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

export class CreateJobRequestSecurityPolicySecurityGroup extends $dara.Model {
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestSecurityPolicy extends $dara.Model {
  securityGroup?: CreateJobRequestSecurityPolicySecurityGroup;
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: CreateJobRequestSecurityPolicySecurityGroup,
    };
  }

  validate() {
    if(this.securityGroup && typeof (this.securityGroup as any).validate === 'function') {
      (this.securityGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksExecutorPolicyArraySpec extends $dara.Model {
  /**
   * @example
   * 9
   */
  indexEnd?: number;
  /**
   * @example
   * 0
   */
  indexStart?: number;
  /**
   * @example
   * 1
   */
  indexStep?: number;
  static names(): { [key: string]: string } {
    return {
      indexEnd: 'IndexEnd',
      indexStart: 'IndexStart',
      indexStep: 'IndexStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexEnd: 'number',
      indexStart: 'number',
      indexStep: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksExecutorPolicy extends $dara.Model {
  arraySpec?: CreateJobRequestTasksExecutorPolicyArraySpec;
  /**
   * @example
   * 1
   */
  maxCount?: number;
  static names(): { [key: string]: string } {
    return {
      arraySpec: 'ArraySpec',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arraySpec: CreateJobRequestTasksExecutorPolicyArraySpec,
      maxCount: 'number',
    };
  }

  validate() {
    if(this.arraySpec && typeof (this.arraySpec as any).validate === 'function') {
      (this.arraySpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksTaskSpecResourceDisks extends $dara.Model {
  /**
   * @example
   * 40
   */
  size?: number;
  /**
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksTaskSpecResource extends $dara.Model {
  /**
   * @example
   * 2
   */
  cores?: number;
  disks?: CreateJobRequestTasksTaskSpecResourceDisks[];
  /**
   * @example
   * 4
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      disks: 'Disks',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      disks: { 'type': 'array', 'itemType': CreateJobRequestTasksTaskSpecResourceDisks },
      memory: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksTaskSpecTaskExecutorContainerEnvironmentVars extends $dara.Model {
  /**
   * @example
   * PATH
   */
  name?: string;
  /**
   * @example
   * /usr/local/bin
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class CreateJobRequestTasksTaskSpecTaskExecutorContainer extends $dara.Model {
  appId?: string;
  command?: string[];
  environmentVars?: CreateJobRequestTasksTaskSpecTaskExecutorContainerEnvironmentVars[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/ehpc/hpl:latest
   */
  image?: string;
  /**
   * @example
   * /usr/local/
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      command: 'Command',
      environmentVars: 'EnvironmentVars',
      image: 'Image',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      command: { 'type': 'array', 'itemType': 'string' },
      environmentVars: { 'type': 'array', 'itemType': CreateJobRequestTasksTaskSpecTaskExecutorContainerEnvironmentVars },
      image: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    if(Array.isArray(this.environmentVars)) {
      $dara.Model.validateArray(this.environmentVars);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksTaskSpecTaskExecutorVM extends $dara.Model {
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * m-xxxx
   */
  image?: string;
  /**
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  prologScript?: string;
  /**
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      image: 'Image',
      prologScript: 'PrologScript',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      image: 'string',
      prologScript: 'string',
      script: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksTaskSpecTaskExecutor extends $dara.Model {
  container?: CreateJobRequestTasksTaskSpecTaskExecutorContainer;
  VM?: CreateJobRequestTasksTaskSpecTaskExecutorVM;
  static names(): { [key: string]: string } {
    return {
      container: 'Container',
      VM: 'VM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      container: CreateJobRequestTasksTaskSpecTaskExecutorContainer,
      VM: CreateJobRequestTasksTaskSpecTaskExecutorVM,
    };
  }

  validate() {
    if(this.container && typeof (this.container as any).validate === 'function') {
      (this.container as any).validate();
    }
    if(this.VM && typeof (this.VM as any).validate === 'function') {
      (this.VM as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksTaskSpecVolumeMount extends $dara.Model {
  /**
   * @example
   * {"server":"xxxxx-xxxxx.cn-heyuan.nas.aliyuncs.com","vers":"3","path":"/data","options":"nolock,tcp,noresvport"}
   */
  mountOptions?: string;
  /**
   * @example
   * /mnt
   */
  mountPath?: string;
  /**
   * @example
   * alicloud/nas
   */
  volumeDriver?: string;
  static names(): { [key: string]: string } {
    return {
      mountOptions: 'MountOptions',
      mountPath: 'MountPath',
      volumeDriver: 'VolumeDriver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountOptions: 'string',
      mountPath: 'string',
      volumeDriver: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksTaskSpec extends $dara.Model {
  resource?: CreateJobRequestTasksTaskSpecResource;
  /**
   * @remarks
   * This parameter is required.
   */
  taskExecutor?: CreateJobRequestTasksTaskSpecTaskExecutor[];
  volumeMount?: CreateJobRequestTasksTaskSpecVolumeMount[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
      taskExecutor: 'TaskExecutor',
      volumeMount: 'VolumeMount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: CreateJobRequestTasksTaskSpecResource,
      taskExecutor: { 'type': 'array', 'itemType': CreateJobRequestTasksTaskSpecTaskExecutor },
      volumeMount: { 'type': 'array', 'itemType': CreateJobRequestTasksTaskSpecVolumeMount },
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    if(Array.isArray(this.taskExecutor)) {
      $dara.Model.validateArray(this.taskExecutor);
    }
    if(Array.isArray(this.volumeMount)) {
      $dara.Model.validateArray(this.volumeMount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasks extends $dara.Model {
  executorPolicy?: CreateJobRequestTasksExecutorPolicy;
  /**
   * @example
   * task0
   */
  taskName?: string;
  taskSpec?: CreateJobRequestTasksTaskSpec;
  /**
   * @example
   * true
   */
  taskSustainable?: boolean;
  static names(): { [key: string]: string } {
    return {
      executorPolicy: 'ExecutorPolicy',
      taskName: 'TaskName',
      taskSpec: 'TaskSpec',
      taskSustainable: 'TaskSustainable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorPolicy: CreateJobRequestTasksExecutorPolicy,
      taskName: 'string',
      taskSpec: CreateJobRequestTasksTaskSpec,
      taskSustainable: 'boolean',
    };
  }

  validate() {
    if(this.executorPolicy && typeof (this.executorPolicy as any).validate === 'function') {
      (this.executorPolicy as any).validate();
    }
    if(this.taskSpec && typeof (this.taskSpec as any).validate === 'function') {
      (this.taskSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBodyTasks extends $dara.Model {
  executorIds?: string[];
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      executorIds: 'ExecutorIds',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorIds: { 'type': 'array', 'itemType': 'string' },
      taskName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.executorIds)) {
      $dara.Model.validateArray(this.executorIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePoolRequestResourceLimits extends $dara.Model {
  /**
   * @example
   * 2000
   */
  maxExectorNum?: number;
  static names(): { [key: string]: string } {
    return {
      maxExectorNum: 'MaxExectorNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxExectorNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsRequestJobSpecTaskSpec extends $dara.Model {
  arrayIndex?: number[];
  /**
   * @example
   * task0
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndex: 'ArrayIndex',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndex: { 'type': 'array', 'itemType': 'number' },
      taskName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.arrayIndex)) {
      $dara.Model.validateArray(this.arrayIndex);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsRequestJobSpec extends $dara.Model {
  /**
   * @example
   * job-xxxx
   */
  jobId?: string;
  taskSpec?: DeleteJobsRequestJobSpecTaskSpec[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      taskSpec: 'TaskSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      taskSpec: { 'type': 'array', 'itemType': DeleteJobsRequestJobSpecTaskSpec },
    };
  }

  validate() {
    if(Array.isArray(this.taskSpec)) {
      $dara.Model.validateArray(this.taskSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMetricLastResponseBodyMetrics extends $dara.Model {
  /**
   * @example
   * 1
   */
  arrayIndex?: number;
  /**
   * @example
   * {"memory_utilization": 37.42,"cpu_utilization": 1.008, "disk_utilization": 3.562}
   */
  metric?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndex: 'ArrayIndex',
      metric: 'Metric',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndex: 'number',
      metric: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppVersionsResponseBodyAppVersions extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * m-f8z0dfa96luomqly****
   */
  imageId?: string;
  /**
   * @example
   * V-Ray
   */
  name?: string;
  /**
   * @example
   * v1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyImageContainerImageSpecRegistryCredential extends $dara.Model {
  /**
   * @example
   * userpassword
   */
  password?: string;
  /**
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  server?: string;
  /**
   * @example
   * username
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      server: 'Server',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      server: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyImageContainerImageSpec extends $dara.Model {
  architecture?: string;
  /**
   * @example
   * True
   */
  isACREnterprise?: boolean;
  /**
   * @example
   * True
   */
  isACRRegistry?: boolean;
  osTag?: string;
  platform?: string;
  registryCredential?: GetImageResponseBodyImageContainerImageSpecRegistryCredential;
  /**
   * @example
   * cri-xyz795ygf8k9****
   */
  registryCriId?: string;
  /**
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/ehpc_open/nginx:latest
   */
  registryUrl?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      isACREnterprise: 'IsACREnterprise',
      isACRRegistry: 'IsACRRegistry',
      osTag: 'OsTag',
      platform: 'Platform',
      registryCredential: 'RegistryCredential',
      registryCriId: 'RegistryCriId',
      registryUrl: 'RegistryUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      isACREnterprise: 'boolean',
      isACRRegistry: 'boolean',
      osTag: 'string',
      platform: 'string',
      registryCredential: GetImageResponseBodyImageContainerImageSpecRegistryCredential,
      registryCriId: 'string',
      registryUrl: 'string',
    };
  }

  validate() {
    if(this.registryCredential && typeof (this.registryCredential as any).validate === 'function') {
      (this.registryCredential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyImageDocumentInfo extends $dara.Model {
  document?: string;
  documentId?: string;
  encodingMode?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'Document',
      documentId: 'DocumentId',
      encodingMode: 'EncodingMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      documentId: 'string',
      encodingMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyImageVMImageSpec extends $dara.Model {
  /**
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @example
   * m-uf60twafjtaart******
   */
  imageId?: string;
  /**
   * @example
   * CentOS  7.6 64 bit
   */
  osTag?: string;
  /**
   * @example
   * CentOS
   */
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      imageId: 'ImageId',
      osTag: 'OsTag',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      imageId: 'string',
      osTag: 'string',
      platform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyImage extends $dara.Model {
  appId?: string;
  containerImageSpec?: GetImageResponseBodyImageContainerImageSpec;
  /**
   * @example
   * 2022-12-23T09:51:39Z
   */
  createTime?: string;
  description?: string;
  documentInfo?: GetImageResponseBodyImageDocumentInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VM
   */
  imageType?: string;
  /**
   * @example
   * app-image
   */
  name?: string;
  /**
   * @example
   * 40 GiB
   */
  size?: string;
  status?: string;
  VMImageSpec?: GetImageResponseBodyImageVMImageSpec;
  /**
   * @example
   * v1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      containerImageSpec: 'ContainerImageSpec',
      createTime: 'CreateTime',
      description: 'Description',
      documentInfo: 'DocumentInfo',
      imageType: 'ImageType',
      name: 'Name',
      size: 'Size',
      status: 'Status',
      VMImageSpec: 'VMImageSpec',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      containerImageSpec: GetImageResponseBodyImageContainerImageSpec,
      createTime: 'string',
      description: 'string',
      documentInfo: GetImageResponseBodyImageDocumentInfo,
      imageType: 'string',
      name: 'string',
      size: 'string',
      status: 'string',
      VMImageSpec: GetImageResponseBodyImageVMImageSpec,
      version: 'string',
    };
  }

  validate() {
    if(this.containerImageSpec && typeof (this.containerImageSpec as any).validate === 'function') {
      (this.containerImageSpec as any).validate();
    }
    if(this.documentInfo && typeof (this.documentInfo as any).validate === 'function') {
      (this.documentInfo as any).validate();
    }
    if(this.VMImageSpec && typeof (this.VMImageSpec as any).validate === 'function') {
      (this.VMImageSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoDeploymentPolicyNetwork extends $dara.Model {
  enableExternalIpAddress?: boolean;
  vswitch?: string[];
  static names(): { [key: string]: string } {
    return {
      enableExternalIpAddress: 'EnableExternalIpAddress',
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableExternalIpAddress: 'boolean',
      vswitch: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vswitch)) {
      $dara.Model.validateArray(this.vswitch);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoDeploymentPolicyTags extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetJobResponseBodyJobInfoDeploymentPolicy extends $dara.Model {
  /**
   * @example
   * Dedicated
   */
  allocationSpec?: string;
  network?: GetJobResponseBodyJobInfoDeploymentPolicyNetwork;
  tags?: GetJobResponseBodyJobInfoDeploymentPolicyTags[];
  static names(): { [key: string]: string } {
    return {
      allocationSpec: 'AllocationSpec',
      network: 'Network',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationSpec: 'string',
      network: GetJobResponseBodyJobInfoDeploymentPolicyNetwork,
      tags: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoDeploymentPolicyTags },
    };
  }

  validate() {
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
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

export class GetJobResponseBodyJobInfoTasksExecutorPolicyArraySpec extends $dara.Model {
  /**
   * @example
   * 9
   */
  indexEnd?: number;
  /**
   * @example
   * 0
   */
  indexStart?: number;
  /**
   * @example
   * 1
   */
  indexStep?: number;
  static names(): { [key: string]: string } {
    return {
      indexEnd: 'IndexEnd',
      indexStart: 'IndexStart',
      indexStep: 'IndexStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexEnd: 'number',
      indexStart: 'number',
      indexStep: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksExecutorPolicy extends $dara.Model {
  arraySpec?: GetJobResponseBodyJobInfoTasksExecutorPolicyArraySpec;
  /**
   * @example
   * 10
   */
  maxCount?: number;
  static names(): { [key: string]: string } {
    return {
      arraySpec: 'ArraySpec',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arraySpec: GetJobResponseBodyJobInfoTasksExecutorPolicyArraySpec,
      maxCount: 'number',
    };
  }

  validate() {
    if(this.arraySpec && typeof (this.arraySpec as any).validate === 'function') {
      (this.arraySpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksExecutorStatus extends $dara.Model {
  /**
   * @example
   * 0
   */
  arrayId?: number;
  /**
   * @example
   * 2024-02-04 13:54:10
   */
  createTime?: string;
  /**
   * @example
   * 2024-02-04 13:54:10
   */
  endTime?: string;
  /**
   * @example
   * 2024-02-04 13:54:10
   */
  startTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * Creating executor
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      arrayId: 'ArrayId',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      startTime: 'StartTime',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayId: 'number',
      createTime: 'string',
      endTime: 'string',
      startTime: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksTaskSpecResourceDisks extends $dara.Model {
  /**
   * @example
   * 100
   */
  size?: number;
  /**
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksTaskSpecResource extends $dara.Model {
  /**
   * @example
   * 1
   */
  cores?: number;
  disks?: GetJobResponseBodyJobInfoTasksTaskSpecResourceDisks[];
  /**
   * @example
   * 4
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      disks: 'Disks',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      disks: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasksTaskSpecResourceDisks },
      memory: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutorVM extends $dara.Model {
  /**
   * @example
   * m-xxxx
   */
  image?: string;
  /**
   * @example
   * ZWNobyAiMTIzNCIgPiBgZGF0ZSArJXNg
   */
  prologScript?: string;
  /**
   * @example
   * ZWNobyAiMTIzNCIgPiBgZGF0ZSArJXNg
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      prologScript: 'PrologScript',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      prologScript: 'string',
      script: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutor extends $dara.Model {
  VM?: GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutorVM;
  static names(): { [key: string]: string } {
    return {
      VM: 'VM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VM: GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutorVM,
    };
  }

  validate() {
    if(this.VM && typeof (this.VM as any).validate === 'function') {
      (this.VM as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksTaskSpec extends $dara.Model {
  resource?: GetJobResponseBodyJobInfoTasksTaskSpecResource;
  taskExecutor?: GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutor[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
      taskExecutor: 'TaskExecutor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: GetJobResponseBodyJobInfoTasksTaskSpecResource,
      taskExecutor: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutor },
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    if(Array.isArray(this.taskExecutor)) {
      $dara.Model.validateArray(this.taskExecutor);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasks extends $dara.Model {
  executorPolicy?: GetJobResponseBodyJobInfoTasksExecutorPolicy;
  executorStatus?: GetJobResponseBodyJobInfoTasksExecutorStatus[];
  /**
   * @example
   * task0
   */
  taskName?: string;
  taskSpec?: GetJobResponseBodyJobInfoTasksTaskSpec;
  /**
   * @example
   * true
   */
  taskSustainable?: boolean;
  static names(): { [key: string]: string } {
    return {
      executorPolicy: 'ExecutorPolicy',
      executorStatus: 'ExecutorStatus',
      taskName: 'TaskName',
      taskSpec: 'TaskSpec',
      taskSustainable: 'TaskSustainable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorPolicy: GetJobResponseBodyJobInfoTasksExecutorPolicy,
      executorStatus: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasksExecutorStatus },
      taskName: 'string',
      taskSpec: GetJobResponseBodyJobInfoTasksTaskSpec,
      taskSustainable: 'boolean',
    };
  }

  validate() {
    if(this.executorPolicy && typeof (this.executorPolicy as any).validate === 'function') {
      (this.executorPolicy as any).validate();
    }
    if(Array.isArray(this.executorStatus)) {
      $dara.Model.validateArray(this.executorStatus);
    }
    if(this.taskSpec && typeof (this.taskSpec as any).validate === 'function') {
      (this.taskSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfo extends $dara.Model {
  /**
   * @example
   * 2024-03-05 20:00:46
   */
  createTime?: string;
  deploymentPolicy?: GetJobResponseBodyJobInfoDeploymentPolicy;
  /**
   * @example
   * 2024-03-05 20:01:48
   */
  endTime?: string;
  /**
   * @example
   * Demo
   */
  jobDescription?: string;
  /**
   * @example
   * job-xxxx
   */
  jobId?: string;
  /**
   * @example
   * testJob
   */
  jobName?: string;
  jobScheduler?: string;
  /**
   * @example
   * 2024-03-05 20:00:48
   */
  startTime?: string;
  /**
   * @example
   * Succeed
   */
  status?: string;
  tasks?: GetJobResponseBodyJobInfoTasks[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deploymentPolicy: 'DeploymentPolicy',
      endTime: 'EndTime',
      jobDescription: 'JobDescription',
      jobId: 'JobId',
      jobName: 'JobName',
      jobScheduler: 'JobScheduler',
      startTime: 'StartTime',
      status: 'Status',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deploymentPolicy: GetJobResponseBodyJobInfoDeploymentPolicy,
      endTime: 'string',
      jobDescription: 'string',
      jobId: 'string',
      jobName: 'string',
      jobScheduler: 'string',
      startTime: 'string',
      status: 'string',
      tasks: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasks },
    };
  }

  validate() {
    if(this.deploymentPolicy && typeof (this.deploymentPolicy as any).validate === 'function') {
      (this.deploymentPolicy as any).validate();
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPoolResponseBodyPoolInfo extends $dara.Model {
  /**
   * @example
   * 2024-12-01 20:00:00
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  exectorUsage?: number;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * 2000
   */
  maxExectorNum?: number;
  /**
   * @example
   * PoolTest
   */
  poolName?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Fails to *** pool: ***.
   */
  reason?: string;
  /**
   * @example
   * Working
   */
  status?: string;
  /**
   * @example
   * 2024-12-01 20:00:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      exectorUsage: 'ExectorUsage',
      isDefault: 'IsDefault',
      maxExectorNum: 'MaxExectorNum',
      poolName: 'PoolName',
      priority: 'Priority',
      reason: 'Reason',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      exectorUsage: 'number',
      isDefault: 'boolean',
      maxExectorNum: 'number',
      poolName: 'string',
      priority: 'number',
      reason: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsRequestFilter extends $dara.Model {
  executorIds?: string[];
  ipAddresses?: string[];
  /**
   * @example
   * testJob
   */
  jobName?: string;
  status?: string[];
  /**
   * @example
   * 1703819914
   */
  timeCreatedAfter?: number;
  /**
   * @example
   * 1703820113
   */
  timeCreatedBefore?: number;
  static names(): { [key: string]: string } {
    return {
      executorIds: 'ExecutorIds',
      ipAddresses: 'IpAddresses',
      jobName: 'JobName',
      status: 'Status',
      timeCreatedAfter: 'TimeCreatedAfter',
      timeCreatedBefore: 'TimeCreatedBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorIds: { 'type': 'array', 'itemType': 'string' },
      ipAddresses: { 'type': 'array', 'itemType': 'string' },
      jobName: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
      timeCreatedAfter: 'number',
      timeCreatedBefore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.executorIds)) {
      $dara.Model.validateArray(this.executorIds);
    }
    if(Array.isArray(this.ipAddresses)) {
      $dara.Model.validateArray(this.ipAddresses);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsResponseBodyExecutorsResourceDisks extends $dara.Model {
  size?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsResponseBodyExecutorsResource extends $dara.Model {
  cores?: number;
  disks?: ListExecutorsResponseBodyExecutorsResourceDisks[];
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      disks: 'Disks',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      disks: { 'type': 'array', 'itemType': ListExecutorsResponseBodyExecutorsResourceDisks },
      memory: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsResponseBodyExecutorsTags extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListExecutorsResponseBodyExecutors extends $dara.Model {
  appName?: string;
  /**
   * @example
   * 0
   */
  arrayIndex?: number;
  /**
   * @example
   * 2024-02-20 10:04:10
   */
  createTime?: string;
  /**
   * @example
   * 2024-02-20 10:04:18
   */
  endTime?: string;
  /**
   * @example
   * job-xxxx-task0-1
   */
  executorId?: string;
  expirationTime?: string;
  externalIpAddress?: string[];
  hostName?: string[];
  image?: string;
  ipAddress?: string[];
  /**
   * @example
   * job-hy1nggvyukuvkr******
   */
  jobId?: string;
  /**
   * @example
   * testJob
   */
  jobName?: string;
  resource?: ListExecutorsResponseBodyExecutorsResource;
  resourceType?: string;
  startTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * Succeeded to release executor resource
   */
  statusReason?: string;
  tags?: ListExecutorsResponseBodyExecutorsTags[];
  /**
   * @example
   * task0
   */
  taskName?: string;
  taskSustainable?: boolean;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      arrayIndex: 'ArrayIndex',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      executorId: 'ExecutorId',
      expirationTime: 'ExpirationTime',
      externalIpAddress: 'ExternalIpAddress',
      hostName: 'HostName',
      image: 'Image',
      ipAddress: 'IpAddress',
      jobId: 'JobId',
      jobName: 'JobName',
      resource: 'Resource',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      status: 'Status',
      statusReason: 'StatusReason',
      tags: 'Tags',
      taskName: 'TaskName',
      taskSustainable: 'TaskSustainable',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      arrayIndex: 'number',
      createTime: 'string',
      endTime: 'string',
      executorId: 'string',
      expirationTime: 'string',
      externalIpAddress: { 'type': 'array', 'itemType': 'string' },
      hostName: { 'type': 'array', 'itemType': 'string' },
      image: 'string',
      ipAddress: { 'type': 'array', 'itemType': 'string' },
      jobId: 'string',
      jobName: 'string',
      resource: ListExecutorsResponseBodyExecutorsResource,
      resourceType: 'string',
      startTime: 'string',
      status: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': ListExecutorsResponseBodyExecutorsTags },
      taskName: 'string',
      taskSustainable: 'boolean',
      vswitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.externalIpAddress)) {
      $dara.Model.validateArray(this.externalIpAddress);
    }
    if(Array.isArray(this.hostName)) {
      $dara.Model.validateArray(this.hostName);
    }
    if(Array.isArray(this.ipAddress)) {
      $dara.Model.validateArray(this.ipAddress);
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
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

export class ListImagesResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @example
   * 2022-12-09T07:06:34Z
   */
  createTime?: string;
  description?: string;
  documentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * m-bp181x855551ww5yq****
   */
  imageId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VM
   */
  imageType?: string;
  /**
   * @example
   * app-image
   */
  name?: string;
  osTag?: string;
  updateTime?: string;
  /**
   * @example
   * v1.0
   */
  version?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      description: 'Description',
      documentId: 'DocumentId',
      imageId: 'ImageId',
      imageType: 'ImageType',
      name: 'Name',
      osTag: 'OsTag',
      updateTime: 'UpdateTime',
      version: 'Version',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'string',
      description: 'string',
      documentId: 'number',
      imageId: 'string',
      imageType: 'string',
      name: 'string',
      osTag: 'string',
      updateTime: 'string',
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutorsResponseBodyExecutorStatus extends $dara.Model {
  deleted?: number;
  exception?: number;
  failed?: number;
  initing?: number;
  pending?: number;
  running?: number;
  succeeded?: number;
  static names(): { [key: string]: string } {
    return {
      deleted: 'Deleted',
      exception: 'Exception',
      failed: 'Failed',
      initing: 'Initing',
      pending: 'Pending',
      running: 'Running',
      succeeded: 'Succeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: 'number',
      exception: 'number',
      failed: 'number',
      initing: 'number',
      pending: 'number',
      running: 'number',
      succeeded: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutorsResponseBodyExecutorsTags extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListJobExecutorsResponseBodyExecutors extends $dara.Model {
  /**
   * @example
   * 0
   */
  arrayIndex?: number;
  /**
   * @example
   * 2024-02-20 10:04:10
   */
  createTime?: string;
  /**
   * @example
   * 2024-02-20 10:04:18
   */
  endTime?: string;
  executorId?: string;
  expirationTime?: string;
  externalIpAddress?: string[];
  hostName?: string[];
  ipAddress?: string[];
  startTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * Creating executor
   */
  statusReason?: string;
  tags?: ListJobExecutorsResponseBodyExecutorsTags[];
  static names(): { [key: string]: string } {
    return {
      arrayIndex: 'ArrayIndex',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      executorId: 'ExecutorId',
      expirationTime: 'ExpirationTime',
      externalIpAddress: 'ExternalIpAddress',
      hostName: 'HostName',
      ipAddress: 'IpAddress',
      startTime: 'StartTime',
      status: 'Status',
      statusReason: 'StatusReason',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndex: 'number',
      createTime: 'string',
      endTime: 'string',
      executorId: 'string',
      expirationTime: 'string',
      externalIpAddress: { 'type': 'array', 'itemType': 'string' },
      hostName: { 'type': 'array', 'itemType': 'string' },
      ipAddress: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
      status: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': ListJobExecutorsResponseBodyExecutorsTags },
    };
  }

  validate() {
    if(Array.isArray(this.externalIpAddress)) {
      $dara.Model.validateArray(this.externalIpAddress);
    }
    if(Array.isArray(this.hostName)) {
      $dara.Model.validateArray(this.hostName);
    }
    if(Array.isArray(this.ipAddress)) {
      $dara.Model.validateArray(this.ipAddress);
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

export class ListJobsRequestFilter extends $dara.Model {
  /**
   * @example
   * job-xxxx
   */
  jobId?: string;
  /**
   * @example
   * testJob
   */
  jobName?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * 1703819914
   */
  timeCreatedAfter?: number;
  /**
   * @example
   * 1703820113
   */
  timeCreatedBefore?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobName: 'JobName',
      status: 'Status',
      timeCreatedAfter: 'TimeCreatedAfter',
      timeCreatedBefore: 'TimeCreatedBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jobName: 'string',
      status: 'string',
      timeCreatedAfter: 'number',
      timeCreatedBefore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequestSortBy extends $dara.Model {
  /**
   * @example
   * time_start
   */
  label?: string;
  /**
   * @example
   * ASC
   */
  order?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      order: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobListTags extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListJobsResponseBodyJobList extends $dara.Model {
  appName?: string;
  /**
   * @example
   * 2024-01-25 12:29:21
   */
  createTime?: string;
  /**
   * @example
   * 2024-01-25 12:35:23
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  executorCount?: number;
  /**
   * @example
   * Demo
   */
  jobDescription?: string;
  /**
   * @example
   * job-xxx
   */
  jobId?: string;
  /**
   * @example
   * testJob
   */
  jobName?: string;
  /**
   * @example
   * 129**********
   */
  ownerUid?: string;
  /**
   * @example
   * 2024-01-25 12:29:23
   */
  startTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  tags?: ListJobsResponseBodyJobListTags[];
  /**
   * @example
   * 1
   */
  taskCount?: number;
  /**
   * @example
   * true
   */
  taskSustainable?: boolean;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      executorCount: 'ExecutorCount',
      jobDescription: 'JobDescription',
      jobId: 'JobId',
      jobName: 'JobName',
      ownerUid: 'OwnerUid',
      startTime: 'StartTime',
      status: 'Status',
      tags: 'Tags',
      taskCount: 'TaskCount',
      taskSustainable: 'TaskSustainable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createTime: 'string',
      endTime: 'string',
      executorCount: 'number',
      jobDescription: 'string',
      jobId: 'string',
      jobName: 'string',
      ownerUid: 'string',
      startTime: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListJobsResponseBodyJobListTags },
      taskCount: 'number',
      taskSustainable: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoolsRequestFilter extends $dara.Model {
  poolName?: string[];
  status?: string[];
  /**
   * @example
   * 1703819914
   */
  timeCreatedAfter?: number;
  /**
   * @example
   * 1703820113
   */
  timeCreatedBefore?: number;
  static names(): { [key: string]: string } {
    return {
      poolName: 'PoolName',
      status: 'Status',
      timeCreatedAfter: 'TimeCreatedAfter',
      timeCreatedBefore: 'TimeCreatedBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolName: { 'type': 'array', 'itemType': 'string' },
      status: { 'type': 'array', 'itemType': 'string' },
      timeCreatedAfter: 'number',
      timeCreatedBefore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.poolName)) {
      $dara.Model.validateArray(this.poolName);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoolsResponseBodyPoolList extends $dara.Model {
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * 2000
   */
  maxExectorNum?: number;
  /**
   * @example
   * PoolTest
   */
  poolName?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Working
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      maxExectorNum: 'MaxExectorNum',
      poolName: 'PoolName',
      priority: 'Priority',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      maxExectorNum: 'number',
      poolName: 'string',
      priority: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @example
   * TestValue
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @example
   * job-xxxxxxxx
   */
  resourceId?: string;
  /**
   * @example
   * Job
   */
  resourceType?: string;
  /**
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @example
   * TestValue
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

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.tagResource)) {
      $dara.Model.validateArray(this.tagResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @example
   * TestValue
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

export class UpdatePoolRequestResourceLimits extends $dara.Model {
  /**
   * @example
   * 2000
   */
  maxExectorNum?: number;
  static names(): { [key: string]: string } {
    return {
      maxExectorNum: 'MaxExectorNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxExectorNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageRequest extends $dara.Model {
  containerImageSpec?: AddImageRequestContainerImageSpec;
  description?: string;
  imageType?: string;
  /**
   * @example
   * V1.0
   */
  imageVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * app-image
   */
  name?: string;
  VMImageSpec?: AddImageRequestVMImageSpec;
  static names(): { [key: string]: string } {
    return {
      containerImageSpec: 'ContainerImageSpec',
      description: 'Description',
      imageType: 'ImageType',
      imageVersion: 'ImageVersion',
      name: 'Name',
      VMImageSpec: 'VMImageSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerImageSpec: AddImageRequestContainerImageSpec,
      description: 'string',
      imageType: 'string',
      imageVersion: 'string',
      name: 'string',
      VMImageSpec: AddImageRequestVMImageSpec,
    };
  }

  validate() {
    if(this.containerImageSpec && typeof (this.containerImageSpec as any).validate === 'function') {
      (this.containerImageSpec as any).validate();
    }
    if(this.VMImageSpec && typeof (this.VMImageSpec as any).validate === 'function') {
      (this.VMImageSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageShrinkRequest extends $dara.Model {
  containerImageSpecShrink?: string;
  description?: string;
  imageType?: string;
  /**
   * @example
   * V1.0
   */
  imageVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * app-image
   */
  name?: string;
  VMImageSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      containerImageSpecShrink: 'ContainerImageSpec',
      description: 'Description',
      imageType: 'ImageType',
      imageVersion: 'ImageVersion',
      name: 'Name',
      VMImageSpecShrink: 'VMImageSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerImageSpecShrink: 'string',
      description: 'string',
      imageType: 'string',
      imageVersion: 'string',
      name: 'string',
      VMImageSpecShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponseBody extends $dara.Model {
  /**
   * @example
   * m-bp1akkkr1rkxtb******
   */
  imageId?: string;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddImageResponseBody;
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
      body: AddImageResponseBody,
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

export class CreateJobRequest extends $dara.Model {
  deploymentPolicy?: CreateJobRequestDeploymentPolicy;
  /**
   * @example
   * Demo
   */
  jobDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testjob
   */
  jobName?: string;
  jobScheduler?: string;
  securityPolicy?: CreateJobRequestSecurityPolicy;
  /**
   * @remarks
   * This parameter is required.
   */
  tasks?: CreateJobRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      deploymentPolicy: 'DeploymentPolicy',
      jobDescription: 'JobDescription',
      jobName: 'JobName',
      jobScheduler: 'JobScheduler',
      securityPolicy: 'SecurityPolicy',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentPolicy: CreateJobRequestDeploymentPolicy,
      jobDescription: 'string',
      jobName: 'string',
      jobScheduler: 'string',
      securityPolicy: CreateJobRequestSecurityPolicy,
      tasks: { 'type': 'array', 'itemType': CreateJobRequestTasks },
    };
  }

  validate() {
    if(this.deploymentPolicy && typeof (this.deploymentPolicy as any).validate === 'function') {
      (this.deploymentPolicy as any).validate();
    }
    if(this.securityPolicy && typeof (this.securityPolicy as any).validate === 'function') {
      (this.securityPolicy as any).validate();
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobShrinkRequest extends $dara.Model {
  deploymentPolicyShrink?: string;
  /**
   * @example
   * Demo
   */
  jobDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testjob
   */
  jobName?: string;
  jobScheduler?: string;
  securityPolicyShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tasksShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentPolicyShrink: 'DeploymentPolicy',
      jobDescription: 'JobDescription',
      jobName: 'JobName',
      jobScheduler: 'JobScheduler',
      securityPolicyShrink: 'SecurityPolicy',
      tasksShrink: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentPolicyShrink: 'string',
      jobDescription: 'string',
      jobName: 'string',
      jobScheduler: 'string',
      securityPolicyShrink: 'string',
      tasksShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBody extends $dara.Model {
  /**
   * @example
   * job-xxxx
   */
  jobId?: string;
  /**
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  tasks?: CreateJobResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': CreateJobResponseBodyTasks },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateJobResponseBody;
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
      body: CreateJobResponseBody,
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

export class CreatePoolRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PoolTest
   */
  poolName?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  resourceLimits?: CreatePoolRequestResourceLimits;
  static names(): { [key: string]: string } {
    return {
      poolName: 'PoolName',
      priority: 'Priority',
      resourceLimits: 'ResourceLimits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolName: 'string',
      priority: 'number',
      resourceLimits: CreatePoolRequestResourceLimits,
    };
  }

  validate() {
    if(this.resourceLimits && typeof (this.resourceLimits as any).validate === 'function') {
      (this.resourceLimits as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePoolShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PoolTest
   */
  poolName?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  resourceLimitsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      poolName: 'PoolName',
      priority: 'Priority',
      resourceLimitsShrink: 'ResourceLimits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolName: 'string',
      priority: 'number',
      resourceLimitsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
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

export class CreatePoolResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePoolResponseBody;
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
      body: CreatePoolResponseBody,
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

export class DeleteJobsRequest extends $dara.Model {
  executorIds?: string[];
  jobSpec?: DeleteJobsRequestJobSpec[];
  static names(): { [key: string]: string } {
    return {
      executorIds: 'ExecutorIds',
      jobSpec: 'JobSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorIds: { 'type': 'array', 'itemType': 'string' },
      jobSpec: { 'type': 'array', 'itemType': DeleteJobsRequestJobSpec },
    };
  }

  validate() {
    if(Array.isArray(this.executorIds)) {
      $dara.Model.validateArray(this.executorIds);
    }
    if(Array.isArray(this.jobSpec)) {
      $dara.Model.validateArray(this.jobSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsShrinkRequest extends $dara.Model {
  executorIdsShrink?: string;
  jobSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      executorIdsShrink: 'ExecutorIds',
      jobSpecShrink: 'JobSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorIdsShrink: 'string',
      jobSpecShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsResponseBody extends $dara.Model {
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
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

export class DeleteJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteJobsResponseBody;
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
      body: DeleteJobsResponseBody,
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

export class DeletePoolRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PoolTest
   */
  poolName?: string;
  static names(): { [key: string]: string } {
    return {
      poolName: 'PoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
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

export class DeletePoolResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePoolResponseBody;
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
      body: DeletePoolResponseBody,
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

export class DescribeJobMetricDataRequest extends $dara.Model {
  arrayIndex?: number[];
  /**
   * @example
   * job-xxxxx
   */
  jobId?: string;
  /**
   * @example
   * cpu_utilization
   */
  metricName?: string;
  /**
   * @example
   * Task0
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndex: 'ArrayIndex',
      jobId: 'JobId',
      metricName: 'MetricName',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndex: { 'type': 'array', 'itemType': 'number' },
      jobId: 'string',
      metricName: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.arrayIndex)) {
      $dara.Model.validateArray(this.arrayIndex);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMetricDataShrinkRequest extends $dara.Model {
  arrayIndexShrink?: string;
  /**
   * @example
   * job-xxxxx
   */
  jobId?: string;
  /**
   * @example
   * cpu_utilization
   */
  metricName?: string;
  /**
   * @example
   * Task0
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndexShrink: 'ArrayIndex',
      jobId: 'JobId',
      metricName: 'MetricName',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndexShrink: 'string',
      jobId: 'string',
      metricName: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMetricDataResponseBody extends $dara.Model {
  /**
   * @example
   * [{"timestamp":1709540685000,"Minimum":28.45,"Maximum":28.45,"Average":28.45}]
   */
  dataPoints?: string;
  /**
   * @example
   * 15
   */
  period?: number;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPoints: 'DataPoints',
      period: 'Period',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoints: 'string',
      period: 'number',
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

export class DescribeJobMetricDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeJobMetricDataResponseBody;
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
      body: DescribeJobMetricDataResponseBody,
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

export class DescribeJobMetricLastRequest extends $dara.Model {
  arrayIndex?: number[];
  /**
   * @example
   * job-xxxxx
   */
  jobId?: string;
  /**
   * @example
   * Task0
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndex: 'ArrayIndex',
      jobId: 'JobId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndex: { 'type': 'array', 'itemType': 'number' },
      jobId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.arrayIndex)) {
      $dara.Model.validateArray(this.arrayIndex);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMetricLastShrinkRequest extends $dara.Model {
  arrayIndexShrink?: string;
  /**
   * @example
   * job-xxxxx
   */
  jobId?: string;
  /**
   * @example
   * Task0
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndexShrink: 'ArrayIndex',
      jobId: 'JobId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndexShrink: 'string',
      jobId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMetricLastResponseBody extends $dara.Model {
  metrics?: DescribeJobMetricLastResponseBodyMetrics[];
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': DescribeJobMetricLastResponseBodyMetrics },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMetricLastResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeJobMetricLastResponseBody;
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
      body: DescribeJobMetricLastResponseBody,
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

export class GetAppVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * V-Ray
   */
  appName?: string;
  /**
   * @example
   * Public
   */
  imageCategory?: string;
  /**
   * @example
   * VM
   */
  imageType?: string;
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
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      imageCategory: 'ImageCategory',
      imageType: 'ImageType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      imageCategory: 'string',
      imageType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppVersionsResponseBody extends $dara.Model {
  appVersions?: GetAppVersionsResponseBodyAppVersions[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appVersions: 'AppVersions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersions: { 'type': 'array', 'itemType': GetAppVersionsResponseBodyAppVersions },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appVersions)) {
      $dara.Model.validateArray(this.appVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppVersionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppVersionsResponseBody;
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
      body: GetAppVersionsResponseBody,
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

export class GetImageRequest extends $dara.Model {
  imageCategory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * m-2ze74g5mvy4pjg*****
   */
  imageId?: string;
  imageType?: string;
  static names(): { [key: string]: string } {
    return {
      imageCategory: 'ImageCategory',
      imageId: 'ImageId',
      imageType: 'ImageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCategory: 'string',
      imageId: 'string',
      imageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBody extends $dara.Model {
  image?: GetImageResponseBodyImage;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: GetImageResponseBodyImage,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetImageResponseBody;
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
      body: GetImageResponseBody,
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

export class GetJobRequest extends $dara.Model {
  /**
   * @example
   * job-xxxx
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBody extends $dara.Model {
  jobInfo?: GetJobResponseBodyJobInfo;
  /**
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobInfo: 'JobInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfo: GetJobResponseBodyJobInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.jobInfo && typeof (this.jobInfo as any).validate === 'function') {
      (this.jobInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobResponseBody;
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
      body: GetJobResponseBody,
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

export class GetPoolRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PoolTest
   */
  poolName?: string;
  static names(): { [key: string]: string } {
    return {
      poolName: 'PoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPoolResponseBody extends $dara.Model {
  poolInfo?: GetPoolResponseBodyPoolInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      poolInfo: 'PoolInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolInfo: GetPoolResponseBodyPoolInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.poolInfo && typeof (this.poolInfo as any).validate === 'function') {
      (this.poolInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPoolResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPoolResponseBody;
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
      body: GetPoolResponseBody,
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

export class ListExecutorsRequest extends $dara.Model {
  filter?: ListExecutorsRequestFilter;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: ListExecutorsRequestFilter,
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsShrinkRequest extends $dara.Model {
  filterShrink?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filterShrink: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsResponseBody extends $dara.Model {
  executors?: ListExecutorsResponseBodyExecutors[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @example
   * 40
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      executors: 'Executors',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executors: { 'type': 'array', 'itemType': ListExecutorsResponseBodyExecutors },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.executors)) {
      $dara.Model.validateArray(this.executors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExecutorsResponseBody;
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
      body: ListExecutorsResponseBody,
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

export class ListImagesRequest extends $dara.Model {
  imageCategory?: string;
  imageIds?: string[];
  imageNames?: string[];
  imageType?: string;
  mode?: string;
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
  static names(): { [key: string]: string } {
    return {
      imageCategory: 'ImageCategory',
      imageIds: 'ImageIds',
      imageNames: 'ImageNames',
      imageType: 'ImageType',
      mode: 'Mode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCategory: 'string',
      imageIds: { 'type': 'array', 'itemType': 'string' },
      imageNames: { 'type': 'array', 'itemType': 'string' },
      imageType: 'string',
      mode: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.imageIds)) {
      $dara.Model.validateArray(this.imageIds);
    }
    if(Array.isArray(this.imageNames)) {
      $dara.Model.validateArray(this.imageNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesShrinkRequest extends $dara.Model {
  imageCategory?: string;
  imageIdsShrink?: string;
  imageNamesShrink?: string;
  imageType?: string;
  mode?: string;
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
  static names(): { [key: string]: string } {
    return {
      imageCategory: 'ImageCategory',
      imageIdsShrink: 'ImageIds',
      imageNamesShrink: 'ImageNames',
      imageType: 'ImageType',
      mode: 'Mode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCategory: 'string',
      imageIdsShrink: 'string',
      imageNamesShrink: 'string',
      imageType: 'string',
      mode: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBody extends $dara.Model {
  images?: ListImagesResponseBodyImages[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListImagesResponseBodyImages },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListImagesResponseBody;
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
      body: ListImagesResponseBody,
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

export class ListJobExecutorsRequest extends $dara.Model {
  /**
   * @example
   * job-xxx
   */
  jobId?: string;
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
   * task0
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutorsResponseBody extends $dara.Model {
  executorStatus?: ListJobExecutorsResponseBodyExecutorStatus;
  executors?: ListJobExecutorsResponseBodyExecutors[];
  /**
   * @example
   * job-xxxx
   */
  jobId?: string;
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
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @example
   * task0
   */
  taskName?: string;
  /**
   * @example
   * 50
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      executorStatus: 'ExecutorStatus',
      executors: 'Executors',
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      taskName: 'TaskName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorStatus: ListJobExecutorsResponseBodyExecutorStatus,
      executors: { 'type': 'array', 'itemType': ListJobExecutorsResponseBodyExecutors },
      jobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      taskName: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.executorStatus && typeof (this.executorStatus as any).validate === 'function') {
      (this.executorStatus as any).validate();
    }
    if(Array.isArray(this.executors)) {
      $dara.Model.validateArray(this.executors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutorsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobExecutorsResponseBody;
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
      body: ListJobExecutorsResponseBody,
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

export class ListJobsRequest extends $dara.Model {
  filter?: ListJobsRequestFilter;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  sortBy?: ListJobsRequestSortBy;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: ListJobsRequestFilter,
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: ListJobsRequestSortBy,
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(this.sortBy && typeof (this.sortBy as any).validate === 'function') {
      (this.sortBy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsShrinkRequest extends $dara.Model {
  filterShrink?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  sortByShrink?: string;
  static names(): { [key: string]: string } {
    return {
      filterShrink: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortByShrink: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortByShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $dara.Model {
  jobList?: ListJobsResponseBodyJobList[];
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
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: { 'type': 'array', 'itemType': ListJobsResponseBodyJobList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobList)) {
      $dara.Model.validateArray(this.jobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobsResponseBody;
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
      body: ListJobsResponseBody,
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

export class ListPoolsRequest extends $dara.Model {
  filter?: ListPoolsRequestFilter;
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
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: ListPoolsRequestFilter,
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoolsShrinkRequest extends $dara.Model {
  filterShrink?: string;
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
  static names(): { [key: string]: string } {
    return {
      filterShrink: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoolsResponseBody extends $dara.Model {
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
  poolList?: ListPoolsResponseBodyPoolList[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      poolList: 'PoolList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      poolList: { 'type': 'array', 'itemType': ListPoolsResponseBodyPoolList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.poolList)) {
      $dara.Model.validateArray(this.poolList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoolsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPoolsResponseBody;
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
      body: ListPoolsResponseBody,
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
   * @example
   * 20
   */
  maxResult?: number;
  /**
   * @example
   * 1d2db86scXXXXXXXXXX
   */
  nextToken?: string;
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Job
   */
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResult: 'number',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 1d2db86scXXXXXXXXXX
   */
  nextToken?: string;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
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

  validate() {
    if(this.tagResources && typeof (this.tagResources as any).validate === 'function') {
      (this.tagResources as any).validate();
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

export class RemoveImageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * m-bp14wakr1rkxtb******
   */
  imageId?: string;
  imageType?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageType: 'ImageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageResponseBody extends $dara.Model {
  /**
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveImageResponseBody;
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
      body: RemoveImageResponseBody,
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
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Job
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
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

export class UnTagResourcesRequest extends $dara.Model {
  /**
   * @example
   * False
   */
  all?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Job
   */
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
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

export class UnTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnTagResourcesResponseBody;
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
      body: UnTagResourcesResponseBody,
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

export class UpdatePoolRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PoolTest
   */
  poolName?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  resourceLimits?: UpdatePoolRequestResourceLimits;
  static names(): { [key: string]: string } {
    return {
      poolName: 'PoolName',
      priority: 'Priority',
      resourceLimits: 'ResourceLimits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolName: 'string',
      priority: 'number',
      resourceLimits: UpdatePoolRequestResourceLimits,
    };
  }

  validate() {
    if(this.resourceLimits && typeof (this.resourceLimits as any).validate === 'function') {
      (this.resourceLimits as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePoolShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PoolTest
   */
  poolName?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  resourceLimitsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      poolName: 'PoolName',
      priority: 'Priority',
      resourceLimitsShrink: 'ResourceLimits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolName: 'string',
      priority: 'number',
      resourceLimitsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
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

export class UpdatePoolResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePoolResponseBody;
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
      body: UpdatePoolResponseBody,
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
    this._endpoint = this.getEndpoint("ehpcinstant", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加托管侧用户自定义镜像
   * 
   * @param tmpReq - AddImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddImageResponse
   */
  async addImageWithOptions(tmpReq: AddImageRequest, runtime: $dara.RuntimeOptions): Promise<AddImageResponse> {
    tmpReq.validate();
    let request = new AddImageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.containerImageSpec)) {
      request.containerImageSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.containerImageSpec, "ContainerImageSpec", "json");
    }

    if (!$dara.isNull(tmpReq.VMImageSpec)) {
      request.VMImageSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.VMImageSpec, "VMImageSpec", "json");
    }

    let query = { };
    if (!$dara.isNull(request.containerImageSpecShrink)) {
      query["ContainerImageSpec"] = request.containerImageSpecShrink;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!$dara.isNull(request.imageVersion)) {
      query["ImageVersion"] = request.imageVersion;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.VMImageSpecShrink)) {
      query["VMImageSpec"] = request.VMImageSpecShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddImage",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddImageResponse>(await this.callApi(params, req, runtime), new AddImageResponse({}));
    } else {
      return $dara.cast<AddImageResponse>(await this.execute(params, req, runtime), new AddImageResponse({}));
    }

  }

  /**
   * 添加托管侧用户自定义镜像
   * 
   * @param request - AddImageRequest
   * @returns AddImageResponse
   */
  async addImage(request: AddImageRequest): Promise<AddImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addImageWithOptions(request, runtime);
  }

  /**
   * 提交任务
   * 
   * @param tmpReq - CreateJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobResponse
   */
  async createJobWithOptions(tmpReq: CreateJobRequest, runtime: $dara.RuntimeOptions): Promise<CreateJobResponse> {
    tmpReq.validate();
    let request = new CreateJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deploymentPolicy)) {
      request.deploymentPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deploymentPolicy, "DeploymentPolicy", "json");
    }

    if (!$dara.isNull(tmpReq.securityPolicy)) {
      request.securityPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.securityPolicy, "SecurityPolicy", "json");
    }

    if (!$dara.isNull(tmpReq.tasks)) {
      request.tasksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tasks, "Tasks", "json");
    }

    let query = { };
    if (!$dara.isNull(request.deploymentPolicyShrink)) {
      query["DeploymentPolicy"] = request.deploymentPolicyShrink;
    }

    if (!$dara.isNull(request.jobDescription)) {
      query["JobDescription"] = request.jobDescription;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.jobScheduler)) {
      query["JobScheduler"] = request.jobScheduler;
    }

    if (!$dara.isNull(request.securityPolicyShrink)) {
      query["SecurityPolicy"] = request.securityPolicyShrink;
    }

    if (!$dara.isNull(request.tasksShrink)) {
      query["Tasks"] = request.tasksShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJob",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateJobResponse>(await this.callApi(params, req, runtime), new CreateJobResponse({}));
    } else {
      return $dara.cast<CreateJobResponse>(await this.execute(params, req, runtime), new CreateJobResponse({}));
    }

  }

  /**
   * 提交任务
   * 
   * @param request - CreateJobRequest
   * @returns CreateJobResponse
   */
  async createJob(request: CreateJobRequest): Promise<CreateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createJobWithOptions(request, runtime);
  }

  /**
   * 创建资源池
   * 
   * @param tmpReq - CreatePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePoolResponse
   */
  async createPoolWithOptions(tmpReq: CreatePoolRequest, runtime: $dara.RuntimeOptions): Promise<CreatePoolResponse> {
    tmpReq.validate();
    let request = new CreatePoolShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceLimits)) {
      request.resourceLimitsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceLimits, "ResourceLimits", "json");
    }

    let query = { };
    if (!$dara.isNull(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.resourceLimitsShrink)) {
      query["ResourceLimits"] = request.resourceLimitsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePool",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePoolResponse>(await this.callApi(params, req, runtime), new CreatePoolResponse({}));
    } else {
      return $dara.cast<CreatePoolResponse>(await this.execute(params, req, runtime), new CreatePoolResponse({}));
    }

  }

  /**
   * 创建资源池
   * 
   * @param request - CreatePoolRequest
   * @returns CreatePoolResponse
   */
  async createPool(request: CreatePoolRequest): Promise<CreatePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPoolWithOptions(request, runtime);
  }

  /**
   * 删除作业
   * 
   * @param tmpReq - DeleteJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteJobsResponse
   */
  async deleteJobsWithOptions(tmpReq: DeleteJobsRequest, runtime: $dara.RuntimeOptions): Promise<DeleteJobsResponse> {
    tmpReq.validate();
    let request = new DeleteJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.executorIds)) {
      request.executorIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executorIds, "ExecutorIds", "json");
    }

    if (!$dara.isNull(tmpReq.jobSpec)) {
      request.jobSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobSpec, "JobSpec", "json");
    }

    let query = { };
    if (!$dara.isNull(request.executorIdsShrink)) {
      query["ExecutorIds"] = request.executorIdsShrink;
    }

    if (!$dara.isNull(request.jobSpecShrink)) {
      query["JobSpec"] = request.jobSpecShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteJobs",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteJobsResponse>(await this.callApi(params, req, runtime), new DeleteJobsResponse({}));
    } else {
      return $dara.cast<DeleteJobsResponse>(await this.execute(params, req, runtime), new DeleteJobsResponse({}));
    }

  }

  /**
   * 删除作业
   * 
   * @param request - DeleteJobsRequest
   * @returns DeleteJobsResponse
   */
  async deleteJobs(request: DeleteJobsRequest): Promise<DeleteJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteJobsWithOptions(request, runtime);
  }

  /**
   * 删除资源池
   * 
   * @param request - DeletePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePoolResponse
   */
  async deletePoolWithOptions(request: DeletePoolRequest, runtime: $dara.RuntimeOptions): Promise<DeletePoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePool",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePoolResponse>(await this.callApi(params, req, runtime), new DeletePoolResponse({}));
    } else {
      return $dara.cast<DeletePoolResponse>(await this.execute(params, req, runtime), new DeletePoolResponse({}));
    }

  }

  /**
   * 删除资源池
   * 
   * @param request - DeletePoolRequest
   * @returns DeletePoolResponse
   */
  async deletePool(request: DeletePoolRequest): Promise<DeletePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePoolWithOptions(request, runtime);
  }

  /**
   * 查询作业性能数据
   * 
   * @param tmpReq - DescribeJobMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJobMetricDataResponse
   */
  async describeJobMetricDataWithOptions(tmpReq: DescribeJobMetricDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeJobMetricDataResponse> {
    tmpReq.validate();
    let request = new DescribeJobMetricDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.arrayIndex)) {
      request.arrayIndexShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.arrayIndex, "ArrayIndex", "json");
    }

    let query = { };
    if (!$dara.isNull(request.arrayIndexShrink)) {
      query["ArrayIndex"] = request.arrayIndexShrink;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeJobMetricData",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeJobMetricDataResponse>(await this.callApi(params, req, runtime), new DescribeJobMetricDataResponse({}));
    } else {
      return $dara.cast<DescribeJobMetricDataResponse>(await this.execute(params, req, runtime), new DescribeJobMetricDataResponse({}));
    }

  }

  /**
   * 查询作业性能数据
   * 
   * @param request - DescribeJobMetricDataRequest
   * @returns DescribeJobMetricDataResponse
   */
  async describeJobMetricData(request: DescribeJobMetricDataRequest): Promise<DescribeJobMetricDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeJobMetricDataWithOptions(request, runtime);
  }

  /**
   * 查询作业即时监控项
   * 
   * @param tmpReq - DescribeJobMetricLastRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJobMetricLastResponse
   */
  async describeJobMetricLastWithOptions(tmpReq: DescribeJobMetricLastRequest, runtime: $dara.RuntimeOptions): Promise<DescribeJobMetricLastResponse> {
    tmpReq.validate();
    let request = new DescribeJobMetricLastShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.arrayIndex)) {
      request.arrayIndexShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.arrayIndex, "ArrayIndex", "json");
    }

    let query = { };
    if (!$dara.isNull(request.arrayIndexShrink)) {
      query["ArrayIndex"] = request.arrayIndexShrink;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeJobMetricLast",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeJobMetricLastResponse>(await this.callApi(params, req, runtime), new DescribeJobMetricLastResponse({}));
    } else {
      return $dara.cast<DescribeJobMetricLastResponse>(await this.execute(params, req, runtime), new DescribeJobMetricLastResponse({}));
    }

  }

  /**
   * 查询作业即时监控项
   * 
   * @param request - DescribeJobMetricLastRequest
   * @returns DescribeJobMetricLastResponse
   */
  async describeJobMetricLast(request: DescribeJobMetricLastRequest): Promise<DescribeJobMetricLastResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeJobMetricLastWithOptions(request, runtime);
  }

  /**
   * 查看应用版本列表
   * 
   * @param request - GetAppVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppVersionsResponse
   */
  async getAppVersionsWithOptions(request: GetAppVersionsRequest, runtime: $dara.RuntimeOptions): Promise<GetAppVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.imageCategory)) {
      query["ImageCategory"] = request.imageCategory;
    }

    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppVersions",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAppVersionsResponse>(await this.callApi(params, req, runtime), new GetAppVersionsResponse({}));
    } else {
      return $dara.cast<GetAppVersionsResponse>(await this.execute(params, req, runtime), new GetAppVersionsResponse({}));
    }

  }

  /**
   * 查看应用版本列表
   * 
   * @param request - GetAppVersionsRequest
   * @returns GetAppVersionsResponse
   */
  async getAppVersions(request: GetAppVersionsRequest): Promise<GetAppVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppVersionsWithOptions(request, runtime);
  }

  /**
   * 查询托管侧镜像详情。
   * 
   * @param request - GetImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageResponse
   */
  async getImageWithOptions(request: GetImageRequest, runtime: $dara.RuntimeOptions): Promise<GetImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageCategory)) {
      query["ImageCategory"] = request.imageCategory;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImage",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetImageResponse>(await this.callApi(params, req, runtime), new GetImageResponse({}));
    } else {
      return $dara.cast<GetImageResponse>(await this.execute(params, req, runtime), new GetImageResponse({}));
    }

  }

  /**
   * 查询托管侧镜像详情。
   * 
   * @param request - GetImageRequest
   * @returns GetImageResponse
   */
  async getImage(request: GetImageRequest): Promise<GetImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageWithOptions(request, runtime);
  }

  /**
   * 查询作业详情
   * 
   * @param request - GetJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobResponse
   */
  async getJobWithOptions(request: GetJobRequest, runtime: $dara.RuntimeOptions): Promise<GetJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJob",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetJobResponse>(await this.callApi(params, req, runtime), new GetJobResponse({}));
    } else {
      return $dara.cast<GetJobResponse>(await this.execute(params, req, runtime), new GetJobResponse({}));
    }

  }

  /**
   * 查询作业详情
   * 
   * @param request - GetJobRequest
   * @returns GetJobResponse
   */
  async getJob(request: GetJobRequest): Promise<GetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobWithOptions(request, runtime);
  }

  /**
   * 查询队列详细信息
   * 
   * @param request - GetPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPoolResponse
   */
  async getPoolWithOptions(request: GetPoolRequest, runtime: $dara.RuntimeOptions): Promise<GetPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPool",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPoolResponse>(await this.callApi(params, req, runtime), new GetPoolResponse({}));
    } else {
      return $dara.cast<GetPoolResponse>(await this.execute(params, req, runtime), new GetPoolResponse({}));
    }

  }

  /**
   * 查询队列详细信息
   * 
   * @param request - GetPoolRequest
   * @returns GetPoolResponse
   */
  async getPool(request: GetPoolRequest): Promise<GetPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPoolWithOptions(request, runtime);
  }

  /**
   * 查询全局Executor信息
   * 
   * @param tmpReq - ListExecutorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExecutorsResponse
   */
  async listExecutorsWithOptions(tmpReq: ListExecutorsRequest, runtime: $dara.RuntimeOptions): Promise<ListExecutorsResponse> {
    tmpReq.validate();
    let request = new ListExecutorsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filterShrink)) {
      query["Filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExecutors",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListExecutorsResponse>(await this.callApi(params, req, runtime), new ListExecutorsResponse({}));
    } else {
      return $dara.cast<ListExecutorsResponse>(await this.execute(params, req, runtime), new ListExecutorsResponse({}));
    }

  }

  /**
   * 查询全局Executor信息
   * 
   * @param request - ListExecutorsRequest
   * @returns ListExecutorsResponse
   */
  async listExecutors(request: ListExecutorsRequest): Promise<ListExecutorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExecutorsWithOptions(request, runtime);
  }

  /**
   * 查看托管侧镜像列表
   * 
   * @param tmpReq - ListImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImagesResponse
   */
  async listImagesWithOptions(tmpReq: ListImagesRequest, runtime: $dara.RuntimeOptions): Promise<ListImagesResponse> {
    tmpReq.validate();
    let request = new ListImagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.imageIds)) {
      request.imageIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageIds, "ImageIds", "json");
    }

    if (!$dara.isNull(tmpReq.imageNames)) {
      request.imageNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageNames, "ImageNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.imageCategory)) {
      query["ImageCategory"] = request.imageCategory;
    }

    if (!$dara.isNull(request.imageIdsShrink)) {
      query["ImageIds"] = request.imageIdsShrink;
    }

    if (!$dara.isNull(request.imageNamesShrink)) {
      query["ImageNames"] = request.imageNamesShrink;
    }

    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImages",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListImagesResponse>(await this.callApi(params, req, runtime), new ListImagesResponse({}));
    } else {
      return $dara.cast<ListImagesResponse>(await this.execute(params, req, runtime), new ListImagesResponse({}));
    }

  }

  /**
   * 查看托管侧镜像列表
   * 
   * @param request - ListImagesRequest
   * @returns ListImagesResponse
   */
  async listImages(request: ListImagesRequest): Promise<ListImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImagesWithOptions(request, runtime);
  }

  /**
   * 查询作业Executor信息
   * 
   * @param request - ListJobExecutorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobExecutorsResponse
   */
  async listJobExecutorsWithOptions(request: ListJobExecutorsRequest, runtime: $dara.RuntimeOptions): Promise<ListJobExecutorsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobExecutors",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListJobExecutorsResponse>(await this.callApi(params, req, runtime), new ListJobExecutorsResponse({}));
    } else {
      return $dara.cast<ListJobExecutorsResponse>(await this.execute(params, req, runtime), new ListJobExecutorsResponse({}));
    }

  }

  /**
   * 查询作业Executor信息
   * 
   * @param request - ListJobExecutorsRequest
   * @returns ListJobExecutorsResponse
   */
  async listJobExecutors(request: ListJobExecutorsRequest): Promise<ListJobExecutorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobExecutorsWithOptions(request, runtime);
  }

  /**
   * 查询作业列表
   * 
   * @param tmpReq - ListJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(tmpReq: ListJobsRequest, runtime: $dara.RuntimeOptions): Promise<ListJobsResponse> {
    tmpReq.validate();
    let request = new ListJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    if (!$dara.isNull(tmpReq.sortBy)) {
      request.sortByShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sortBy, "SortBy", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filterShrink)) {
      query["Filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortByShrink)) {
      query["SortBy"] = request.sortByShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobs",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
    } else {
      return $dara.cast<ListJobsResponse>(await this.execute(params, req, runtime), new ListJobsResponse({}));
    }

  }

  /**
   * 查询作业列表
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  /**
   * 查询资源池列表
   * 
   * @param tmpReq - ListPoolsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoolsResponse
   */
  async listPoolsWithOptions(tmpReq: ListPoolsRequest, runtime: $dara.RuntimeOptions): Promise<ListPoolsResponse> {
    tmpReq.validate();
    let request = new ListPoolsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filterShrink)) {
      query["Filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPools",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPoolsResponse>(await this.callApi(params, req, runtime), new ListPoolsResponse({}));
    } else {
      return $dara.cast<ListPoolsResponse>(await this.execute(params, req, runtime), new ListPoolsResponse({}));
    }

  }

  /**
   * 查询资源池列表
   * 
   * @param request - ListPoolsRequest
   * @returns ListPoolsResponse
   */
  async listPools(request: ListPoolsRequest): Promise<ListPoolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoolsWithOptions(request, runtime);
  }

  /**
   * 查询一个或多个资源已经绑定的标签列表
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $dara.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * 查询一个或多个资源已经绑定的标签列表
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 移除托管侧镜像信息。
   * 
   * @param request - RemoveImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveImageResponse
   */
  async removeImageWithOptions(request: RemoveImageRequest, runtime: $dara.RuntimeOptions): Promise<RemoveImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveImage",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveImageResponse>(await this.callApi(params, req, runtime), new RemoveImageResponse({}));
    } else {
      return $dara.cast<RemoveImageResponse>(await this.execute(params, req, runtime), new RemoveImageResponse({}));
    }

  }

  /**
   * 移除托管侧镜像信息。
   * 
   * @param request - RemoveImageRequest
   * @returns RemoveImageResponse
   */
  async removeImage(request: RemoveImageRequest): Promise<RemoveImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeImageWithOptions(request, runtime);
  }

  /**
   * 为指定的资源列表统一创建并绑定标签
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $dara.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
   * 为指定的资源列表统一创建并绑定标签
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * 为指定的ECS资源列表统一解绑标签
   * 
   * @param request - UnTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnTagResourcesResponse
   */
  async unTagResourcesWithOptions(request: UnTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UnTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnTagResources",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UnTagResourcesResponse>(await this.callApi(params, req, runtime), new UnTagResourcesResponse({}));
    } else {
      return $dara.cast<UnTagResourcesResponse>(await this.execute(params, req, runtime), new UnTagResourcesResponse({}));
    }

  }

  /**
   * 为指定的ECS资源列表统一解绑标签
   * 
   * @param request - UnTagResourcesRequest
   * @returns UnTagResourcesResponse
   */
  async unTagResources(request: UnTagResourcesRequest): Promise<UnTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unTagResourcesWithOptions(request, runtime);
  }

  /**
   * 更新资源池
   * 
   * @param tmpReq - UpdatePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePoolResponse
   */
  async updatePoolWithOptions(tmpReq: UpdatePoolRequest, runtime: $dara.RuntimeOptions): Promise<UpdatePoolResponse> {
    tmpReq.validate();
    let request = new UpdatePoolShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceLimits)) {
      request.resourceLimitsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceLimits, "ResourceLimits", "json");
    }

    let query = { };
    if (!$dara.isNull(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.resourceLimitsShrink)) {
      query["ResourceLimits"] = request.resourceLimitsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePool",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdatePoolResponse>(await this.callApi(params, req, runtime), new UpdatePoolResponse({}));
    } else {
      return $dara.cast<UpdatePoolResponse>(await this.execute(params, req, runtime), new UpdatePoolResponse({}));
    }

  }

  /**
   * 更新资源池
   * 
   * @param request - UpdatePoolRequest
   * @returns UpdatePoolResponse
   */
  async updatePool(request: UpdatePoolRequest): Promise<UpdatePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePoolWithOptions(request, runtime);
  }

}
