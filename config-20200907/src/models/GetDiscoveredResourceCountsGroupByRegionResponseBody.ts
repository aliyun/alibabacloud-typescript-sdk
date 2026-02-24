// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDiscoveredResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary extends $dara.Model {
  groupName?: string;
  region?: string;
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
  discoveredResourceCountsSummary?: GetDiscoveredResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary[];
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

