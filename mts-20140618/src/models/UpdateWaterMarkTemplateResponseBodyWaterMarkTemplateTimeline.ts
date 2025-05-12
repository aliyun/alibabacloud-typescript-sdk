// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWaterMarkTemplateResponseBodyWaterMarkTemplateTimeline extends $dara.Model {
  /**
   * @remarks
   * The display duration of the watermark. Default value: **ToEND**. The default value indicates that the watermark is displayed until the video ends.
   * 
   * @example
   * 10
   */
  duration?: string;
  /**
   * @remarks
   * The beginning of the time range during which the watermark is displayed.
   * 
   * *   Unit: seconds.
   * *   Default value: **0**.
   * 
   * @example
   * 0
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

