// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmartClipTaskRequestEditingConfigTitleConfig extends $dara.Model {
  /**
   * @example
   * TopLeft
   */
  alignment?: string;
  /**
   * @example
   * 2
   */
  timelineIn?: number;
  /**
   * @example
   * 3
   */
  timelineOut?: number;
  /**
   * @example
   * 100
   */
  x?: number;
  /**
   * @example
   * 100
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alignment: 'Alignment',
      timelineIn: 'TimelineIn',
      timelineOut: 'TimelineOut',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignment: 'string',
      timelineIn: 'number',
      timelineOut: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

