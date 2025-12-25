// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExchangesResponseBodyDataExchanges extends $dara.Model {
  /**
   * @remarks
   * The attributes. This parameter is unavailable in the current version.
   * 
   * @example
   * test
   */
  attributes?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether the exchange was automatically deleted.
   * 
   * @example
   * false
   */
  autoDeleteState?: boolean;
  /**
   * @remarks
   * The timestamp that indicates when the exchange was created. Unit: milliseconds.
   * 
   * @example
   * 1580886216000
   */
  createTime?: number;
  /**
   * @remarks
   * The exchange type.
   * 
   * @example
   * DIRECT
   */
  exchangeType?: string;
  internal?: boolean;
  /**
   * @remarks
   * The exchange name.
   * 
   * @example
   * amq.direct
   */
  name?: string;
  /**
   * @remarks
   * The vhost name.
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
   * The token that marks the end of the current returned page.``
   * 
   * *   If the value of this parameter is empty, the next query is not required and the token used to start the next query is unavailable.``
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.``
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

