// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGitAccountsResponseBodyGitAccounts extends $dara.Model {
  /**
   * @example
   * true
   */
  isActive?: boolean;
  /**
   * @example
   * LYH-RAIN
   */
  owner?: string;
  static names(): { [key: string]: string } {
    return {
      isActive: 'IsActive',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isActive: 'boolean',
      owner: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGitAccountsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  gitAccounts?: ListGitAccountsResponseBodyGitAccounts[];
  /**
   * @example
   * 1457F46C-7AAE-59FA-BD12-0BDB3751E6F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      gitAccounts: 'GitAccounts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      gitAccounts: { 'type': 'array', 'itemType': ListGitAccountsResponseBodyGitAccounts },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gitAccounts)) {
      $dara.Model.validateArray(this.gitAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

