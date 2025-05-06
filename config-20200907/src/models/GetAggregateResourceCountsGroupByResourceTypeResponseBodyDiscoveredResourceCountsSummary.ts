// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary extends $dara.Model {
  /**
   * @remarks
   * This parameter is expired. The resource type by which statistics are collected.
   * 
   * @example
   * ACS::RAM::Role
   */
  groupName?: string;
  /**
   * @remarks
   * The total number of resources in the region.
   * 
   * @example
   * 7
   */
  resourceCount?: number;
  /**
   * @remarks
   * The resource type by which statistics are collected.
   * 
   * @example
   * ACS::RAM::Role
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

