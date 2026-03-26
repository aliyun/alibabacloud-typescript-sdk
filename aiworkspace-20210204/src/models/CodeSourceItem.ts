// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CodeSourceItem extends $dara.Model {
  /**
   * @remarks
   * The visibility of the code source. Valid values:
   * 
   * *   PRIVATE: Visible only to you and the administrator in the workspace.
   * *   PUBLIC: Visible to all users in the workspace.
   * 
   * @example
   * PUBLIC
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
  /**
   * @remarks
   * The code commit ID
   * 
   * @example
   * 44da10**********
   */
  codeCommit?: string;
  /**
   * @remarks
   * The address of the code repository.
   * 
   * @example
   * https://code.aliyun.com/****
   */
  codeRepo?: string;
  /**
   * @remarks
   * The token used to access the code repository.
   */
  codeRepoAccessToken?: string;
  /**
   * @remarks
   * The username of the code repository.
   * 
   * @example
   * user
   */
  codeRepoUserName?: string;
  /**
   * @remarks
   * The code source ID.
   * 
   * @example
   * code-202**********
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The code source description.
   * 
   * @example
   * code source of dlc examples
   */
  description?: string;
  /**
   * @remarks
   * The code source name.
   * 
   * @example
   * MyCodeSourceName1
   */
  displayName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modified time.
   * 
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The local mount path of the code.
   * 
   * @example
   * /root/code/
   */
  mountPath?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 1157290171663117
   */
  userId?: string;
  /**
   * @remarks
   * The workspace ID.
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
      codeSourceId: 'CodeSourceId',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      mountPath: 'MountPath',
      userId: 'UserId',
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
      codeSourceId: 'string',
      description: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      mountPath: 'string',
      userId: 'string',
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

