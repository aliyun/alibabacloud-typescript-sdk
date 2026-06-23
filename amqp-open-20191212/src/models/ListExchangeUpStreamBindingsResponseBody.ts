// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExchangeUpStreamBindingsResponseBodyDataBindings extends $dara.Model {
  /**
   * @remarks
   * The x-match property. Valid values:
   * 
   * - **all**: The default value. All key-value pairs in the message header must match.
   * 
   * - **any**: At least one key-value pair in the message header must match.
   * 
   * This parameter is valid only for headers exchanges. It is invalid for other types of exchanges.
   * 
   * @example
   * all
   */
  argument?: string;
  /**
   * @remarks
   * The binding key.
   * 
   * - If the source exchange is not a topic exchange:
   * 
   *   - The key can contain only letters, digits, hyphens (-), underscores (_), periods (.), forward slashes (/), and at signs (@).
   * 
   *   - The key must be 1 to 255 characters in length.
   * 
   * - If the source exchange is a topic exchange:
   * 
   *   - The key can contain letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slashes (/), and at signs (@).
   * 
   *   - The key cannot start or end with a period (.). A number sign (#) or an asterisk (\\*) must be preceded by a period if it is not at the start of the key. It must be followed by a period if it is not at the end of the key.
   * 
   *   - The key must be 1 to 255 characters in length.
   * 
   * @example
   * amq.dle.test
   */
  bindingKey?: string;
  /**
   * @remarks
   * The type of the destination object. Valid values:
   * 
   * - **QUEUE**
   * 
   * - **EXCHANGE**
   * 
   * @example
   * EXCHANGE
   */
  bindingType?: string;
  /**
   * @remarks
   * The destination name.
   * 
   * @example
   * test
   */
  destinationName?: string;
  /**
   * @remarks
   * The name of the source exchange.
   * 
   * @example
   * dle
   */
  sourceExchange?: string;
  static names(): { [key: string]: string } {
    return {
      argument: 'Argument',
      bindingKey: 'BindingKey',
      bindingType: 'BindingType',
      destinationName: 'DestinationName',
      sourceExchange: 'SourceExchange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argument: 'string',
      bindingKey: 'string',
      bindingType: 'string',
      destinationName: 'string',
      sourceExchange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangeUpStreamBindingsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The bindings.
   */
  bindings?: ListExchangeUpStreamBindingsResponseBodyDataBindings[];
  /**
   * @remarks
   * The maximum number of results returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that indicates the position where the current query ends. An empty value indicates that all data has been read.
   * 
   * @example
   * caebacccb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      bindings: 'Bindings',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindings: { 'type': 'array', 'itemType': ListExchangeUpStreamBindingsResponseBodyDataBindings },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bindings)) {
      $dara.Model.validateArray(this.bindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangeUpStreamBindingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListExchangeUpStreamBindingsResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2DCCCE88-BC82-4A4F-AF5E-9A759672B***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListExchangeUpStreamBindingsResponseBodyData,
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

