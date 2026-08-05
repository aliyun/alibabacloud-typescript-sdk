// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRtcCloudRecordingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the app to which the channel to be recorded belongs. The app must belong to the primary account associated with the current API caller\\"s account.
   * 
   * This parameter is required.
   * 
   * @example
   * ********-7074-****-9ef5-85c19a4*****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the channel to be recorded. Make sure that the channel has active users when you call this operation. Otherwise, the recording task fails to be created.
   * 
   * This parameter is required.
   * 
   * @example
   * room1024
   */
  channelId?: string;
  /**
   * @remarks
   * The idle timeout period. When the task remains idle for longer than MaxIdleTime, the task is automatically stopped. Unit: seconds. The value must be within [10,14400], which is a maximum of 4 hours. Default value: 300.
   * 
   * @example
   * 600
   */
  maxIdleTime?: number;
  /**
   * @remarks
   * The layout parameters. This parameter is not required in single-stream recording mode and is required in stream mixing recording mode when the output is not audio-only.
   */
  mixLayoutParamsShrink?: string;
  /**
   * @remarks
   * The transcoding parameters. This parameter is not required in single-stream recording mode and is required in stream mixing recording mode.
   */
  mixTranscodeParamsShrink?: string;
  /**
   * @remarks
   * The authentication key for callback messages. Leave this parameter empty to skip authentication. If specified, the key must be 16 to 64 characters in length and consist of only uppercase and lowercase letters and digits.
   * 
   * @example
   * mytestkeymytestkey
   */
  notifyAuthKey?: string;
  /**
   * @remarks
   * The specified formats for which a callback message is sent when the recording file upload event (RecordFileUploaded) is triggered.
   */
  notifyFileUploadedFormat?: string[];
  /**
   * @remarks
   * The URL for receiving callback messages. Task status messages are pushed to this URL in JSON format by using the POST method. The maximum length is 2048 characters.
   * 
   * @example
   * http://xxxx/test/mycallback
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The recording parameters.
   * 
   * This parameter is required.
   */
  recordParamsShrink?: string;
  /**
   * @remarks
   * The storage parameters.
   * 
   * This parameter is required.
   */
  storageParamsShrink?: string;
  /**
   * @remarks
   * The subscription parameters.
   * 
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
      notifyFileUploadedFormat: 'NotifyFileUploadedFormat',
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
      notifyFileUploadedFormat: { 'type': 'array', 'itemType': 'string' },
      notifyUrl: 'string',
      recordParamsShrink: 'string',
      storageParamsShrink: 'string',
      subscribeParamsShrink: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.notifyFileUploadedFormat)) {
      $dara.Model.validateArray(this.notifyFileUploadedFormat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

