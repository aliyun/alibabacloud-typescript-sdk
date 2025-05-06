// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList } from "./ListDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList";


export class ListDiscoveredResourcesResponseBodyDiscoveredResourceProfiles extends $dara.Model {
  /**
   * @remarks
   * The details of the resources.
   */
  discoveredResourceProfileList?: ListDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList[];
  /**
   * @remarks
   * The maximum number of entries returned on each page.
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
   * 161259599160****
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceProfileList: 'DiscoveredResourceProfileList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceProfileList: { 'type': 'array', 'itemType': ListDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.discoveredResourceProfileList)) {
      $dara.Model.validateArray(this.discoveredResourceProfileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

