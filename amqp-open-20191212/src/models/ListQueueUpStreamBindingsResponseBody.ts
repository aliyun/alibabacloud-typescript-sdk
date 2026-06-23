// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueueUpStreamBindingsResponseBodyDataBindings extends $dara.Model {
  /**
   * @remarks
   * The x-match property. Valid values:
   * 
   * - **all**: This is the default value. All key-value pairs in the message header must match.
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
   *   - The binding key can contain only letters, digits, hyphens (-), underscores (_), periods (.), forward slashes (/), and at signs (@).
   * 
   *   - The binding key must be 1 to 255 characters in length.
   * 
   * - If the source exchange is a topic exchange:
   * 
   *   - The binding key can contain letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slashes (/), and at signs (@).
   * 
   *   - The binding key cannot start or end with a period (.). If a number sign (#) or an asterisk (\\*) is at the beginning of the key, it must be followed by a period (.). If it is at the end of the key, it must be preceded by a period (.). If it is in the middle of the key, it must be enclosed by periods (.).
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

export class ListQueueUpStreamBindingsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The bindings.
   */
  bindings?: ListQueueUpStreamBindingsResponseBodyDataBindings[];
  /**
   * @remarks
   * The maximum number of results returned.
   * 
   * @example
   * 1
   */
  maxResults?: string;
  /**
   * @remarks
   * The token that marks the end of the current results. An empty value indicates that all results have been returned.
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
      bindings: { 'type': 'array', 'itemType': ListQueueUpStreamBindingsResponseBodyDataBindings },
      maxResults: 'string',
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

export class ListQueueUpStreamBindingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListQueueUpStreamBindingsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8BFB1C9D-08A2-4859-A47C-403C9EFA2***
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
      data: ListQueueUpStreamBindingsResponseBodyData,
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

