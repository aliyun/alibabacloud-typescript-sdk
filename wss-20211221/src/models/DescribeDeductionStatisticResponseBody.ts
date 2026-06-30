// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeductionStatisticResponseBodyDataAvailableCorePackages extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 1568857911493620
   */
  aliUid?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2024-12-31 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2024-12-31 23:59:59
   */
  expiredTime?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * g-xxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The group resource type.
   * 
   * @example
   * CoreHour
   */
  groupResourceType?: string;
  /**
   * @remarks
   * Indicates whether the resource is a No-Lx resource.
   */
  noLx?: boolean;
  /**
   * @remarks
   * The source of the No-Lx resource.
   * 
   * @example
   * 无凌霄来源示例值
   */
  noLxSource?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * res-xxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The group resource type.
   * 
   * @example
   * CoreHour
   */
  resourceType?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The total duration.
   * 
   * @example
   * 1000000
   */
  totalTime?: number;
  /**
   * @remarks
   * The used duration.
   * 
   * @example
   * 40000
   */
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      expiredTime: 'ExpiredTime',
      groupId: 'GroupId',
      groupResourceType: 'GroupResourceType',
      noLx: 'NoLx',
      noLxSource: 'NoLxSource',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      status: 'Status',
      totalTime: 'TotalTime',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      createTime: 'string',
      endTime: 'string',
      expiredTime: 'string',
      groupId: 'string',
      groupResourceType: 'string',
      noLx: 'boolean',
      noLxSource: 'string',
      resourceId: 'string',
      resourceType: 'string',
      startTime: 'string',
      status: 'string',
      totalTime: 'number',
      usedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeductionStatisticResponseBodyDataDeductions extends $dara.Model {
  /**
   * @remarks
   * The consumption duration in seconds.
   * 
   * @example
   * 7000
   */
  consumeSecond?: number;
  /**
   * @remarks
   * The deduction date.
   * 
   * @example
   * 2024-01-01
   */
  deductionDate?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * CloudDesktop
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      consumeSecond: 'ConsumeSecond',
      deductionDate: 'DeductionDate',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeSecond: 'number',
      deductionDate: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeductionStatisticResponseBodyDataUsages extends $dara.Model {
  /**
   * @remarks
   * **The consumption duration in seconds.**
   * 
   * @example
   * 6000
   */
  consumeSecond?: number;
  /**
   * @remarks
   * **The time period.**
   * 
   * @example
   * 2024-01-01
   */
  period?: string;
  /**
   * @remarks
   * **The resource type.**
   * 
   * @example
   * CloudDesktop
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      consumeSecond: 'ConsumeSecond',
      period: 'Period',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeSecond: 'number',
      period: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeductionStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * **The available core-hour packages.**
   */
  availableCorePackages?: DescribeDeductionStatisticResponseBodyDataAvailableCorePackages[];
  /**
   * @remarks
   * The deduction details.
   */
  deductions?: DescribeDeductionStatisticResponseBodyDataDeductions[];
  /**
   * @remarks
   * **The usage details.**
   */
  usages?: DescribeDeductionStatisticResponseBodyDataUsages[];
  static names(): { [key: string]: string } {
    return {
      availableCorePackages: 'AvailableCorePackages',
      deductions: 'Deductions',
      usages: 'Usages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCorePackages: { 'type': 'array', 'itemType': DescribeDeductionStatisticResponseBodyDataAvailableCorePackages },
      deductions: { 'type': 'array', 'itemType': DescribeDeductionStatisticResponseBodyDataDeductions },
      usages: { 'type': 'array', 'itemType': DescribeDeductionStatisticResponseBodyDataUsages },
    };
  }

  validate() {
    if(Array.isArray(this.availableCorePackages)) {
      $dara.Model.validateArray(this.availableCorePackages);
    }
    if(Array.isArray(this.deductions)) {
      $dara.Model.validateArray(this.deductions);
    }
    if(Array.isArray(this.usages)) {
      $dara.Model.validateArray(this.usages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeductionStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The deduction data.
   */
  data?: DescribeDeductionStatisticResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDeductionStatisticResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

