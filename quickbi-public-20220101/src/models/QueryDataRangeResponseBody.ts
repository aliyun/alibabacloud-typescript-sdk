// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataRangeResponseBodyResultApiCopilotLlmCubeModels extends $dara.Model {
  /**
   * @remarks
   * Alias of the LlmCube resource.
   * 
   * @example
   * test
   */
  alias?: string;
  /**
   * @remarks
   * Nickname of the creator.
   * 
   * @example
   * zhuge
   */
  createUser?: string;
  /**
   * @remarks
   * LlmCube resource ID.
   * 
   * @example
   * sdasdafas23342342342
   */
  llmCubeId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      createUser: 'CreateUser',
      llmCubeId: 'LlmCubeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      createUser: 'string',
      llmCubeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRangeResponseBodyResultApiCopilotThemeModelsApiCopilotLlmCubeModels extends $dara.Model {
  /**
   * @remarks
   * Alias of the LLM cube resource.
   * 
   * @example
   * test
   */
  alias?: string;
  /**
   * @remarks
   * Nickname of the creator.
   * 
   * @example
   * zhuge
   */
  createUser?: string;
  /**
   * @remarks
   * LlmCube resource ID.
   * 
   * @example
   * 1231242231asdasda
   */
  llmCubeId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      createUser: 'CreateUser',
      llmCubeId: 'LlmCubeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      createUser: 'string',
      llmCubeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRangeResponseBodyResultApiCopilotThemeModels extends $dara.Model {
  /**
   * @remarks
   * Array of LlmCube resources.
   */
  apiCopilotLlmCubeModels?: QueryDataRangeResponseBodyResultApiCopilotThemeModelsApiCopilotLlmCubeModels[];
  /**
   * @remarks
   * Nickname of the creator.
   * 
   * @example
   * zhuge
   */
  createUser?: string;
  /**
   * @remarks
   * Analysis theme ID.
   * 
   * @example
   * 36631232342312312
   */
  themeId?: string;
  /**
   * @remarks
   * Nickname of the analysis theme.
   * 
   * @example
   * test theme
   */
  themeName?: string;
  static names(): { [key: string]: string } {
    return {
      apiCopilotLlmCubeModels: 'ApiCopilotLlmCubeModels',
      createUser: 'CreateUser',
      themeId: 'ThemeId',
      themeName: 'ThemeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCopilotLlmCubeModels: { 'type': 'array', 'itemType': QueryDataRangeResponseBodyResultApiCopilotThemeModelsApiCopilotLlmCubeModels },
      createUser: 'string',
      themeId: 'string',
      themeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiCopilotLlmCubeModels)) {
      $dara.Model.validateArray(this.apiCopilotLlmCubeModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRangeResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Array of LlmCube resources.
   */
  apiCopilotLlmCubeModels?: QueryDataRangeResponseBodyResultApiCopilotLlmCubeModels[];
  /**
   * @remarks
   * Array of analysis themes.
   */
  apiCopilotThemeModels?: QueryDataRangeResponseBodyResultApiCopilotThemeModels[];
  static names(): { [key: string]: string } {
    return {
      apiCopilotLlmCubeModels: 'ApiCopilotLlmCubeModels',
      apiCopilotThemeModels: 'ApiCopilotThemeModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCopilotLlmCubeModels: { 'type': 'array', 'itemType': QueryDataRangeResponseBodyResultApiCopilotLlmCubeModels },
      apiCopilotThemeModels: { 'type': 'array', 'itemType': QueryDataRangeResponseBodyResultApiCopilotThemeModels },
    };
  }

  validate() {
    if(Array.isArray(this.apiCopilotLlmCubeModels)) {
      $dara.Model.validateArray(this.apiCopilotLlmCubeModels);
    }
    if(Array.isArray(this.apiCopilotThemeModels)) {
      $dara.Model.validateArray(this.apiCopilotThemeModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRangeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-****-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Data range object.
   */
  result?: QueryDataRangeResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
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
      result: QueryDataRangeResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

