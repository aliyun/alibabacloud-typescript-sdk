// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateArtifactRequestArtifactBuildPropertyBuildArgs extends $dara.Model {
  /**
   * @remarks
   * The name of the build argument.
   * 
   * @example
   * ENV
   */
  argumentName?: string;
  /**
   * @remarks
   * The value of the build argument.
   * 
   * @example
   * nginx:latest
   */
  argumentValue?: string;
  static names(): { [key: string]: string } {
    return {
      argumentName: 'ArgumentName',
      argumentValue: 'ArgumentValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argumentName: 'string',
      argumentValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactRequestArtifactBuildPropertyCodeRepo extends $dara.Model {
  /**
   * @remarks
   * The branch name of the code repository.
   * 
   * @example
   * main
   */
  branch?: string;
  /**
   * @remarks
   * The endpoint. This parameter is required for a private GitLab deployment.
   * 
   * @example
   * http://121.40.25.0
   */
  endpoint?: string;
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * 455231
   */
  orgId?: string;
  /**
   * @remarks
   * The owner of the code repository.
   * 
   * > This parameter is required only if the code repository is private.
   * 
   * @example
   * aliyun-computenest
   */
  owner?: string;
  /**
   * @remarks
   * The platform of the code repository. Valid values:
   * 
   * - github
   * 
   * - gitee
   * 
   * - gitlab
   * 
   * - codeup
   * 
   * @example
   * github
   */
  platform?: string;
  /**
   * @remarks
   * The repository ID.
   * 
   * @example
   * 103
   */
  repoId?: number;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * aliyun-computenest/quickstart-Lobexxx
   */
  repoName?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      endpoint: 'Endpoint',
      orgId: 'OrgId',
      owner: 'Owner',
      platform: 'Platform',
      repoId: 'RepoId',
      repoName: 'RepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      endpoint: 'string',
      orgId: 'string',
      owner: 'string',
      platform: 'string',
      repoId: 'number',
      repoName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactRequestArtifactBuildProperty extends $dara.Model {
  /**
   * @remarks
   * The build arguments.
   * 
   * > This parameter is available only when \\`ArtifactBuildType\\` is set to \\`Dockerfile\\`.
   */
  buildArgs?: UpdateArtifactRequestArtifactBuildPropertyBuildArgs[];
  /**
   * @remarks
   * The code repository address.
   * 
   * > This parameter is available only when \\`ArtifactBuildType\\` is set to \\`Dockerfile\\` or \\`Buildpacks\\`.
   */
  codeRepo?: UpdateArtifactRequestArtifactBuildPropertyCodeRepo;
  /**
   * @remarks
   * The content of the command.
   * 
   * > This parameter is available only for ECS image artifacts.
   * 
   * @example
   * echo "start run command"
   */
  commandContent?: string;
  /**
   * @remarks
   * The command type. Valid values:
   * 
   * - RunBatScript: The command is a batch script that runs on a Windows instance.
   * 
   * - RunPowerShellScript: The command is a PowerShell script that runs on a Windows instance.
   * 
   * - RunShellScript: The command is a shell script that runs on a Linux instance.
   * 
   * > This parameter is available only for ECS image artifacts.
   * 
   * @example
   * RunShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The relative path of the Dockerfile in the code repository.
   * 
   * Default value: Dockerfile
   * 
   * > This parameter is available only when \\`ArtifactBuildType\\` is set to \\`Dockerfile\\`.
   * 
   * @example
   * ./file/Dockerfile
   */
  dockerfilePath?: string;
  /**
   * @remarks
   * Specifies whether to use a GPU-accelerated instance for the build. By default, a CPU instance is used.
   * 
   * @example
   * false
   */
  enableGpu?: boolean;
  /**
   * @remarks
   * The ID of the region where the source image is located.
   * 
   * > This parameter is available only for ECS image artifacts.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The pull URL of the source container image.
   * 
   * Used for \\`docker pull ${SourceContainerImage}\\`.
   * 
   * > This parameter is available only when \\`ArtifactBuildType\\` is set to \\`ContainerImage\\`.
   * 
   * @example
   * pytorch/pytorch:2.5.1-cuda12.4-cudnn9-devel
   */
  sourceContainerImage?: string;
  /**
   * @remarks
   * The source image ID. The following types are supported:
   * 
   * - Image ID: The ID of the ECS image.
   * 
   * - OOS common parameter name: The system automatically obtains the corresponding image ID based on the OOS common parameter name.
   * 
   * > This parameter is available only for ECS image artifacts.
   * 
   * @example
   * Image ID: m-t4nhenrdc38pe4*****
   * ubuntu_22_04_x64_20G_alibase_20240926.vhd
   * OOS public parameter name: aliyun/services/computenest/images/aliyun_3_2104_python_3_11
   */
  sourceImageId?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      buildArgs: 'BuildArgs',
      codeRepo: 'CodeRepo',
      commandContent: 'CommandContent',
      commandType: 'CommandType',
      dockerfilePath: 'DockerfilePath',
      enableGpu: 'EnableGpu',
      regionId: 'RegionId',
      sourceContainerImage: 'SourceContainerImage',
      sourceImageId: 'SourceImageId',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildArgs: { 'type': 'array', 'itemType': UpdateArtifactRequestArtifactBuildPropertyBuildArgs },
      codeRepo: UpdateArtifactRequestArtifactBuildPropertyCodeRepo,
      commandContent: 'string',
      commandType: 'string',
      dockerfilePath: 'string',
      enableGpu: 'boolean',
      regionId: 'string',
      sourceContainerImage: 'string',
      sourceImageId: 'string',
      systemDiskSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.buildArgs)) {
      $dara.Model.validateArray(this.buildArgs);
    }
    if(this.codeRepo && typeof (this.codeRepo as any).validate === 'function') {
      (this.codeRepo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactRequestArtifactProperty extends $dara.Model {
  /**
   * @remarks
   * The code of the Alibaba Cloud Marketplace product.
   * 
   * You can obtain the product code in the [Alibaba Cloud Marketplace console](https://market.console.aliyun.com/?spm=a2c4g.11186623.0.0.599d6787eMBBxu#/apiTools?_k=d7j8gk).
   * 
   * > This parameter is available only for image artifacts.
   * 
   * @example
   * cmjj00****
   */
  commodityCode?: string;
  /**
   * @remarks
   * The version of the Alibaba Cloud Marketplace product.
   * 
   * You can view the product version on the [Alibaba Cloud Marketplace page](https://market.aliyun.com/?spm=5176.24779694.0.0.b2144d22sksKM5).
   * 
   * > This parameter is available only for image artifacts.
   * 
   * @example
   * V1.0
   */
  commodityVersion?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * After you specify a region ID, call the [DescribeImages](https://help.aliyun.com/document_detail/2679797.html) operation to query available image IDs in that region.
   * 
   * > This parameter is available only for image artifacts.
   * 
   * @example
   * m-0xij191j9cuev6uc****
   */
  imageId?: string;
  /**
   * @remarks
   * The region of the image.
   * 
   * > This parameter is available only for image artifacts.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * To obtain the image repository ID, call the [ListAcrImageRepositories](https://help.aliyun.com/document_detail/2539919.html) operation.
   * 
   * > This parameter is available only for container image artifacts and Helm Chart artifacts.
   * 
   * @example
   * crr-d8o1nponyc2t****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * > This parameter is available only for container image artifacts and Helm Chart artifacts.
   * 
   * @example
   * wordpress
   */
  repoName?: string;
  /**
   * @remarks
   * The permission type of the repository. Valid values:
   * 
   * - `Public`: public repository
   * 
   * - `Private`: private repository
   * 
   * > This parameter is available only for container image artifacts and Helm Chart artifacts.
   * 
   * @example
   * Public
   */
  repoType?: string;
  /**
   * @remarks
   * The version tag of the image in the repository.
   * 
   * To obtain the version tag, call the [ListAcrImageTags](https://help.aliyun.com/document_detail/2539920.html) operation.
   * 
   * > This parameter is available only for container image artifacts and Helm Chart artifacts.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The URL of the file artifact.
   * 
   * You can upload the file and obtain its URL in the [Object Storage Service console](https://oss.console.aliyun.com/bucket).
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityVersion: 'CommodityVersion',
      imageId: 'ImageId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoType: 'RepoType',
      tag: 'Tag',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityVersion: 'string',
      imageId: 'string',
      regionId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoType: 'string',
      tag: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactRequest extends $dara.Model {
  /**
   * @remarks
   * The properties for building the artifact. This is used for managed artifact builds.
   */
  artifactBuildProperty?: UpdateArtifactRequestArtifactBuildProperty;
  /**
   * @remarks
   * The ID of the artifact.
   * 
   * To obtain the artifact ID, call the [ListArtifacts](https://help.aliyun.com/document_detail/469993.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-eea08d1e2d3a43ae****
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the artifact.
   */
  artifactProperty?: UpdateArtifactRequestArtifactProperty;
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Generate a unique token for each request from your client. The **ClientToken** can contain only ASCII characters and must be no more than 64 characters long.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the artifact.
   * 
   * @example
   * Redhat8_0 image
   */
  description?: string;
  /**
   * @remarks
   * The permission type. This parameter is valid for container image artifacts and Helm Chart artifacts. The value can be changed only from \\`Automatic\\` to \\`Public\\`. Valid values:
   * 
   * - Public
   * 
   * - Automatic
   * 
   * @example
   * Public
   */
  permissionType?: string;
  /**
   * @remarks
   * The IDs of regions to which the image can be distributed.
   */
  supportRegionIds?: string[];
  /**
   * @remarks
   * The name of the artifact version.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactBuildProperty: 'ArtifactBuildProperty',
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      clientToken: 'ClientToken',
      description: 'Description',
      permissionType: 'PermissionType',
      supportRegionIds: 'SupportRegionIds',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildProperty: UpdateArtifactRequestArtifactBuildProperty,
      artifactId: 'string',
      artifactProperty: UpdateArtifactRequestArtifactProperty,
      clientToken: 'string',
      description: 'string',
      permissionType: 'string',
      supportRegionIds: { 'type': 'array', 'itemType': 'string' },
      versionName: 'string',
    };
  }

  validate() {
    if(this.artifactBuildProperty && typeof (this.artifactBuildProperty as any).validate === 'function') {
      (this.artifactBuildProperty as any).validate();
    }
    if(this.artifactProperty && typeof (this.artifactProperty as any).validate === 'function') {
      (this.artifactProperty as any).validate();
    }
    if(Array.isArray(this.supportRegionIds)) {
      $dara.Model.validateArray(this.supportRegionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

