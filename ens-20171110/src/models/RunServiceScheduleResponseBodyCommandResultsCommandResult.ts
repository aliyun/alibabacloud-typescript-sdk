// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunServiceScheduleResponseBodyCommandResultsCommandResult extends $dara.Model {
  /**
   * @remarks
   * The command.
   * 
   * @example
   * ls -l /data
   */
  command?: string;
  /**
   * @remarks
   * The name of the container.
   * 
   * @example
   * android
   */
  containerName?: string;
  /**
   * @remarks
   * The execution result of the command.
   * 
   * @example
   * success
   */
  resultMsg?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      containerName: 'ContainerName',
      resultMsg: 'ResultMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      containerName: 'string',
      resultMsg: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

