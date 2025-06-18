// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TimeRangeFilter extends $dara.Model {
  /**
   * @example
   * 2023-06-22T00:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 2023-06-22T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
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

