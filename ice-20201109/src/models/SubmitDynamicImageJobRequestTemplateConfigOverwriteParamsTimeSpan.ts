// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDynamicImageJobRequestTemplateConfigOverwriteParamsTimeSpan extends $dara.Model {
  /**
   * @remarks
   * The length of the clip.
   * 
   * *   Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * *   Valid values: `[00:00:00.000,23:59:59.999]` or `[0.000,86399.999]`.
   * 
   * @example
   * 01:59:59.999 or 32000.23
   */
  duration?: string;
  /**
   * @remarks
   * The length of the ending part of the original clip to be cropped out. If you specify this parameter, the Duration parameter becomes invalid.
   * 
   * *   Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * *   Valid values: `[00:00:00.000,23:59:59.999]` or `[0.000,86399.999]`.
   * 
   * @example
   * 01:59:59.999 or 32000.23
   */
  end?: string;
  /**
   * @remarks
   * The start point of the clip.
   * 
   * *   Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * *   Valid values: `[00:00:00.000,23:59:59.999]` or `[0.000,86399.999]`.
   * 
   * @example
   * 01:59:59.999 or 32000.23
   */
  seek?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      end: 'End',
      seek: 'Seek',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      end: 'string',
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

