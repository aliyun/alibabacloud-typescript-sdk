// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCorePackageListResponseBodyCorePackageInfoCorePackageListRemainingPeriods extends $dara.Model {
  periodEndTime?: string;
  periodStartTime?: string;
  remainingCoreHours?: number;
  status?: string;
  totalCoreHours?: number;
  usedCoreHours?: number;
  static names(): { [key: string]: string } {
    return {
      periodEndTime: 'PeriodEndTime',
      periodStartTime: 'PeriodStartTime',
      remainingCoreHours: 'RemainingCoreHours',
      status: 'Status',
      totalCoreHours: 'TotalCoreHours',
      usedCoreHours: 'UsedCoreHours',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodEndTime: 'string',
      periodStartTime: 'string',
      remainingCoreHours: 'number',
      status: 'string',
      totalCoreHours: 'number',
      usedCoreHours: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCorePackageListResponseBodyCorePackageInfoCorePackageList extends $dara.Model {
  assignedCoreHours?: number;
  deductionInstanceList?: any[];
  expireTime?: string;
  instanceId?: string;
  periodEndTime?: string;
  periodStartTime?: string;
  productType?: string;
  remainingCoreHours?: number;
  remainingPeriods?: DescribeCorePackageListResponseBodyCorePackageInfoCorePackageListRemainingPeriods[];
  startTime?: string;
  status?: string;
  totalCoreHours?: number;
  unassignedCoreHours?: number;
  usedCoreHours?: number;
  static names(): { [key: string]: string } {
    return {
      assignedCoreHours: 'AssignedCoreHours',
      deductionInstanceList: 'DeductionInstanceList',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      periodEndTime: 'PeriodEndTime',
      periodStartTime: 'PeriodStartTime',
      productType: 'ProductType',
      remainingCoreHours: 'RemainingCoreHours',
      remainingPeriods: 'RemainingPeriods',
      startTime: 'StartTime',
      status: 'Status',
      totalCoreHours: 'TotalCoreHours',
      unassignedCoreHours: 'UnassignedCoreHours',
      usedCoreHours: 'UsedCoreHours',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedCoreHours: 'number',
      deductionInstanceList: { 'type': 'array', 'itemType': 'any' },
      expireTime: 'string',
      instanceId: 'string',
      periodEndTime: 'string',
      periodStartTime: 'string',
      productType: 'string',
      remainingCoreHours: 'number',
      remainingPeriods: { 'type': 'array', 'itemType': DescribeCorePackageListResponseBodyCorePackageInfoCorePackageListRemainingPeriods },
      startTime: 'string',
      status: 'string',
      totalCoreHours: 'number',
      unassignedCoreHours: 'number',
      usedCoreHours: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deductionInstanceList)) {
      $dara.Model.validateArray(this.deductionInstanceList);
    }
    if(Array.isArray(this.remainingPeriods)) {
      $dara.Model.validateArray(this.remainingPeriods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCorePackageListResponseBodyCorePackageInfo extends $dara.Model {
  corePackageList?: DescribeCorePackageListResponseBodyCorePackageInfoCorePackageList[];
  summaryRemainingCoreHours?: number;
  static names(): { [key: string]: string } {
    return {
      corePackageList: 'CorePackageList',
      summaryRemainingCoreHours: 'SummaryRemainingCoreHours',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corePackageList: { 'type': 'array', 'itemType': DescribeCorePackageListResponseBodyCorePackageInfoCorePackageList },
      summaryRemainingCoreHours: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.corePackageList)) {
      $dara.Model.validateArray(this.corePackageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCorePackageListResponseBody extends $dara.Model {
  code?: string;
  corePackageInfo?: DescribeCorePackageListResponseBodyCorePackageInfo;
  message?: string;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      corePackageInfo: 'CorePackageInfo',
      message: 'Message',
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      corePackageInfo: DescribeCorePackageListResponseBodyCorePackageInfo,
      message: 'string',
      requestId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    if(this.corePackageInfo && typeof (this.corePackageInfo as any).validate === 'function') {
      (this.corePackageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

