// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecutePeriodEffectDay extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the policy takes effect on Friday when ValidType is set to Weekly. A value of true indicates that the policy takes effect, and a value of false indicates that the policy does not take effect.
   * 
   * @example
   * true
   */
  friday?: boolean;
  /**
   * @remarks
   * Specifies whether the policy takes effect on Monday when ValidType is set to Weekly. A value of true indicates that the policy takes effect, and a value of false indicates that the policy does not take effect.
   * 
   * @example
   * true
   */
  monday?: boolean;
  /**
   * @remarks
   * Specifies whether the policy takes effect on Saturday when ValidType is set to Weekly. A value of true indicates that the policy takes effect, and a value of false indicates that the policy does not take effect.
   * 
   * @example
   * false
   */
  saturday?: boolean;
  /**
   * @remarks
   * Specifies whether the policy takes effect on Sunday when ValidType is set to Weekly. A value of true indicates that the policy takes effect, and a value of false indicates that the policy does not take effect.
   * 
   * @example
   * false
   */
  sunday?: boolean;
  /**
   * @remarks
   * Specifies whether the policy takes effect on Thursday when ValidType is set to Weekly. A value of true indicates that the policy takes effect, and a value of false indicates that the policy does not take effect.
   * 
   * @example
   * true
   */
  thursday?: boolean;
  /**
   * @remarks
   * Specifies whether the policy takes effect on Tuesday when ValidType is set to Weekly. A value of true indicates that the policy takes effect, and a value of false indicates that the policy does not take effect.
   * 
   * @example
   * true
   */
  tuesday?: boolean;
  /**
   * @remarks
   * Specifies whether the policy takes effect on Wednesday when ValidType is set to Weekly. A value of true indicates that the policy takes effect, and a value of false indicates that the policy does not take effect.
   * 
   * @example
   * true
   */
  wednesday?: boolean;
  static names(): { [key: string]: string } {
    return {
      friday: 'Friday',
      monday: 'Monday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      thursday: 'Thursday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
    };
  }

  static types(): { [key: string]: any } {
    return {
      friday: 'boolean',
      monday: 'boolean',
      saturday: 'boolean',
      sunday: 'boolean',
      thursday: 'boolean',
      tuesday: 'boolean',
      wednesday: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecutePeriodEffectTime extends $dara.Model {
  /**
   * @remarks
   * The end time of the daily effective time range. It uses the 24-hour HH:mm format and is interpreted based on the current system time zone of the server. It must not be earlier than Start.
   * 
   * @example
   * 23:59
   */
  end?: string;
  /**
   * @remarks
   * The start time of the daily effective time range. It uses the 24-hour HH:mm format and is interpreted based on the current system time zone of the server.
   * 
   * @example
   * 00:00
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecutePeriodScheduleEffect extends $dara.Model {
  /**
   * @remarks
   * The frequency unit for periodic execution. It is used together with Interval to specify the execution cycle. For example, a value of day indicates daily execution.
   * 
   * @example
   * day
   */
  frequency?: string;
  /**
   * @remarks
   * The periodic execution interval. When Frequency is set, valid values are 1 to 10000. The unit is determined by Frequency. For example, if Frequency is set to day and Interval is set to 1, the execution interval is one day.
   * 
   * @example
   * 1
   */
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      frequency: 'Frequency',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frequency: 'string',
      interval: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecutePeriod extends $dara.Model {
  /**
   * @remarks
   * The effective days of the week configuration. Used when ValidType is set to Weekly.
   * 
   * @example
   * {"Monday":true,"Tuesday":true,"Wednesday":true,"Thursday":true,"Friday":true,"Saturday":false,"Sunday":false}
   */
  effectDay?: ExecutePeriodEffectDay;
  /**
   * @remarks
   * The daily effective time range. Both Start and End use the 24-hour HH:mm format and are interpreted based on the current system time zone of the server. The time range cannot span across days.
   * 
   * @example
   * {"Start":"00:00","End":"23:59"}
   */
  effectTime?: ExecutePeriodEffectTime;
  /**
   * @remarks
   * The frequency and interval configuration for periodic execution. Frequency and Interval together specify the execution cycle.
   * 
   * @example
   * {"Frequency":"day","Interval":1}
   */
  scheduleEffect?: ExecutePeriodScheduleEffect;
  /**
   * @remarks
   * The execution cycle mode. Valid values:
   * - **Once**: Single execution mode. Used in combination with ExecuteMode=Once.
   * - **Interval**: Periodic execution at a specified frequency. Used in combination with ExecuteMode=Schedule.
   * - **Weekly**: Weekly execution on selected days. Used in combination with ExecuteMode=Schedule and EffectDay.
   * 
   * @example
   * Interval
   */
  validType?: string;
  static names(): { [key: string]: string } {
    return {
      effectDay: 'EffectDay',
      effectTime: 'EffectTime',
      scheduleEffect: 'ScheduleEffect',
      validType: 'ValidType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectDay: ExecutePeriodEffectDay,
      effectTime: ExecutePeriodEffectTime,
      scheduleEffect: ExecutePeriodScheduleEffect,
      validType: 'string',
    };
  }

  validate() {
    if(this.effectDay && typeof (this.effectDay as any).validate === 'function') {
      (this.effectDay as any).validate();
    }
    if(this.effectTime && typeof (this.effectTime as any).validate === 'function') {
      (this.effectTime as any).validate();
    }
    if(this.scheduleEffect && typeof (this.scheduleEffect as any).validate === 'function') {
      (this.scheduleEffect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

