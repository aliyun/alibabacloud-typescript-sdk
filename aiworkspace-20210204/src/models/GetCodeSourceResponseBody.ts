// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCodeSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The visibility of the code source configuration.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The clone mode. Valid values:
   * - 0: Create a new subdirectory.
   * - 1: Tile to the current directory.
   * 
   * @example
   * 0
   */
  cloneType?: number;
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
   * The code repository URL.
   * 
   * @example
   * https://code.aliyun.com/pai-dlc/examples.git
   */
  codeRepo?: string;
  /**
   * @remarks
   * The access code repository token.
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
   * The code source configuration ID.
   * 
   * @example
   * code-202**********
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The detailed description of the code source configuration.
   * 
   * @example
   * This is my data source 1.
   */
  description?: string;
  /**
   * @remarks
   * The code source configuration name.
   * 
   * @example
   * MyCodeSource1
   */
  displayName?: string;
  /**
   * @remarks
   * The creation time of the code source configuration. The time is in ISO 8601 format.
   * 
   * @example
   * 2021-01-12T23:36:01.123Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modification time of the code source configuration. The time is in ISO 8601 format.
   * 
   * @example
   * 2021-01-12T23:36:01.123Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The local mount directory of the code.
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
   * The creator ID of the code source configuration.
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
      requestId: 'RequestId',
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

