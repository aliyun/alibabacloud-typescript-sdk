// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TimeRange extends $dara.Model {
  /**
   * @remarks
   * The end time of the time range.
   * 
   * @example
   * 1688370894339
   */
  endTime?: number;
  /**
   * @remarks
   * The start time of the time range.
   * 
   * @example
   * 1688370894339
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

