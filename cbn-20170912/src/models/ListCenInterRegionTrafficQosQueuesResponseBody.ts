// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCenInterRegionTrafficQosQueuesResponseBodyTrafficQosQueues } from "./ListCenInterRegionTrafficQosQueuesResponseBodyTrafficQosQueues";


export class ListCenInterRegionTrafficQosQueuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value of **NextToken** is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * 0151fa6aa1ed****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1D1E15D2-416D-54F3-BDD9-BC27DE4C6352
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the QoS queue.
   */
  trafficQosQueues?: ListCenInterRegionTrafficQosQueuesResponseBodyTrafficQosQueues[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      trafficQosQueues: 'TrafficQosQueues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      trafficQosQueues: { 'type': 'array', 'itemType': ListCenInterRegionTrafficQosQueuesResponseBodyTrafficQosQueues },
    };
  }

  validate() {
    if(Array.isArray(this.trafficQosQueues)) {
      $dara.Model.validateArray(this.trafficQosQueues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

