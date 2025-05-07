// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationRequestChatConfigSearchParam } from "./RunSearchGenerationRequestChatConfigSearchParam";


export class RunSearchGenerationRequestChatConfig extends $dara.Model {
  /**
   * @example
   * concise
   */
  generateLevel?: string;
  /**
   * @example
   * copilotPrecise
   */
  generateTechnology?: string;
  searchModels?: string[];
  searchParam?: RunSearchGenerationRequestChatConfigSearchParam;
  static names(): { [key: string]: string } {
    return {
      generateLevel: 'GenerateLevel',
      generateTechnology: 'GenerateTechnology',
      searchModels: 'SearchModels',
      searchParam: 'SearchParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateLevel: 'string',
      generateTechnology: 'string',
      searchModels: { 'type': 'array', 'itemType': 'string' },
      searchParam: RunSearchGenerationRequestChatConfigSearchParam,
    };
  }

  validate() {
    if(Array.isArray(this.searchModels)) {
      $dara.Model.validateArray(this.searchModels);
    }
    if(this.searchParam && typeof (this.searchParam as any).validate === 'function') {
      (this.searchParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

