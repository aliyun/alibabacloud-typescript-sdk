// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCodeSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the code branch.
   * 
   * @example
   * dev
   */
  codeBranch?: string;
  /**
   * @remarks
   * The code commit ID.
   * 
   * @example
   * 3a6*****
   */
  codeCommit?: string;
  /**
   * @remarks
   * The address of the code repository.
   * 
   * @example
   * https://code.aliyun.com/******
   */
  codeRepo?: string;
  /**
   * @remarks
   * The access token corresponding to the username.
   * 
   * @example
   * ***
   */
  codeRepoAccessToken?: string;
  /**
   * @remarks
   * The username used to access the code repository.
   * 
   * @example
   * demo-user
   */
  codeRepoUserName?: string;
  /**
   * @remarks
   * The description of the code build.
   */
  description?: string;
  /**
   * @remarks
   * The name of the code build.
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

