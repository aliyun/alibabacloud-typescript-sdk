// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDownStreamBindingsResponseBodyDataBindings extends $dara.Model {
  /**
   * @remarks
   * The x-match attribute. Valid values:
   * 
   * *   **all:** A headers exchange routes a message to a queue only if all binding attributes of the queue except for x-match match the headers attributes of the message. This value is the default value.
   * *   **any:** A headers exchange routes a message to a queue if one or more binding attributes of the queue except for x-match match the headers attributes of the message.
   * 
   * This parameter is available only for headers exchanges.
   * 
   * @example
   * test
   */
  argument?: string;
  /**
   * @remarks
   * The binding key.
   * 
   * *   If the source exchange is not a topic exchange, the binding key must meet the following conventions:
   * 
   *     *   The binding key can contain only letters, digits, hyphens (-), underscores (_), periods (.), forward slashes (/), and at signs (@).
   *     *   The binding key must be 1 to 255 characters in length.
   * 
   * *   If the source exchange is a topic exchange, the binding key must meet the following conventions:
   * 
   *     *   The binding key can contain letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slashes (/), and at signs (@).
   *     *   The binding key cannot start or end with a period (.). If a binding key starts with a number sign (#) or an asterisk (\\*), the number sign (#) or asterisk (\\*) must be followed by a period (.). If the binding key ends with a number sign (#) or an asterisk (\\*), the number sign (#) or asterisk (\\*) must be preceded by a period (.). If a number sign (#) or an asterisk (\\*) is used in the middle of a binding key, the number sign (#) or asterisk (\\*) must be preceded and followed by a period (.).
   *     *   The binding key must be 1 to 255 characters in length.
   * 
   * @example
   * amq.test
   */
  bindingKey?: string;
  /**
   * @remarks
   * The type of the object to which the source exchange is bound. Valid values:
   * 
   * *   **QUEUE**
   * *   **EXCHANGE**
   * 
   * @example
   * QUEUE
   */
  bindingType?: string;
  /**
   * @remarks
   * The name of the object to which the source exchange is bound.
   * 
   * @example
   * QueueTest
   */
  destinationName?: string;
  /**
   * @remarks
   * The name of the source exchange.
   * 
   * @example
   * test
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

export class ListDownStreamBindingsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The bindings.
   */
  bindings?: ListDownStreamBindingsResponseBodyDataBindings[];
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
   * The token that marks the end of the current returned page. If this parameter is empty, all data is retrieved.
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
      bindings: { 'type': 'array', 'itemType': ListDownStreamBindingsResponseBodyDataBindings },
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

export class ListDownStreamBindingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListDownStreamBindingsResponseBodyData;
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
   * 9C1E0502-0790-4FDB-8C96-6D5C8D9B7***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      data: ListDownStreamBindingsResponseBodyData,
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

