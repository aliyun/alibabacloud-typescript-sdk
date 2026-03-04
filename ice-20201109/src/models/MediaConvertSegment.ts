// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertSegment extends $dara.Model {
  /**
   * @remarks
   * The length of the segment.
   * 
   * *   Unit: seconds.
   * *   Valid values: [1,60].
   * *   Default value: 10. A value of 10 will create segments at the 10s, 20s, 30s, and 40s marks of the video.
   * 
   * @example
   * 10
   */
  duration?: number;
  /**
   * @remarks
   * The points in time at which the video is forcibly segmented. Separate multiple points with commas (,). You can specify up to 10 points.
   * 
   * *   Format: {Point in time},{Point in time},{Point in time}.
   * *   Type: decimal. This parameter supports up to three decimal places.
   * *   Unit: seconds.
   * *   Example: 1,2,4,6,10,14,18, which specifies that the video is forcibly segmented at the 1st, 2nd, 4th, 6th, 10th, 14th, and 18th seconds.
   * 
   * @example
   * 1,2
   */
  forceSegTime?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      forceSegTime: 'ForceSegTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      forceSegTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

