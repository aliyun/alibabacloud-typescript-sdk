// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshMediaPlayUrlsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the definitions of the streams that you want to purge or prefetch. You can specify multiple definitions. Separate multiple definitions with commas (,). If you do not specify this parameter, **streams in all definitions are purged or prefetched by default**.
   * > The value must be one of the values defined in **Definition** in [Metric description for media assets](https://help.aliyun.com/document_detail/124671.html).
   * 
   * @example
   * HD, SD
   */
  definitions?: string;
  /**
   * @remarks
   * The streaming formats that you want to refresh or prefetch. You can specify multiple formats. Separate multiple formats with commas (,). If you do not specify this parameter, **streams in all formats are refreshed or prefetched by default**. Valid values:
   * - **mp4**
   * - **m3u8**
   * - **mp3**
   * - **flv**
   * - **webm**
   * - **ts**
   * 
   * @example
   * mp4,m3u8
   */
  formats?: string;
  /**
   * @remarks
   * The IDs of the audio or video files that you want to refresh or prefetch. You can specify one or more IDs. Separate multiple IDs with commas (,). You can specify up to 20 IDs.
   * You can obtain audio or video IDs by using the following methods:
   * - For audio or video files uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the audio or video ID.
   * - When you call the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation to obtain the upload URL and credential, the audio or video ID is the value of the VideoId response parameter.
   * - After the audio or video file is uploaded, you can call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the audio or video ID, which is the value of the VideoId response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * ca3a8f6e4957b658067095869****, a6e49sfgd23p5g9ja7095863****
   */
  mediaIds?: string;
  /**
   * @remarks
   * The result type of the refresh or prefetch task. Valid values:
   * - **Single** (default): Only the latest transcoded stream for each definition and format is refreshed or prefetched.
   * - **Multiple**: All transcoded streams for each definition and format are refreshed or prefetched.
   * 
   * @example
   * Single
   */
  resultType?: string;
  /**
   * @remarks
   * The number of TS file playback URLs to refresh or prefetch for M3U8 streams. Only the first N TS file playback URLs of each M3U8 stream are refreshed or prefetched. Valid values: 1 to 20. **Default value: 5**.
   * 
   * @example
   * 5
   */
  sliceCount?: number;
  /**
   * @remarks
   * Specifies whether to refresh or prefetch the playback URLs of TS files in M3U8 streams. Valid values:
   * - **false** (default): No.
   * - **true**: Yes.
   * 
   * @example
   * false
   */
  sliceFlag?: boolean;
  /**
   * @remarks
   * The types of the streams that you want to refresh or prefetch. You can specify multiple stream types. Separate multiple stream types with commas (,). If you do not specify this parameter, **all stream types are refreshed or prefetched by default**. Valid values:
   * - **video**: video.
   * - **audio**: audio.
   * 
   * @example
   * video
   */
  streamType?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * - **Refresh**: purge.
   * - **Preload**: prefetch.
   * 
   * This parameter is required.
   * 
   * @example
   * Preload
   */
  taskType?: string;
  /**
   * @remarks
   * The custom settings. The value is a JSON string that supports settings such as message callbacks and upload acceleration. For more information, see [UserData](https://help.aliyun.com/document_detail/86952.html).
   * > - To use message callbacks in this parameter, configure an HTTP callback URL and select the corresponding callback event types in the console. Otherwise, the callback settings do not take effect. For information about how to configure HTTP callbacks in the console, see [Callback settings](https://help.aliyun.com/document_detail/86071.html).
   * > - To use the upload acceleration feature, submit a ticket to activate it. For more information, see [Upload instructions](https://help.aliyun.com/document_detail/55396.html). For information about how to submit a ticket, see [Contact us](https://help.aliyun.com/document_detail/464625.html).
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"}, "Extend":{"localId":"xxx","test":"www"}}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      definitions: 'Definitions',
      formats: 'Formats',
      mediaIds: 'MediaIds',
      resultType: 'ResultType',
      sliceCount: 'SliceCount',
      sliceFlag: 'SliceFlag',
      streamType: 'StreamType',
      taskType: 'TaskType',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definitions: 'string',
      formats: 'string',
      mediaIds: 'string',
      resultType: 'string',
      sliceCount: 'number',
      sliceFlag: 'boolean',
      streamType: 'string',
      taskType: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

