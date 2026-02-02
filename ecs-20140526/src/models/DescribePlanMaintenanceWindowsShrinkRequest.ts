// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlanMaintenanceWindowsShrinkRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @example
   * pw-bp1jarob1aup7yvlrdt6
   */
  planWindowId?: string;
  planWindowName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-d85g5yocioezmdrll
   */
  targetResourceGroupId?: string;
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

