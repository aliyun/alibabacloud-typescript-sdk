// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceCountsRequestFilter } from "./GetResourceCountsRequestFilter";


export class GetResourceCountsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filter?: GetResourceCountsRequestFilter[];
  /**
   * @remarks
   * The dimension by which resources are queried. Valid values:
   * 
   * *   ResourceType
   * *   Region
   * *   ResourceGroupId
   * *   TagKey
   * *   TagValue
   * 
   * @example
   * ResourceType
   */
  groupByKey?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      groupByKey: 'GroupByKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': GetResourceCountsRequestFilter },
      groupByKey: 'string',
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

