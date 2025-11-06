// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageBuildRequestBuildConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PackageInstallation
   */
  buildType?: string;
  /**
   * @remarks
   * Dockerfile文件内容
   * 
   * This parameter is required.
   * 
   * @example
   * FROM ubuntu:18:04
   * RUN pip3 install numpy==1.19.5
   */
  dockerfile?: string;
  /**
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
   * @example
   * key1
   */
  key?: string;
  /**
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
  description?: string;
  labels?: CreateImageBuildRequestImageLabels[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-v1
   */
  name?: string;
  /**
   * @remarks
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
   * @example
   * 4
   */
  CPU?: string;
  /**
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
   * 后付费资源规格
   * 
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  resourceConfig?: CreateImageBuildRequestResourceResourceConfig;
  /**
   * @example
   * quotaadzoqup693z
   */
  resourceId?: string;
  /**
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
   * @example
   * cri-**abcd
   */
  instanceId?: string;
  /**
   * @remarks
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
   * 默认路由网卡出口
   * 
   * @example
   * eth1
   */
  defaultRoute?: string;
  /**
   * @remarks
   * 扩展网段
   */
  extendedCidrs?: string[];
  /**
   * @remarks
   * 安全组 ID
   * 
   * @example
   * sg-abcdef**
   */
  securityGroupId?: string;
  /**
   * @remarks
   * 交换机 ID
   * 
   * @example
   * vs-abcdef**
   */
  switchId?: string;
  /**
   * @remarks
   * 专有网络 ID
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
  clientToken?: string;
  /**
   * @remarks
   * 镜像构建的可见性，可能值： - PUBLIC：当前工作空间所有成员都可以操作。 - PRIVATE：只有创建者可以操作。
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * 构建配置，指定待构建的 Dockerfile 文件内容。
   * 
   * This parameter is required.
   */
  buildConfig?: CreateImageBuildRequestBuildConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  image?: CreateImageBuildRequestImage;
  /**
   * @example
   * build-my-image
   */
  imageBuildJobName?: string;
  /**
   * @remarks
   * 是否覆盖更新 ACR 镜像仓库中已存在的镜像 tag。
   */
  overwriteImageTag?: boolean;
  /**
   * @remarks
   * 代表region的资源属性字段
   */
  regionId?: string;
  /**
   * @remarks
   * 构建任务运行资源
   * 
   * This parameter is required.
   */
  resource?: CreateImageBuildRequestResource;
  /**
   * @remarks
   * This parameter is required.
   */
  targetRegistry?: CreateImageBuildRequestTargetRegistry;
  /**
   * @remarks
   * 用户专有网络信息。使用企业版 ACR 实例时，此参数必填，指定在用户 ACR 实例的访问控制里已添加的专有网络。
   */
  userVpc?: CreateImageBuildRequestUserVpc;
  /**
   * @remarks
   * 镜像构建所属的工作空间ID。
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

