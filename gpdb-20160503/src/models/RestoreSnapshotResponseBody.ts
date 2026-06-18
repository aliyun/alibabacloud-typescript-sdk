// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreSnapshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the restored branch.
   * 
   * @example
   * br-restore
   */
  branchId?: string;
  /**
   * @remarks
   * The Supabase project ID.
   * 
   * @example
   * spb-xxxx
   */
  projectId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      branchId: 'BranchId',
      projectId: 'ProjectId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchId: 'string',
      projectId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

