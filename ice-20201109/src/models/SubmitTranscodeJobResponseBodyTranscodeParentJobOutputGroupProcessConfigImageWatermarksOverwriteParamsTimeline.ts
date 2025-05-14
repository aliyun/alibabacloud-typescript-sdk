// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline extends $dara.Model {
  /**
   * @remarks
   * The time range in which the watermark is displayed.
   * 
   * *   Valid values: integers and ToEND.
   * *   Default value: ToEND.
   * 
   * @example
   * ToEND
   */
  duration?: string;
  /**
   * @remarks
   * The beginning of the time range in which the watermark is displayed.
   * 
   * *   Unit: seconds.
   * *   Value values: integers.
   * *   Default value: 0.
   * 
   * @example
   * 00:00:05
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

