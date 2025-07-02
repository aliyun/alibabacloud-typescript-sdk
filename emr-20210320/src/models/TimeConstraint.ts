// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TimeConstraint extends $dara.Model {
  /**
   * @remarks
   * 结束时间。取值范围：00:00:00至23:59:59
   * 
   * @example
   * 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * 开始时间。取值范围：00:00:00至23:59:59
   * 
   * @example
   * 06:00:00
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

