// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPlanMaintenanceWindowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable or disable the O&M window. Leave this parameter empty if no modification is needed.
   * 
   * @example
   * false
   */
  enable?: boolean;
  minMaintenanceInterval?: number;
  /**
   * @remarks
   * The ID of the O&M window to modify. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * pw-bp1au1w8v8a1yer65g5k
   */
  planWindowId?: string;
  /**
   * @remarks
   * The name of the O&M window. Leave this parameter empty if no modification is needed.
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
   * The supported O&M actions. Leave this parameter empty if no modification is needed.
   * 
   * @example
   * Reboot
   */
  supportMaintenanceAction?: string;
  /**
   * @remarks
   * The resource to which the O&M window applies. Leave this parameter empty if no modification is needed.
   */
  targetResourceShrink?: string;
  /**
   * @remarks
   * The recurring cycle of the O&M window. Leave this parameter empty if no modification is needed.
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

