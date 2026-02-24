// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDiscoveredResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary extends $dara.Model {
  groupName?: string;
  resourceCount?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      resourceCount: 'ResourceCount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      resourceCount: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceCountsGroupByResourceTypeResponseBody extends $dara.Model {
  discoveredResourceCountsSummary?: GetDiscoveredResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceCountsSummary: 'DiscoveredResourceCountsSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceCountsSummary: { 'type': 'array', 'itemType': GetDiscoveredResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary },
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

