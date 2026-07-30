// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCodeSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The clone mode. Valid values:
   * - 0 (default): creates a new subdirectory.
   * - 1: tiles to the current directory.
   * 
   * @example
   * 0
   */
  cloneType?: number;
  /**
   * @remarks
   * The branch name of the code.
   * 
   * @example
   * dev
   */
  codeBranch?: string;
  /**
   * @remarks
   * The commit ID of the code.
   * 
   * @example
   * 3a6*****
   */
  codeCommit?: string;
  /**
   * @remarks
   * The URL of the code repository.
   * 
   * @example
   * https://code.aliyun.com/******
   */
  codeRepo?: string;
  /**
   * @remarks
   * The access token associated with the username.
   * 
   * @example
   * ***
   */
  codeRepoAccessToken?: string;
  /**
   * @remarks
   * The username used to access the access code repository.
   * 
   * @example
   * demo-user
   */
  codeRepoUserName?: string;
  /**
   * @remarks
   * The description of the code source configuration.
   * 
   * @example
   * 用于XX的训练代码
   */
  description?: string;
  /**
   * @remarks
   * The name of the code source configuration.
   * 
   * @example
   * MyCodeSource1
   */
  displayName?: string;
  /**
   * @remarks
   * The default mount path.
   * 
   * @example
   * /root/code/code-source-1
   */
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      cloneType: 'CloneType',
      codeBranch: 'CodeBranch',
      codeCommit: 'CodeCommit',
      codeRepo: 'CodeRepo',
      codeRepoAccessToken: 'CodeRepoAccessToken',
      codeRepoUserName: 'CodeRepoUserName',
      description: 'Description',
      displayName: 'DisplayName',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneType: 'number',
      codeBranch: 'string',
      codeCommit: 'string',
      codeRepo: 'string',
      codeRepoAccessToken: 'string',
      codeRepoUserName: 'string',
      description: 'string',
      displayName: 'string',
      mountPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

