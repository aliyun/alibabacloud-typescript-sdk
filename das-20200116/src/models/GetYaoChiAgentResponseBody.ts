// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYaoChiAgentResponseBodyFunctionCall extends $dara.Model {
  /**
   * @example
   * {"arg": "xxx"}
   */
  arguments?: string;
  /**
   * @example
   * 123447
   */
  id?: string;
  /**
   * @example
   * sqlReview
   */
  name?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      arguments: 'Arguments',
      id: 'Id',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arguments: 'string',
      id: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetYaoChiAgentResponseBodySubAgentCall extends $dara.Model {
  status?: string;
  subAgentId?: string;
  subAgentName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      subAgentId: 'SubAgentId',
      subAgentName: 'SubAgentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      subAgentId: 'string',
      subAgentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetYaoChiAgentResponseBodyUiFunctionCall extends $dara.Model {
  /**
   * @example
   * {"arg": "xxx"}
   */
  argsText?: string;
  /**
   * @example
   * card
   */
  toolName?: string;
  static names(): { [key: string]: string } {
    return {
      argsText: 'ArgsText',
      toolName: 'ToolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argsText: 'string',
      toolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetYaoChiAgentResponseBody extends $dara.Model {
  /**
   * @example
   * xxx
   */
  content?: string;
  functionCall?: GetYaoChiAgentResponseBodyFunctionCall[];
  parentId?: string;
  /**
   * @example
   * polardb
   */
  product?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-xxxxxxxxxxxx
   */
  queryId?: string;
  /**
   * @example
   * xxx
   */
  reasoningContent?: string;
  /**
   * @example
   * 7172BECE-588A-5961-8126-C216E16B****
   */
  requestId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-xxxxxxxxxxxx
   */
  sessionId?: string;
  subAgentCall?: GetYaoChiAgentResponseBodySubAgentCall[];
  uiFunctionCall?: GetYaoChiAgentResponseBodyUiFunctionCall[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      functionCall: 'FunctionCall',
      parentId: 'ParentId',
      product: 'Product',
      queryId: 'QueryId',
      reasoningContent: 'ReasoningContent',
      requestId: 'RequestId',
      sessionId: 'SessionId',
      subAgentCall: 'SubAgentCall',
      uiFunctionCall: 'UiFunctionCall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      functionCall: { 'type': 'array', 'itemType': GetYaoChiAgentResponseBodyFunctionCall },
      parentId: 'string',
      product: 'string',
      queryId: 'string',
      reasoningContent: 'string',
      requestId: 'string',
      sessionId: 'string',
      subAgentCall: { 'type': 'array', 'itemType': GetYaoChiAgentResponseBodySubAgentCall },
      uiFunctionCall: { 'type': 'array', 'itemType': GetYaoChiAgentResponseBodyUiFunctionCall },
    };
  }

  validate() {
    if(Array.isArray(this.functionCall)) {
      $dara.Model.validateArray(this.functionCall);
    }
    if(Array.isArray(this.subAgentCall)) {
      $dara.Model.validateArray(this.subAgentCall);
    }
    if(Array.isArray(this.uiFunctionCall)) {
      $dara.Model.validateArray(this.uiFunctionCall);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

