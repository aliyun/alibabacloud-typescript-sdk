// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeductionStatisticRequestPeriods extends $dara.Model {
  /**
   * @example
   * 2024-01-01
   */
  baseTime?: string;
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
  endTime?: number;
  instanceIds?: string[];
  /**
   * **if can be null:**
   * true
   */
  periods?: DescribeDeductionStatisticRequestPeriods[];
  resourceTypes?: string[];
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

