// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token. Ensures that repeated requests do not execute the same operation more than once.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to complete the restoration immediately. Default value: false.
   * 
   * @example
   * false
   */
  finalizeRestore?: boolean;
  /**
   * @remarks
   * The Supabase project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * spb-xxxx
   */
  projectId?: string;
  /**
   * @remarks
   * The region ID. Specifies the region in which to query or perform the operation.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the restored branch. If not specified, the backend generates a name automatically.
   * 
   * @example
   * restore_preview
   */
  restoredBranchName?: string;
  /**
   * @remarks
   * The snapshot LSN used for restoration.
   * 
   * This parameter is required.
   * 
   * @example
   * 0/3522648
   */
  restoredLsn?: string;
  /**
   * @remarks
   * The target branch ID. If not specified, the backend selects the target branch based on the restoration process.
   * 
   * @example
   * br-main
   */
  targetBranchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      finalizeRestore: 'FinalizeRestore',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      restoredBranchName: 'RestoredBranchName',
      restoredLsn: 'RestoredLsn',
      targetBranchId: 'TargetBranchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      finalizeRestore: 'boolean',
      projectId: 'string',
      regionId: 'string',
      restoredBranchName: 'string',
      restoredLsn: 'string',
      targetBranchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

