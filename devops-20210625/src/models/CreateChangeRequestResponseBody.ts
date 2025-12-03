// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChangeRequestResponseBody extends $dara.Model {
  /**
   * @example
   * sn123
   */
  appCodeRepoSn?: string;
  /**
   * @example
   * app-name
   */
  appName?: string;
  /**
   * @example
   * false
   */
  autoDeleteBranchWhenEnd?: boolean;
  /**
   * @example
   * hotfix/20240524
   */
  branch?: string;
  /**
   * @example
   * create-account-123
   */
  creatorAccountId?: string;
  /**
   * @example
   * create-id-123
   */
  creatorId?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  name?: string;
  /**
   * @example
   * master
   */
  originBranch?: string;
  /**
   * @example
   * revision-123
   */
  originBranchRevisionSha?: string;
  /**
   * @example
   * account-id-123
   */
  ownerAccountId?: string;
  /**
   * @example
   * owner-id-123
   */
  ownerId?: string;
  /**
   * @example
   * ce51b31b996246ecaf874736838360b2
   */
  sn?: string;
  /**
   * @example
   * DEVELOPING
   */
  state?: string;
  /**
   * @example
   * APP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appCodeRepoSn: 'appCodeRepoSn',
      appName: 'appName',
      autoDeleteBranchWhenEnd: 'autoDeleteBranchWhenEnd',
      branch: 'branch',
      creatorAccountId: 'creatorAccountId',
      creatorId: 'creatorId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      name: 'name',
      originBranch: 'originBranch',
      originBranchRevisionSha: 'originBranchRevisionSha',
      ownerAccountId: 'ownerAccountId',
      ownerId: 'ownerId',
      sn: 'sn',
      state: 'state',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCodeRepoSn: 'string',
      appName: 'string',
      autoDeleteBranchWhenEnd: 'boolean',
      branch: 'string',
      creatorAccountId: 'string',
      creatorId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      name: 'string',
      originBranch: 'string',
      originBranchRevisionSha: 'string',
      ownerAccountId: 'string',
      ownerId: 'string',
      sn: 'string',
      state: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

