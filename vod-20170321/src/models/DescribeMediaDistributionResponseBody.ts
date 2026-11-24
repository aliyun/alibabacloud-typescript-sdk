// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMediaDistributionResponseBodyMediaDistributionList extends $dara.Model {
  /**
   * @remarks
   * The number of media assets that match the specified time range within the natural statistical period.
   * 
   * @example
   * 12
   */
  count?: number;
  /**
   * @remarks
   * The end time of the statistical period. The end time is not included. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-11-14T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the statistical period. The start time is included. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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
   * The distribution list of audio and video media assets. The list is displayed based on the statistical periods such as natural hours, days, weeks, and months of the start time and end time.
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
   * The total number of audio and video media assets.
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

