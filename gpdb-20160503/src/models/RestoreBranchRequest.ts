// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreBranchRequest extends $dara.Model {
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
   * The client idempotency token that ensures the idempotence of retry requests.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426614174000
   */
  clientToken?: string;
  /**
   * @remarks
   * The backup branch name. If specified, automatic creation of a backup branch is performed before recovery.
   * 
   * @example
   * backup-main
   */
  preserveUnderName?: string;
  /**
   * @remarks
   * The Supabase project ID associated with the primary branch.
   * 
   * This parameter is required.
   * 
   * @example
   * spb-xxxx
   */
  projectId?: string;
  /**
   * @remarks
   * The region ID. This parameter is required when you create a primary branch. When you create a sub-branch, the region is inherited from the primary branch by default.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the source branch from which to recover.
   * 
   * This parameter is required.
   * 
   * @example
   * br-main
   */
  sourceBranchId?: string;
  /**
   * @remarks
   * The LSN of the source branch to recover to.
   * 
   * @example
   * 0/3522648
   */
  sourceBranchLsn?: string;
  /**
   * @remarks
   * The point in time of the source branch to recover to. The value must be within the recoverable time window.
   * 
   * @example
   * 2026-04-08T09:11:12Z
   */
  sourceBranchTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      branchId: 'BranchId',
      clientToken: 'ClientToken',
      preserveUnderName: 'PreserveUnderName',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      sourceBranchId: 'SourceBranchId',
      sourceBranchLsn: 'SourceBranchLsn',
      sourceBranchTimestamp: 'SourceBranchTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchId: 'string',
      clientToken: 'string',
      preserveUnderName: 'string',
      projectId: 'string',
      regionId: 'string',
      sourceBranchId: 'string',
      sourceBranchLsn: 'string',
      sourceBranchTimestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

