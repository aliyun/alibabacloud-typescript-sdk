// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobExecutorsResponseBodyExecutorStatus extends $dara.Model {
  deleted?: number;
  exception?: number;
  failed?: number;
  initing?: number;
  pending?: number;
  running?: number;
  succeeded?: number;
  static names(): { [key: string]: string } {
    return {
      deleted: 'Deleted',
      exception: 'Exception',
      failed: 'Failed',
      initing: 'Initing',
      pending: 'Pending',
      running: 'Running',
      succeeded: 'Succeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: 'number',
      exception: 'number',
      failed: 'number',
      initing: 'number',
      pending: 'number',
      running: 'number',
      succeeded: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

