// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCopilotEmbedConfigResponseBodyResultDataRange extends $dara.Model {
  /**
   * @remarks
   * Indicates whether all data query resources are selected.
   * 
   * @example
   * true
   */
  allCube?: boolean;
  /**
   * @remarks
   * Indicates whether all analysis topics are selected.
   * 
   * @example
   * true
   */
  allTheme?: boolean;
  /**
   * @remarks
   * The set of data query resource IDs.
   */
  llmCubes?: string[];
  /**
   * @remarks
   * The set of analysis topic IDs.
   */
  themes?: string[];
  static names(): { [key: string]: string } {
    return {
      allCube: 'AllCube',
      allTheme: 'AllTheme',
      llmCubes: 'LlmCubes',
      themes: 'Themes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allCube: 'boolean',
      allTheme: 'boolean',
      llmCubes: { 'type': 'array', 'itemType': 'string' },
      themes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.llmCubes)) {
      $dara.Model.validateArray(this.llmCubes);
    }
    if(Array.isArray(this.themes)) {
      $dara.Model.validateArray(this.themes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCopilotEmbedConfigResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The nickname of the chatbot.
   * 
   * @example
   * Xiao Q
   */
  agentName?: string;
  /**
   * @remarks
   * The embedding ID.
   * 
   * @example
   * 9c079710-ddbe-48b3-b495-7c83c8d57cc4
   */
  copilotId?: string;
  /**
   * @remarks
   * The user ID of the creator.
   * 
   * @example
   * qweqw12312423521
   */
  createUser?: string;
  /**
   * @remarks
   * The nickname of the creator.
   * 
   * @example
   * Zhuge
   */
  createUserName?: string;
  /**
   * @remarks
   * The data scope, including analysis topics and data query resources.
   */
  dataRange?: QueryCopilotEmbedConfigResponseBodyResultDataRange;
  /**
   * @remarks
   * The user ID of the modifier.
   * 
   * @example
   * asda1231231dfs
   */
  modifyUser?: string;
  /**
   * @remarks
   * The module name.
   * 
   * @example
   * Xiao Q
   */
  moduleName?: string;
  /**
   * @remarks
   * The name of the embedding module.
   * 
   * @example
   * 0327
   */
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      copilotId: 'CopilotId',
      createUser: 'CreateUser',
      createUserName: 'CreateUserName',
      dataRange: 'DataRange',
      modifyUser: 'ModifyUser',
      moduleName: 'ModuleName',
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      copilotId: 'string',
      createUser: 'string',
      createUserName: 'string',
      dataRange: QueryCopilotEmbedConfigResponseBodyResultDataRange,
      modifyUser: 'string',
      moduleName: 'string',
      showName: 'string',
    };
  }

  validate() {
    if(this.dataRange && typeof (this.dataRange as any).validate === 'function') {
      (this.dataRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCopilotEmbedConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1FC71085-D5FD-08E0-813A-4D4BD1031BC5
   */
  requestId?: string;
  /**
   * @remarks
   * The list of embedding configurations.
   */
  result?: QueryCopilotEmbedConfigResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryCopilotEmbedConfigResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

