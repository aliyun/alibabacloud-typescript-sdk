// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpApiResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * HTTP API ID。
   * 
   * @example
   * api-xxx
   */
  httpApiId?: string;
  /**
   * @remarks
   * The API base path, which must start with a forward slash (/).
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
   * API for testing
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * A protocol.
   */
  data?: CreateHttpApiResponseBodyData;
  /**
   * @remarks
   * The protocol list for API access.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The API description.
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

