// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSnapshotJobRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of snapshots. Default value: **1**.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The height of each snapshot. Valid values: `[8,4096]`. By default, the height of the video source is used. Unit: pixels.
   * 
   * @example
   * 720
   */
  height?: string;
  /**
   * @remarks
   * The snapshot interval. The value must be **greater than or equal to 0**.
   * 
   * *   Unit: seconds.
   * *   Default value: **1**.
   * *   If you set this parameter to **0**, snapshots are captured at even intervals based on the video duration divided by the value of the Count parameter.
   * 
   * @example
   * 1
   */
  interval?: number;
  /**
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The ID of the snapshot template.
   * 
   * *   We recommend that you create a snapshot template before you specify the template ID. For more information about how to create a snapshot template, see [AddVodTemplate](https://help.aliyun.com/document_detail/99406.html).
   * *   If you set the SnapshotTemplateId parameter, all the other request parameters except the Action and VideoId parameters are ignored.
   * 
   * @example
   * f5b228fe693bf55bd87b789****
   */
  snapshotTemplateId?: string;
  /**
   * @remarks
   * The point in time when the first snapshot is captured.
   * 
   * *   Unit: milliseconds.
   * *   Default value: **0**.
   * 
   * @example
   * 0
   */
  specifiedOffsetTime?: number;
  /**
   * @remarks
   * The playback positions at which you want to capture snapshots. Unit: milliseconds. You can specify up to 30 playback positions in a request.
   */
  specifiedOffsetTimes?: number[];
  /**
   * @remarks
   * The sprite snapshot configuration. If you set this parameter, sprite snapshots are generated. For more information, see [SpriteSnapshotConfig](https://help.aliyun.com/document_detail/86952.html).
   * 
   * @example
   * {\\"CellWidth\\": 120, \\"CellHeight\\": 68, \\"Columns\\": 3,\\"Lines\\": 10, \\"Padding\\": 20, \\"Margin\\": 50}
   */
  spriteSnapshotConfig?: string;
  /**
   * @remarks
   * The custom configurations including the configuration of transparent data transmission and callback configurations. The value must be a JSON string. For more information, see [UserData](https://help.aliyun.com/document_detail/86952.html).
   * 
   * >  To use the message callback feature, you must specify an HTTP callback URL and the callback events in the ApsaraVideo VOD console. Otherwise, the callback settings do not take effect.
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://.example.aliyundoc.com"},"Extend":{"localId":"xxx","example":"www"}}
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the video. You can use one of the following methods to obtain the ID:
   * 
   * *   After you upload a video in the ApsaraVideo VOD console, you can log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the ID of the video.
   * *   Obtain the video ID from the response to the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation that you called to obtain the upload URL and credential.
   * *   Obtain the video ID from the response to the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation that you called to query media information after the audio or video file is uploaded.
   * 
   * @example
   * d3e680e618708efbf2cae7cc9312****
   */
  videoId?: string;
  /**
   * @remarks
   * The width of each snapshot. Valid values: `[8,4096]`. By default, the width of the video source is used. Unit: pixels.
   * 
   * @example
   * 1280
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      height: 'Height',
      interval: 'Interval',
      referenceId: 'ReferenceId',
      snapshotTemplateId: 'SnapshotTemplateId',
      specifiedOffsetTime: 'SpecifiedOffsetTime',
      specifiedOffsetTimes: 'SpecifiedOffsetTimes',
      spriteSnapshotConfig: 'SpriteSnapshotConfig',
      userData: 'UserData',
      videoId: 'VideoId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      height: 'string',
      interval: 'number',
      referenceId: 'string',
      snapshotTemplateId: 'string',
      specifiedOffsetTime: 'number',
      specifiedOffsetTimes: { 'type': 'array', 'itemType': 'number' },
      spriteSnapshotConfig: 'string',
      userData: 'string',
      videoId: 'string',
      width: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.specifiedOffsetTimes)) {
      $dara.Model.validateArray(this.specifiedOffsetTimes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

