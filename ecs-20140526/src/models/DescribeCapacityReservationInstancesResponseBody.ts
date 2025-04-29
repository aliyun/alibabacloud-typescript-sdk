// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCapacityReservationInstancesResponseBodyCapacityReservationItem } from "./DescribeCapacityReservationInstancesResponseBodyCapacityReservationItem";


export class DescribeCapacityReservationInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the instances that match the capacity reservation.
   */
  capacityReservationItem?: DescribeCapacityReservationInstancesResponseBodyCapacityReservationItem;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      capacityReservationItem: 'CapacityReservationItem',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityReservationItem: DescribeCapacityReservationInstancesResponseBodyCapacityReservationItem,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.capacityReservationItem && typeof (this.capacityReservationItem as any).validate === 'function') {
      (this.capacityReservationItem as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

