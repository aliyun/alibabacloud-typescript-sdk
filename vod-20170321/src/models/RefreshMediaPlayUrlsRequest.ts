// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshMediaPlayUrlsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the resolutions of the media streams you want to refresh or prefetch. You can specify multiple resolutions. Separate multiple resolutions with commas (,). If you leave this parameter empty, media streams in all resolutions are refreshed or prefetched by default.
   * 
   * >  The value must be supported in the **Definition** section in [Parameters for media assets](https://help.aliyun.com/document_detail/124671.html).
   * 
   * @example
   * HD, SD
   */
  definitions?: string;
  /**
   * @remarks
   * The formats of the media streams you want to refresh or prefetch. You can specify multiple formats. Separate multiple formats with commas (,). If you leave this parameter empty, media streams in all formats are refreshed or prefetched by default. Valid values:
   * 
   * *   **mp4**
   * *   **m3u8**
   * *   **mp3**
   * *   **flv**
   * *   **webm**
   * *   **ts**
   * 
   * @example
   * mp4,m3u8
   */
  formats?: string;
  /**
   * @remarks
   * The IDs of the media files that you want to refresh or prefetch. You can specify a maximum of 20 IDs. Separate multiple IDs with commas (,). You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [ApsaraVideo VOD](https://vod.console.aliyun.com) console. In the left-side navigation pane, choose **Media Files** > **Audio/Video**. On the Video and Audio page, view the ID of the audio or video file. This method is applicable to files that are uploaded by using the ApsaraVideo VOD console.
   * *   Obtain the value of VideoId from the response to the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation that you call to upload media files.
   * *   Obtain the value of VideoId from the response to the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation that you call to query the media ID after the media file is uploaded.
   * 
   * This parameter is required.
   * 
   * @example
   * ca3a8f6e4957b658067095869****, a6e49sfgd23p5g9ja7095863****
   */
  mediaIds?: string;
  /**
   * @remarks
   * Specifies the type of the refresh or prefetch operation. Default value: Single. Valid values:
   * 
   * *   **Single**: Only one latest transcoded stream is refreshed or prefetched for each resolution and format.
   * *   **Multiple**: All transcoded streams are refreshed or prefetched for each resolution and format.
   * 
   * @example
   * Single
   */
  resultType?: string;
  /**
   * @remarks
   * Specifies the number of the playback URLs of the TS files for the M3U8 media stream you want to refresh or prefetch. After you set this parameter, only the playback URLs of the first N TS files will be refreshed or prefetched. Valid values: 1 to 20. Default value: 5.
   * 
   * @example
   * 5
   */
  sliceCount?: number;
  /**
   * @remarks
   * Specifies whether to refresh or prefetch the playback URLs of the TS files of the M3U8 media stream. Default value: false. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * false
   */
  sliceFlag?: boolean;
  /**
   * @remarks
   * Specifies the types of media streams you want to refresh or prefetch. You can specify multiple types. Separate multiple types with commas (,). If you leave this parameter empty, media streams in all types are refreshed or prefetched by default. Valid values:
   * 
   * *   **video**
   * *   **audio**
   * 
   * @example
   * video
   */
  streamType?: string;
  /**
   * @remarks
   * The type of the task that you want to create. Valid values:
   * 
   * *   **Refresh**
   * *   **Preload**
   * 
   * This parameter is required.
   * 
   * @example
   * Preload
   */
  taskType?: string;
  /**
   * @remarks
   * The custom configurations such as callback configurations and upload acceleration configurations. The value must be a JSON string. For more information, see the "UserData: specifies the custom configurations for media upload" section in the [Request parameter](https://help.aliyun.com/document_detail/86952.html) topic.
   * 
   * >*   The callback configurations take effect only after you specify the HTTP callback URL and select specific callback events in the ApsaraVideo VOD console. For more information about how to configure HTTP callback settings in the ApsaraVideo VOD console, see [Configure callback settings](https://help.aliyun.com/document_detail/86071.html).
   * >*   To enable the upload acceleration feature, submit a ticket. For more information, see [Overview](https://help.aliyun.com/document_detail/55396.html). For more information about how to submit a ticket, see [Contact us](https://help.aliyun.com/document_detail/464625.html).
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

