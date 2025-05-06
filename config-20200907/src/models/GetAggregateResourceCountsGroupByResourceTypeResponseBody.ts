// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary } from "./GetAggregateResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary";


export class GetAggregateResourceCountsGroupByResourceTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The resource type by which the statistics are collected.
   */
  discoveredResourceCountsSummary?: GetAggregateResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 99114B22-1EFF-47DF-B906-1CCE82FF9D60
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceCountsSummary: 'DiscoveredResourceCountsSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceCountsSummary: { 'type': 'array', 'itemType': GetAggregateResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.discoveredResourceCountsSummary)) {
      $dara.Model.validateArray(this.discoveredResourceCountsSummary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

