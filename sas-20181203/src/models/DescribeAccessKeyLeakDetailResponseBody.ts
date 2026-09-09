// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessKeyLeakDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The leaked AccessKey ID.
   * 
   * @example
   * yourAccessKeyID
   */
  accesskeyId?: string;
  /**
   * @remarks
   * The platform where the asset resides. The value is fixed as **Cloud Platform**.
   * 
   * @example
   * Cloud Platform
   */
  asset?: string;
  /**
   * @remarks
   * The leaked code snippet.
   * 
   * @example
   * \\n1231 \\nak=yourAccessKeyID \\n12311123 \\nsk1999 \\nsk1999sk1999 \\nsk1999sk1999 \\n\\n\\ntest001 ak hht \\nak=yourAccessKeyID \\nsk=yourAccessKeySecret
   */
  code?: string;
  /**
   * @remarks
   * The time when the AccessKey pair leak event was handled. The value is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-01-17 15:47:08
   */
  dealTime?: string;
  /**
   * @remarks
   * The handling method of the AccessKey pair leak event. Valid values:
   * 
   * - **manual**: Confirmed manual deletion.
   * - **disable**: Manually disabled.
   * - **add-whitelist**: Added to the whitelist.
   * - **pending**: Not handled.
   * 
   * @example
   * add-whitelist
   */
  dealType?: string;
  /**
   * @remarks
   * The GitHub file name.
   * 
   * @example
   * testAkLeak
   */
  githubFileName?: string;
  /**
   * @remarks
   * The GitHub file type. Valid values:
   * 
   * - Python
   * - XML
   * - GO
   * - Javascript
   * - INI
   * - JSON
   * - C++
   * 
   * @example
   * Python
   */
  githubFileType?: string;
  /**
   * @remarks
   * The time when the GitHub file was updated. The value is in the YYYY-MM-DDTHH:mm:ss format.
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
   * The GitHub repository name.
   * 
   * @example
   * ExamOnline
   */
  githubRepoName?: string;
  /**
   * @remarks
   * The GitHub repository URL.
   * 
   * @example
   * https://github.com/Blue00Blue/ExamOn****
   */
  githubRepoUrl?: string;
  /**
   * @remarks
   * The GitHub username.
   * 
   * @example
   * Blue00Blue
   */
  githubUser?: string;
  /**
   * @remarks
   * The profile picture URL of the GitHub user.
   * 
   * @example
   * https://avatars.githubusercontent.com/u/26296896?s=48&v=****
   */
  githubUserPicUrl?: string;
  /**
   * @remarks
   * The time when the AccessKey pair leak event was first discovered.
   * 
   * @example
   * 2021-07-06 17:49:41
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The most recent discovery time of the leak event.
   * 
   * @example
   * 2021-07-06 17:49:39
   */
  gmtModified?: string;
  /**
   * @remarks
   * The remarks of the AccessKey pair leak event.
   * 
   * @example
   * 12
   */
  remark?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 79CFF74D-E967-5407-8A78-EE03B925FDAA
   */
  requestId?: string;
  /**
   * @remarks
   * The intelligence source of the AccessKey pair leak event.
   * 
   * @example
   * GitHub
   */
  source?: string;
  /**
   * @remarks
   * The validity of the key associated with the AccessKey pair. Valid values:
   * 
   * - **0**: To be confirmed.
   * - **1**: Valid.
   * - **2**: Invalid.
   * 
   * @example
   * 2
   */
  tokenValid?: number;
  /**
   * @remarks
   * The type of the leaked information. The value is fixed as **AccessKey**.
   * 
   * @example
   * AccessKey
   */
  type?: string;
  /**
   * @remarks
   * Indicates whether the AccessKey pair leak event is added to the whitelist. Valid values:
   * 
   * - **no**: Not added to the whitelist.
   * - **yes**: Added to the whitelist.
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

