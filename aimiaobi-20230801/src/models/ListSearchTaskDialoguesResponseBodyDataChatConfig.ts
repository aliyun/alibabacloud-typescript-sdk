// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSearchTaskDialoguesResponseBodyDataChatConfigSearchParam } from "./ListSearchTaskDialoguesResponseBodyDataChatConfigSearchParam";


export class ListSearchTaskDialoguesResponseBodyDataChatConfig extends $dara.Model {
  /**
   * @example
   * 24
   */
  dialogueType?: number;
  endToEnd?: boolean;
  /**
   * @example
   * concise
   */
  generateLevel?: string;
  /**
   * @example
   * copilotReference
   */
  generateTechnology?: string;
  searchModels?: string[];
  searchParam?: ListSearchTaskDialoguesResponseBodyDataChatConfigSearchParam;
  static names(): { [key: string]: string } {
    return {
      dialogueType: 'DialogueType',
      endToEnd: 'EndToEnd',
      generateLevel: 'GenerateLevel',
      generateTechnology: 'GenerateTechnology',
      searchModels: 'SearchModels',
      searchParam: 'SearchParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueType: 'number',
      endToEnd: 'boolean',
      generateLevel: 'string',
      generateTechnology: 'string',
      searchModels: { 'type': 'array', 'itemType': 'string' },
      searchParam: ListSearchTaskDialoguesResponseBodyDataChatConfigSearchParam,
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

