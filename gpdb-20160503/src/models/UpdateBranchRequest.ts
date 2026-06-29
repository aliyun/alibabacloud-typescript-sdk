// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBranchRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * dev
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBranchRequest extends $dara.Model {
  /**
   * @remarks
   * The branch ID that uniquely identifies a Supabase branch.
   * 
   * This parameter is required.
   * 
   * @example
   * br-xxxx
   */
  branchId?: string;
  /**
   * @remarks
   * The branch name.
   * 
   * This parameter is required.
   * 
   * @example
   * dev
   */
  branchName?: string;
  /**
   * @remarks
   * Specifies whether to clear the branch expiration time.
   * 
   * Valid values:
   * - true: Clears ExpiresAt.
   * - false: Does not clear ExpiresAt.
   * 
   * If this parameter is not specified, the existing expiration time remains unchanged.
   * 
   * @example
   * false
   */
  clearExpiresAt?: boolean;
  /**
   * @remarks
   * The branch description.
   * 
   * @example
   * test branch
   */
  description?: string;
  /**
   * @remarks
   * The time when the branch automatically expires and is deleted. The value is in ISO 8601 UTC format.
   * 
   * @example
   * 2026-10-08T09:11:12Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * The Supabase project ID that corresponds to the primary branch.
   * 
   * This parameter is required.
   * 
   * @example
   * spb-xxxx
   */
  projectId?: string;
  /**
   * @remarks
   * Specifies whether to enable branch protection.
   * 
   * Valid values:
   * - true: Branch protection is enabled.
   * - false: Branch protection is disabled. This is the default value.
   * 
   * @example
   * false
   */
  protected?: boolean;
  /**
   * @remarks
   * The region ID. This parameter is required when you create a primary branch. When you create a sub-branch, the region of the primary branch is inherited by default.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The list of branch tags.
   */
  tag?: UpdateBranchRequestTag[];
  static names(): { [key: string]: string } {
    return {
      branchId: 'BranchId',
      branchName: 'BranchName',
      clearExpiresAt: 'ClearExpiresAt',
      description: 'Description',
      expiresAt: 'ExpiresAt',
      projectId: 'ProjectId',
      protected: 'Protected',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchId: 'string',
      branchName: 'string',
      clearExpiresAt: 'boolean',
      description: 'string',
      expiresAt: 'string',
      projectId: 'string',
      protected: 'boolean',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': UpdateBranchRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

