// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduledPreloadExecutionRequest extends $dara.Model {
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: string;
  interval?: number;
  sliceLen?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      id: 'Id',
      interval: 'Interval',
      sliceLen: 'SliceLen',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      id: 'string',
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

