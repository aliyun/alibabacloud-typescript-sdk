// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageBuildRequestBuildConfig extends $dara.Model {
  /**
   * @remarks
   * The build type. The following types are supported:
   * 
   * - **PackageInstallation**: Installs software packages based on a specified image.
   * 
   * - **CustomDockerfile**: Builds an image based on a custom Dockerfile.
   * 
   * This parameter is required.
   * 
   * @example
   * PackageInstallation
   */
  buildType?: string;
  /**
   * @remarks
   * The content of the Dockerfile to be built.
   * 
   * This parameter is required.
   * 
   * @example
   * FROM ubuntu:18:04
   * RUN pip3 install numpy==1.19.5
   */
  dockerfile?: string;
  /**
   * @remarks
   * The authentication information for the private image repository. You can specify the authentication information for an ACR image repository that does not belong to you. The format is \\`{"user_registry_domain":{"Auth":"base64 encoded auth"}}\\`.
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
      dockerfile: 'Dockerfile',
      registryAuths: 'RegistryAuths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildType: 'string',
      dockerfile: 'string',
      registryAuths: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
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
   * The description of the image.
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
   * The name of the image. The name must meet the following requirements:
   * 
   * - The name must be 1 to 50 characters in length.
   * 
   * - The name can contain lowercase letters, digits, and hyphens (-). It must start with a letter.
   * 
   * - The name must be unique within the same workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * test-v1
   */
  name?: string;
  /**
   * @remarks
   * The image URL.
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
   * The memory size.
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
   * The instance type of the pay-as-you-go resource. This parameter is required when you use the public resource group.
   * 
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  /**
   * @remarks
   * The resource configuration. Specify this parameter when you use subscription resources. Leave it empty when you use the public resource group.
   */
  resourceConfig?: CreateImageBuildRequestResourceResourceConfig;
  /**
   * @remarks
   * The resource quota ID. This parameter applies only to subscription resources. Do not set this parameter for pay-as-you-go resources.
   * 
   * @example
   * quotaadzoqup693z
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the subscription resource. Currently, only Lingjun resources are supported. Specify this parameter when you use subscription resources.
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
   * The ID of the image repository instance. This parameter is required when you use ACR as the image repository.
   * 
   * @example
   * cri-**abcd
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the target image repository. Only ACR Enterprise Edition is supported.
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
   * The default route.
   * 
   * - eth1: Indicates that the user\\"s elastic network interface (ENI) is used to access the external network through a private gateway. For more information, see [Configure a Distribution Switch (DSW) instance to access the Internet through a private NAT gateway](https://help.aliyun.com/zh/pai/user-guide/configure-a-dsw-instance-to-access-the-internet-through-a-private-nat-gateway?spm=a2c4g.11186623.0.0.3b3965f6SZWm85).
   * 
   * @example
   * eth1
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR blocks.
   * 
   * - If you do not specify a vSwitch ID, you can leave this parameter empty. The system automatically obtains all CIDR blocks of the VPC.
   * 
   * - If you specify a vSwitch ID, you must specify this parameter. For best results, include all CIDR blocks of the VPC.
   */
  extendedCidrs?: string[];
  /**
   * @remarks
   * The security group ID. This parameter is required when you configure a VPC.
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
   * The VPC ID. If the build task needs to access your ACR Enterprise Edition instance, specify a VPC that is in the access control list of the instance.
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
   * An idempotence token.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The visibility of the image.
   * 
   * - **PUBLIC**: The image is public.
   * 
   * - **PRIVATE**: The image is private.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * **The build configuration. Specify the content of the Dockerfile to be built.**
   * 
   * This parameter is required.
   */
  buildConfig?: CreateImageBuildRequestBuildConfig;
  /**
   * @remarks
   * The metadata of the image.
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
   * Specifies whether to overwrite an existing image version in the image repository.
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
   * **The configuration of the target image repository.**
   * 
   * This parameter is required.
   */
  targetRegistry?: CreateImageBuildRequestTargetRegistry;
  /**
   * @remarks
   * The information about the user\\"s virtual private cloud (VPC). This parameter is required when you use the public resource group.
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

