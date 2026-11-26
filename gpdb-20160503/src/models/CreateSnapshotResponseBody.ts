// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the branch to which the snapshot belongs.
   * 
   * @example
   * br-xxxx
   */
  branchId?: string;
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
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * The actual point in time when the snapshot was created.
   * 
   * @example
   * 2026-04-08T09:11:12Z
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      branchId: 'BranchId',
      lsn: 'Lsn',
      requestId: 'RequestId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchId: 'string',
      lsn: 'string',
      requestId: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

