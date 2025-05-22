// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSyncStatusResponseBodySyncStatusList extends $dara.Model {
  checkpoint?: number;
  code?: string;
  delay?: number;
  jobId?: string;
  rate?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      code: 'Code',
      delay: 'Delay',
      jobId: 'JobId',
      rate: 'Rate',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'number',
      code: 'string',
      delay: 'number',
      jobId: 'string',
      rate: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

