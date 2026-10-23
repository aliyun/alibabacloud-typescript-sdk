// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPlanMaintenanceWindowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable or disable the window. Leave this parameter empty if no modification is required.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The minimum time interval between the publish time and the scheduled time to execute scheduled O&M events for the same instance. Valid values: 1 to 48. Unit: hours.
   * 
   * @example
   * 24
   */
  minMaintenanceInterval?: number;
  /**
   * @remarks
   * The ID of the O&M window to be modified. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * pw-bp1au1w8v8a1yer65g5k
   */
  planWindowId?: string;
  /**
   * @remarks
   * The name of the O&M window. Leave this parameter empty if no modification is required.
   * 
   * @example
   * WIndowName
   */
  planWindowName?: string;
  /**
   * @remarks
   * The region ID. This parameter is required for Alibaba Cloud SDK routing. However, specifying any region ID for this operation makes no difference. The O&M window applies to all ECS instances across the network that meet the resource filtering conditions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The supported O&M actions. Leave this parameter empty if no modification is required.
   * 
   * @example
   * Reboot
   */
  supportMaintenanceAction?: string;
  /**
   * @remarks
   * The resources to which the O&M window applies. Leave this parameter empty if no modification is required.
   */
  targetResourceShrink?: string;
  /**
   * @remarks
   * The recurrence cycle of the window. Leave this parameter empty if no modification is required.
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

