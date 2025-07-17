// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpApiResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The HTTP API ID.
   * 
   * @example
   * api-xxx
   */
  httpApiId?: string;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * test-api
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      httpApiId: 'httpApiId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpApiId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The API information.
   */
  data?: CreateHttpApiResponseBodyData;
  /**
   * @remarks
   * The returned message.
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
   * A1994B10-C6A8-58FA-8347-6A08B0D4EFDE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateHttpApiResponseBodyData,
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

