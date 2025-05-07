// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunStepByStepWritingRequestWritingConfigPromptTag } from "./RunStepByStepWritingRequestWritingConfigPromptTag";
import { RunStepByStepWritingRequestWritingConfigTags } from "./RunStepByStepWritingRequestWritingConfigTags";


export class RunStepByStepWritingRequestWritingConfig extends $dara.Model {
  /**
   * @example
   * media
   */
  domain?: string;
  keywords?: string[];
  promptTag?: RunStepByStepWritingRequestWritingConfigPromptTag;
  /**
   * @example
   * 分步骤写作场景，传媒写作支持的写作场景:新闻写作(默认),新闻评论,通用文体，公文写作支持的写作场景:通知(默认),通告,通报,请示,决定,函,通用文体
   */
  scene?: string;
  /**
   * @example
   * Writing
   */
  step?: string;
  summaryReturnType?: string;
  tags?: RunStepByStepWritingRequestWritingConfigTags[];
  /**
   * @example
   * true
   */
  useSearch?: boolean;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      keywords: 'Keywords',
      promptTag: 'PromptTag',
      scene: 'Scene',
      step: 'Step',
      summaryReturnType: 'SummaryReturnType',
      tags: 'Tags',
      useSearch: 'UseSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      keywords: { 'type': 'array', 'itemType': 'string' },
      promptTag: RunStepByStepWritingRequestWritingConfigPromptTag,
      scene: 'string',
      step: 'string',
      summaryReturnType: 'string',
      tags: { 'type': 'array', 'itemType': RunStepByStepWritingRequestWritingConfigTags },
      useSearch: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
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

