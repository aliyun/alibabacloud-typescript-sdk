// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAutoScalingActivitiesResponseBodyScalingActivities } from "./ListAutoScalingActivitiesResponseBodyScalingActivities";


export class ListAutoScalingActivitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The scaling activities.
   */
  scalingActivities?: ListAutoScalingActivitiesResponseBodyScalingActivities[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      scalingActivities: 'ScalingActivities',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      scalingActivities: { 'type': 'array', 'itemType': ListAutoScalingActivitiesResponseBodyScalingActivities },
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

