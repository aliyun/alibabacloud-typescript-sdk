// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppReleaseStageExecutionIntegratedMetadataResponseBodyChangeRequests extends $dara.Model {
  /**
   * @example
   * fcd37726a6f84c60b7eb9c5856007c2f
   */
  sn?: string;
  name?: string;
  /**
   * @example
   * feature/20240625
   */
  branchName?: string;
  /**
   * @example
   * a66cfa8c6869b96bb7d111ba2144c9c764d556b7
   */
  commitId?: string;
  /**
   * @example
   * 262579140573491041
   */
  ownerAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      sn: 'sn',
      name: 'name',
      branchName: 'branchName',
      commitId: 'commitId',
      ownerAccountId: 'ownerAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sn: 'string',
      name: 'string',
      branchName: 'string',
      commitId: 'string',
      ownerAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppReleaseStageExecutionIntegratedMetadataResponseBody extends $dara.Model {
  /**
   * @example
   * release/20240625-152603220321211_release_3252057_1
   */
  releaseBranch?: string;
  /**
   * @example
   * a66cfa8c6869b96bb7d111ba2144c9c764d556b7
   */
  releaseRevision?: string;
  /**
   * @example
   * https://codeup.aliyun.com/60d54f3daccf2bbd6659f3ad/auto-test.git
   */
  repoUrl?: string;
  /**
   * @example
   * CODEUP
   */
  repoType?: string;
  changeRequests?: ListAppReleaseStageExecutionIntegratedMetadataResponseBodyChangeRequests[];
  static names(): { [key: string]: string } {
    return {
      releaseBranch: 'releaseBranch',
      releaseRevision: 'releaseRevision',
      repoUrl: 'repoUrl',
      repoType: 'repoType',
      changeRequests: 'changeRequests',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseBranch: 'string',
      releaseRevision: 'string',
      repoUrl: 'string',
      repoType: 'string',
      changeRequests: { 'type': 'array', 'itemType': ListAppReleaseStageExecutionIntegratedMetadataResponseBodyChangeRequests },
    };
  }

  validate() {
    if(Array.isArray(this.changeRequests)) {
      $dara.Model.validateArray(this.changeRequests);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppReleaseStageExecutionIntegratedMetadataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppReleaseStageExecutionIntegratedMetadataResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': ListAppReleaseStageExecutionIntegratedMetadataResponseBody },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

