// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOpsItemsRequestFilter } from "./ListOpsItemsRequestFilter";


export class ListOpsItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter rules for the component.
   */
  filter?: ListOpsItemsRequestFilter[];
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 10 to 100. Default value: 50.
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
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The information about resource tags.
   * 
   * @example
   * {
   *       "k1": "v1",
   *       "k2": "v2"
   * }
   */
  resourceTags?: { [key: string]: any };
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceTags: 'ResourceTags',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListOpsItemsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(this.resourceTags) {
      $dara.Model.validateMap(this.resourceTags);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

