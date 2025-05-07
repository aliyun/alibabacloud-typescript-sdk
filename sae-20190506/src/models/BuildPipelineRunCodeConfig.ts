// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildPipelineRunCodeConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * master
   */
  branchName?: string;
  commitId?: string;
  commitUrl?: string;
  organizationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * github/gitee/gitlab等
   */
  provider?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sae-samples/java-maven-demo
   */
  repoFullName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3001
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      branchName: 'BranchName',
      commitId: 'CommitId',
      commitUrl: 'CommitUrl',
      organizationId: 'OrganizationId',
      provider: 'Provider',
      repoFullName: 'RepoFullName',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      branchName: 'string',
      commitId: 'string',
      commitUrl: 'string',
      organizationId: 'string',
      provider: 'string',
      repoFullName: 'string',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

