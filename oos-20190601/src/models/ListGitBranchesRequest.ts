// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGitBranchesRequest extends $dara.Model {
  /**
   * @example
   * TF-CreateApplication-1647587475-84104b89-eba5-47a8-b2fd-807b8b7d
   */
  clientToken?: string;
  /**
   * @example
   * 6fekfmnfll135123kdf33
   */
  orgId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * geegenw-j-imwinmtuej
   */
  owner?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gitee
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
   * 2642213
   */
  repoId?: number;
  static names(): { [key: string]: string } {
    return {
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
      clientToken: 'string',
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

