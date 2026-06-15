// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPlanMaintenanceWindowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the maintenance window. If this parameter is not specified, the enabled status remains unchanged.
   * 
   * @example
   * false
   */
  enable?: boolean;
  minMaintenanceInterval?: number;
  /**
   * @remarks
   * The ID of the maintenance window to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * pw-bp1au1w8v8a1yer65g5k
   */
  planWindowId?: string;
  /**
   * @remarks
   * The new name of the maintenance window. If this parameter is not specified, the name remains unchanged.
   * 
   * @example
   * WIndowName
   */
  planWindowName?: string;
  /**
   * @remarks
   * The ID of the region where the instance is located. You can call the DescribeRegions operation to query the most recent list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The maintenance action for the maintenance window. If this parameter is not specified, the action remains unchanged.
   * 
   * @example
   * Reboot
   */
  supportMaintenanceAction?: string;
  /**
   * @remarks
   * The resources to which the maintenance window applies. If this parameter is not specified, the target resources remain unchanged.
   */
  targetResourceShrink?: string;
  /**
   * @remarks
   * The recurrence schedule for the maintenance window. If this parameter is not specified, the schedule remains unchanged.
   */
  timePeriodShrink?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      minMaintenanceInterval: 'MinMaintenanceInterval',
      planWindowId: 'PlanWindowId',
      planWindowName: 'PlanWindowName',
      regionId: 'RegionId',
      supportMaintenanceAction: 'SupportMaintenanceAction',
      targetResourceShrink: 'TargetResource',
      timePeriodShrink: 'TimePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      minMaintenanceInterval: 'number',
      planWindowId: 'string',
      planWindowName: 'string',
      regionId: 'string',
      supportMaintenanceAction: 'string',
      targetResourceShrink: 'string',
      timePeriodShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

