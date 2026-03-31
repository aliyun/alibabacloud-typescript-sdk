// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeQuotaScheduleRequestBodyCondition extends $dara.Model {
  /**
   * @remarks
   * The start time when the quota plan takes effect.
   * 
   * This parameter is required.
   * 
   * @example
   * 10:00
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

export class UpdateComputeQuotaScheduleRequestBody extends $dara.Model {
  /**
   * @remarks
   * The value of effective condition.
   */
  condition?: UpdateComputeQuotaScheduleRequestBodyCondition;
  /**
   * @remarks
   * The name of the quota plan.
   * 
   * This parameter is required.
   * 
   * @example
   * planA
   */
  plan?: string;
  /**
   * @remarks
   * The type of the quota plan.
   * 
   * >Notice: Currently, only daily is supported.</notice>
   * 
   * This parameter is required.
   * 
   * @example
   * daily
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      plan: 'plan',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: UpdateComputeQuotaScheduleRequestBodyCondition,
      plan: 'string',
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

export class UpdateComputeQuotaScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   */
  body?: UpdateComputeQuotaScheduleRequestBody[];
  scheduleTimezone?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      scheduleTimezone: 'scheduleTimezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': UpdateComputeQuotaScheduleRequestBody },
      scheduleTimezone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

