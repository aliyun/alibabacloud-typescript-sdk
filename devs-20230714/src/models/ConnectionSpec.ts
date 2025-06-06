// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GitAccount } from "./GitAccount";
import { GitLabConfig } from "./GitLabConfig";


export class ConnectionSpec extends $dara.Model {
  account?: GitAccount;
  gitlabConfig?: GitLabConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * github
   */
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'account',
      gitlabConfig: 'gitlabConfig',
      platform: 'platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: GitAccount,
      gitlabConfig: GitLabConfig,
      platform: 'string',
    };
  }

  validate() {
    if(this.account && typeof (this.account as any).validate === 'function') {
      (this.account as any).validate();
    }
    if(this.gitlabConfig && typeof (this.gitlabConfig as any).validate === 'function') {
      (this.gitlabConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

