// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPlanMaintenanceWindowRequestTargetResourceTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag to which the O&M window applies.
   * 
   * @example
   * tagKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag to which the O&M window applies.
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
   * The resource type for the O&M window configuration.
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
   * - If PeriodUnit is set to Weekly, the format is Monday,22:00. Monday can be replaced with Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday.
   * - If PeriodUnit is set to Daily, the format is 22:00.
   * - The comma delimiter separates two parts. The first part represents the hour, with valid values from 00 to 23. The second part represents the minute, which currently supports only 00.
   * 
   * @example
   * Tuesday,03:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the O&M window.
   * 
   * - If PeriodUnit is set to Weekly, the format is Monday,22:00. Monday can be replaced with Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday.
   * - If PeriodUnit is set to Daily, the format is 22:00.
   * - The comma delimiter separates two parts. The first part represents the hour, with valid values from 00 to 23. The second part represents the minute, which currently supports only 00.
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
   * The cycle type. Valid values: Daily and Weekly.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The time ranges of the O&M window recurring cycle (UTC time zone).
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
  targetResource?: ModifyPlanMaintenanceWindowRequestTargetResource;
  /**
   * @remarks
   * The recurring cycle of the O&M window. Leave this parameter empty if no modification is needed.
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

