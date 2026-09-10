// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NotifyRouteForSubscriptionChannels extends $dara.Model {
  /**
   * @remarks
   * The channel type.
   * 
   * @example
   * default
   */
  channelType?: string;
  /**
   * @remarks
   * The list of enabled sub-channels.
   */
  enabledSubChannels?: string[];
  /**
   * @remarks
   * The list of receivers.
   */
  receivers?: string[];
  static names(): { [key: string]: string } {
    return {
      channelType: 'channelType',
      enabledSubChannels: 'enabledSubChannels',
      receivers: 'receivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      enabledSubChannels: { 'type': 'array', 'itemType': 'string' },
      receivers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.enabledSubChannels)) {
      $dara.Model.validateArray(this.enabledSubChannels);
    }
    if(Array.isArray(this.receivers)) {
      $dara.Model.validateArray(this.receivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyRouteForSubscriptionEffectTimeRange extends $dara.Model {
  /**
   * @remarks
   * The effective days of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday).
   */
  dayInWeek?: number[];
  /**
   * @remarks
   * The end time of the day, in minutes from 0:00.
   * 
   * @example
   * 1
   */
  endTimeInMinute?: number;
  /**
   * @remarks
   * The start time of the day, in minutes from 0:00.
   * 
   * @example
   * 1
   */
  startTimeInMinute?: number;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * 1700000000
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      dayInWeek: 'dayInWeek',
      endTimeInMinute: 'endTimeInMinute',
      startTimeInMinute: 'startTimeInMinute',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayInWeek: { 'type': 'array', 'itemType': 'number' },
      endTimeInMinute: 'number',
      startTimeInMinute: 'number',
      timeZone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dayInWeek)) {
      $dara.Model.validateArray(this.dayInWeek);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyRouteForSubscription extends $dara.Model {
  /**
   * @remarks
   * The list of notification channels.
   */
  channels?: NotifyRouteForSubscriptionChannels[];
  /**
   * @remarks
   * The effective period configuration.
   */
  effectTimeRange?: NotifyRouteForSubscriptionEffectTimeRange;
  static names(): { [key: string]: string } {
    return {
      channels: 'channels',
      effectTimeRange: 'effectTimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': NotifyRouteForSubscriptionChannels },
      effectTimeRange: NotifyRouteForSubscriptionEffectTimeRange,
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    if(this.effectTimeRange && typeof (this.effectTimeRange as any).validate === 'function') {
      (this.effectTimeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

