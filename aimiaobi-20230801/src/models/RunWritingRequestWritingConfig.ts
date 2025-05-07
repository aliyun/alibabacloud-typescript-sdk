// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunWritingRequestWritingConfigPromptTag } from "./RunWritingRequestWritingConfigPromptTag";
import { RunWritingRequestWritingConfigTags } from "./RunWritingRequestWritingConfigTags";


export class RunWritingRequestWritingConfig extends $dara.Model {
  /**
   * @example
   * 写作领域，media:传媒,government:政务,market:营销
   */
  domain?: string;
  promptTag?: RunWritingRequestWritingConfigPromptTag;
  tags?: RunWritingRequestWritingConfigTags[];
  /**
   * @example
   * true
   */
  useSearch?: boolean;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      promptTag: 'PromptTag',
      tags: 'Tags',
      useSearch: 'UseSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      promptTag: RunWritingRequestWritingConfigPromptTag,
      tags: { 'type': 'array', 'itemType': RunWritingRequestWritingConfigTags },
      useSearch: 'boolean',
    };
  }

  validate() {
    if(this.promptTag && typeof (this.promptTag as any).validate === 'function') {
      (this.promptTag as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

