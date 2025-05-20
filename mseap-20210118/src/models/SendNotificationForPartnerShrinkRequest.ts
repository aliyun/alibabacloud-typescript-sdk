// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendNotificationForPartnerShrinkRequest extends $dara.Model {
  /**
   * @example
   * DMP
   */
  bizId?: string;
  /**
   * @example
   * 1
   */
  channelType?: string;
  /**
   * @example
   * MESSAGE
   */
  notifyType?: string;
  /**
   * @example
   * dmp_website_xxx
   */
  notifycationEventType?: string;
  paramMapShrink?: string;
  /**
   * @example
   * 12312212312
   */
  sendTarget?: string;
  smartSubChannelsShrink?: string;
  /**
   * @example
   * 5b29647n-a172-4ccd-ba33-73669896c287
   */
  trackId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      channelType: 'ChannelType',
      notifyType: 'NotifyType',
      notifycationEventType: 'NotifycationEventType',
      paramMapShrink: 'ParamMap',
      sendTarget: 'SendTarget',
      smartSubChannelsShrink: 'SmartSubChannels',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      channelType: 'string',
      notifyType: 'string',
      notifycationEventType: 'string',
      paramMapShrink: 'string',
      sendTarget: 'string',
      smartSubChannelsShrink: 'string',
      trackId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

