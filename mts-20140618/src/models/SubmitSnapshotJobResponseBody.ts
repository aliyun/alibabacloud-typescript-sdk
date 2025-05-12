// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitSnapshotJobResponseBodySnapshotJob } from "./SubmitSnapshotJobResponseBodySnapshotJob";


export class SubmitSnapshotJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 19B6D8C5-A5DD-467A-B435-29D393C71E2D
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the snapshot job.
   */
  snapshotJob?: SubmitSnapshotJobResponseBodySnapshotJob;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotJob: 'SnapshotJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotJob: SubmitSnapshotJobResponseBodySnapshotJob,
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

