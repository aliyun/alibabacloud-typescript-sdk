// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOpsItemsShrinkRequestFilter } from "./ListOpsItemsShrinkRequestFilter";


export class ListOpsItemsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The filter rules for the component.
   */
  filter?: ListOpsItemsShrinkRequestFilter[];
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
  resourceTagsShrink?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceTagsShrink: 'ResourceTags',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListOpsItemsShrinkRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceTagsShrink: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

