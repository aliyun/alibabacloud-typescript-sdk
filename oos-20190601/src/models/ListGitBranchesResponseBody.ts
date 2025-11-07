// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGitBranchesResponseBodyGitBranches extends $dara.Model {
  /**
   * @example
   * master
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGitBranchesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  gitBranches?: ListGitBranchesResponseBodyGitBranches[];
  /**
   * @example
   * DBA6E6C8-F75D-41DE-AFF5-1FA03F551CA3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      gitBranches: 'GitBranches',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      gitBranches: { 'type': 'array', 'itemType': ListGitBranchesResponseBodyGitBranches },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gitBranches)) {
      $dara.Model.validateArray(this.gitBranches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

