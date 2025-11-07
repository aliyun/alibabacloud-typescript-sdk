// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckGitRepositoryExistsRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @example
   * 5ffd468b1e45db3c1cc26ad6
   */
  orgId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ir9SK9n1u
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
   * LYH-RAIN/vue-color-avatar
   */
  repoFullName?: string;
  /**
   * @example
   * 2859382
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

