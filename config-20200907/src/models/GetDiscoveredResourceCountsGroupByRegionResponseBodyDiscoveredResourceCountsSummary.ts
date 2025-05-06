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

