// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateArtifactRequestArtifactBuildPropertyBuildArgs } from "./UpdateArtifactRequestArtifactBuildPropertyBuildArgs";
import { UpdateArtifactRequestArtifactBuildPropertyCodeRepo } from "./UpdateArtifactRequestArtifactBuildPropertyCodeRepo";


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

