// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUrlObservationDataResponseBodyUrlDetailData } from "./DescribeUrlObservationDataResponseBodyUrlDetailData";


export class DescribeUrlObservationDataResponseBody extends $dara.Model {
  /**
   * @example
   * 2023-04-19T15:59:59Z
   */
  endTime?: string;
  /**
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @example
   * 2022-11-06T16:00:00Z
   */
  startTime?: string;
  urlDetailData?: DescribeUrlObservationDataResponseBodyUrlDetailData[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      urlDetailData: 'UrlDetailData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      urlDetailData: { 'type': 'array', 'itemType': DescribeUrlObservationDataResponseBodyUrlDetailData },
    };
  }

  validate() {
    if(Array.isArray(this.urlDetailData)) {
      $dara.Model.validateArray(this.urlDetailData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

