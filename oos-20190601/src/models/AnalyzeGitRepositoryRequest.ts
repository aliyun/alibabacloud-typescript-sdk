// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnalyzeGitRepositoryRequest extends $dara.Model {
  branch?: string;
  clientToken?: string;
  orgId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  owner?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  platform?: string;
  regionId?: string;
  repoFullName?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      clientToken: 'ClientToken',
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
      clientToken: 'string',
      orgId: 'string',
      owner: 'string',
      platform: 'string',
      regionId: 'string',
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

