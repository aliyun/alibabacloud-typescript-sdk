// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpApiRouteResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The route ID.
   * 
   * @example
   * hr-cr82undlhtgrlej***
   */
  routeId?: string;
  static names(): { [key: string]: string } {
    return {
      routeId: 'routeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiRouteResponseBody extends $dara.Model {
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
   * The response data.
   */
  data?: CreateHttpApiRouteResponseBodyData;
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
   * 3ACFC7A7-45A9-58CF-B2D5-765B60254695
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
      data: CreateHttpApiRouteResponseBodyData,
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

