// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGitRepositoryRequest extends $dara.Model {
  /**
   * @example
   * TF-CreateApplication-1647587475-84104b89-eba5-47a8-b2fd-807b8b7d
   */
  clientToken?: string;
  /**
   * @example
   * False
   */
  isPrivate?: boolean;
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
   * JJGGu
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
   * @example
   * main
   */
  sourceRepoBranch?: string;
  /**
   * @example
   * test-repo
   */
  sourceRepoName?: string;
  /**
   * @example
   * aliyun-computenest
   */
  sourceRepoOwner?: string;
  /**
   * @example
   * test-repo
   */
  targetRepoName?: string;
  /**
   * @example
   * namexx
   */
  targetRepoOwner?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      isPrivate: 'IsPrivate',
      orgId: 'OrgId',
      owner: 'Owner',
      platform: 'Platform',
      regionId: 'RegionId',
      sourceRepoBranch: 'SourceRepoBranch',
      sourceRepoName: 'SourceRepoName',
      sourceRepoOwner: 'SourceRepoOwner',
      targetRepoName: 'TargetRepoName',
      targetRepoOwner: 'TargetRepoOwner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      isPrivate: 'boolean',
      orgId: 'string',
      owner: 'string',
      platform: 'string',
      regionId: 'string',
      sourceRepoBranch: 'string',
      sourceRepoName: 'string',
      sourceRepoOwner: 'string',
      targetRepoName: 'string',
      targetRepoOwner: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

