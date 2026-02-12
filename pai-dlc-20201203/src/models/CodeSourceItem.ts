// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CodeSourceItem extends $dara.Model {
  /**
   * @remarks
   * The branch of the code repository. If you configure this parameter when you call the CreateJob API operation, the branch is overwritten.
   * 
   * @example
   * master
   */
  codeBranch?: string;
  /**
   * @remarks
   * The commit ID. If you configure this parameter when you call the CreateJob API operation, the commit is overwritten.
   * 
   * @example
   * 44da109b59f8596152987eaa8f3b2487bb72ea63
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
   * The access token used to access the code repository.
   * 
   * @example
   * xxxx
   */
  codeRepoAccessToken?: string;
  /**
   * @remarks
   * The username used to access the private code repository.
   * 
   * @example
   * user
   */
  codeRepoUserName?: string;
  /**
   * @remarks
   * The ID of the code source.
   * 
   * @example
   * code-20210111103721-********
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
   * The name of the code source.
   * 
   * @example
   * MyCodeSourceName1
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the code source was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the code source was modified. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud user who creates the code source.
   * 
   * @example
   * 115729017166****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
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
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

