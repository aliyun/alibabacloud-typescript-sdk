// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDiscoveredResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary } from "./GetDiscoveredResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary";


export class GetDiscoveredResourceCountsGroupByRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics on the resources.
   */
  discoveredResourceCountsSummary?: GetDiscoveredResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 399BD94C-D20C-4D27-88D4-89E8D75C0595
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
      discoveredResourceCountsSummary: { 'type': 'array', 'itemType': GetDiscoveredResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary },
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

