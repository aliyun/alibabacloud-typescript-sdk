// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactRequestArtifactBuildPropertyBuildArgs extends $dara.Model {
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

export class CreateArtifactRequestArtifactBuildPropertyCodeRepo extends $dara.Model {
  /**
   * @remarks
   * The name of the code repository branch.
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
   * > This parameter is required only when the code repository is a private repository.
   * 
   * @example
   * aliyun-computenest
   */
  owner?: string;
  /**
   * @remarks
   * The platform where the code repository is located. Valid values:
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

export class CreateArtifactRequestArtifactBuildProperty extends $dara.Model {
  /**
   * @remarks
   * The build arguments.
   * 
   * > This parameter can be set only when ArtifactBuildType is set to Dockerfile.
   */
  buildArgs?: CreateArtifactRequestArtifactBuildPropertyBuildArgs[];
  /**
   * @remarks
   * The code repository address.
   * 
   * > This parameter can be set only when ArtifactBuildType is set to Dockerfile or Buildpacks.
   */
  codeRepo?: CreateArtifactRequestArtifactBuildPropertyCodeRepo;
  /**
   * @remarks
   * The content of the command.
   * 
   * > This parameter can be set only when the artifact is an ECS image artifact.
   * 
   * @example
   * echo "start run command"
   */
  commandContent?: string;
  /**
   * @remarks
   * The command type. Valid values:
   * 
   * - RunBatScript: The command is a BAT script that runs on a Windows instance.
   * 
   * - RunPowerShellScript: The command is a PowerShell script that runs on a Windows instance.
   * 
   * - RunShellScript: The command is a shell script that runs on a Linux instance.
   * 
   * > This parameter can be set only when the artifact is an ECS image artifact.
   * 
   * @example
   * RunShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The relative address of the Dockerfile file in the code repository.
   * 
   * Default value: Dockerfile.
   * 
   * > This parameter can be set only when ArtifactBuildType is set to Dockerfile.
   * 
   * @example
   * ./file/Dockerfile
   */
  dockerfilePath?: string;
  /**
   * @remarks
   * Specifies whether to use a GPU-accelerated instance. By default, a CPU-powered instance is used.
   * 
   * @example
   * false
   */
  enableGpu?: boolean;
  /**
   * @remarks
   * The ID of the region where the source image is located.
   * 
   * > This parameter can be set only when the artifact is an ECS image artifact.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The pull address of the source container image.
   * 
   * Used for docker pull ${SourceContainerImage}.
   * 
   * > This parameter can be set only when ArtifactBuildType is set to ContainerImage.
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
   * - OOS public parameter name: The image ID is automatically obtained based on the name of the Operation Orchestration Service (OOS) public parameter.
   * 
   * > This parameter can be set only when the artifact is an ECS image artifact.
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
      buildArgs: { 'type': 'array', 'itemType': CreateArtifactRequestArtifactBuildPropertyBuildArgs },
      codeRepo: CreateArtifactRequestArtifactBuildPropertyCodeRepo,
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

export class CreateArtifactRequestArtifactProperty extends $dara.Model {
  /**
   * @remarks
   * The commodity code of the product in Alibaba Cloud Marketplace.
   * 
   * Obtain the commodity code in the [Alibaba Cloud Marketplace console](https://market.console.aliyun.com/?spm=a2c4g.11186623.0.0.599d6787eMBBxu#/apiTools?_k=d7j8gk).
   * 
   * > This parameter can be set only when the artifact is an image artifact.
   * 
   * @example
   * cmjj00****
   */
  commodityCode?: string;
  /**
   * @remarks
   * The version of the product in Alibaba Cloud Marketplace.
   * 
   * View the product version on the [Alibaba Cloud Marketplace](https://market.aliyun.com/?spm=5176.24779694.0.0.b2144d22sksKM5) page.
   * 
   * > This parameter can be set only when the artifact is an image artifact.
   * 
   * @example
   * V1.0
   */
  commodityVersion?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * After you specify a region ID, call the [DescribeImages](https://help.aliyun.com/document_detail/2679797.html) operation to view the available image IDs in the specified region.
   * 
   * > This parameter can be set only when the artifact is an image artifact.
   * 
   * @example
   * m-uf645fnsef9dsxmw****
   */
  imageId?: string;
  /**
   * @remarks
   * The region of the image.
   * 
   * > This parameter can be set only when the artifact is an image artifact.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * Call the [ListAcrImageRepositories](https://help.aliyun.com/document_detail/2539919.html) operation to obtain the image repository ID.
   * 
   * > This parameter can be set only when the artifact is a container image artifact or a Helm chart artifact.
   * 
   * @example
   * crr-d8o1nponyc2t****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * > This parameter can be set only when the artifact is a container image artifact or a Helm chart artifact.
   * 
   * @example
   * wordpress
   */
  repoName?: string;
  /**
   * @remarks
   * The type of the repository. Valid values: Public and Private.
   * 
   * @example
   * Public
   */
  repoType?: string;
  /**
   * @remarks
   * The version of the image in the image repository.
   * 
   * Call the [ListAcrImageTags](https://help.aliyun.com/document_detail/2539920.html) operation to obtain the version of the image in the image repository.
   * 
   * > This parameter can be set only when the artifact is a container image artifact or a Helm chart artifact.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The URL of the file artifact.
   * 
   * Upload a file and obtain its URL in the [Object Storage Service console](https://oss.console.aliyun.com/bucket).
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

export class CreateArtifactRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class CreateArtifactRequest extends $dara.Model {
  /**
   * @remarks
   * The content used to build the artifact. This parameter is used for managed artifact builds.
   */
  artifactBuildProperty?: CreateArtifactRequestArtifactBuildProperty;
  /**
   * @remarks
   * The type of the artifact to be built. Valid values:
   * 
   * - EcsImage: builds an ECS image.
   * 
   * - Dockerfile: builds a container image based on a Dockerfile.
   * 
   * - Buildpacks: builds a container image based on Buildpacks.
   * 
   * - ContainerImage: builds a container image by renaming an existing container image.
   * 
   * @example
   * Dockerflie
   */
  artifactBuildType?: string;
  /**
   * @remarks
   * The artifact ID.
   * 
   * This parameter is required to create a new version of an existing artifact.
   * 
   * You can call the [ListArtifacts](https://help.aliyun.com/document_detail/469993.html) operation to obtain the artifact ID.
   * 
   * @example
   * artifact-eea08d1e2d3a43ae****
   */
  artifactId?: string;
  /**
   * @remarks
   * The content of the artifact.
   */
  artifactProperty?: CreateArtifactRequestArtifactProperty;
  /**
   * @remarks
   * The artifact type.
   * 
   * Valid values:
   * 
   * - EcsImage: an ECS image artifact.
   * 
   * - AcrImage: a container image artifact.
   * 
   * - File: an Object Storage Service (OSS) file artifact.
   * 
   * - Script: a script artifact.
   * 
   * - HelmChart: a Helm chart artifact.
   * 
   * This parameter is required.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * Ensures the idempotence of the request.
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
   * The artifact name.
   * 
   * This parameter is required.
   * 
   * @example
   * Redhat8_5 image
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm2jfvb7b****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The regions where the image can be distributed.
   */
  supportRegionIds?: string[];
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateArtifactRequestTag[];
  /**
   * @remarks
   * The name of the artifact version.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactBuildProperty: 'ArtifactBuildProperty',
      artifactBuildType: 'ArtifactBuildType',
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      supportRegionIds: 'SupportRegionIds',
      tag: 'Tag',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildProperty: CreateArtifactRequestArtifactBuildProperty,
      artifactBuildType: 'string',
      artifactId: 'string',
      artifactProperty: CreateArtifactRequestArtifactProperty,
      artifactType: 'string',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      supportRegionIds: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateArtifactRequestTag },
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
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

