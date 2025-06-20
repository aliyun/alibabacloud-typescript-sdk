// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceCountsResponseBodyFilters } from "./GetResourceCountsResponseBodyFilters";
import { GetResourceCountsResponseBodyResourceCounts } from "./GetResourceCountsResponseBodyResourceCounts";


export class GetResourceCountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: GetResourceCountsResponseBodyFilters[];
  /**
   * @remarks
   * The dimension by which resources are queried.
   * 
   * @example
   * ResourceType
   */
  groupByKey?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6D98D9B0-318D-56A4-910C-93B5F945AF2B
   */
  requestId?: string;
  /**
   * @remarks
   * The numbers of resources.
   */
  resourceCounts?: GetResourceCountsResponseBodyResourceCounts[];
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      groupByKey: 'GroupByKey',
      requestId: 'RequestId',
      resourceCounts: 'ResourceCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': GetResourceCountsResponseBodyFilters },
      groupByKey: 'string',
      requestId: 'string',
      resourceCounts: { 'type': 'array', 'itemType': GetResourceCountsResponseBodyResourceCounts },
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

