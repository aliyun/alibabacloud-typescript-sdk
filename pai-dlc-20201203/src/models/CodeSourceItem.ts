// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CodeSourceItem extends $dara.Model {
  /**
   * @example
   * master
   */
  codeBranch?: string;
  /**
   * @example
   * 44da1*******
   */
  codeCommit?: string;
  /**
   * @example
   * https://code.aliyun.com/pai-dlc/examples.git
   */
  codeRepo?: string;
  codeRepoAccessToken?: string;
  /**
   * @example
   * user
   */
  codeRepoUserName?: string;
  /**
   * @example
   * code-20210111103721-85qz*****
   */
  codeSourceId?: string;
  /**
   * @example
   * code source of dlc examples
   */
  description?: string;
  /**
   * @example
   * MyCodeSourceName1
   */
  displayName?: string;
  /**
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtModifyTime?: string;
  /**
   * @example
   * 115**********
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

