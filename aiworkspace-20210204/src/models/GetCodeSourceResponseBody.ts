// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCodeSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The visibility of the code configuration. Valid values:
   * 
   * - PRIVATE: The configuration is visible only to you and the administrator in the workspace.
   * 
   * - PUBLIC: The configuration is visible to everyone in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  cloneType?: number;
  /**
   * @remarks
   * The branch of the code repository.
   * 
   * @example
   * master
   */
  codeBranch?: string;
  /**
   * @remarks
   * The commit ID of the code.
   * 
   * @example
   * 44da10***********
   */
  codeCommit?: string;
  /**
   * @remarks
   * The URL of the code repository.
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
   * The username for the code repository.
   * 
   * @example
   * user1
   */
  codeRepoUserName?: string;
  /**
   * @remarks
   * The ID of the code source configuration.
   * 
   * @example
   * code-202**********
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The detailed description of the code configuration.
   * 
   * @example
   * This is my data source 1.
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
   * The time when the code configuration was created. The time is in the ISO 8601 format.
   * 
   * @example
   * 2021-01-12T23:36:01.123Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the code configuration was last modified. The time is in the ISO 8601 format.
   * 
   * @example
   * 2021-01-12T23:36:01.123Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The local mount path for the code.
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
   * The ID of the user who created the code source configuration.
   * 
   * @example
   * 1722********
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the workspace.
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

