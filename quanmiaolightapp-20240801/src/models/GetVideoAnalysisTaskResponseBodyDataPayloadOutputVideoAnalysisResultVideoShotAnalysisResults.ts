// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultVideoShotAnalysisResults extends $dara.Model {
  /**
   * @example
   * 1710432000000
   */
  endTime?: number;
  /**
   * @example
   * 2024-10-05 06:22:00
   */
  startTime?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
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

