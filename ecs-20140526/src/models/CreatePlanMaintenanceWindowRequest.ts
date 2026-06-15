// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePlanMaintenanceWindowRequestTargetResourceTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * vms_qualification_孙总身份证_e5590864-1fef-4db2-b2a7-bd2d657fed43.png
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * The ID of the resource group. This parameter is required if `Scope` is set to `ResourceGroup`.
   * 
   * @example
   * rg-aekzhm7pmnvcbty
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The scope of resources to which the maintenance window applies.
   * 
   * This parameter is required.
   * 
   * @example
   * Tag
   */
  scope?: string;
  /**
   * @remarks
   * The tags of the resources to which the maintenance window applies. This parameter is required if `Scope` is set to `Tag`.
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
   * The end time of the maintenance window.
   * 
   * - If `PeriodUnit` is set to `Weekly`, use the format `Day,HH:mm`. Valid values for `Day` are `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, and `Sunday`.
   * 
   * - If `PeriodUnit` is set to `Daily`, use the format `HH:mm`.
   * 
   * - The time is in `HH:mm` format, where `HH` is the hour (00-23) and `mm` is the minute. Only `00` is supported for the minute.
   * 
   * @example
   * Tuesday,03:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window.
   * 
   * - If `PeriodUnit` is set to `Weekly`, use the format `Day,HH:mm`. Valid values for `Day` are `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, and `Sunday`.
   * 
   * - If `PeriodUnit` is set to `Daily`, use the format `HH:mm`.
   * 
   * - The time is in `HH:mm` format, where `HH` is the hour (00-23) and `mm` is the minute. Only `00` is supported for the minute.
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
   * Specifies how often the maintenance window recurs.
   * 
   * This parameter is required.
   * 
   * @example
   * Weekly
   */
  periodUnit?: string;
  /**
   * @remarks
   * The time ranges of the recurring maintenance window. All times are in UTC.
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
   * Specifies whether to enable the maintenance window.
   * 
   * - **true**: Enables the maintenance window.
   * 
   * - **false**: Disables the maintenance window.
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
   * The name of the maintenance window. The name can be up to 200 characters long.
   * 
   * This parameter is required.
   * 
   * @example
   * WIndowName
   */
  planWindowName?: string;
  /**
   * @remarks
   * The ID of the region. You can call the DescribeRegions operation to query the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The maintenance operation supported by the maintenance window.
   * 
   * This parameter is required.
   * 
   * @example
   * Reboot
   */
  supportMaintenanceAction?: string;
  /**
   * @remarks
   * The resources to which the maintenance window applies.
   * 
   * This parameter is required.
   */
  targetResource?: CreatePlanMaintenanceWindowRequestTargetResource;
  /**
   * @remarks
   * The recurring schedule for the maintenance window.
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

