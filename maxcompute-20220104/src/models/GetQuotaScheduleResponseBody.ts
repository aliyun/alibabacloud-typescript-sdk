// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaScheduleResponseBodyDataCondition extends $dara.Model {
  after?: string;
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
  condition?: GetQuotaScheduleResponseBodyDataCondition;
  id?: string;
  operator?: string;
  plan?: string;
  timezone?: string;
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
  data?: GetQuotaScheduleResponseBodyData[];
  errorCode?: string;
  errorMsg?: string;
  httpCode?: number;
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

