// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreBranchRequest extends $dara.Model {
  /**
   * @remarks
   * The branch ID, which uniquely identifies a Supabase branch.
   * 
   * This parameter is required.
   * 
   * @example
   * br-xxxx
   */
  branchId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of retry requests.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426614174000
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the backup branch. If you specify this parameter, automatic creation of a backup branch is performed before you recover the branch.
   * 
   * @example
   * backup-main
   */
  preserveUnderName?: string;
  /**
   * @remarks
   * The ID of the Supabase project to which the primary branch belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * spb-xxxx
   */
  projectId?: string;
  /**
   * @remarks
   * The region ID. This parameter is required when you create a primary branch. When you create a child branch, the region ID of the primary branch is inherited by default.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the source branch for the restoration.
   * 
   * This parameter is required.
   * 
   * @example
   * br-main
   */
  sourceBranchId?: string;
  /**
   * @remarks
   * The LSN of the source branch for the restoration.
   * 
   * @example
   * 0/3522648
   */
  sourceBranchLsn?: string;
  /**
   * @remarks
   * The point in time of the source branch for the restoration. The specified point in time must be within the restorable window.
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

