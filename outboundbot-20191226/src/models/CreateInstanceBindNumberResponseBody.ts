// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceBindNumberResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * 96b847ad-2683-4794-b7b4-7ef094fb81f6
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the binding was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceBindNumberResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of number data.
   */
  list?: CreateInstanceBindNumberResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': CreateInstanceBindNumberResponseBodyDataList },
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceBindNumberResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: CreateInstanceBindNumberResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * API message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
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
      data: CreateInstanceBindNumberResponseBodyData,
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

