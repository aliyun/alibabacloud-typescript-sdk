// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeQuotaScheduleResponseBodyDataCondition extends $dara.Model {
  /**
   * @remarks
   * The start time when the quota plan takes effect.
   * 
   * @example
   * 09:00
   */
  at?: string;
  static names(): { [key: string]: string } {
    return {
      at: 'at',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetComputeQuotaScheduleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The value of effective condition.
   */
  condition?: GetComputeQuotaScheduleResponseBodyDataCondition;
  /**
   * @remarks
   * The ID of the quota plan.
   * 
   * @example
   * 89b54db44d384f26964951ea457f64a5
   */
  id?: string;
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
   * The time zone property.
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
   * daily
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      id: 'id',
      plan: 'plan',
      timezone: 'timezone',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: GetComputeQuotaScheduleResponseBodyDataCondition,
      id: 'string',
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

export class GetComputeQuotaScheduleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetComputeQuotaScheduleResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * QUOTA_UNKNOWN_NICKNAME
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Cannot found quota **
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational response. The request is received and is being processed.
   * - 2xx: success. The request is successfully received, understood, and accepted by the server.
   * - 3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * - 4xx: client error. The request contains invalid request parameters or syntaxes, or specific request conditions cannot be met.
   * - 5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B42CA730-8187-50F1-9FE0-6733297036DB
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
      data: { 'type': 'array', 'itemType': GetComputeQuotaScheduleResponseBodyData },
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

