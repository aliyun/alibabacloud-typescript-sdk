// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NotifyChannel extends $dara.Model {
  /**
   * @remarks
   * The type of the notification channel.
   * 
   * @example
   * "DingTalk"
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

