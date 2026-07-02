// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PPTDetails extends $dara.Model {
  /**
   * @remarks
   * The image path of the PPT frame capture.
   * 
   * @example
   * "ppts/video_snapshots_0.jpg"
   */
  imagePath?: string;
  /**
   * @remarks
   * The index of the PPT frame capture.
   * 
   * @example
   * 0
   */
  PPTShotIndex?: number;
  /**
   * @remarks
   * The time in the video.
   * 
   * @example
   * 5000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      imagePath: 'ImagePath',
      PPTShotIndex: 'PPTShotIndex',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imagePath: 'string',
      PPTShotIndex: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

