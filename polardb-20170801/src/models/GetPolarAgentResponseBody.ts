// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolarAgentResponseBodyFunctionCall extends $dara.Model {
  /**
   * @example
   * ---narguments:n  parameters: []n
   */
  arguments?: string;
  /**
   * @example
   * 393
   */
  id?: string;
  /**
   * @example
   * rule04
   */
  name?: string;
  /**
   * @example
   * xxx
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

export class GetPolarAgentResponseBodyUiFunctionCall extends $dara.Model {
  /**
   * @remarks
   * xxx
   * 
   * @example
   * xxx
   */
  argsText?: string;
  /**
   * @example
   * xxx
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

export class GetPolarAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * QZ-13661677-80
   */
  content?: string;
  functionCall?: GetPolarAgentResponseBodyFunctionCall[];
  /**
   * @example
   * polardb
   */
  product?: string;
  /**
   * @example
   * 2548026401648157601743560466154
   */
  queryId?: string;
  /**
   * @example
   * xxxx
   */
  reasoningContent?: string;
  /**
   * @example
   * 34458CD3-33E0-4624-BFEF-840C15******
   */
  requestId?: string;
  /**
   * @example
   * 40315d708f0806903b08813bf4c9db2e
   */
  sessionId?: string;
  uiFunctionCall?: GetPolarAgentResponseBodyUiFunctionCall[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      functionCall: 'FunctionCall',
      product: 'Product',
      queryId: 'QueryId',
      reasoningContent: 'ReasoningContent',
      requestId: 'RequestId',
      sessionId: 'SessionId',
      uiFunctionCall: 'UiFunctionCall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      functionCall: { 'type': 'array', 'itemType': GetPolarAgentResponseBodyFunctionCall },
      product: 'string',
      queryId: 'string',
      reasoningContent: 'string',
      requestId: 'string',
      sessionId: 'string',
      uiFunctionCall: { 'type': 'array', 'itemType': GetPolarAgentResponseBodyUiFunctionCall },
    };
  }

  validate() {
    if(Array.isArray(this.functionCall)) {
      $dara.Model.validateArray(this.functionCall);
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

