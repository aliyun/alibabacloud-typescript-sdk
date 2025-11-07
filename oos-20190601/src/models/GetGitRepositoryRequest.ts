// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGitRepositoryRequest extends $dara.Model {
  /**
   * @example
   * 5e9ee15af89c9700014a558a
   */
  orgId?: string;
  /**
   * @example
   * testowner
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
   * 286584
   */
  repoId?: number;
  static names(): { [key: string]: string } {
    return {
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

