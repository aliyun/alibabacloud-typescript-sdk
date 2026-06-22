// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";


export class SceneElement extends $dara.Model {
  /**
   * @remarks
   * The timestamps of the frames within the current video element that match the search content. The unit is milliseconds.
   */
  frameTimes?: number[];
  /**
   * @remarks
   * The label information.
   */
  labels?: Label[];
  /**
   * @remarks
   * The time range of the video element. The array has a fixed length of 2. The two values represent the start time and end time in milliseconds.
   */
  timeRange?: number[];
  /**
   * @remarks
   * The index of the video stream to which the current video scene element belongs. This corresponds to the index in the [VideoStreams](https://help.aliyun.com/zh/imm/developer-reference/api-imm-2020-09-30-detectmediameta?spm=a2c4g.11186623.0.0.463e600fIDdM8r#api-detail-40) array.
   * 
   * @example
   * 0
   */
  videoStreamIndex?: number;
  static names(): { [key: string]: string } {
    return {
      frameTimes: 'FrameTimes',
      labels: 'Labels',
      timeRange: 'TimeRange',
      videoStreamIndex: 'VideoStreamIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameTimes: { 'type': 'array', 'itemType': 'number' },
      labels: { 'type': 'array', 'itemType': Label },
      timeRange: { 'type': 'array', 'itemType': 'number' },
      videoStreamIndex: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.frameTimes)) {
      $dara.Model.validateArray(this.frameTimes);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.timeRange)) {
      $dara.Model.validateArray(this.timeRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

