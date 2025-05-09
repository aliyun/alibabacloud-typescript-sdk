// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchInventoryRequestFilter } from "./SearchInventoryRequestFilter";


export class SearchInventoryRequest extends $dara.Model {
  /**
   * @remarks
   * The information about aggregators. You can use one or more aggregators to query the aggregate information of an instance. Valid values:
   * 
   * *   ACS:Application.Name
   * *   ACS:Application.Version
   * 
   * @example
   * ACS:Application.Name
   */
  aggregator?: string[];
  /**
   * @remarks
   * The filter rules for the component.
   */
  filter?: SearchInventoryRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: { 'type': 'array', 'itemType': 'string' },
      filter: { 'type': 'array', 'itemType': SearchInventoryRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aggregator)) {
      $dara.Model.validateArray(this.aggregator);
    }
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

