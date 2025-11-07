// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGitBranchResponseBodyCommit extends $dara.Model {
  /**
   * @remarks
   * git commit message
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * git commit hash
   * 
   * @example
   * 51417755
   */
  sha?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      sha: 'Sha',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      sha: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGitBranchResponseBody extends $dara.Model {
  commit?: GetGitBranchResponseBodyCommit;
  /**
   * @example
   * AA9FA778-AE4B-55EC-81CC-C46BAF08A166
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commit: 'Commit',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commit: GetGitBranchResponseBodyCommit,
      requestId: 'string',
    };
  }

  validate() {
    if(this.commit && typeof (this.commit as any).validate === 'function') {
      (this.commit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

