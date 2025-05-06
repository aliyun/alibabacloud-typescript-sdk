// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobRunsRequestEndTime extends $dara.Model {
  /**
   * @remarks
   * The end of the end time range.
   * 
   * @example
   * 1710432000000
   */
  endTime?: number;
  /**
   * @remarks
   * The beginning of the end time range.
   * 
   * @example
   * 1709740800000
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

