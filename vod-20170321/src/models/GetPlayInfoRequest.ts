// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPlayInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the live comment mask data. Valid value: **danmu**.
   * 
   * > This parameter takes effect only when OutputType is set to cdn.
   * 
   * @example
   * danmu
   */
  additionType?: string;
  /**
   * @remarks
   * The validity period of the playback URL. Unit: seconds.
   * 
   * - When OutputType is set to **cdn**:
   * 
   *     - The playback URL expires periodically only if URL authentication is enabled. Otherwise, the URL is permanently valid. For more information about how to enable and configure URL authentication, refer to [URL authentication](https://help.aliyun.com/document_detail/86090.html).
   *     - Minimum value: **1**.
   *     - Maximum value: unlimited.
   *     - Default value: If this parameter is not specified, the default validity period configured for URL authentication is used.
   * 
   * - When OutputType is set to **oss**:
   * 
   *     - The playback URL expires periodically only if the storage permission is set to private. Otherwise, the URL is permanently valid.
   *     - Minimum value: **1**.
   *     - Maximum value: To reduce security risks of the origin server, the maximum value is **604800** (7 days) when the audio or video file is stored in an ApsaraVideo VOD bucket, and **129600** (36 hours) when the file is stored in a user-owned OSS bucket. If the maximum value does not meet your requirements, you can set OutputType to **cdn** and configure URL authentication to set a longer validity period.
   *     - Default value: If this parameter is not specified, the value is **3600**.
   * 
   * @example
   * 1800
   */
  authTimeout?: number;
  /**
   * @remarks
   * The codec.
   * 
   * @example
   * H264
   */
  codecName?: string;
  /**
   * @remarks
   * The definition of the video stream. Separate multiple definitions with commas (,). Valid values:
   * 
   * - **FD**: fluent.
   * - **LD**: standard definition.
   * - **SD**: high definition.
   * - **HD**: ultra-high definition.
   * - **OD**: original definition.
   * - **2K**: 2K.
   * - **4K**: 4K.
   * - **SQ**: standard sound quality.
   * - **HQ**: high sound quality.
   * - **AUTO**: adaptive bitrate.
   * 
   * > - By default, streams of all definitions are retrieved.
   * > - When a tracing watermark is generated, this parameter is required and must be consistent with the definition configured for tracing watermark transcoding.
   * > - The AUTO format is output only when transcoding packaging is configured in the transcoding template. For more information, refer to [PackageSetting: transcoding packaging settings](~~52839#title-4fk-cg8-gzx~~).
   * 
   * @example
   * LD
   */
  definition?: string;
  /**
   * @remarks
   * The digital watermarking type. Valid values:
   * 
   * - TraceMark: tracing watermark.
   * - CopyrightMark: copyright watermark.
   * 
   * @example
   * TraceMark
   */
  digitalWatermarkType?: string;
  /**
   * @remarks
   * The format of the media stream. Separate multiple formats with commas (,). Valid values:
   * 
   * - **mp4**
   * - **m3u8**
   * - **mp3**
   * - **flv**
   * - **mpd**
   * 
   * 
   * > - By default, streams of all formats are retrieved.
   * > - The mpd format is output only when the dash container format is configured in the transcoding template. For more information, refer to [Container: container format](~~52839#title-7rr-3hj-gy5~~).
   * 
   * @example
   * mp4,m3u8
   */
  formats?: string;
  /**
   * @remarks
   * The type of the output URL. Valid values:
   * 
   * - **oss**: the back-to-origin URL.
   * - **cdn** (default): the accelerated URL.
   * 
   * @example
   * cdn
   */
  outputType?: string;
  /**
   * @remarks
   * The custom playback settings. The value is a JSON string. You can specify the domain name for playback. For more information about how to construct the parameter, refer to [PlayConfig](~~86952#section-9g7-s9b-v7z~~).
   * 
   * > - If PlayConfig is not specified or the PlayDomain field in PlayConfig is not specified, the operation uses the default domain name configured in ApsaraVideo VOD by default. If no default domain name is configured, the operation queries domain names in descending order of modification time and uses the most recently modified domain name as the playback domain name. To prevent an unexpected domain name from being returned, we recommend that you configure a default playback domain name. You can log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Asset Management Configuration** > **Storage Management** > **Manage** > **Domain Names that Route Back-to-origin Traffic to This Storage Address** to configure the default playback domain name.
   * > - When the EncryptType parameter in PlayConfig is set to AliyunVoDEncryption, the playback URL of the private encrypted stream is not returned by default to ensure video security. To return the playback URL of the private encrypted stream, you must also set the ResultType parameter to Multiple.
   * 
   * @example
   * {"PlayDomain":"vod.test_domain","XForwardedFor":"yqCD7Fp1uqChoVj/sl/p5Q==","PreviewTime":"20","MtsHlsUriToken":"yqCD7Fp1uqChoVjslp5Q"}
   */
  playConfig?: string;
  /**
   * @remarks
   * The CDN reauthentication parameter, which is a JSON string. When type A signing of URL authentication is enabled, you can use this parameter to set the uid and rand values of the authenticated URL. For more information, refer to [Type A signing](https://help.aliyun.com/document_detail/2249352.html).
   * 
   * @example
   * {"uid":"12345","rand":"abckljd"}
   */
  reAuthInfo?: string;
  /**
   * @remarks
   * The custom ID. The ID must be 6 to 64 characters in length and can contain only lowercase letters, uppercase letters, digits, hyphens (-), and underscores (_). The ID must be unique per user.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The type of the returned data. Valid values:
   * 
   * - **Single** (default): returns only the latest transcoded stream for each definition and format.
   * - **Multiple**: returns all transcoded streams for each definition and format.
   * 
   * @example
   * Single
   */
  resultType?: string;
  /**
   * @remarks
   * The type of the media stream. Separate multiple types with commas (,). Valid values:
   * 
   * - **video**: video.
   * - **audio**: audio.
   * 
   * By default, streams of all types are retrieved.
   * 
   * @example
   * video
   */
  streamType?: string;
  /**
   * @remarks
   * The custom digital watermarking information.
   * - When DigitalWatermarkType is set to TraceMark, you can pass this parameter to set the tracing watermark information for the video and return the video stream that contains the watermark information. Only English letters, digits, and Chinese characters are supported. A maximum of 1,024 characters are supported.
   * - When DigitalWatermarkType is set to CopyrightMark, Trace corresponds to the **Watermark Text** set when the watermark template is created. By passing this parameter, you can query and return the video stream with the specified watermark text.
   * 
   * @example
   * test mark
   */
  trace?: string;
  /**
   * @remarks
   * The ID of the audio or video file. You can specify only one ID. You can obtain the ID by using one of the following methods:
   * - For an audio or video file uploaded in the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Library** > **Audio/Video** to view the ID.
   * - When you upload an audio or video file by calling the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation, the ID is the value of the VideoId response parameter.
   * - After an audio or video file is uploaded, you can call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the ID, which is the value of the VideoId response parameter.
   * 
   * @example
   * 93ab850b4f654b6e91d24d81d44****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      additionType: 'AdditionType',
      authTimeout: 'AuthTimeout',
      codecName: 'CodecName',
      definition: 'Definition',
      digitalWatermarkType: 'DigitalWatermarkType',
      formats: 'Formats',
      outputType: 'OutputType',
      playConfig: 'PlayConfig',
      reAuthInfo: 'ReAuthInfo',
      referenceId: 'ReferenceId',
      resultType: 'ResultType',
      streamType: 'StreamType',
      trace: 'Trace',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionType: 'string',
      authTimeout: 'number',
      codecName: 'string',
      definition: 'string',
      digitalWatermarkType: 'string',
      formats: 'string',
      outputType: 'string',
      playConfig: 'string',
      reAuthInfo: 'string',
      referenceId: 'string',
      resultType: 'string',
      streamType: 'string',
      trace: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

