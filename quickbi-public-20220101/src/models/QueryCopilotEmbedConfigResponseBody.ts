// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCopilotEmbedConfigResponseBodyResultDataRange extends $dara.Model {
  /**
   * @remarks
   * Whether all question resources are selected.
   * 
   * @example
   * true/false
   */
  allCube?: boolean;
  /**
   * @remarks
   * Whether all analysis themes are selected.
   * 
   * @example
   * true/false
   */
  allTheme?: boolean;
  /**
   * @remarks
   * Collection of question resource IDs.
   */
  llmCubes?: string[];
  /**
   * @remarks
   * Collection of analysis theme IDs.
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
   * Robot\\"s nickname.
   * 
   * @example
   * little Q
   */
  agentName?: string;
  /**
   * @remarks
   * Embedding ID.
   * 
   * @example
   * 9c079710-ddbe-48b3-b495-7c83c8d57cc4
   */
  copilotId?: string;
  /**
   * @remarks
   * ID of the creator.
   * 
   * @example
   * qweqw12312423521
   */
  createUser?: string;
  /**
   * @remarks
   * Nickname of the creator.
   * 
   * @example
   * zhangsan
   */
  createUserName?: string;
  /**
   * @remarks
   * Data range (analysis themes and question resources).
   */
  dataRange?: QueryCopilotEmbedConfigResponseBodyResultDataRange;
  /**
   * @remarks
   * ID of the modifier.
   * 
   * @example
   * asda1231231dfs
   */
  modifyUser?: string;
  /**
   * @remarks
   * Module name.
   * 
   * @example
   * little Q
   */
  moduleName?: string;
  /**
   * @remarks
   * Name of the embedded module.
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
   * Request ID.
   * 
   * @example
   * 1FC71085-D5FD-08E0-813A-4D4BD1031BC5
   */
  requestId?: string;
  /**
   * @remarks
   * List of embedded configurations.
   */
  result?: QueryCopilotEmbedConfigResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: The request was successful.
   * - false: The request failed.
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

