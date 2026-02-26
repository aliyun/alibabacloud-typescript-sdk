// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";


export class SceneElement extends $dara.Model {
  /**
   * @remarks
   * The time points of frames that match the searched content within the element. Unit: milliseconds.
   */
  frameTimes?: number[];
  labels?: Label[];
  /**
   * @remarks
   * The time range of the element. The array length is fixed at 2. One is the start time and the other is the end time. Unit: milliseconds.
   */
  timeRange?: number[];
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

