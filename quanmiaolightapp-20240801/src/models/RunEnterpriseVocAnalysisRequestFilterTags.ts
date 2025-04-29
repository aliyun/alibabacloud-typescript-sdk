// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunEnterpriseVocAnalysisRequestFilterTags extends $dara.Model {
  /**
   * @remarks
   * 标签定义提示词
   * 
   * @example
   * 标签定义提示词
   */
  tagDefinePrompt?: string;
  /**
   * @remarks
   * 标签名称
   * 
   * @example
   * 标签名称
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDefinePrompt: 'tagDefinePrompt',
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDefinePrompt: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

