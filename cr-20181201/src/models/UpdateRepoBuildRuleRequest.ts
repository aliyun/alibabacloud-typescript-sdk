// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRepoBuildRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Building arguments.
   */
  buildArgs?: string[];
  /**
   * @remarks
   * The ID of the building rule.
   * 
   * This parameter is required.
   * 
   * @example
   * crbr-ly77w5i3t31f****
   */
  buildRuleId?: string;
  /**
   * @remarks
   * The path of the Dockerfile.
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
   * The tag of the image.
   * 
   * @example
   * v0.9.5
   */
  imageTag?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * Architecture for image building. Valid values:
   * 
   * *   `linux/amd64`
   * *   `linux/arm64`
   * *   `linux/386`
   * *   `linux/arm/v7`
   * *   `linux/arm/v6`
   * 
   * Default value: `linux/amd64`
   * 
   * @example
   * linux/amd64
   */
  platforms?: string[];
  /**
   * @remarks
   * The name of the push that triggers the building rule.
   * 
   * @example
   * master
   */
  pushName?: string;
  /**
   * @remarks
   * The type of the push that triggers the building rule. Valid values:
   * 
   * *   `GIT_TAG`: tag push
   * *   `GIT_BRANCH`: branch push
   * 
   * @example
   * GIT_BRANCH
   */
  pushType?: string;
  /**
   * @remarks
   * The ID of the image repository.
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

