// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBranchRequestTag extends $dara.Model {
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

export class CreateBranchRequest extends $dara.Model {
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
   * The client idempotency token. This token ensures the idempotence of retry requests.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426614174000
   */
  clientToken?: string;
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
   * The time at which the branch automatically expires and is deleted. The value is in ISO 8601 UTC format.
   * 
   * @example
   * 2026-10-08T09:11:12Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * The initialization source of the branch.
   * 
   * Valid values:
   * - ParentData: copies the schema and data from the parent branch. This is the default value.
   * - SchemaOnly: copies only the schema structure.
   * 
   * @example
   * ParentData
   */
  initSource?: string;
  /**
   * @remarks
   * The parent branch ID. This parameter specifies the parent branch for the new branch or query condition.
   * 
   * This parameter is required.
   * 
   * @example
   * br-main
   */
  parentBranchId?: string;
  /**
   * @remarks
   * The log sequence number (LSN) from the parent branch at which the branch is created.
   * 
   * @example
   * 0/3522648
   */
  parentLsn?: string;
  /**
   * @remarks
   * The point in time for data synchronization from the parent branch when creating the branch. The value is in ISO 8601 UTC format.
   * 
   * Default value: the current time.
   * 
   * @example
   * 2026-04-08T09:11:12Z
   */
  parentTimestamp?: string;
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
   * - true: Enables branch protection.
   * - false: Disables branch protection. This is the default value.
   * 
   * @example
   * false
   */
  protected?: boolean;
  /**
   * @remarks
   * The region ID. This parameter is required when you create a primary branch. When you create a child branch, the region is inherited from the primary branch by default.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The list of branch tags.
   */
  tag?: CreateBranchRequestTag[];
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      clientToken: 'ClientToken',
      description: 'Description',
      expiresAt: 'ExpiresAt',
      initSource: 'InitSource',
      parentBranchId: 'ParentBranchId',
      parentLsn: 'ParentLsn',
      parentTimestamp: 'ParentTimestamp',
      projectId: 'ProjectId',
      protected: 'Protected',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      clientToken: 'string',
      description: 'string',
      expiresAt: 'string',
      initSource: 'string',
      parentBranchId: 'string',
      parentLsn: 'string',
      parentTimestamp: 'string',
      projectId: 'string',
      protected: 'boolean',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': CreateBranchRequestTag },
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

