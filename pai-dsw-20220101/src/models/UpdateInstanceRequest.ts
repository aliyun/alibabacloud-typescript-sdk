// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateInstanceRequestAffinity } from "./UpdateInstanceRequestAffinity";
import { UpdateInstanceRequestCloudDisks } from "./UpdateInstanceRequestCloudDisks";
import { CredentialConfig } from "./CredentialConfig";
import { UpdateInstanceRequestDatasets } from "./UpdateInstanceRequestDatasets";
import { DynamicMount } from "./DynamicMount";
import { UpdateInstanceRequestRequestedResource } from "./UpdateInstanceRequestRequestedResource";
import { UpdateInstanceRequestUserCommand } from "./UpdateInstanceRequestUserCommand";
import { UpdateInstanceRequestUserVpc } from "./UpdateInstanceRequestUserVpc";


export class UpdateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the instance.
   * 
   * Valid values:
   * 
   * *   PUBLIC: Accessible to all members in the workspace.
   * *   PRIVATE: Accessible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The affinity configuration.
   */
  affinity?: UpdateInstanceRequestAffinity;
  /**
   * @remarks
   * The cloud disks.
   * 
   * @example
   * []
   */
  cloudDisks?: UpdateInstanceRequestCloudDisks[];
  /**
   * @remarks
   * The credential configuration.
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The datasets.
   */
  datasets?: UpdateInstanceRequestDatasets[];
  /**
   * @remarks
   * Specifies whether to delete the credential injection information.
   * 
   * @example
   * false
   */
  disassociateCredential?: boolean;
  /**
   * @remarks
   * Specifies whether to delete the associated datasets.
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  disassociateDatasets?: boolean;
  /**
   * @remarks
   * Specifies whether to delete the NVIDIA driver configuration.
   * 
   * @example
   * false
   */
  disassociateDriver?: boolean;
  disassociateEnvironmentVariables?: boolean;
  /**
   * @remarks
   * Specifies whether to delete the associated forward information.
   * 
   * @example
   * false
   */
  disassociateForwardInfos?: boolean;
  disassociateUserCommand?: boolean;
  /**
   * @remarks
   * Specifies whether to delete the associated user VPC.
   * 
   * @example
   * false
   */
  disassociateVpc?: boolean;
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
   * The ECS instance type of the instance. You can call [ListEcsSpecs](https://help.aliyun.com/document_detail/470423.html) to obtain the ECS instance type.
   * 
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  environmentVariables?: { [key: string]: any };
  /**
   * @remarks
   * The Base64-encoded account and password for the user‘s private image. The password will be hidden.
   * 
   * @example
   * ****
   */
  imageAuth?: string;
  /**
   * @remarks
   * The image ID. You can call [ListImages](https://help.aliyun.com/document_detail/449118.html) to obtain the image ID.
   * 
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The image address. You can call [ListImages](https://help.aliyun.com/document_detail/449118.html) to obtain the image address.
   * 
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @remarks
   * The instance name. Format requirements:
   * 
   * *   The name can contain only letters, digits, and underscores (_).
   * *   The name can be up to 27 characters in length.
   * 
   * @example
   * training_data
   */
  instanceName?: string;
  oversoldType?: string;
  /**
   * @remarks
   * The priority based on which resources are allocated to instances. Valid values: 1 to 9.
   * 
   * *   1: the lowest priority.
   * *   9 is the highest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The resource configurations.
   * 
   * @example
   * {"CPU":"4","Memory":"8Gi","SharedMemory":"4Gi","GPU":"1","GPUType":"Tesla-V100-16G"}
   */
  requestedResource?: UpdateInstanceRequestRequestedResource;
  userCommand?: UpdateInstanceRequestUserCommand;
  /**
   * @remarks
   * the User ID of the instance.
   * 
   * @example
   * 16122**********
   */
  userId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) configurations.
   */
  userVpc?: UpdateInstanceRequestUserVpc;
  /**
   * @remarks
   * Specifies the storage corresponding to the working directory. You can mount disks or datasets to /mnt/workspace at the same time. OSS datasets and dynamically mounted datasets are not supported.
   * 
   * Valid values:
   * 
   * *   rootfsCloudDisk: Mount disk to the working directory.
   * *   Mount path of the dataset, such as /mnt/data: Datasets in URI format only support this method.
   * *   Dataset ID, such as d-vsqjvs\\*\\*\\*\\*rp5l206u: If a single dataset is mounted to multiple paths, the first path is selected. We recommend that you do not use this method, use the mount path instead.
   * 
   * If you leave this parameter empty:
   * 
   * *   If the instance uses cloud disks, cloud disks are selected by default.
   * *   if no disks are available, the first NAS or CPFS dataset is selected as the working directory.
   * *   If no disk, NAS, or CPFS datasets is available, the host space is used.
   * 
   * @example
   * /mnt/data
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
      disassociateEnvironmentVariables: 'DisassociateEnvironmentVariables',
      disassociateForwardInfos: 'DisassociateForwardInfos',
      disassociateUserCommand: 'DisassociateUserCommand',
      disassociateVpc: 'DisassociateVpc',
      driver: 'Driver',
      dynamicMount: 'DynamicMount',
      ecsSpec: 'EcsSpec',
      environmentVariables: 'EnvironmentVariables',
      imageAuth: 'ImageAuth',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceName: 'InstanceName',
      oversoldType: 'OversoldType',
      priority: 'Priority',
      requestedResource: 'RequestedResource',
      userCommand: 'UserCommand',
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
      disassociateEnvironmentVariables: 'boolean',
      disassociateForwardInfos: 'boolean',
      disassociateUserCommand: 'boolean',
      disassociateVpc: 'boolean',
      driver: 'string',
      dynamicMount: DynamicMount,
      ecsSpec: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      imageAuth: 'string',
      imageId: 'string',
      imageUrl: 'string',
      instanceName: 'string',
      oversoldType: 'string',
      priority: 'number',
      requestedResource: UpdateInstanceRequestRequestedResource,
      userCommand: UpdateInstanceRequestUserCommand,
      userId: 'string',
      userVpc: UpdateInstanceRequestUserVpc,
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
    if(this.requestedResource && typeof (this.requestedResource as any).validate === 'function') {
      (this.requestedResource as any).validate();
    }
    if(this.userCommand && typeof (this.userCommand as any).validate === 'function') {
      (this.userCommand as any).validate();
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

