// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCodeSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the code configuration.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
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
   * The code branch.
   * 
   * @example
   * master
   */
  codeBranch?: string;
  /**
   * @remarks
   * The CommitID of the code. CodeCommit takes priority over CodeBranch. If you specify CodeCommit, CodeBranch does not take effect.
   * 
   * @example
   * 171de********a9d900d
   */
  codeCommit?: string;
  /**
   * @remarks
   * The URL of the code repository. This parameter is required.
   * 
   * @example
   * https://code.aliyun.com/******
   */
  codeRepo?: string;
  /**
   * @remarks
   * The access token of the code repository.
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
   * The description of the code configuration, which helps distinguish different code configurations.
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
   * The local mount directory for the code. This parameter is required.
   * 
   * @example
   * /root/code/code-source-1
   */
  mountPath?: string;
  /**
   * @remarks
   * The workspace ID. For information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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

