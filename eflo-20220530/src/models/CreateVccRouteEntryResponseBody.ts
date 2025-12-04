// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVccRouteEntryResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * @example
   * vcc-rte-5cey1sap
   */
  vccRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      vccRouteEntryId: 'VccRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vccRouteEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVccRouteEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the failed permission verification.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  content?: CreateVccRouteEntryResponseBodyContent;
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
   * 039C3C3A-3C37-5672-80D5-D8CD48C676D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: CreateVccRouteEntryResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

