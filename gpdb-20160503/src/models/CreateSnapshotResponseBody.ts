// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The branch ID to which the snapshot belongs.
   * 
   * @example
   * br-xxxx
   */
  branchId?: string;
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
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * The actual point in time that corresponds to the created snapshot.
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

