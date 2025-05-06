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

