// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessKeyLeakDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the AccessKey pair that is leaked.
   * 
   * @example
   * yourAccessKeyID
   */
  accesskeyId?: string;
  /**
   * @remarks
   * The platform to which the asset belongs. The value is fixed as **Cloud platform**.
   * 
   * @example
   * Cloud platform
   */
  asset?: string;
  /**
   * @remarks
   * The code snippet that is leaked.
   * 
   * @example
   * \\n1231 \\nak=yourAccessKeyID \\n12311123 \\nsk1999 \\nsk1999sk1999 \\nsk1999sk1999 \\n\\n\\ntest001 ak hht \\nak=yourAccessKeyID \\nsk=yourAccessKeySecret
   */
  code?: string;
  /**
   * @remarks
   * The time when the AccessKey pair leak was handled.
   * 
   * @example
   * 2022-01-17 15:47:08
   */
  dealTime?: string;
  /**
   * @remarks
   * The solution to the AccessKey pair leak. Valid values:
   * 
   * *   **manual**: manually deleted
   * *   **disable**: manually disabled
   * *   **add-whitelist**: added to the whitelist
   * *   **pending**: unhandled
   * 
   * @example
   * add-whitelist
   */
  dealType?: string;
  /**
   * @remarks
   * The name of the GitHub file.
   * 
   * @example
   * testAkLeak
   */
  githubFileName?: string;
  /**
   * @remarks
   * The type of the GitHub file. Valid values:
   * 
   * *   Python
   * *   XML
   * *   GO
   * *   Javascript
   * *   INI
   * *   JSON
   * *   C++
   * 
   * @example
   * Python
   */
  githubFileType?: string;
  /**
   * @remarks
   * The time when the GitHub file was updated.
   * 
   * @example
   * 2021-07-06T09:49:33
   */
  githubFileUpdateTime?: string;
  /**
   * @remarks
   * The URL of the GitHub file.
   * 
   * @example
   * https://github.com/Blue00Blue/ExamOnline/blob/6c932c10fc3f217783f3937e2b230f79656c18a7/testAk****
   */
  githubFileUrl?: string;
  /**
   * @remarks
   * The name of the GitHub repository.
   * 
   * @example
   * ExamOnline
   */
  githubRepoName?: string;
  /**
   * @remarks
   * The URL of the GitHub repository.
   * 
   * @example
   * https://github.com/Blue00Blue/ExamOn****
   */
  githubRepoUrl?: string;
  /**
   * @remarks
   * The username of the GitHub user.
   * 
   * @example
   * Blue00Blue
   */
  githubUser?: string;
  /**
   * @remarks
   * The URL of the profile picture for the GitHub user.
   * 
   * @example
   * https://avatars.githubusercontent.com/u/26296896?s=48&v=****
   */
  githubUserPicUrl?: string;
  /**
   * @remarks
   * The first time when the AccessKey pair leak was detected.
   * 
   * @example
   * 2021-07-06 17:49:41
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last time when the AccessKey pair leak was detected.
   * 
   * @example
   * 2021-07-06 17:49:39
   */
  gmtModified?: string;
  /**
   * @remarks
   * The remarks of the AccessKey pair leak.
   * 
   * @example
   * 12
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 79CFF74D-E967-5407-8A78-EE03B925FDAA
   */
  requestId?: string;
  /**
   * @remarks
   * The platform on which the AccessKey pair leak is detected.
   * 
   * @example
   * GitHub
   */
  source?: string;
  /**
   * @remarks
   * The validity of the key that is associated with the AccessKey pair. Valid values:
   * 
   * *   **0**: to be confirmed.
   * *   **1**: valid.
   * *   **2**: invalid.
   * 
   * @example
   * 2
   */
  tokenValid?: number;
  /**
   * @remarks
   * The type of the leak. The value is fixed as **AccessKey**.
   * 
   * @example
   * AccessKey
   */
  type?: string;
  /**
   * @remarks
   * Indicates whether the AccessKey pair leak is added to the whitelist. Valid values:
   * 
   * *   **no**: no
   * *   **yes**: yes
   * 
   * @example
   * no
   */
  whitelistStatus?: string;
  /**
   * @remarks
   * The time when the AccessKey pair was added to the whitelist. Unit: milliseconds.
   * 
   * @example
   * 1689172004478
   */
  whitelistTime?: number;
  static names(): { [key: string]: string } {
    return {
      accesskeyId: 'AccesskeyId',
      asset: 'Asset',
      code: 'Code',
      dealTime: 'DealTime',
      dealType: 'DealType',
      githubFileName: 'GithubFileName',
      githubFileType: 'GithubFileType',
      githubFileUpdateTime: 'GithubFileUpdateTime',
      githubFileUrl: 'GithubFileUrl',
      githubRepoName: 'GithubRepoName',
      githubRepoUrl: 'GithubRepoUrl',
      githubUser: 'GithubUser',
      githubUserPicUrl: 'GithubUserPicUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      remark: 'Remark',
      requestId: 'RequestId',
      source: 'Source',
      tokenValid: 'TokenValid',
      type: 'Type',
      whitelistStatus: 'WhitelistStatus',
      whitelistTime: 'WhitelistTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accesskeyId: 'string',
      asset: 'string',
      code: 'string',
      dealTime: 'string',
      dealType: 'string',
      githubFileName: 'string',
      githubFileType: 'string',
      githubFileUpdateTime: 'string',
      githubFileUrl: 'string',
      githubRepoName: 'string',
      githubRepoUrl: 'string',
      githubUser: 'string',
      githubUserPicUrl: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      remark: 'string',
      requestId: 'string',
      source: 'string',
      tokenValid: 'number',
      type: 'string',
      whitelistStatus: 'string',
      whitelistTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

