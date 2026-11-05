// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNumberBindingsOfInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the number is bound to the instance specified in the request.
   * 
   * @example
   * true
   */
  bound?: boolean;
  /**
   * @remarks
   * The bound number.
   * 
   * @example
   * 02180542230
   */
  number?: string;
  /**
   * @remarks
   * The SIP trunk ID.
   * 
   * @example
   * 020ffd7f-e40a-4969-acc3-3e1d80870e3f
   */
  sipTrunkId?: string;
  /**
   * @remarks
   * The SIP trunk name.
   * 
   * @example
   * Sample trunk
   */
  sipTrunkName?: string;
  static names(): { [key: string]: string } {
    return {
      bound: 'Bound',
      number: 'Number',
      sipTrunkId: 'SipTrunkId',
      sipTrunkName: 'SipTrunkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bound: 'boolean',
      number: 'string',
      sipTrunkId: 'string',
      sipTrunkName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNumberBindingsOfInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The list of number binding information.
   */
  data?: ListNumberBindingsOfInstanceResponseBodyData[];
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
   * The message returned by the API operation.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      data: { 'type': 'array', 'itemType': ListNumberBindingsOfInstanceResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

