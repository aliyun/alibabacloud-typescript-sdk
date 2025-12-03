// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCommitWithMultipleFilesRequestActions extends $dara.Model {
  /**
   * @example
   * create
   */
  action?: string;
  /**
   * @example
   * xxx
   */
  content?: string;
  /**
   * @example
   * src/test.java
   */
  filePath?: string;
  /**
   * @example
   * src/main/test.java
   */
  previousPath?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      content: 'content',
      filePath: 'filePath',
      previousPath: 'previousPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      content: 'string',
      filePath: 'string',
      previousPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommitWithMultipleFilesRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  actions?: CreateCommitWithMultipleFilesRequestActions[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * master
   */
  branch?: string;
  /**
   * @example
   * auto
   */
  commitMessage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5ebbc0228123212b59xxxxx
   */
  organizationId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  repositoryIdentity?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      actions: 'actions',
      branch: 'branch',
      commitMessage: 'commitMessage',
      organizationId: 'organizationId',
      repositoryIdentity: 'repositoryIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      actions: { 'type': 'array', 'itemType': CreateCommitWithMultipleFilesRequestActions },
      branch: 'string',
      commitMessage: 'string',
      organizationId: 'string',
      repositoryIdentity: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

