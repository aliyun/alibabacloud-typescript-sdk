// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobResponseBodyJobListJobOutputOpeningListOpening extends $dara.Model {
  /**
   * @remarks
   * The height of the opening part. Valid values: values in the range of (0, 4096), -1, and full.
   * 
   * *   Default value: **-1**.
   * *   A value of -1 indicates that the height of the source of the opening part is retained.
   * *   A value of full indicates that the height of the opening part equals the height of the main part.
   * 
   * @example
   * -1
   */
  height?: string;
  /**
   * @remarks
   * The amount of time after which the opening part is played. The value starts from 0.
   * 
   * *   Unit: seconds.
   * *   Default value: **0**.
   * 
   * @example
   * 0
   */
  start?: string;
  /**
   * @remarks
   * The width of the opening part. Valid values: values in the range of (0, 4096), -1, and full.
   * 
   * *   Default value: **-1**.
   * *   A value of -1 indicates that the width of the source of the opening part is retained.
   * *   A value of full indicates that the width of the opening part equals the width of the main part.
   * 
   * @example
   * -1
   */
  width?: string;
  /**
   * @remarks
   * The OSS URL of the opening part.
   * 
   * @example
   * http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com/opening_01.flv
   */
  openUrl?: string;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      start: 'Start',
      width: 'Width',
      openUrl: 'openUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'string',
      start: 'string',
      width: 'string',
      openUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

