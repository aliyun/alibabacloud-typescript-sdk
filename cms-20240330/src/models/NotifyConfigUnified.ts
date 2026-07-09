// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DirectNotifyChannel } from "./DirectNotifyChannel";


export class NotifyConfigUnified extends $dara.Model {
  activeDays?: number[];
  activeEndTime?: string;
  activeStartTime?: string;
  channels?: DirectNotifyChannel[];
  notifyStrategies?: string[];
  silenceTimeSecs?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  utcOffset?: string;
  static names(): { [key: string]: string } {
    return {
      activeDays: 'activeDays',
      activeEndTime: 'activeEndTime',
      activeStartTime: 'activeStartTime',
      channels: 'channels',
      notifyStrategies: 'notifyStrategies',
      silenceTimeSecs: 'silenceTimeSecs',
      type: 'type',
      utcOffset: 'utcOffset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeDays: { 'type': 'array', 'itemType': 'number' },
      activeEndTime: 'string',
      activeStartTime: 'string',
      channels: { 'type': 'array', 'itemType': DirectNotifyChannel },
      notifyStrategies: { 'type': 'array', 'itemType': 'string' },
      silenceTimeSecs: 'number',
      type: 'string',
      utcOffset: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.activeDays)) {
      $dara.Model.validateArray(this.activeDays);
    }
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    if(Array.isArray(this.notifyStrategies)) {
      $dara.Model.validateArray(this.notifyStrategies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

