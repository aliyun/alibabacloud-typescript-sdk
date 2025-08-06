// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMediaDistributionResponseBodyMediaDistributionList extends $dara.Model {
  /**
   * @remarks
   * The number of media assets that are queried during the specified time range.
   * 
   * @example
   * 12
   */
  count?: number;
  /**
   * @remarks
   * The end of the time range during which data is queried (exclusive). The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-14T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start of the time range during which data is queried (inclusive). The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-13T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
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

export class DescribeMediaDistributionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The distribution list of media assets. The data is displayed based on the statistical cycle of the natural hour, day, week, or month of the start and end time.
   */
  mediaDistributionList?: DescribeMediaDistributionResponseBodyMediaDistributionList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of media assets returned.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      mediaDistributionList: 'MediaDistributionList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaDistributionList: { 'type': 'array', 'itemType': DescribeMediaDistributionResponseBodyMediaDistributionList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mediaDistributionList)) {
      $dara.Model.validateArray(this.mediaDistributionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

