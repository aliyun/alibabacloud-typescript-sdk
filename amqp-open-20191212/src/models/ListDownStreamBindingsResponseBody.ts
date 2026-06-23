// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDownStreamBindingsResponseBodyDataBindings extends $dara.Model {
  /**
   * @remarks
   * The x-match property. Valid values:
   * 
   * - **all**: The default value. All key-value pairs in the message header must match.
   * 
   * - **any**: At least one key-value pair in the message header must match.
   * 
   * This parameter is valid only for headers exchanges.
   * 
   * @example
   * test
   */
  argument?: string;
  /**
   * @remarks
   * The binding key.
   * 
   * - If the source exchange is not a topic exchange:
   * 
   *   - The binding key can contain only letters, digits, hyphens (-), underscores (_), periods (.), forward slashes (/), and at signs (@).
   * 
   *   - The binding key must be 1 to 255 characters in length.
   * 
   * - If the source exchange is a topic exchange:
   * 
   *   - The binding key can contain letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), asterisks (\\*), forward slashes (/), and at signs (@).
   * 
   *   - The binding key cannot start or end with a period (.). If the binding key starts with a number sign (#) or an asterisk (\\*), it must be followed by a period (.). If it ends with a number sign (#) or an asterisk (\\*), it must be preceded by a period (.). If a number sign (#) or an asterisk (\\*) is in the middle of the binding key, it must be surrounded by periods (.).
   * 
   *   - The binding key must be 1 to 255 characters in length.
   * 
   * @example
   * amq.test
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
   * QUEUE
   */
  bindingType?: string;
  /**
   * @remarks
   * The name of the destination.
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
   * The maximum number of results returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. If the value is empty, all results have been returned.
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
   * The return code. A value of 200 indicates that the request was successful.
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

