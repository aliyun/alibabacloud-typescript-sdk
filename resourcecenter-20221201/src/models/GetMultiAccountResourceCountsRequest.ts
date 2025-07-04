// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMultiAccountResourceCountsRequestFilter } from "./GetMultiAccountResourceCountsRequestFilter";


export class GetMultiAccountResourceCountsRequest extends $dara.Model {
  filter?: GetMultiAccountResourceCountsRequestFilter[];
  /**
   * @example
   * ResourceType
   */
  groupByKey?: string;
  /**
   * @example
   * rd-r4****
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      groupByKey: 'GroupByKey',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': GetMultiAccountResourceCountsRequestFilter },
      groupByKey: 'string',
      scope: 'string',
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

