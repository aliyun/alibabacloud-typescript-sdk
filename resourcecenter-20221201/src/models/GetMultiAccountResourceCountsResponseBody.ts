// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMultiAccountResourceCountsResponseBodyFilters } from "./GetMultiAccountResourceCountsResponseBodyFilters";
import { GetMultiAccountResourceCountsResponseBodyResourceCounts } from "./GetMultiAccountResourceCountsResponseBodyResourceCounts";


export class GetMultiAccountResourceCountsResponseBody extends $dara.Model {
  filters?: GetMultiAccountResourceCountsResponseBodyFilters[];
  /**
   * @example
   * ResourceType
   */
  groupByKey?: string;
  /**
   * @example
   * EFA806B9-7F36-55AB-8B7A-D680C2C5EE57
   */
  requestId?: string;
  resourceCounts?: GetMultiAccountResourceCountsResponseBodyResourceCounts[];
  /**
   * @example
   * rd-r4****
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      groupByKey: 'GroupByKey',
      requestId: 'RequestId',
      resourceCounts: 'ResourceCounts',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': GetMultiAccountResourceCountsResponseBodyFilters },
      groupByKey: 'string',
      requestId: 'string',
      resourceCounts: { 'type': 'array', 'itemType': GetMultiAccountResourceCountsResponseBodyResourceCounts },
      scope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(Array.isArray(this.resourceCounts)) {
      $dara.Model.validateArray(this.resourceCounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

