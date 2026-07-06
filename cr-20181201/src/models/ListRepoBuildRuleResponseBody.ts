// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoBuildRuleResponseBodyBuildRules extends $dara.Model {
  buildArgs?: string[];
  /**
   * @remarks
   * The ID of the build rule.
   * 
   * @example
   * crbr-khys0nd3asbe****
   */
  buildRuleId?: string;
  destArtifactType?: string;
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
   * Dockerfile name
   * 
   * @example
   * Dockerfile
   */
  dockerfileName?: string;
  /**
   * @remarks
   * Image Tag
   * 
   * @example
   * v0.1
   */
  imageTag?: string;
  /**
   * @remarks
   * Image operating system and platform
   */
  platforms?: string[];
  /**
   * @remarks
   * Code push-triggered build name
   * 
   * @example
   * v0.1
   */
  pushName?: string;
  /**
   * @remarks
   * The type of the event that triggers the build rule. Valid values:
   * 
   * - `GIT_BRANCH`: A code branch is pushed.
   * 
   * - GIT_TAG: Push source code from a tag.
   * 
   * @example
   * GIT_BRANCH
   */
  pushType?: string;
  static names(): { [key: string]: string } {
    return {
      buildArgs: 'BuildArgs',
      buildRuleId: 'BuildRuleId',
      destArtifactType: 'DestArtifactType',
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
      destArtifactType: 'string',
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

export class ListRepoBuildRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The build rules.
   */
  buildRules?: ListRepoBuildRuleResponseBodyBuildRules[];
  /**
   * @remarks
   * The response code. A value of `success` indicates that the request was successful.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 42D782C8-E8F6-4A32-BEA0-6A6AC854C22A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of build rules.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      buildRules: 'BuildRules',
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRules: { 'type': 'array', 'itemType': ListRepoBuildRuleResponseBodyBuildRules },
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buildRules)) {
      $dara.Model.validateArray(this.buildRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

