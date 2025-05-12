// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobListResponseBodyJobListJobOutputClipTimeSpan extends $dara.Model {
  /**
   * @remarks
   * The duration of the clip.
   * 
   * *   Format: `hh:mm:ss[.SSS]`.
   * *   Example: 01:00:59.999.
   * 
   * Or
   * 
   * *   Format: `sssss[.SSS]`.
   * *   Example: 32000.23.
   * 
   * @example
   * 01:00:59.999
   */
  duration?: string;
  /**
   * @remarks
   * The point in time when the clip starts.
   * 
   * *   Format: `hh:mm:ss[.SSS]`.
   * *   Example: 01:59:59.999.
   * 
   * Or
   * 
   * *   Format: `sssss[.SSS]`.
   * *   Example: 32000.23.
   * 
   * @example
   * 01:59:59.999
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

