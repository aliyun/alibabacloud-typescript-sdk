// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token. It ensures that duplicate requests do not execute the same operation.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The log sequence number (LSN) for the snapshot. You must specify either this parameter or SnapshotTimestamp. If specified, the snapshot is created based on this LSN.
   * 
   * @example
   * 0/3522648
   */
  lsn?: string;
  /**
   * @remarks
   * The ID of the Supabase project.
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
   * The point in time for the snapshot. You must specify either this parameter or Lsn. If specified, the snapshot is created based on this point in time.
   * 
   * @example
   * 2026-04-08T09:11:12Z
   */
  snapshotTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lsn: 'Lsn',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      snapshotTimestamp: 'SnapshotTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lsn: 'string',
      projectId: 'string',
      regionId: 'string',
      snapshotTimestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

