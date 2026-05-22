// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledPreloadExecutionsRequestExecutions extends $dara.Model {
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  interval?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sliceLen?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      sliceLen: 'SliceLen',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'number',
      sliceLen: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledPreloadExecutionsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  executions?: CreateScheduledPreloadExecutionsRequestExecutions[];
  id?: string;
  static names(): { [key: string]: string } {
    return {
      executions: 'Executions',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executions: { 'type': 'array', 'itemType': CreateScheduledPreloadExecutionsRequestExecutions },
      id: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.executions)) {
      $dara.Model.validateArray(this.executions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

