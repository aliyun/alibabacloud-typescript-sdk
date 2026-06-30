// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeductionStatisticRequestPeriods extends $dara.Model {
  /**
   * @remarks
   * The base time.
   * 
   * @example
   * 2024-01-01
   */
  baseTime?: string;
  /**
   * @remarks
   * The period unit. For valid values, see the `PeriodUnit` enumeration.
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
   * The end time, specified as a Unix timestamp.
   * 
   * @example
   * 2025-06-06T02:14:00Z
   */
  endTime?: number;
  /**
   * @remarks
   * The list of instance IDs, specified as a JSON array.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The list of periods, formatted as a JSON array of `PeriodParam` objects.
   * 
   * **if can be null:**
   * true
   */
  periods?: DescribeDeductionStatisticRequestPeriods[];
  /**
   * @remarks
   * The list of resource types, specified as a JSON array.
   */
  resourceTypes?: string[];
  /**
   * @remarks
   * The start time, specified as a Unix timestamp.
   * 
   * @example
   * 2026-03-20T16:00:00Z
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

