// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunUserPoolSyncJobResponseBody extends $dara.Model {
  requestId?: string;
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      synchronizationJobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

