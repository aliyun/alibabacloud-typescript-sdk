// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProgramRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the channel.
   * 
   * This parameter is required.
   * 
   * @example
   * MyChannel
   */
  channelName?: string;
  /**
   * @remarks
   * The name of the program.
   * 
   * This parameter is required.
   * 
   * @example
   * program_name
   */
  programName?: string;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      programName: 'ProgramName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      programName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

