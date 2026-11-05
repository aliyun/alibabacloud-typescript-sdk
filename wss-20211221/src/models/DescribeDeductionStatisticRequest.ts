// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeductionStatisticRequestPeriods extends $dara.Model {
  /**
   * @remarks
   * The base time in the YYYY-MM-DD format.
   * 
   * @example
   * 2024-01-01
   */
  baseTime?: string;
  /**
   * @remarks
   * The time period unit. For more information, see the `PeriodUnit` enumeration.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      baseTime: 'BaseTime',
      periodUnit: 'PeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseTime: 'string',
      periodUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeductionStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. UNIX timestamp, in milliseconds.
   * 
   * @example
   * 1749176040000
   */
  endTime?: number;
  /**
   * @remarks
   * The list of instance IDs in JSON array format.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The list of time periods in JSON array format. Each element is a `PeriodParam` object.
   * 
   * **if can be null:**
   * true
   */
  periods?: DescribeDeductionStatisticRequestPeriods[];
  /**
   * @remarks
   * The list of resource types in JSON array format.
   */
  resourceTypes?: string[];
  /**
   * @remarks
   * The start time of the query. UNIX timestamp, in milliseconds.
   * 
   * @example
   * 1774022400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIds: 'InstanceIds',
      periods: 'Periods',
      resourceTypes: 'ResourceTypes',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      periods: { 'type': 'array', 'itemType': DescribeDeductionStatisticRequestPeriods },
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.periods)) {
      $dara.Model.validateArray(this.periods);
    }
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

