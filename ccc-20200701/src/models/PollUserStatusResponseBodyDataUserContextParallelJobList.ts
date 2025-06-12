// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PollUserStatusResponseBodyDataUserContextParallelJobList extends $dara.Model {
  jobId?: string;
  status?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      status: 'Status',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      status: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

