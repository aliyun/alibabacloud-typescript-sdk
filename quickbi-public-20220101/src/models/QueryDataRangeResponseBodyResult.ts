// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDataRangeResponseBodyResultApiCopilotLlmCubeModels } from "./QueryDataRangeResponseBodyResultApiCopilotLlmCubeModels";
import { QueryDataRangeResponseBodyResultApiCopilotThemeModels } from "./QueryDataRangeResponseBodyResultApiCopilotThemeModels";


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

