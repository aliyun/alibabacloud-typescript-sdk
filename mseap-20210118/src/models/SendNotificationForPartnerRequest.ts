// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendNotificationForPartnerRequest extends $dara.Model {
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
  paramMap?: { [key: string]: string };
  /**
   * @example
   * 12312212312
   */
  sendTarget?: string;
  smartSubChannels?: string[];
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
      paramMap: 'ParamMap',
      sendTarget: 'SendTarget',
      smartSubChannels: 'SmartSubChannels',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      channelType: 'string',
      notifyType: 'string',
      notifycationEventType: 'string',
      paramMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sendTarget: 'string',
      smartSubChannels: { 'type': 'array', 'itemType': 'string' },
      trackId: 'string',
    };
  }

  validate() {
    if(this.paramMap) {
      $dara.Model.validateMap(this.paramMap);
    }
    if(Array.isArray(this.smartSubChannels)) {
      $dara.Model.validateArray(this.smartSubChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

