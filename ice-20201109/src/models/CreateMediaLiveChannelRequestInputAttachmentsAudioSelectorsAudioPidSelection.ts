// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioPidSelection extends $dara.Model {
  /**
   * @remarks
   * Enter a specific PID from within a source.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  pid?: number;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

