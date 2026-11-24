// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRepoBuildRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The build parameters.
   */
  buildArgs?: string[];
  /**
   * @remarks
   * The build rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crbr-ly77w5i3t31f****
   */
  buildRuleId?: string;
  /**
   * @remarks
   * The path to the Dockerfile.
   * 
   * @example
   * /
   */
  dockerfileLocation?: string;
  /**
   * @remarks
   * The name of the Dockerfile.
   * 
   * @example
   * Dockerfile
   */
  dockerfileName?: string;
  /**
   * @remarks
   * The image tag version.
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
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The architecture of the image to build. Valid values:
   * - `linux/amd64`
   * - `linux/arm64`
   * - `linux/386`
   * - `linux/arm/v7`
   * - `linux/arm/v6`
   * Default value: `linux/amd64`.
   * 
   * @example
   * linux/amd64
   */
  platforms?: string[];
  /**
   * @remarks
   * The trigger name.
   * 
   * @example
   * master
   */
  pushName?: string;
  /**
   * @remarks
   * The push type. Valid values:
   * - `GIT_TAG`: Triggered by a tag.
   * - `GIT_BRANCH`: Triggered by a branch.
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
   * crr-tquyps22md8p****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildArgs: 'BuildArgs',
      buildRuleId: 'BuildRuleId',
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
      buildRuleId: 'string',
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

