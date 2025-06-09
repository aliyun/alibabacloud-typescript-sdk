// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIssueShrinkRequestTimeRange extends $dara.Model {
  /**
   * @example
   * 2024-08-23T02:12:00Z
   */
  endTime?: number;
  /**
   * @example
   * Host
   */
  granularity?: number;
  /**
   * @example
   * minute
   */
  granularityUnit?: string;
  /**
   * @example
   * 2024-12-18 00:00:00
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

