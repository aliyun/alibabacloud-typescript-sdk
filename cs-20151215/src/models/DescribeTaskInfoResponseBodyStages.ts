// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskInfoResponseBodyStages extends $dara.Model {
  /**
   * @remarks
   * The end time of the stage.
   * 
   * @example
   * 2022-12-15 23:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The message about the stage.
   * 
   * @example
   * success to xxxxx
   */
  message?: string;
  /**
   * @remarks
   * The output generated at the stage.
   */
  outputs?: { [key: string]: any };
  /**
   * @remarks
   * The start time of the stage.
   * 
   * @example
   * 2022-12-15 23:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the stage.
   * 
   * @example
   * running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'end_time',
      message: 'message',
      outputs: 'outputs',
      startTime: 'start_time',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      message: 'string',
      outputs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      startTime: 'string',
      state: 'string',
    };
  }

  validate() {
    if(this.outputs) {
      $dara.Model.validateMap(this.outputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

