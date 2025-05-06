// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TimeRange extends $dara.Model {
  /**
   * @remarks
   * 时间范围结束时间。
   * 
   * @example
   * 1688370894339
   */
  endTime?: number;
  /**
   * @remarks
   * 时间范围开始时间。
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

