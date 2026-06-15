// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlanMaintenanceWindowsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the maintenance window is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the last query as the value of NextToken.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the maintenance window.
   * 
   * @example
   * pw-bp1jarob1aup7yvlrdt6
   */
  planWindowId?: string;
  /**
   * @remarks
   * The name of the maintenance window.
   * 
   * @example
   * WIndowName
   */
  planWindowName?: string;
  /**
   * @remarks
   * The ID of the region where the ECS instance is located. You can call the DescribeRegions operation to query the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the maintenance window applies.
   * 
   * @example
   * rg-d85g5yocioezmdrll
   */
  targetResourceGroupId?: string;
  /**
   * @remarks
   * The tags of the resources to which the maintenance window applies.
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

