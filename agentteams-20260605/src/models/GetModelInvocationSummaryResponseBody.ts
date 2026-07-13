// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelInvocationSummaryResponseBodyDataProviderDistribution extends $dara.Model {
  count?: number;
  percentage?: number;
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      percentage: 'Percentage',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      percentage: 'number',
      providerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelInvocationSummaryResponseBodyData extends $dara.Model {
  callFrequency?: number;
  providerDistribution?: GetModelInvocationSummaryResponseBodyDataProviderDistribution[];
  todayCallCount?: number;
  todayChangeRate?: number;
  weekCallCount?: number;
  weekChangeRate?: number;
  static names(): { [key: string]: string } {
    return {
      callFrequency: 'CallFrequency',
      providerDistribution: 'ProviderDistribution',
      todayCallCount: 'TodayCallCount',
      todayChangeRate: 'TodayChangeRate',
      weekCallCount: 'WeekCallCount',
      weekChangeRate: 'WeekChangeRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callFrequency: 'number',
      providerDistribution: { 'type': 'array', 'itemType': GetModelInvocationSummaryResponseBodyDataProviderDistribution },
      todayCallCount: 'number',
      todayChangeRate: 'number',
      weekCallCount: 'number',
      weekChangeRate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.providerDistribution)) {
      $dara.Model.validateArray(this.providerDistribution);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelInvocationSummaryResponseBody extends $dara.Model {
  code?: string;
  data?: GetModelInvocationSummaryResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetModelInvocationSummaryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

