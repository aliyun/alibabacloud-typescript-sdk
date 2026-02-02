// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowListTargetResourceTags extends $dara.Model {
  key?: string;
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

export class DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowListTargetResource extends $dara.Model {
  /**
   * @example
   * rg-aek2qxeteo7fr6y
   */
  resourceGroupId?: string;
  /**
   * @example
   * Tag
   */
  scope?: string;
  tags?: DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowListTargetResourceTags[];
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
      tags: { 'type': 'array', 'itemType': DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowListTargetResourceTags },
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

export class DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowListTimePeriodRangeList extends $dara.Model {
  /**
   * @example
   * Monday,22:00
   */
  endTime?: string;
  /**
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

export class DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowListTimePeriod extends $dara.Model {
  /**
   * @example
   * Year
   */
  periodUnit?: string;
  rangeList?: DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowListTimePeriodRangeList[];
  static names(): { [key: string]: string } {
    return {
      periodUnit: 'PeriodUnit',
      rangeList: 'RangeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodUnit: 'string',
      rangeList: { 'type': 'array', 'itemType': DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowListTimePeriodRangeList },
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

export class DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowList extends $dara.Model {
  /**
   * @example
   * 2025-04-11T02:20:41Z
   */
  createTime?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 2025-02-22 10:14:28 +0800
   */
  modifiedTime?: string;
  /**
   * @example
   * pw-bp1bqkbjb7h4j8zqzwvp
   */
  planWindowId?: string;
  planWindowName?: string;
  /**
   * @example
   * Reboot
   */
  supportMaintenanceAction?: string;
  targetResource?: DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowListTargetResource;
  timePeriod?: DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowListTimePeriod;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      enable: 'Enable',
      modifiedTime: 'ModifiedTime',
      planWindowId: 'PlanWindowId',
      planWindowName: 'PlanWindowName',
      supportMaintenanceAction: 'SupportMaintenanceAction',
      targetResource: 'TargetResource',
      timePeriod: 'TimePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      enable: 'boolean',
      modifiedTime: 'string',
      planWindowId: 'string',
      planWindowName: 'string',
      supportMaintenanceAction: 'string',
      targetResource: DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowListTargetResource,
      timePeriod: DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowListTimePeriod,
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

export class DescribePlanMaintenanceWindowsResponseBody extends $dara.Model {
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
  planMaintenanceWindowList?: DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowList[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      planMaintenanceWindowList: 'PlanMaintenanceWindowList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      planMaintenanceWindowList: { 'type': 'array', 'itemType': DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.planMaintenanceWindowList)) {
      $dara.Model.validateArray(this.planMaintenanceWindowList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

