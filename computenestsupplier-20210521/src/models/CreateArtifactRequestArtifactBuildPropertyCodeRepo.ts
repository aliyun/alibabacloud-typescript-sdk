// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactRequestArtifactBuildPropertyCodeRepo extends $dara.Model {
  /**
   * @remarks
   * The name of the branch in the code repository.
   * 
   * @example
   * main
   */
  branch?: string;
  /**
   * @remarks
   * The endpoint. 
   * The URL address used to access the privately deployed GitLab instance.
   * 
   * @example
   * http://121.40.25.0
   */
  endpoint?: string;
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * 455231
   */
  orgId?: string;
  /**
   * @remarks
   * The owner of the code repository.
   * 
   * >  This parameter is available only if the git repository is private.
   * 
   * @example
   * aliyun-computenest
   */
  owner?: string;
  /**
   * @remarks
   * The platform type. Valid values: 
   * 
   * - github
   * 
   * - gitee
   * - gitlab
   * - codeup
   * 
   * @example
   * github
   */
  platform?: string;
  /**
   * @remarks
   * The repository ID.
   * 
   * @example
   * 103
   */
  repoId?: number;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * aliyun-computenest/quickstart-Lobexxx
   */
  repoName?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      endpoint: 'Endpoint',
      orgId: 'OrgId',
      owner: 'Owner',
      platform: 'Platform',
      repoId: 'RepoId',
      repoName: 'RepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      endpoint: 'string',
      orgId: 'string',
      owner: 'string',
      platform: 'string',
      repoId: 'number',
      repoName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

