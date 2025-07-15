// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRtcAsrTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The AuthKey that is used to generate the MD5 signature in callbacks.
   * 
   * @example
   * abcd
   */
  authKey?: string;
  /**
   * @remarks
   * The maximum latency at which the task is automatically stopped. Unit: seconds. Valid values: 1 to 10.
   * 
   * @example
   * 5
   */
  autoTerminateDelay?: number;
  /**
   * @remarks
   * Specifies whether to automatically stop the task when the latency exceeds the specified limit. Default value: false.
   * 
   * @example
   * true
   */
  autoTerminateEnabled?: boolean;
  /**
   * @remarks
   * The callback URL.
   * 
   * This parameter is required.
   * 
   * @example
   * http://xxx.com
   */
  callbackURL?: string;
  /**
   * @remarks
   * The ID of the channel.
   * 
   * >  This parameter is required and takes effect only if you set the Mode parameter to rtc.
   * 
   * @example
   * channelId
   */
  channelID?: string;
  /**
   * @remarks
   * The source language of the audio. Valid values:
   * 
   * *   ja: Japanese
   * *   yue: Cantonese
   * *   fspk: mixed Mandarin and English
   * *   en: English
   * *   cn: Mandarin
   * 
   * This parameter is required.
   * 
   * @example
   * cn
   */
  language?: string;
  /**
   * @remarks
   * The type of the stream. Valid values: live and rtc. The value live specifies a regular live stream, such as a Real-Time Messaging Protocol (RTMP) stream.
   * 
   * This parameter is required.
   * 
   * @example
   * live
   */
  mode?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The interval at which callbacks are returned. Unit: milliseconds. Valid values: -1 and 0 to 500.
   * 
   * *   \\-1: accepts callbacks only for whole sentences, but not for incomplete sentences.
   * *   0 or an empty value: returns callbacks in real time.
   * *   A value that is greater than 0 and less than or equal to 500: returns callbacks at the specified interval.
   * 
   * @example
   * 5
   */
  reportInterval?: number;
  /**
   * @remarks
   * The ID of the user who ingests the stream.
   * 
   * >  This parameter is required and takes effect only if you set the Mode parameter to rtc. You can specify only one user ID.
   * 
   * @example
   * user1
   */
  rtcUserId?: string;
  /**
   * @remarks
   * The ID of the ApsaraVideo Real-time Communication (ARTC) application.
   * 
   * >  This parameter is required and takes effect only if you set the Mode parameter to rtc.
   * 
   * @example
   * appId
   */
  SDKAppID?: string;
  /**
   * @remarks
   * The URL of the live stream.
   * 
   * >  This parameter is required and takes effect only if you set the Mode parameter to live.
   * 
   * @example
   * rtmp://xxx
   */
  streamURL?: string;
  /**
   * @remarks
   * The language into which the subtitles are translated. Valid values:
   * 
   * *   cn: Chinese
   * *   en: English
   * *   ja: Japanese
   * 
   * @example
   * en
   */
  targetLanguages?: string;
  /**
   * @remarks
   * Specifies whether to enable the translation feature.
   * 
   * @example
   * true
   */
  translateEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      autoTerminateDelay: 'AutoTerminateDelay',
      autoTerminateEnabled: 'AutoTerminateEnabled',
      callbackURL: 'CallbackURL',
      channelID: 'ChannelID',
      language: 'Language',
      mode: 'Mode',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      reportInterval: 'ReportInterval',
      rtcUserId: 'RtcUserId',
      SDKAppID: 'SDKAppID',
      streamURL: 'StreamURL',
      targetLanguages: 'TargetLanguages',
      translateEnabled: 'TranslateEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      autoTerminateDelay: 'number',
      autoTerminateEnabled: 'boolean',
      callbackURL: 'string',
      channelID: 'string',
      language: 'string',
      mode: 'string',
      ownerId: 'number',
      regionId: 'string',
      reportInterval: 'number',
      rtcUserId: 'string',
      SDKAppID: 'string',
      streamURL: 'string',
      targetLanguages: 'string',
      translateEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

