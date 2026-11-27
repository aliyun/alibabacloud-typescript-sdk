// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRLFlowAnalysisRequest extends $dara.Model {
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
   * The start time of the query window in UTC RFC3339 format. Default value: EndTime-7d.
   * 
   * @example
   * 2026-08-04T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
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

