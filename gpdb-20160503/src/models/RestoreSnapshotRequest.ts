// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token used to ensure that repeated requests do not execute the same operation.
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
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the restored branch. If you do not specify this parameter, the backend generates a name.
   * 
   * @example
   * restore_preview
   */
  restoredBranchName?: string;
  /**
   * @remarks
   * The snapshot LSN used for the restoration.
   * 
   * This parameter is required.
   * 
   * @example
   * 0/3522648
   */
  restoredLsn?: string;
  /**
   * @remarks
   * The target branch ID. If you do not specify this parameter, the backend selects the target branch based on the restoration process.
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

