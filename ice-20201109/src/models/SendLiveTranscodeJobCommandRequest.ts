// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendLiveTranscodeJobCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The operation command. Only the stop command is supported. This command is used to stop a transcoding job.
   * 
   * This parameter is required.
   * 
   * @example
   * stop
   */
  command?: string;
  /**
   * @remarks
   * The ID of the transcoding job.
   * 
   * This parameter is required.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
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

