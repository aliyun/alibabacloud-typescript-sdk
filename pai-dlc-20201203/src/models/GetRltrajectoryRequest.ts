// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRLTrajectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query window in UTC RFC3339 format. Default value: now.
   * 
   * @example
   * 2026-08-07T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The sample UID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3afcfbdf-3956-4ab2-b9cb-f9c204b8fc9c
   */
  promptUid?: string;
  /**
   * @remarks
   * The trajectory index.
   * 
   * This parameter is required.
   * 
   * @example
   * 14
   */
  sampleIndex?: string;
  /**
   * @remarks
   * The start time of the query window in UTC RFC3339 format. Default value: EndTime-7d.
   * 
   * @example
   * 2026-08-04T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      promptUid: 'PromptUid',
      sampleIndex: 'SampleIndex',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      promptUid: 'string',
      sampleIndex: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

