// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPlanMaintenanceWindowRequestTargetResourceTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * tagKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * tagValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlanMaintenanceWindowRequestTargetResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group. This parameter is required when `Scope` is set to `ResourceGroup`.
   * 
   * @example
   * rg-acfmy4cc27vsvia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The method for specifying the target resources.
   * 
   * @example
   * Tag
   */
  scope?: string;
  /**
   * @remarks
   * The resource tags. This parameter is required when `Scope` is set to `Tag`.
   */
  tags?: ModifyPlanMaintenanceWindowRequestTargetResourceTags[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      scope: 'Scope',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      scope: 'string',
      tags: { 'type': 'array', 'itemType': ModifyPlanMaintenanceWindowRequestTargetResourceTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlanMaintenanceWindowRequestTimePeriodRangeList extends $dara.Model {
  /**
   * @remarks
   * The end time of the maintenance window.
   * 
   * - If `PeriodUnit` is set to `Weekly`, the format is `Day,HH:mm`. Valid values for `Day`: `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, and `Sunday`.
   * 
   * - If `PeriodUnit` is set to `Daily`, the format is `HH:mm`.
   * 
   * - In the time format, `HH` represents the hour (00-23) and `mm` must be `00`.
   * 
   * @example
   * Tuesday,03:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window.
   * 
   * - If `PeriodUnit` is set to `Weekly`, the format is `Day,HH:mm`. Valid values for `Day`: `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, and `Sunday`.
   * 
   * - If `PeriodUnit` is set to `Daily`, the format is `HH:mm`.
   * 
   * - In the time format, `HH` represents the hour (00-23) and `mm` must be `00`.
   * 
   * @example
   * Monday,22:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlanMaintenanceWindowRequestTimePeriod extends $dara.Model {
  /**
   * @remarks
   * The unit of the recurrence cycle. Valid values: `Daily` and `Weekly`.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The time ranges within the recurrence cycle. Times are specified in UTC.
   */
  rangeList?: ModifyPlanMaintenanceWindowRequestTimePeriodRangeList[];
  static names(): { [key: string]: string } {
    return {
      periodUnit: 'PeriodUnit',
      rangeList: 'RangeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodUnit: 'string',
      rangeList: { 'type': 'array', 'itemType': ModifyPlanMaintenanceWindowRequestTimePeriodRangeList },
    };
  }

  validate() {
    if(Array.isArray(this.rangeList)) {
      $dara.Model.validateArray(this.rangeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlanMaintenanceWindowRequest extends $dara.Model {
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
  targetResource?: ModifyPlanMaintenanceWindowRequestTargetResource;
  /**
   * @remarks
   * The recurrence schedule for the maintenance window. If this parameter is not specified, the schedule remains unchanged.
   */
  timePeriod?: ModifyPlanMaintenanceWindowRequestTimePeriod;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      minMaintenanceInterval: 'MinMaintenanceInterval',
      planWindowId: 'PlanWindowId',
      planWindowName: 'PlanWindowName',
      regionId: 'RegionId',
      supportMaintenanceAction: 'SupportMaintenanceAction',
      targetResource: 'TargetResource',
      timePeriod: 'TimePeriod',
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
      targetResource: ModifyPlanMaintenanceWindowRequestTargetResource,
      timePeriod: ModifyPlanMaintenanceWindowRequestTimePeriod,
    };
  }

  validate() {
    if(this.targetResource && typeof (this.targetResource as any).validate === 'function') {
      (this.targetResource as any).validate();
    }
    if(this.timePeriod && typeof (this.timePeriod as any).validate === 'function') {
      (this.timePeriod as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

