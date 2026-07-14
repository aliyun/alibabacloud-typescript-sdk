// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The LSN of the snapshot to delete.
   * 
   * This parameter is required.
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
   * The region ID. Specifies the region in which to query or perform the operation.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      lsn: 'Lsn',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lsn: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

