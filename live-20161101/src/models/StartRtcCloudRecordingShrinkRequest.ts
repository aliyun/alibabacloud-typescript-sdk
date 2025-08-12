// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRtcCloudRecordingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ********-7074-****-9ef5-85c19a4*****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * room1024
   */
  channelId?: string;
  maxIdleTime?: number;
  mixLayoutParamsShrink?: string;
  mixTranscodeParamsShrink?: string;
  notifyAuthKey?: string;
  /**
   * @example
   * http://xxxx/test/mycallback
   */
  notifyUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  recordParamsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  storageParamsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  subscribeParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      maxIdleTime: 'MaxIdleTime',
      mixLayoutParamsShrink: 'MixLayoutParams',
      mixTranscodeParamsShrink: 'MixTranscodeParams',
      notifyAuthKey: 'NotifyAuthKey',
      notifyUrl: 'NotifyUrl',
      recordParamsShrink: 'RecordParams',
      storageParamsShrink: 'StorageParams',
      subscribeParamsShrink: 'SubscribeParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      maxIdleTime: 'number',
      mixLayoutParamsShrink: 'string',
      mixTranscodeParamsShrink: 'string',
      notifyAuthKey: 'string',
      notifyUrl: 'string',
      recordParamsShrink: 'string',
      storageParamsShrink: 'string',
      subscribeParamsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

