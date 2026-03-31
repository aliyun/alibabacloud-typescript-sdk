// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDiscoveredResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary extends $dara.Model {
  /**
   * @remarks
   * The resource type by which the statistics are collected.
   * 
   * > We recommend that you use the `ResourceType` parameter.
   * 
   * @example
   * ACS::ECS::Instance
   */
  groupName?: string;
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 10
   */
  resourceCount?: number;
  /**
   * @remarks
   * The resource type by which the statistics are collected.
   * 
   * @example
   * ACS::ECS::Instance
   */
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
  /**
   * @remarks
   * The statistics on the resources.
   */
  discoveredResourceCountsSummary?: GetDiscoveredResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC9BD94C-D20C-4D27-88D4-89E8D75C051B
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

