// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCodeSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the code build. Valid values:
   * 
   * *   PUBLIC: The code build is visible to all members in the workspace.
   * *   PRIVATE: The code build is visible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The code branch.
   * 
   * @example
   * master
   */
  codeBranch?: string;
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
   * The token used to access the code repository.
   * 
   * @example
   * ***
   */
  codeRepoAccessToken?: string;
  /**
   * @remarks
   * The username of the code repository.
   * 
   * @example
   * use***
   */
  codeRepoUserName?: string;
  /**
   * @remarks
   * The description of the code build, which helps you distinguish between code builds.
   * 
   * @example
   * code source of dlc examples
   */
  description?: string;
  /**
   * @remarks
   * The name of the code build.
   * 
   * This parameter is required.
   * 
   * @example
   * MyCodeSource1
   */
  displayName?: string;
  /**
   * @remarks
   * The local mount path of the code. By default, the code is mounted to the /root/code/ path.
   * 
   * @example
   * /root/code/code-source-1
   */
  mountPath?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      codeBranch: 'CodeBranch',
      codeCommit: 'CodeCommit',
      codeRepo: 'CodeRepo',
      codeRepoAccessToken: 'CodeRepoAccessToken',
      codeRepoUserName: 'CodeRepoUserName',
      description: 'Description',
      displayName: 'DisplayName',
      mountPath: 'MountPath',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      codeBranch: 'string',
      codeCommit: 'string',
      codeRepo: 'string',
      codeRepoAccessToken: 'string',
      codeRepoUserName: 'string',
      description: 'string',
      displayName: 'string',
      mountPath: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

