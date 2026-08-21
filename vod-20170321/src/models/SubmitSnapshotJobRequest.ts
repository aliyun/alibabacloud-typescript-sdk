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
   * The snapshot height. Valid values: `[8,4096]`. Default value: the source video height. Unit: px.
   * 
   * @example
   * 720
   */
  height?: string;
  /**
   * @remarks
   * The snapshot interval. The value must be **greater than or equal to 0**.
   * - Unit: seconds.
   * - Default value: **1**.
   * - If Interval is set to **0**, snapshots are evenly captured based on the value of Count and the video duration.
   * 
   * @example
   * 1
   */
  interval?: number;
  /**
   * @remarks
   * The custom ID. Only lowercase letters, uppercase letters, digits, hyphens, and underscores are supported. Length: 6 to 64 characters. The value must be unique at the user level.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The snapshot template ID.
   * - We recommend that you create a snapshot template first and then pass the snapshot template ID. For more information about how to create a snapshot template, see [Add a snapshot template](https://help.aliyun.com/document_detail/99406.html).
   * - If you pass the snapshot template ID, all request parameters except Action and VideoId are ignored.
   * 
   * @example
   * f5b228fe693bf55bd87b789****
   */
  snapshotTemplateId?: string;
  /**
   * @remarks
   * The start time for the snapshot.
   * 
   * - Unit: milliseconds.
   * - Default value: **0**.
   * 
   * @example
   * 0
   */
  specifiedOffsetTime?: number;
  /**
   * @remarks
   * The points in time at which snapshots are captured. Unit: milliseconds. You can specify up to 30 points in time at a time.
   */
  specifiedOffsetTimes?: number[];
  /**
   * @remarks
   * The sprite configuration. If this parameter is not empty, a sprite is generated. For more information about the parameter structure, see [SpriteSnapshotConfig](https://help.aliyun.com/document_detail/86952.html).
   * 
   * @example
   * {\\"CellWidth\\": 120, \\"CellHeight\\": 68, \\"Columns\\": 3,\\"Lines\\": 10, \\"Padding\\": 20, \\"Margin\\": 50}
   */
  spriteSnapshotConfig?: string;
  /**
   * @remarks
   * The custom settings. Only JSON strings are supported. You can use this parameter to pass through custom data and specify callback URL settings. For more information about the parameter structure, see [UserData](https://help.aliyun.com/document_detail/86952.html).
   * 
   * > To use the message callback in this parameter, configure the HTTP callback URL and select the corresponding callback event types in the console. Otherwise, the callback settings do not take effect.
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://.example.aliyundoc.com"},"Extend":{"localId":"xxx","example":"www"}}
   */
  userData?: string;
  /**
   * @remarks
   * The video ID. You can obtain the video ID by using one of the following methods:
   * - For videos uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the video ID.
   * - Obtain the video ID from the value of the VideoId response parameter when you call the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation to obtain the upload URL and credential.
   * - After the video is uploaded, call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the video ID, which is the value of the VideoId response parameter.
   * 
   * @example
   * d3e680e618708efbf2cae7cc9312****
   */
  videoId?: string;
  /**
   * @remarks
   * The snapshot width. Valid values: `[8,4096]`. Default value: the source video width. Unit: px.
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

