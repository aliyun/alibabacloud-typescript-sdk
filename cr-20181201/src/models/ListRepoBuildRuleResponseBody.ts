// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoBuildRuleResponseBodyBuildRules extends $dara.Model {
  /**
   * @remarks
   * The list of build arguments.
   */
  buildArgs?: string[];
  /**
   * @remarks
   * The build rule ID.
   * 
   * @example
   * crbr-khys0nd3asbe****
   */
  buildRuleId?: string;
  /**
   * @remarks
   * The destination artifact type.
   */
  destArtifactType?: string;
  /**
   * @remarks
   * The directory where the Dockerfile is located.
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
   * The image tag.
   * 
   * @example
   * v0.1
   */
  imageTag?: string;
  /**
   * @remarks
   * The operating system and platform of the image.
   */
  platforms?: string[];
  /**
   * @remarks
   * The name of the code push that triggers the build.
   * 
   * @example
   * v0.1
   */
  pushName?: string;
  /**
   * @remarks
   * The type of source code push that triggers the build. Valid values:
   * 
   * - GIT_BRANCH: Source code is pushed from a branch.
   * 
   * - GIT_TAG: Source code is pushed from a tag.
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
   * The list of build rules.
   */
  buildRules?: ListRepoBuildRuleResponseBodyBuildRules[];
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * 
   * - `true`: The API call was successful.
   * 
   * - `false`: The API call failed.
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
   * The page size.
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
   * The total number of entries.
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

