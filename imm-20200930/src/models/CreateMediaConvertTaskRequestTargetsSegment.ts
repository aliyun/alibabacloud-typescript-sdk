// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMediaConvertTaskRequestTargetsSegment extends $dara.Model {
  /**
   * @remarks
   * The duration of the segment. Unit: seconds.
   * 
   * @example
   * 30
   */
  duration?: number;
  /**
   * @remarks
   * The media segmentation mode. Valid values:
   * 
   * *   hls
   * *   dash
   * 
   * @example
   * hls
   */
  format?: string;
  /**
   * @remarks
   * The start sequence number. You can specify this parameter only if you set Format to hls. Default value: 0.
   * 
   * @example
   * 5
   */
  startNumber?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      format: 'Format',
      startNumber: 'StartNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      format: 'string',
      startNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

