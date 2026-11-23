// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageBuildRequestBuildConfigDataSources extends $dara.Model {
  /**
   * @remarks
   * The ID of the dataset in the workspace. Example: d-************zbs.
   * 
   * @example
   * d-************zbs
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The dataset version. If you specify this parameter, you must also specify DataSourceId. Example: v1.
   * 
   * @example
   * v1
   */
  dataSourceVersion?: string;
  /**
   * @remarks
   * The read and write permissions. Valid values: RW (default) and RO.
   * 
   * @example
   * RO
   */
  mountAccess?: string;
  /**
   * @remarks
   * The mount path. Example: /mnt/data/.
   * 
   * @example
   * /mnt/data/
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount property for the custom dataset. Only OSS is supported. Example: {"fs.oss.download.thread.concurrency":"10"}.
   * 
   * @example
   * {"fs.oss.download.thread.concurrency":"10"}
   */
  options?: string;
  /**
   * @remarks
   * The storage path, including the endpoint. This parameter is mutually exclusive with DataSourceId. Example: OSS storage path oss://{bucket-name}.oss-{region}-internal.aliyuncs.com/{subPath}/.
   * 
   * @example
   * oss://{bucket-name}.oss-{region}-internal.aliyuncs.com/{subPath}/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      dataSourceVersion: 'DataSourceVersion',
      mountAccess: 'MountAccess',
      mountPath: 'MountPath',
      options: 'Options',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      dataSourceVersion: 'string',
      mountAccess: 'string',
      mountPath: 'string',
      options: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageBuildRequestBuildConfig extends $dara.Model {
  /**
   * @remarks
   * The build type. Valid values:
   * * **PackageInstallation**: Installs software packages based on a specified image.
   * * **CustomDockerfile**: Uses a custom Dockerfile.
   * 
   * This parameter is required.
   * 
   * @example
   * PackageInstallation
   */
  buildType?: string;
  /**
   * @remarks
   * The list of data sources.
   */
  dataSources?: CreateImageBuildRequestBuildConfigDataSources[];
  /**
   * @remarks
   * The content of the Dockerfile to be built.
   * 
   * @example
   * FROM ubuntu:18:04
   * RUN pip3 install numpy==1.19.5
   */
  dockerfile?: string;
  /**
   * @remarks
   * The Dockerfile path, which is a relative path to the mounted context path. Example: docker/Dockerfile. If the mount path is /mnt/data/, the file is located at /mnt/data/docker/Dockerfile.
   * 
   * @example
   * docker/Dockerfile
   */
  dockerfilePath?: string;
  /**
   * @remarks
   * The authentication information for private image repositories. You can specify the authentication information for an ACR image repository that does not belong to the current user. Format: {"user_registry_domain":{"Auth":"base64 encoded auth"}}.
   * 
   * @example
   * {
   *   "user-test-registry-vpc.cn-wulanchabu.cr.aliyuncs.com": {
   *     "Auth": "dXNlcjp0ZXN0"
   *   }
   * }
   */
  registryAuths?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      buildType: 'BuildType',
      dataSources: 'DataSources',
      dockerfile: 'Dockerfile',
      dockerfilePath: 'DockerfilePath',
      registryAuths: 'RegistryAuths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildType: 'string',
      dataSources: { 'type': 'array', 'itemType': CreateImageBuildRequestBuildConfigDataSources },
      dockerfile: 'string',
      dockerfilePath: 'string',
      registryAuths: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    if(this.registryAuths) {
      $dara.Model.validateMap(this.registryAuths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageBuildRequestImageLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the image label.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of the image label.
   * 
   * @example
   * value1
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

export class CreateImageBuildRequestImage extends $dara.Model {
  /**
   * @remarks
   * The image description.
   * 
   * @example
   * Build test image
   */
  description?: string;
  /**
   * @remarks
   * The image labels.
   */
  labels?: CreateImageBuildRequestImageLabels[];
  /**
   * @remarks
   * The image name. The naming rules are as follows:
   * * The name must be 1 to 50 characters in length.
   * * The name can contain lowercase letters, digits, and hyphens (-), and must start with a letter.
   * * The name must be unique within the same workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * test-v1
   */
  name?: string;
  /**
   * @remarks
   * The image URI.
   * 
   * This parameter is required.
   * 
   * @example
   * user-test-registry-vpc.cn-wulanchabu.cr.aliyuncs.com/pai-test/pai-test:test-v1
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      labels: 'Labels',
      name: 'Name',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      labels: { 'type': 'array', 'itemType': CreateImageBuildRequestImageLabels },
      name: 'string',
      uri: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageBuildRequestResourceResourceConfig extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 4
   */
  CPU?: string;
  /**
   * @remarks
   * The memory capacity.
   * 
   * @example
   * 8Gi
   */
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      memory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageBuildRequestResource extends $dara.Model {
  /**
   * @remarks
   * The pay-as-you-go resource specifications. This parameter is required when you use a public resource group.
   * 
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  /**
   * @remarks
   * The resource configuration. This parameter is required when you use subscription resources and must be left empty when you use a public resource group.
   */
  resourceConfig?: CreateImageBuildRequestResourceResourceConfig;
  /**
   * @remarks
   * The resource quota ID. This parameter applies only to subscription resources and must not be specified when you use pay-as-you-go resources.
   * 
   * @example
   * quotaadzoqup693z
   */
  resourceId?: string;
  /**
   * @remarks
   * The subscription resource type. Only Lingjun resources are supported. This parameter is required when you use subscription resources.
   * 
   * @example
   * Lingjun
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      ecsSpec: 'EcsSpec',
      resourceConfig: 'ResourceConfig',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsSpec: 'string',
      resourceConfig: CreateImageBuildRequestResourceResourceConfig,
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(this.resourceConfig && typeof (this.resourceConfig as any).validate === 'function') {
      (this.resourceConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageBuildRequestTargetRegistry extends $dara.Model {
  /**
   * @remarks
   * The registry instance ID. This parameter is required when you use Container Registry (ACR) as the image service.
   * 
   * @example
   * cri-**abcd
   */
  instanceId?: string;
  /**
   * @remarks
   * The registry type. Only Container Registry Enterprise Edition is supported as the target registry.
   * 
   * This parameter is required.
   * 
   * @example
   * AcrEnterprise
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

export class CreateImageBuildRequestUserVpc extends $dara.Model {
  /**
   * @remarks
   * The default routing of the network interface controller (NIC). Valid values:
   * * eth1: Uses the user\\"s elastic network interfaces (ENIs) to access external networks through a private NAT gateway. For the configuration method, refer to [Configure a DSW instance to access the Internet through a private NAT gateway](https://www.alibabacloud.com/help/en/pai/user-guide/configure-a-dsw-instance-to-access-the-internet-through-a-private-nat-gateway).
   * 
   * @example
   * eth1
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR blocks.
   * * If the vSwitch ID is empty, this parameter is optional and the system automatically retrieves all CIDR blocks under the VPC.
   * * If the vSwitch ID is not empty, this parameter is required. We recommend that you specify all CIDR blocks under the VPC.
   */
  extendedCidrs?: string[];
  /**
   * @remarks
   * The security group ID. This parameter is required when you specify the VPC configuration.
   * 
   * @example
   * sg-abcdef**
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID. This parameter is optional.
   * 
   * @example
   * vs-abcdef**
   */
  switchId?: string;
  /**
   * @remarks
   * The VPC ID. When the build task accesses a user\\"s Container Registry Enterprise Edition instance, you must specify a VPC that is added to the access control list of the instance.
   * 
   * @example
   * vpc-abcdef**
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRoute: 'DefaultRoute',
      extendedCidrs: 'ExtendedCidrs',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRoute: 'string',
      extendedCidrs: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
      switchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extendedCidrs)) {
      $dara.Model.validateArray(this.extendedCidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageBuildRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency parameter.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The visibility. Valid values:
   * - **PUBLIC**: Public.
   * - **PRIVATE**: Private.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * **The build configuration, which specifies the content of the Dockerfile to be built.**
   * 
   * This parameter is required.
   */
  buildConfig?: CreateImageBuildRequestBuildConfig;
  /**
   * @remarks
   * The image metadata.
   * 
   * This parameter is required.
   */
  image?: CreateImageBuildRequestImage;
  /**
   * @remarks
   * The name of the image build task.
   * 
   * @example
   * build-my-image
   */
  imageBuildJobName?: string;
  /**
   * @remarks
   * Specifies whether to overwrite the existing image version in the image repository.
   */
  overwriteImageTag?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The resources used to run the task.
   * 
   * This parameter is required.
   */
  resource?: CreateImageBuildRequestResource;
  /**
   * @remarks
   * **The target registry configuration.**
   * 
   * This parameter is required.
   */
  targetRegistry?: CreateImageBuildRequestTargetRegistry;
  /**
   * @remarks
   * The user VPC information. This parameter is required when you use a public resource group.
   */
  userVpc?: CreateImageBuildRequestUserVpc;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      accessibility: 'Accessibility',
      buildConfig: 'BuildConfig',
      image: 'Image',
      imageBuildJobName: 'ImageBuildJobName',
      overwriteImageTag: 'OverwriteImageTag',
      regionId: 'RegionId',
      resource: 'Resource',
      targetRegistry: 'TargetRegistry',
      userVpc: 'UserVpc',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      accessibility: 'string',
      buildConfig: CreateImageBuildRequestBuildConfig,
      image: CreateImageBuildRequestImage,
      imageBuildJobName: 'string',
      overwriteImageTag: 'boolean',
      regionId: 'string',
      resource: CreateImageBuildRequestResource,
      targetRegistry: CreateImageBuildRequestTargetRegistry,
      userVpc: CreateImageBuildRequestUserVpc,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.buildConfig && typeof (this.buildConfig as any).validate === 'function') {
      (this.buildConfig as any).validate();
    }
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    if(this.targetRegistry && typeof (this.targetRegistry as any).validate === 'function') {
      (this.targetRegistry as any).validate();
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

