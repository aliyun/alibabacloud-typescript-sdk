// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListListenersRequestTag } from "./ListListenersRequestTag";


export class ListListenersRequest extends $dara.Model {
  /**
   * @remarks
   * The listener IDs. You can specify at most 20 listener IDs.
   */
  listenerIds?: string[];
  /**
   * @remarks
   * The GWLB instance IDs. You can specify at most 20 instance IDs.
   */
  loadBalancerIds?: string[];
  /**
   * @remarks
   * The maximum number of results to be returned from a single query when the NextToken parameter is used in the query. Valid values: 1 to 1000. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value of **NextToken** is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * d209f4e63ec942c967c50c888a13****
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to be skipped in the call.
   * 
   * @example
   * 10
   */
  skip?: number;
  /**
   * @remarks
   * The tags. You can specify at most 20 tags in each call.
   */
  tag?: ListListenersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      listenerIds: 'ListenerIds',
      loadBalancerIds: 'LoadBalancerIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      skip: 'Skip',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerIds: { 'type': 'array', 'itemType': 'string' },
      loadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      skip: 'number',
      tag: { 'type': 'array', 'itemType': ListListenersRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.listenerIds)) {
      $dara.Model.validateArray(this.listenerIds);
    }
    if(Array.isArray(this.loadBalancerIds)) {
      $dara.Model.validateArray(this.loadBalancerIds);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

