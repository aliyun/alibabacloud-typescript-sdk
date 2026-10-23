// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPlanMaintenanceWindowRequestTargetResourceTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag to which the window applies.
   * 
   * @example
   * tagKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag to which the window applies.
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
   * The ID of the resource group to which the O&M window applies. This parameter is required only when Scope is set to ResourceGroup.
   * 
   * @example
   * rg-acfmy4cc27vsvia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of resources to which the O&M window is configured to apply.
   * 
   * @example
   * Tag
   */
  scope?: string;
  /**
   * @remarks
   * The tags to which the O&M window applies. This parameter is required only when Scope is set to Tag.
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
   * The end time of the O&M window.
   * 
   * - If PeriodUnit is set to Weekly, the time range is in the format of Monday,22:00. Monday can be replaced with Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday.
   * - If PeriodUnit is set to Daily, the time range is in the format of 22:00.
   * - The comma (,) is used as a delimiter. The first part represents the hour, with valid values from 00 to 23. The second part represents the minute. Currently, only 00 is supported.
   * 
   * @example
   * Tuesday,03:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the O&M window.
   * 
   * - If PeriodUnit is set to Weekly, the time range is in the format of Monday,22:00. Monday can be replaced with Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday.
   * - If PeriodUnit is set to Daily, the time range is in the format of 22:00.
   * - The comma (,) is used as a delimiter. The first part represents the hour, with valid values from 00 to 23. The second part represents the minute. Currently, only 00 is supported.
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
   * The type of the recurrence cycle. Valid values: Daily and Weekly.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The time ranges of the O&M window recurrence cycle in the UTC time zone.
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
  targetResource?: ModifyPlanMaintenanceWindowRequestTargetResource;
  /**
   * @remarks
   * The recurrence cycle of the window. Leave this parameter empty if no modification is required.
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

