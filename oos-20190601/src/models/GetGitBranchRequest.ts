// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGitBranchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * main
   */
  branch?: string;
  /**
   * @example
   * 5ffd468b1e45db3c1cc26ad6
   */
  orgId?: string;
  /**
   * @example
   * namexxx
   */
  owner?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * github
   */
  platform?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alibaba/fastjson
   */
  repoFullName?: string;
  /**
   * @example
   * 2823742
   */
  repoId?: number;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      orgId: 'OrgId',
      owner: 'Owner',
      platform: 'Platform',
      regionId: 'RegionId',
      repoFullName: 'RepoFullName',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      orgId: 'string',
      owner: 'string',
      platform: 'string',
      regionId: 'string',
      repoFullName: 'string',
      repoId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

