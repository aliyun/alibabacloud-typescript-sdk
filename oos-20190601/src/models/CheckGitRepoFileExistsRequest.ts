// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckGitRepoFileExistsRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  branch?: string;
  /**
   * @example
   * -
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * src/main/resources/config/promql_capacity.yaml
   */
  filePath?: string;
  /**
   * @example
   * 5f9f9f6122a8c7ff3934f99a
   */
  orgId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hujue
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
   * 2835387
   */
  repoId?: number;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      clientToken: 'ClientToken',
      filePath: 'FilePath',
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
      filePath: 'string',
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

