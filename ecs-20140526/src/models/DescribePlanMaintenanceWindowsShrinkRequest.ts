// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlanMaintenanceWindowsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the window is enabled or disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: 100. Default value: If the value is not specified or is less than 10, the default value is 10. If the value is greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the O&M window.
   * 
   * @example
   * pw-bp1jarob1aup7yvlrdt6
   */
  planWindowId?: string;
  /**
   * @remarks
   * The name of the O&M window.
   * 
   * @example
   * WIndowName
   */
  planWindowName?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call DescribeRegions to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the O&M window applies.
   * 
   * @example
   * rg-d85g5yocioezmdrll
   */
  targetResourceGroupId?: string;
  /**
   * @remarks
   * The tags to which the O&M window applies.
   */
  targetResourceTagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      planWindowId: 'PlanWindowId',
      planWindowName: 'PlanWindowName',
      regionId: 'RegionId',
      targetResourceGroupId: 'TargetResourceGroupId',
      targetResourceTagsShrink: 'TargetResourceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      planWindowId: 'string',
      planWindowName: 'string',
      regionId: 'string',
      targetResourceGroupId: 'string',
      targetResourceTagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

