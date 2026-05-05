// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeductionStatisticResponseBodyDataAvailableCorePackages extends $dara.Model {
  aliUid?: number;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 2024-12-31 23:59:59
   */
  endTime?: string;
  /**
   * @example
   * 2024-12-31 23:59:59
   */
  expiredTime?: string;
  /**
   * @example
   * g-xxxxx
   */
  groupId?: string;
  /**
   * @example
   * CoreHour
   */
  groupResourceType?: string;
  noLx?: boolean;
  noLxSource?: string;
  /**
   * @example
   * res-xxxxx
   */
  resourceId?: string;
  /**
   * @example
   * CoreHour
   */
  resourceType?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  totalTime?: number;
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
  consumeSecond?: number;
  /**
   * @example
   * 2024-01-01
   */
  deductionDate?: string;
  /**
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
  consumeSecond?: number;
  /**
   * @example
   * 2024-01-01
   */
  period?: string;
  /**
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
  availableCorePackages?: DescribeDeductionStatisticResponseBodyDataAvailableCorePackages[];
  deductions?: DescribeDeductionStatisticResponseBodyDataDeductions[];
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
  data?: DescribeDeductionStatisticResponseBodyData;
  /**
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

