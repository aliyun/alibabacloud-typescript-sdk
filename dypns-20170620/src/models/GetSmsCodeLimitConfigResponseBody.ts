// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmsCodeLimitConfigResponseBodyData extends $dara.Model {
  limitDay?: number;
  limitHour?: number;
  limitId?: number;
  limitMinute?: number;
  limitOther?: string;
  static names(): { [key: string]: string } {
    return {
      limitDay: 'LimitDay',
      limitHour: 'LimitHour',
      limitId: 'LimitId',
      limitMinute: 'LimitMinute',
      limitOther: 'LimitOther',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limitDay: 'number',
      limitHour: 'number',
      limitId: 'number',
      limitMinute: 'number',
      limitOther: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsCodeLimitConfigResponseBody extends $dara.Model {
  code?: string;
  data?: GetSmsCodeLimitConfigResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSmsCodeLimitConfigResponseBodyData,
      message: 'string',
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

