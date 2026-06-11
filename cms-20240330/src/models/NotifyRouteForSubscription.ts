// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NotifyRouteForSubscriptionChannels extends $dara.Model {
  /**
   * @remarks
   * The channel type. For example, `Email`, `SMS`, or `Webhook`.
   */
  channelType?: string;
  /**
   * @remarks
   * A list of enabled sub-channels. Applicable to channels that support finer-grained topics or categories.
   */
  enabledSubChannels?: string[];
  /**
   * @remarks
   * A list of notification receivers. The receiver format depends on the `channelType`.
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
   * The active days of the week, specified as an array of integers.
   */
  dayInWeek?: number[];
  /**
   * @remarks
   * The end of the active period, in minutes from 00:00. The value ranges from 0 to 1439.
   */
  endTimeInMinute?: number;
  /**
   * @remarks
   * The start of the active period, in minutes from 00:00. The value ranges from 0 to 1439.
   */
  startTimeInMinute?: number;
  /**
   * @remarks
   * The time zone for the effect time range, specified in the IANA Time Zone Database format. For example, `UTC` or `Asia/Shanghai`.
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
   * An array of objects, each defining a notification channel.
   */
  channels?: NotifyRouteForSubscriptionChannels[];
  /**
   * @remarks
   * The active period for the notification rule.
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

