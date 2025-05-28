// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDataRangeResponseBodyResultApiCopilotThemeModelsApiCopilotLlmCubeModels } from "./QueryDataRangeResponseBodyResultApiCopilotThemeModelsApiCopilotLlmCubeModels";


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

