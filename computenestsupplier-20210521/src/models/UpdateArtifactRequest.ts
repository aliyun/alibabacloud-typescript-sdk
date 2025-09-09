// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateArtifactRequestArtifactBuildPropertyBuildArgs extends $dara.Model {
  /**
   * @remarks
   * The name of a specific build argument.
   * 
   * @example
   * ENV
   */
  argumentName?: string;
  /**
   * @remarks
   * The value of a specific build argument.
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
   * The name of the branch in the code repository.
   * 
   * @example
   * main
   */
  branch?: string;
  /**
   * @remarks
   * The endpoint. 
   * The URL address used to access the privately deployed GitLab instance.
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
   * >  This parameter is available only if the git repository is private.
   * 
   * @example
   * aliyun-computenest
   */
  owner?: string;
  /**
   * @remarks
   * The platform type. Valid values:
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
   * The name of the repository.
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
   * The build arguments used during the image build process.
   * 
   * >  This parameter is available only if the ArtifactBuildType is Dockerfile type.
   */
  buildArgs?: UpdateArtifactRequestArtifactBuildPropertyBuildArgs[];
  /**
   * @remarks
   * The address of the code repository.
   * 
   * >  This parameter is available only if the ArtifactBuildType is Dockerfile or Buildpacks type.
   */
  codeRepo?: UpdateArtifactRequestArtifactBuildPropertyCodeRepo;
  /**
   * @remarks
   * The command content.
   * 
   * >  This parameter is available only if the deployment package is a ecs image type.
   * 
   * @example
   * echo "start run command"
   */
  commandContent?: string;
  /**
   * @remarks
   * The command type. Valid values:
   * 
   * *   RunBatScript: batch command, applicable to Windows instances.
   * *   RunPowerShellScript: PowerShell command, applicable to Windows instances.
   * *   RunShellScript: shell command, applicable to Linux instances.
   * 
   * >  This parameter is available only if the deployment package is a ecs image type.
   * 
   * @example
   * RunShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The relative path to the Dockerfile within the code repository.
   * 
   * >  This parameter is available only if the ArtifactBuildType is Dockerfile type.
   * 
   * @example
   * ./file/Dockerfile
   */
  dockerfilePath?: string;
  /**
   * @remarks
   * Whether GPU is required. CPU instance is used by default.
   * 
   * @example
   * false
   */
  enableGpu?: boolean;
  /**
   * @remarks
   * The region ID where the source mirror image is located.
   * 
   * >  This parameter is available only if the deployment package is a ecs image type.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The pull location of the source container image. This is used for the command docker pull ${SourceContainerImage}.
   * 
   * >  This parameter is available only if the ArtifactBuildType is ContainerImage type.
   * 
   * @example
   * pytorch/pytorch:2.5.1-cuda12.4-cudnn9-devel
   */
  sourceContainerImage?: string;
  /**
   * @remarks
   * The source image id. Supported Types:
   * 
   * - Image ID: Pass the Image ID of the Ecs image directly.
   * 
   * - OOS Common Parameter Name: Obtain the corresponding Image ID automatically by using the OOS common parameter name.
   * 
   * >  This parameter is available only if the deployment package is a ecs image type.
   * 
   * @example
   * Image ID：m-t4nhenrdc38pe4*****
   * ubuntu_22_04_x64_20G_alibase_20240926.vhd
   * OOS Common Parameter Name：aliyun/services/computenest/images/aliyun_3_2104_python_3_11
   */
  sourceImageId?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
   * 
   * >  The system disk must be at least as large as the image.
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
   * The commodity code of the service in Alibaba Cloud Marketplace.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * cmjj00xxxx
   */
  commodityCode?: string;
  /**
   * @remarks
   * The commodity version of the service in Alibaba Cloud Marketplace.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * V1.0
   */
  commodityVersion?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * m-0xij191j9cuev6ucxxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Container Registry  repository.
   * >  This parameter is available only if the deployment package is a container image or of the Helm chart type.
   * 
   * @example
   * crr-yy4g68uhi39ttkm8
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the Container Registry repository.
   * >  This parameter is available only if the deployment package is a container image or of the Helm chart type.
   * 
   * @example
   * volcanosh/vc-webhook-manager
   */
  repoName?: string;
  /**
   * @remarks
   * The type of the repository.Valid values:
   * 
   * *   `Public`: a public repository.
   * *   `Private`: a private repository.
   * >  This parameter is available only if the deployment package is a container image or of the Helm chart type.
   * 
   * @example
   * Public
   */
  repoType?: string;
  /**
   * @remarks
   * The version tag of the image repository.
   * 
   * >  This parameter is available only if the deployment package is a container image or of the Helm chart type.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The URL of the deployment package object.
   * 
   * 
   * > Note This parameter is available only if the deployment package is an file.
   * 
   * @example
   * https://service-info-private.oss-cn-hangzhou.aliyuncs.com/1309208528xxxxxx/template/2e1ce8fc-xxxx-481c-9e8e-789ba9db487d.json
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
   * The build properties of the artifact, utilized for hosting and building the deployment package.
   */
  artifactBuildProperty?: UpdateArtifactRequestArtifactBuildProperty;
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment package.
   */
  artifactProperty?: UpdateArtifactRequestArtifactProperty;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * Permission fields are applicable to container image artifact and Helm Chart artifact. They can only change from Automatic to Public. Options:
   * 
   * Public
   * 
   * Automatic
   * 
   * @example
   * Public
   */
  permissionType?: string;
  /**
   * @remarks
   * The IDs of the regions that support the deployment package.
   */
  supportRegionIds?: string[];
  /**
   * @remarks
   * The version name of the deployment package.
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

