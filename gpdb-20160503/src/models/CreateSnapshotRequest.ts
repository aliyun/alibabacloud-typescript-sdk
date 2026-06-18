// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token. Ensures that repeated requests do not result in duplicate operations.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The LSN for the snapshot. You must specify either this parameter or SnapshotTimestamp. If this parameter is specified, the snapshot is created based on the specified LSN.
   * 
   * @example
   * 0/3522648
   */
  lsn?: string;
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
   * The region ID. Specifies the region in which to perform the operation.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The point in time for the snapshot. You must specify either this parameter or Lsn. If this parameter is specified, the snapshot is created based on the specified point in time.
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

