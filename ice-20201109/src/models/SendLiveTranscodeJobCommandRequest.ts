// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendLiveTranscodeJobCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The operation instruction. Currently, only stop is supported, which is used to shut down a video transcoding task.
   * 
   * This parameter is required.
   * 
   * @example
   * stop
   */
  command?: string;
  /**
   * @remarks
   * The video transcoding task ID.
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

