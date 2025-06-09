// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErrorsShrinkRequestTimeRange extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1740499200000
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1739894400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
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

