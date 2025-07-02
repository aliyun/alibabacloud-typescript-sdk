// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TimeRange extends $dara.Model {
  /**
   * @remarks
   * 结束时间。
   * 
   * @example
   * 1676441972000
   */
  endTime?: string;
  /**
   * @remarks
   * 起始时间。
   * 
   * @example
   * 1676441971000
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

