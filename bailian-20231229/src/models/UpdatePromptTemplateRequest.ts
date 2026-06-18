// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePromptTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The template content.
   * 
   * @example
   * 请写一篇小红书种草笔记，增加丰富的emoji元素，结尾作总结，并加上相关标签。主题为：${theme}
   */
  content?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 小红书文案助手
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

