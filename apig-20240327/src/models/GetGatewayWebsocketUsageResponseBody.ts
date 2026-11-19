// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayWebsocketUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data basis.
   * 
   * @example
   * redis_period
   */
  basis?: string;
  /**
   * @remarks
   * Indicates whether a next page is available.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The cycle usage.
   * 
   * @example
   * []
   */
  items?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      basis: 'basis',
      hasMore: 'hasMore',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basis: 'string',
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayWebsocketUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The query result.
   * 
   * @example
   * {}
   */
  data?: GetGatewayWebsocketUsageResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified gateway does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0A6A1A0-8793-4C10-AB1A-2C03E770A912
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
      data: GetGatewayWebsocketUsageResponseBodyData,
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

