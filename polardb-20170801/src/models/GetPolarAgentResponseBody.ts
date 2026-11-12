// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolarAgentResponseBodyFunctionCall extends $dara.Model {
  /**
   * @remarks
   * The output results related to the operation.
   * 
   * @example
   * ---narguments:n  parameters: []n
   */
  arguments?: string;
  /**
   * @remarks
   * The ID of the quota.
   * 
   * @example
   * 393
   */
  id?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule04
   */
  name?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Success
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
   * The JSON text of the tool calling parameters.
   * 
   * @example
   * {"RegionId":"cn-hangzhou"}
   */
  argsText?: string;
  /**
   * @remarks
   * The command of the called tool.
   * 
   * @example
   * DescribeDBClusters
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
   * The content returned by the agent.
   * 
   * @example
   * QZ-13661677-80
   */
  content?: string;
  /**
   * @remarks
   * Specifies whether function calling is supported.
   */
  functionCall?: GetPolarAgentResponseBodyFunctionCall[];
  /**
   * @remarks
   * The cloud product type.
   * 
   * @example
   * polardb
   */
  product?: string;
  /**
   * @remarks
   * The ID of the user query pipeline task.
   * 
   * @example
   * 2548026401648157601743560466154
   */
  queryId?: string;
  /**
   * @remarks
   * The reasoning content of the model.
   * 
   * @example
   * Extract the key information based on the input content
   */
  reasoningContent?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34458CD3-33E0-4624-BFEF-840C15******
   */
  requestId?: string;
  /**
   * @remarks
   * The session ID for code execution.
   * 
   * @example
   * 40315d708f0806903b08813bf4c9db2e
   */
  sessionId?: string;
  /**
   * @remarks
   * Specifies whether UI function calling is supported.
   */
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

