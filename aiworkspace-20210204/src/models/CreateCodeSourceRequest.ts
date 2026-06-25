// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCodeSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the code configuration. Valid values:
   * 
   * - PUBLIC: The configuration is visible to everyone in the workspace.
   * 
   * - PRIVATE: The configuration is visible only to you and workspace administrators.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  cloneType?: number;
  /**
   * @remarks
   * The code branch.
   * 
   * @example
   * master
   */
  codeBranch?: string;
  /**
   * @remarks
   * The commit ID of the code. \\`CodeCommit\\` takes precedence over \\`CodeBranch\\`. If you specify \\`CodeCommit\\`, \\`CodeBranch\\` is ignored.
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
   * The access token for the code repository.
   * 
   * @example
   * ***
   */
  codeRepoAccessToken?: string;
  /**
   * @remarks
   * The username for the code repository.
   * 
   * @example
   * use***
   */
  codeRepoUserName?: string;
  /**
   * @remarks
   * The description of the code configuration, which helps distinguish it from other configurations.
   * 
   * @example
   * code source of dlc examples
   */
  description?: string;
  /**
   * @remarks
   * The name of the code configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * MyCodeSource1
   */
  displayName?: string;
  /**
   * @remarks
   * The local mount path for the code. The default is `/root/code/`.
   * 
   * @example
   * /root/code/code-source-1
   */
  mountPath?: string;
  /**
   * @remarks
   * The workspace ID. For more information, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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
      cloneType: 'CloneType',
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
      cloneType: 'number',
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

