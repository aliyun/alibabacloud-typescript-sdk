// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendLiveSnapshotJobCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The operation command.
   * 
   * Valid values:
   * 
   * *   stop
   * *   restart
   * *   start
   * 
   * This parameter is required.
   * 
   * @example
   * start
   */
  command?: string;
  /**
   * @remarks
   * The ID of the snapshot job.
   * 
   * This parameter is required.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

