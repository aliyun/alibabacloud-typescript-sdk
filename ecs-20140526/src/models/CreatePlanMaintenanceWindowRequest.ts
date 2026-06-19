// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePlanMaintenanceWindowRequestTargetResourceTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag on which the O&M window takes effect.
   * 
   * @example
   * vms_qualification_孙总身份证_e5590864-1fef-4db2-b2a7-bd2d657fed43.png
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag on which the O&M window takes effect.
   * 
   * @example
   * 21.137.18.60
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

export class CreatePlanMaintenanceWindowRequestTargetResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group. This parameter is required when Scope is set to ResourceGroup.
   * 
   * @example
   * rg-aekzhm7pmnvcbty
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of resources for which the O&M window is configured.
   * 
   * This parameter is required.
   * 
   * @example
   * Tag
   */
  scope?: string;
  /**
   * @remarks
   * The tags on which the O&M window takes effect. This parameter is required when Scope is set to Tag.
   */
  tags?: CreatePlanMaintenanceWindowRequestTargetResourceTags[];
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
      tags: { 'type': 'array', 'itemType': CreatePlanMaintenanceWindowRequestTargetResourceTags },
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

export class CreatePlanMaintenanceWindowRequestTimePeriodRangeList extends $dara.Model {
  /**
   * @remarks
   * The end time of the O&M window.
   * 
   * - If PeriodUnit is set to Weekly, the format is Monday,22:00. Monday can be replaced with Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday.
   * - If PeriodUnit is set to Daily, the format is 22:00.
   * - The comma (,) is used as a delimiter. The first part represents the hour, which ranges from 00 to 23. The second part represents the minute, which currently supports only 00.
   * 
   * @example
   * Tuesday,03:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the O&M window.
   * - If PeriodUnit is set to Weekly, the format is Monday,22:00. Monday can be replaced with Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday.
   * - If PeriodUnit is set to Daily, the format is 22:00.
   * - The comma (,) is used as a delimiter. The first part represents the hour, which ranges from 00 to 23. The second part represents the minute, which currently supports only 00.
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

export class CreatePlanMaintenanceWindowRequestTimePeriod extends $dara.Model {
  /**
   * @remarks
   * The cycle type. Valid values: Daily and Weekly.
   * 
   * This parameter is required.
   * 
   * @example
   * Weekly
   */
  periodUnit?: string;
  /**
   * @remarks
   * The time ranges of the recurring cycle of the O&M window (in UTC).
   * 
   * This parameter is required.
   */
  rangeList?: CreatePlanMaintenanceWindowRequestTimePeriodRangeList[];
  static names(): { [key: string]: string } {
    return {
      periodUnit: 'PeriodUnit',
      rangeList: 'RangeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodUnit: 'string',
      rangeList: { 'type': 'array', 'itemType': CreatePlanMaintenanceWindowRequestTimePeriodRangeList },
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

export class CreatePlanMaintenanceWindowRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable or disable the O&M window.
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  minMaintenanceInterval?: number;
  /**
   * @remarks
   * The name of the O&M window. You can specify a custom name. The name can be up to 200 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * WIndowName
   */
  planWindowName?: string;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The O&M operations supported by the O&M window.
   * 
   * This parameter is required.
   * 
   * @example
   * Reboot
   */
  supportMaintenanceAction?: string;
  /**
   * @remarks
   * The resources on which the O&M window takes effect.
   * 
   * This parameter is required.
   */
  targetResource?: CreatePlanMaintenanceWindowRequestTargetResource;
  /**
   * @remarks
   * The recurring cycle of the O&M window.
   * 
   * This parameter is required.
   */
  timePeriod?: CreatePlanMaintenanceWindowRequestTimePeriod;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      minMaintenanceInterval: 'MinMaintenanceInterval',
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
      planWindowName: 'string',
      regionId: 'string',
      supportMaintenanceAction: 'string',
      targetResource: CreatePlanMaintenanceWindowRequestTargetResource,
      timePeriod: CreatePlanMaintenanceWindowRequestTimePeriod,
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

