// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleTimeSpan extends $dara.Model {
  /**
   * @remarks
   * 每周的星期几
   */
  dayOfWeek?: number[];
  /**
   * @remarks
   * 结束时间，格式HH:mm
   * 
   * @example
   * 23:00
   */
  endTime?: string;
  /**
   * @remarks
   * 默认北京时间： +0800
   * 
   * @example
   * +0800
   */
  gmtOffset?: string;
  /**
   * @remarks
   * 开始时间，格式HH:mm
   * 
   * @example
   * 09:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dayOfWeek: 'dayOfWeek',
      endTime: 'endTime',
      gmtOffset: 'gmtOffset',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayOfWeek: { 'type': 'array', 'itemType': 'number' },
      endTime: 'string',
      gmtOffset: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dayOfWeek)) {
      $dara.Model.validateArray(this.dayOfWeek);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

