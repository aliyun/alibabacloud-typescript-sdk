// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobResponseBodyJobListJobOutputClipTimeSpan extends $dara.Model {
  /**
   * @remarks
   * The duration of the clip.
   * 
   * *   Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * *   Valid values: `[00:00:00.000,23:59:59.999]` or `[0.000,86399.999]`.
   * *   Examples: 01:00:59.999 and 32000.23.
   * 
   * @example
   * 01:00:59.999
   */
  duration?: string;
  /**
   * @remarks
   * The point in time when the clip starts.
   * 
   * *   Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * *   Valid values: `[00:00:00.000,23:59:59.999]` or `[0.000,86399.999]`.
   * *   Examples: 01:59:59.999 and 32000.23.
   * 
   * @example
   * 01:00:59.999
   */
  seek?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      seek: 'Seek',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      seek: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

