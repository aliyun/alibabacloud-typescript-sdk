// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDiscoveredResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary extends $dara.Model {
  /**
   * @remarks
   * The dimension by which statistics are collected.
   * 
   * >  In most cases, the `Region` parameter instead of the GroupName parameter is returned.
   * 
   * @example
   * cn-hangzhou
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the region by which statistics are collected.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 10
   */
  resourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      region: 'Region',
      resourceCount: 'ResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      region: 'string',
      resourceCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

