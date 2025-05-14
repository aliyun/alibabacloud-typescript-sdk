// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSnapshotJobResponseBodySnapshotJob } from "./GetSnapshotJobResponseBodySnapshotJob";


export class GetSnapshotJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the snapshot job.
   */
  snapshotJob?: GetSnapshotJobResponseBodySnapshotJob;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotJob: 'SnapshotJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotJob: GetSnapshotJobResponseBodySnapshotJob,
    };
  }

  validate() {
    if(this.snapshotJob && typeof (this.snapshotJob as any).validate === 'function') {
      (this.snapshotJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

