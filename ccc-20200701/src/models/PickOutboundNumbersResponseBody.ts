// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PickOutboundNumbersResponseBodyDataCallee extends $dara.Model {
  city?: string;
  /**
   * @example
   * 1388888****
   */
  number?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      number: 'Number',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      number: 'string',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBodyDataCaller extends $dara.Model {
  city?: string;
  /**
   * @example
   * 0108989****
   */
  number?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      number: 'Number',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      number: 'string',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBodyData extends $dara.Model {
  callee?: PickOutboundNumbersResponseBodyDataCallee;
  caller?: PickOutboundNumbersResponseBodyDataCaller;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: PickOutboundNumbersResponseBodyDataCallee,
      caller: PickOutboundNumbersResponseBodyDataCaller,
    };
  }

  validate() {
    if(this.callee && typeof (this.callee as any).validate === 'function') {
      (this.callee as any).validate();
    }
    if(this.caller && typeof (this.caller as any).validate === 'function') {
      (this.caller as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: PickOutboundNumbersResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * EEEE671A-3E24-4A04-81E6-6C4F5B39DF75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': PickOutboundNumbersResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
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

