// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTrafficMirrorFiltersResponseBodyTrafficMirrorFilters } from "./ListTrafficMirrorFiltersResponseBodyTrafficMirrorFilters";


export class ListTrafficMirrorFiltersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 5
   */
  count?: number;
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
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is the token that is used for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 739CA01C-92EB-4C69-BCC0-280149C6F41E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  /**
   * @remarks
   * The information about the filters.
   */
  trafficMirrorFilters?: ListTrafficMirrorFiltersResponseBodyTrafficMirrorFilters[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficMirrorFilters: 'TrafficMirrorFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
      trafficMirrorFilters: { 'type': 'array', 'itemType': ListTrafficMirrorFiltersResponseBodyTrafficMirrorFilters },
    };
  }

  validate() {
    if(Array.isArray(this.trafficMirrorFilters)) {
      $dara.Model.validateArray(this.trafficMirrorFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

