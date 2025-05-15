// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunVideoAnalysisRequestVideoCaptionInfoVideoCaptions extends $dara.Model {
  /**
   * @example
   * 10000
   */
  endTime?: number;
  /**
   * @example
   * 张三
   */
  speaker?: string;
  /**
   * @example
   * 1000
   */
  startTime?: number;
  /**
   * @example
   * 你好
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      speaker: 'speaker',
      startTime: 'startTime',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      speaker: 'string',
      startTime: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

