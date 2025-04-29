// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResultVideoCaptions extends $dara.Model {
  /**
   * @example
   * 1736129678000
   */
  endTime?: number;
  /**
   * @example
   * 00:01
   */
  endTimeFormat?: string;
  /**
   * @example
   * 00:01
   */
  startTime?: number;
  /**
   * @example
   * 2025-01-07 11:52:06
   */
  startTimeFormat?: string;
  /**
   * @example
   * xxxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      endTimeFormat: 'endTimeFormat',
      startTime: 'startTime',
      startTimeFormat: 'startTimeFormat',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      endTimeFormat: 'string',
      startTime: 'number',
      startTimeFormat: 'string',
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

