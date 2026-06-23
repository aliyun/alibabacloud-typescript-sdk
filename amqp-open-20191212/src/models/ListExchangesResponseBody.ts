// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExchangesResponseBodyDataExchanges extends $dara.Model {
  /**
   * @remarks
   * The attributes of the exchange. This parameter is not supported.
   * 
   * @example
   * test
   */
  attributes?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether the exchange is an auto-delete exchange.
   * 
   * @example
   * false
   */
  autoDeleteState?: boolean;
  /**
   * @remarks
   * The time when the exchange was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1580886216000
   */
  createTime?: number;
  /**
   * @remarks
   * The type of the exchange.
   * 
   * @example
   * DIRECT
   */
  exchangeType?: string;
  /**
   * @remarks
   * Indicates whether the exchange is an internal exchange.
   */
  internal?: boolean;
  /**
   * @remarks
   * The name of the exchange.
   * 
   * @example
   * amq.direct
   */
  name?: string;
  /**
   * @remarks
   * The name of the vhost to which the exchange belongs.
   * 
   * @example
   * test
   */
  VHostName?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      autoDeleteState: 'AutoDeleteState',
      createTime: 'CreateTime',
      exchangeType: 'ExchangeType',
      internal: 'Internal',
      name: 'Name',
      VHostName: 'VHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      autoDeleteState: 'boolean',
      createTime: 'number',
      exchangeType: 'string',
      internal: 'boolean',
      name: 'string',
      VHostName: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The exchanges.
   */
  exchanges?: ListExchangesResponseBodyDataExchanges[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the start of the next query.
   * 
   * - If this parameter is empty, no more data is available.
   * 
   * - If a value is returned, use the value as the `NextToken` value in the next call to continue the query.
   * 
   * @example
   * AAAANDQBYW1xcC1jbi03cHAybXdiY3AwMGEBdmhvc3QBAXNkZndhYWJhATE2NDkzMTM4OTU5NDIB4o3z1pPwWzk4aYuiRffi8R6-****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      exchanges: 'Exchanges',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exchanges: { 'type': 'array', 'itemType': ListExchangesResponseBodyDataExchanges },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.exchanges)) {
      $dara.Model.validateArray(this.exchanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListExchangesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FEBA5E0C-50D0-4FA6-A794-4901E5465***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListExchangesResponseBodyData,
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

