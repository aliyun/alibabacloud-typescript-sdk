// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCodeSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The visibility of the code source. Valid values:
   * 
   * *   PRIVATE: Visible only to you and the administrator of the workspace.
   * *   PUBLIC: Visible to all members in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The code repository branch.
   * 
   * @example
   * master
   */
  codeBranch?: string;
  /**
   * @remarks
   * The code commit ID.
   * 
   * @example
   * 44da10***********
   */
  codeCommit?: string;
  /**
   * @remarks
   * The address of the code repository.
   * 
   * @example
   * https://code.aliyun.com/pai-dlc/examples.git
   */
  codeRepo?: string;
  /**
   * @remarks
   * The token used to access the code repository.
   * 
   * @example
   * xxxx
   */
  codeRepoAccessToken?: string;
  /**
   * @remarks
   * The username of the code repository.
   * 
   * @example
   * user1
   */
  codeRepoUserName?: string;
  /**
   * @remarks
   * The ID of the code source.
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
   * This is my data source 1.
   */
  description?: string;
  /**
   * @remarks
   * The name of the code source.
   * 
   * @example
   * MyCodeSource1
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the code source was created, in the ISO8601 format.
   * 
   * @example
   * 2021-01-12T23:36:01.123Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the code source was modified, in the ISO8601 format.
   * 
   * @example
   * 2021-01-12T23:36:01.123Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The local mount path of the code.
   * 
   * @example
   * /root/code
   */
  mountPath?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 1722********
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
      requestId: 'RequestId',
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
      requestId: 'string',
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

