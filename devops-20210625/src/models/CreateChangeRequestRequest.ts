// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChangeRequestRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sn123
   */
  appCodeRepoSn?: string;
  /**
   * @example
   * false
   */
  autoDeleteBranchWhenEnd?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hotfix/20240524
   */
  branchName?: string;
  /**
   * @example
   * false
   */
  createBranch?: boolean;
  /**
   * @example
   * 1332695887xxxxxx
   */
  ownerAccountId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  /**
   * @example
   * 66c0c9fffeb86b450c199fcd
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      appCodeRepoSn: 'appCodeRepoSn',
      autoDeleteBranchWhenEnd: 'autoDeleteBranchWhenEnd',
      branchName: 'branchName',
      createBranch: 'createBranch',
      ownerAccountId: 'ownerAccountId',
      ownerId: 'ownerId',
      title: 'title',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCodeRepoSn: 'string',
      autoDeleteBranchWhenEnd: 'boolean',
      branchName: 'string',
      createBranch: 'boolean',
      ownerAccountId: 'string',
      ownerId: 'string',
      title: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

