// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoBuildRuleResponseBodyBuildRules extends $dara.Model {
  buildArgs?: string[];
  /**
   * @remarks
   * The ID of the image building rule.
   * 
   * @example
   * crbr-khys0nd3asbe****
   */
  buildRuleId?: string;
  /**
   * @remarks
   * The directory of the Dockerfile.
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
   * v0.1
   */
  imageTag?: string;
  platforms?: string[];
  /**
   * @remarks
   * The name of the push that triggers the building rule.
   * 
   * @example
   * v0.1
   */
  pushName?: string;
  /**
   * @remarks
   * The type of the push that triggers the image building rule. Valid values:
   * 
   * *   GIT_BRANCH: branch push
   * *   GIT_TAG: tag push
   * 
   * @example
   * GIT_BRANCH
   */
  pushType?: string;
  static names(): { [key: string]: string } {
    return {
      buildArgs: 'BuildArgs',
      buildRuleId: 'BuildRuleId',
      dockerfileLocation: 'DockerfileLocation',
      dockerfileName: 'DockerfileName',
      imageTag: 'ImageTag',
      platforms: 'Platforms',
      pushName: 'PushName',
      pushType: 'PushType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildArgs: { 'type': 'array', 'itemType': 'string' },
      buildRuleId: 'string',
      dockerfileLocation: 'string',
      dockerfileName: 'string',
      imageTag: 'string',
      platforms: { 'type': 'array', 'itemType': 'string' },
      pushName: 'string',
      pushType: 'string',
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

