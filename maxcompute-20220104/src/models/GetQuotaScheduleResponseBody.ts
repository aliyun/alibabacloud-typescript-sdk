// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaScheduleResponseBodyDataCondition extends $dara.Model {
  /**
   * @remarks
   * The start time when the quota plan takes effect.
   * 
   * @example
   * 2022-04-25T04:23:04Z
   */
  after?: string;
  /**
   * @remarks
   * The time when the quota plan takes effect.
   * 
   * @example
   * 0900
   */
  at?: string;
  static names(): { [key: string]: string } {
    return {
      after: 'after',
      at: 'at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      after: 'string',
      at: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaScheduleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The condition value.
   */
  condition?: GetQuotaScheduleResponseBodyDataCondition;
  /**
   * @remarks
   * The ID of the quota plan.
   * 
   * @example
   * 63
   */
  id?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operator?: string;
  /**
   * @remarks
   * The name of the quota plan.
   * 
   * @example
   * planA
   */
  plan?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  /**
   * @remarks
   * The type of the quota plan.
   * 
   * @example
   * once
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      id: 'id',
      operator: 'operator',
      plan: 'plan',
      timezone: 'timezone',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: GetQuotaScheduleResponseBodyDataCondition,
      id: 'string',
      operator: 'string',
      plan: 'string',
      timezone: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaScheduleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetQuotaScheduleResponseBodyData[];
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * errorMsg
   */
  errorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. If this parameter was not empty and the value of this parameter was not 200, the request failed.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc059b716696296266308790e0d3e
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetQuotaScheduleResponseBodyData },
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

