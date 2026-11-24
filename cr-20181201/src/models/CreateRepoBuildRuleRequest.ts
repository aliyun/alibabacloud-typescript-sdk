// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepoBuildRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The build arguments.
   */
  buildArgs?: string[];
  /**
   * @remarks
   * The Dockerfile path.
   * 
   * @example
   * /
   */
  dockerfileLocation?: string;
  /**
   * @remarks
   * The Dockerfile name.
   * 
   * @example
   * Dockerfile
   */
  dockerfileName?: string;
  /**
   * @remarks
   * The image version.
   * 
   * This parameter is required.
   * 
   * @example
   * v0.9.5
   */
  imageTag?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The image architecture. Valid values:
   * 
   * - `linux/amd64`
   * 
   * - `linux/arm64`
   * 
   * - `linux/386`
   * 
   * - `linux/arm/v7`
   * 
   * - `linux/arm/v6`
   * 
   * Default value: `linux/amd64`.
   */
  platforms?: string[];
  /**
   * @remarks
   * The trigger name.
   * 
   * This parameter is required.
   * 
   * @example
   * master
   */
  pushName?: string;
  /**
   * @remarks
   * The push type. Valid values:
   * 
   * - `GIT_TAG`: Triggered by tag.
   * 
   * - `GIT_BRANCH`: Triggered by branch.
   * 
   * This parameter is required.
   * 
   * @example
   * GIT_BRANCH
   */
  pushType?: string;
  /**
   * @remarks
   * The image repository ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-8dz3aedjqlmk****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildArgs: 'BuildArgs',
      dockerfileLocation: 'DockerfileLocation',
      dockerfileName: 'DockerfileName',
      imageTag: 'ImageTag',
      instanceId: 'InstanceId',
      platforms: 'Platforms',
      pushName: 'PushName',
      pushType: 'PushType',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildArgs: { 'type': 'array', 'itemType': 'string' },
      dockerfileLocation: 'string',
      dockerfileName: 'string',
      imageTag: 'string',
      instanceId: 'string',
      platforms: { 'type': 'array', 'itemType': 'string' },
      pushName: 'string',
      pushType: 'string',
      repoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buildArgs)) {
      $dara.Model.validateArray(this.buildArgs);
    }
    if(Array.isArray(this.platforms)) {
      $dara.Model.validateArray(this.platforms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

