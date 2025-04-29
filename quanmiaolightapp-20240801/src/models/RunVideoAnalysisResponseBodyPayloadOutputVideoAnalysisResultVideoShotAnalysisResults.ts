// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultVideoShotAnalysisResults extends $dara.Model {
  /**
   * @example
   * 10000
   */
  endTime?: number;
  /**
   * @example
   * 1000
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

