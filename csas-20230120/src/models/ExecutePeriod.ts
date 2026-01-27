// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecutePeriodEffectDay extends $dara.Model {
  friday?: boolean;
  monday?: boolean;
  saturday?: boolean;
  sunday?: boolean;
  thursday?: boolean;
  tuesday?: boolean;
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
  end?: string;
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
  frequency?: string;
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
  effectDay?: ExecutePeriodEffectDay;
  effectTime?: ExecutePeriodEffectTime;
  scheduleEffect?: ExecutePeriodScheduleEffect;
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

