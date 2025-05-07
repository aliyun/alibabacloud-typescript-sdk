// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEnterpriseVocAnalysisTaskRequestContentTags extends $dara.Model {
  /**
   * @example
   * 一级标签-二级标签
   */
  tagDefinePrompt?: string;
  /**
   * @example
   * 一级标签-二级标签
   */
  tagName?: string;
  /**
   * @example
   * singleTagValue
   */
  tagTaskType?: string;
  tagValueDefinePrompt?: string;
  static names(): { [key: string]: string } {
    return {
      tagDefinePrompt: 'TagDefinePrompt',
      tagName: 'TagName',
      tagTaskType: 'TagTaskType',
      tagValueDefinePrompt: 'TagValueDefinePrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDefinePrompt: 'string',
      tagName: 'string',
      tagTaskType: 'string',
      tagValueDefinePrompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

