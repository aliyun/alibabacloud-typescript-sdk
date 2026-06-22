// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PPTDetails extends $dara.Model {
  /**
   * @remarks
   * The URL of the captured slide image, which is stored in an Object Storage Service (OSS) bucket.
   */
  imagePath?: string;
  /**
   * @remarks
   * The zero-based index of the slide in the sequence of detected slides.
   */
  PPTShotIndex?: number;
  /**
   * @remarks
   * The start time of the slide, in milliseconds, from the beginning of the video.
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

