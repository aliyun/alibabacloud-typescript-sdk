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
   * The name of the branch.
   * 
   * This parameter is required.
   * 
   * @example
   * dev
   */
  branchName?: string;
  /**
   * @remarks
   * The client token used to ensure the idempotence of retry requests.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426614174000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the branch.
   * 
   * @example
   * test branch
   */
  description?: string;
  /**
   * @remarks
   * The time when the branch is automatically deleted after expiration. The time is in the ISO 8601 UTC format.
   * 
   * @example
   * 2026-10-08T09:11:12Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * The initialization source for the branch. Valid values:
   * - ParentData: copies the schema and data from the parent branch. This is the default value.
   * - SchemaOnly: copies only the schema structure.
   * 
   * @example
   * ParentData
   */
  initSource?: string;
  /**
   * @remarks
   * The ID of the parent branch. This parameter specifies the parent branch for the new branch or query conditions.
   * 
   * This parameter is required.
   * 
   * @example
   * br-main
   */
  parentBranchId?: string;
  /**
   * @remarks
   * The log sequence number (LSN) selected when you create a branch from the parent branch.
   * 
   * @example
   * 0/3522648
   */
  parentLsn?: string;
  /**
   * @remarks
   * The point in time for data synchronization when you create a branch from the parent branch. The time is in the ISO 8601 UTC format.
   * Default value: the current time.
   * 
   * @example
   * 2026-04-08T09:11:12Z
   */
  parentTimestamp?: string;
  /**
   * @remarks
   * The ID of the Supabase project to which the main branch belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * spb-xxxx
   */
  projectId?: string;
  /**
   * @remarks
   * Specifies whether to enable branch protection. Valid values:
   * - true: enables branch protection.
   * - false: disables branch protection. This is the default value.
   * 
   * @example
   * false
   */
  protected?: boolean;
  /**
   * @remarks
   * The region ID. This parameter is required when you create a main branch. When you create a child branch, it inherits the region of the main branch by default.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The list of tags for the branch.
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

