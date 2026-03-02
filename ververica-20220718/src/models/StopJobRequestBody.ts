// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopJobRequestBody extends $dara.Model {
  /**
   * @remarks
   * The strategy that is used to stop a job. Valid values:
   * 
   * *   `NONE`: Directly stop the job.
   * *   `STOP_WITH_SAVEPOINT`: Stop the job after a savepoint is generated.
   * *   `STOP_WITH_DRAIN`: Stop the job and drain the pipeline. Use this strategy only if you want to permanently terminate the job.
   * 
   * This parameter is required.
   * 
   * @example
   * NONE
   */
  stopStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      stopStrategy: 'stopStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

