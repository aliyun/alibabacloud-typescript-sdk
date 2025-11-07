// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGitRepositoryContentsRequest extends $dara.Model {
  /**
   * @example
   * dev
   */
  branch?: string;
  /**
   * @example
   * -
   */
  clientToken?: string;
  /**
   * @example
   * dir
   */
  contentType?: string;
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
   * dhuai
   */
  owner?: string;
  /**
   * @example
   * dir1
   */
  path?: string;
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
   * @example
   * LYH-RAIN/vue-color-avatar
   */
  repoFullName?: string;
  /**
   * @example
   * 2642213
   */
  repoId?: number;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      clientToken: 'ClientToken',
      contentType: 'ContentType',
      orgId: 'OrgId',
      owner: 'Owner',
      path: 'Path',
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
      contentType: 'string',
      orgId: 'string',
      owner: 'string',
      path: 'string',
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

