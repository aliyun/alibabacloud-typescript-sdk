// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowListTargetResourceTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowListTargetResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which the O&M window applies.
   * 
   * @example
   * rg-aek2qxeteo7fr6y
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of resources for which the O&M window is configured.
   * 
   * @example
   * Tag
   */
  scope?: string;
  /**
   * @remarks
   * The tags to which the O&M window applies.
   */
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
   * @remarks
   * The end time of the maintenance time window.
   * 
   * @example
   * Monday,22:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the maintenance time window.
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

export class DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowListTimePeriod extends $dara.Model {
  /**
   * @remarks
   * The type of the recurrence cycle. Valid values:
   * - Daily: daily recurrence.
   * - Weekly: weekly recurrence.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The time ranges within the recurrence cycle of the O&M window (in UTC).
   */
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
   * @remarks
   * The time when the O&M window was created.
   * 
   * The time follows the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2025-04-11T02:20:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the O&M window is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  minMaintenanceInterval?: number;
  /**
   * @remarks
   * The time when the O&M window was last modified.
   * 
   * The time follows the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2025-02-22 10:14:28 +0800
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the O&M window.
   * 
   * @example
   * pw-bp1bqkbjb7h4j8zqzwvp
   */
  planWindowId?: string;
  /**
   * @remarks
   * The name of the O&M window.
   * 
   * @example
   * WindowName
   */
  planWindowName?: string;
  /**
   * @remarks
   * The supported maintenance actions.
   * 
   * @example
   * Reboot
   */
  supportMaintenanceAction?: string;
  /**
   * @remarks
   * The resources to which the O&M window applies.
   */
  targetResource?: DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowListTargetResource;
  /**
   * @remarks
   * The recurrence cycle of the window.
   */
  timePeriod?: DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowListTimePeriod;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      enable: 'Enable',
      minMaintenanceInterval: 'MinMaintenanceInterval',
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
      minMaintenanceInterval: 'number',
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
   * @remarks
   * The number of entries per page for a paged query. Maximum value: 100. Default value: If the value is not specified or is less than 10, the default value is 10. If the value is greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token returned by this call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The creation time.
   */
  planMaintenanceWindowList?: DescribePlanMaintenanceWindowsResponseBodyPlanMaintenanceWindowList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned under the current query conditions. This parameter is optional and may not be returned by default.
   * 
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

