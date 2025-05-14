// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateInstanceRequestAffinity } from "./CreateInstanceRequestAffinity";
import { CreateInstanceRequestCloudDisks } from "./CreateInstanceRequestCloudDisks";
import { CredentialConfig } from "./CredentialConfig";
import { CreateInstanceRequestDatasets } from "./CreateInstanceRequestDatasets";
import { DynamicMount } from "./DynamicMount";
import { CreateInstanceRequestLabels } from "./CreateInstanceRequestLabels";
import { CreateInstanceRequestRequestedResource } from "./CreateInstanceRequestRequestedResource";
import { CreateInstanceRequestTag } from "./CreateInstanceRequestTag";
import { CreateInstanceRequestUserVpc } from "./CreateInstanceRequestUserVpc";


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance accessibility.
   * 
   * Valid values:
   * 
   * *   PUBLIC: The instances are accessible to all members in the workspace.
   * *   PRIVATE: The instances are accessible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The affinity configuration.
   */
  affinity?: CreateInstanceRequestAffinity;
  /**
   * @remarks
   * The cloud disks.
   * 
   * @example
   * []
   */
  cloudDisks?: CreateInstanceRequestCloudDisks[];
  /**
   * @remarks
   * The credential configuration.
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The datasets.
   */
  datasets?: CreateInstanceRequestDatasets[];
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
   * The Base64-encoded account and password for the user\\"s private image. The password will be hidden.
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
   * The instance name. The name must meet the following requirements:
   * 
   * *   The name can contain only letters, digits, and underscores (_).
   * *   The name can be up to 27 characters in length.
   * 
   * @example
   * training_data
   */
  instanceName?: string;
  /**
   * @remarks
   * The custom labels.
   * 
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: CreateInstanceRequestLabels[];
  /**
   * @remarks
   * The priority based on which resources are allocated to instances. Valid values: 1 to 9.
   * 
   * *   1: the lowest priority.
   * *   9: the highest priority.
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
  requestedResource?: CreateInstanceRequestRequestedResource;
  /**
   * @remarks
   * The ID of the resource group. This parameter is configured during prepayment. For information about how to create a dedicated resource group, see [Create a dedicated resource group and purchase general computing resources](https://help.aliyun.com/document_detail/202827.html).
   * 
   * @example
   * dsw-123456789
   */
  resourceId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateInstanceRequestTag[];
  /**
   * @remarks
   * The ID of the instance owner. Valid values: Alibaba Cloud account and RAM user.
   * 
   * @example
   * 161228528250****
   */
  userId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) configurations.
   */
  userVpc?: CreateInstanceRequestUserVpc;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * @example
   * 40823
   */
  workspaceId?: string;
  /**
   * @remarks
   * The storage corresponding to the working directory. You can mount disks or datasets to /mnt/workspace at the same time. OSS datasets and dynamically mounted datasets are not supported.
   * 
   * Valid values:
   * 
   * *   rootfsCloudDisk: Mount the disk to the working directory.
   * *   Mount path of the dataset, such as /mnt/data: Datasets in URI format only support this method.
   * *   Dataset ID, such as d-vsqjvs\\*\\*\\*\\*rp5l206u: If a single dataset is mounted to multiple paths, the first path is selected. We recommend that you do not use this method, use the mount path instead.
   * 
   * If you leave this parameter empty:
   * 
   * *   If the instance uses cloud disks, cloud disks are selected by default.
   * *   if no cloud disks are available, the first NAS or CPFS dataset is selected as the working directory.
   * *   If no cloud disks, and NAS or CPFS datasets are available, the host space is used.
   * 
   * @example
   * rootfsCloudDisk
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
      dynamicMount: 'DynamicMount',
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
      tag: 'Tag',
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
      dynamicMount: DynamicMount,
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
      tag: { 'type': 'array', 'itemType': CreateInstanceRequestTag },
      userId: 'string',
      userVpc: CreateInstanceRequestUserVpc,
      workspaceId: 'string',
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
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.requestedResource && typeof (this.requestedResource as any).validate === 'function') {
      (this.requestedResource as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
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

