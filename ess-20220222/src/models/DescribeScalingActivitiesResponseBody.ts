// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeScalingActivitiesResponseBodyScalingActivities } from "./DescribeScalingActivitiesResponseBodyScalingActivities";


export class DescribeScalingActivitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CC107349-57B7-4405-B1BF-9BF5AF7F2A46
   */
  requestId?: string;
  /**
   * @remarks
   * The scaling activities.
   */
  scalingActivities?: DescribeScalingActivitiesResponseBodyScalingActivities[];
  /**
   * @remarks
   * The total number of scaling activities.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scalingActivities: 'ScalingActivities',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scalingActivities: { 'type': 'array', 'itemType': DescribeScalingActivitiesResponseBodyScalingActivities },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scalingActivities)) {
      $dara.Model.validateArray(this.scalingActivities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

