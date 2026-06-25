// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CodeSourceItem extends $dara.Model {
  /**
   * @remarks
   * The visibility of the code source. Valid values:
   * 
   * - `PRIVATE`: Visible only to you and workspace administrators.
   * 
   * - `PUBLIC`: Visible to all workspace members.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The clone type.
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
   * The commit ID.
   * 
   * @example
   * 44da10**********
   */
  codeCommit?: string;
  /**
   * @remarks
   * The code repository URL.
   * 
   * @example
   * https://code.aliyun.com/****
   */
  codeRepo?: string;
  /**
   * @remarks
   * The access token for the code repository.
   */
  codeRepoAccessToken?: string;
  /**
   * @remarks
   * The username for the code repository.
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
   * The description of the code source.
   * 
   * @example
   * code source of dlc examples
   */
  description?: string;
  /**
   * @remarks
   * The display name of the code source.
   * 
   * @example
   * MyCodeSourceName1
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the code source was created.
   * 
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the code source was last modified.
   * 
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The local mount path for the code repository.
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
      cloneType: 'CloneType',
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
      cloneType: 'number',
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

