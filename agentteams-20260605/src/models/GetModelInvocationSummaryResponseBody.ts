// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelInvocationSummaryResponseBodyDataProviderDistribution extends $dara.Model {
  /**
   * @remarks
   * The number of calls.
   * 
   * @example
   * 455
   */
  count?: number;
  /**
   * @remarks
   * The percentage.
   * 
   * @example
   * 0.65
   */
  percentage?: number;
  /**
   * @remarks
   * The provider name.
   * 
   * @example
   * my-provider
   */
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
  /**
   * @remarks
   * The call frequency. Unit: calls per minute.
   * 
   * @example
   * 0.5
   */
  callFrequency?: number;
  /**
   * @remarks
   * The provider call distribution.
   * 
   * @example
   * [...]
   */
  providerDistribution?: GetModelInvocationSummaryResponseBodyDataProviderDistribution[];
  /**
   * @remarks
   * The number of calls made today.
   * 
   * @example
   * 100
   */
  todayCallCount?: number;
  /**
   * @remarks
   * The change rate of calls made today.
   * 
   * @example
   * 0.15
   */
  todayChangeRate?: number;
  /**
   * @remarks
   * The number of calls made this week.
   * 
   * @example
   * 700
   */
  weekCallCount?: number;
  /**
   * @remarks
   * The change rate of calls made this week.
   * 
   * @example
   * 0.05
   */
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
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {}
   */
  data?: GetModelInvocationSummaryResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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

