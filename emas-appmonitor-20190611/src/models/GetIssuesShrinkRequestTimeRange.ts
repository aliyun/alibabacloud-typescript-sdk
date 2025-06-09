// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIssuesShrinkRequestTimeRange extends $dara.Model {
  /**
   * @example
   * 2024-09-04T02:15:00Z
   */
  endTime?: number;
  /**
   * @example
   * Host
   */
  granularity?: number;
  /**
   * @example
   * day
   */
  granularityUnit?: string;
  /**
   * @example
   * 2024-11-05T16:00:00Z
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      granularity: 'Granularity',
      granularityUnit: 'GranularityUnit',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      granularity: 'number',
      granularityUnit: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

