// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListZonesResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether QuickAssist Technology (QAT) is supported.
   * 
   * @example
   * true
   */
  supportQat?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-shenzhen-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      supportQat: 'supportQat',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportQat: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZonesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of zones.
   */
  items?: ListZonesResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListZonesResponseBodyDataItems },
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

export class ListZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListZonesResponseBodyData;
  /**
   * @remarks
   * The response message.
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
   * E8079207-B651-592A-A565-23E9EE5673B0
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
      data: ListZonesResponseBodyData,
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

