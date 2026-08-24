// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYaoChiAgentResponseBodyFunctionCall extends $dara.Model {
  /**
   * @remarks
   * The parameters of the called tool.
   * 
   * @example
   * {"arg": "xxx"}
   */
  arguments?: string;
  /**
   * @remarks
   * The tool ID.
   * 
   * @example
   * 12345
   */
  id?: string;
  /**
   * @remarks
   * The name of the called tool.
   * 
   * @example
   * sqlReview
   */
  name?: string;
  /**
   * @remarks
   * The tool calling invoke status.
   * 
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
  /**
   * @remarks
   * The sub-agent status.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The sub-agent ID.
   * 
   * @example
   * 12345
   */
  subAgentId?: string;
  /**
   * @remarks
   * The sub-agent name.
   * 
   * @example
   * XX Agent
   */
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
   * @remarks
   * The parameters of the card tool.
   * 
   * @example
   * {"arg": "xxx"}
   */
  argsText?: string;
  /**
   * @remarks
   * The name of the card tool.
   * 
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
   * @remarks
   * The response content.
   * 
   * @example
   * xxx
   */
  content?: string;
  /**
   * @remarks
   * The tool calling invoke list.
   */
  functionCall?: GetYaoChiAgentResponseBodyFunctionCall[];
  /**
   * @remarks
   * The ParentId field. This field exists only when the message is output by a sub-agent, and the value is the sub-agent ID.
   * 
   * @example
   * 12345
   */
  parentId?: string;
  /**
   * @remarks
   * The cloud service type.
   * 
   * @example
   * polardb
   */
  product?: string;
  /**
   * @remarks
   * The query ID. This value is the same as the QueryId request parameter.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-xxxxxxxxxxxx
   */
  queryId?: string;
  /**
   * @remarks
   * The reasoning content of the model.
   * 
   * @example
   * xxx
   */
  reasoningContent?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7172BECE-588A-5961-8126-C216E16B****
   */
  requestId?: string;
  /**
   * @remarks
   * The session ID. This value is the same as the SessionId request parameter.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-xxxxxxxxxxxx
   */
  sessionId?: string;
  /**
   * @remarks
   * The list of sub-agent call information.
   */
  subAgentCall?: GetYaoChiAgentResponseBodySubAgentCall[];
  /**
   * @remarks
   * The card tool calling invoke list.
   */
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

