// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBindingsResponseBodyDataBindings extends $dara.Model {
  /**
   * @remarks
   * The x-match property. Valid values:
   * 
   * - **all**: The default value. All key-value pairs of the message header must match.
   * 
   * - **any**: At least one key-value pair of the message header must match.
   * 
   * This parameter is valid only for headers exchanges.
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
   *   - The binding key can contain letters, digits, hyphens (-), underscores (_), asterisks (\\*), periods (.), number signs (#), forward slashes (/), and at signs (@).
   * 
   *   - The binding key cannot start or end with a period (.). If the key starts with a number sign (#) or an asterisk (\\*), it must be followed by a period (.). If the key ends with a number sign (#) or an asterisk (\\*), it must be preceded by a period (.). If a number sign (#) or an asterisk (\\*) is in the middle of the key, it must be both preceded and followed by a period (.).
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

export class ListBindingsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of bindings.
   */
  bindings?: ListBindingsResponseBodyDataBindings[];
  /**
   * @remarks
   * The maximum number of entries returned for the current request.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The position where the current query ends. An empty value indicates that all data is returned.
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
      bindings: { 'type': 'array', 'itemType': ListBindingsResponseBodyDataBindings },
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

export class ListBindingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListBindingsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E0A71208-3E87-4732-81CC-B18E0B4B1***
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
      data: ListBindingsResponseBodyData,
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

