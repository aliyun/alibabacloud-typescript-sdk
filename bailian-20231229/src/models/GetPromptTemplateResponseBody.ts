// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPromptTemplateResponseBody extends $dara.Model {
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
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 6e49109bfeb94a39bb268f4e483ccxxx
   */
  promptTemplateId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8C56C7AF-6573-19CE-B018-E05E1EDCF4C5
   */
  requestId?: string;
  /**
   * @remarks
   * The variables of the template.
   * 
   * @example
   * ["theme"]
   */
  variables?: string[];
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * llm-us9hjmt32nysdxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
      promptTemplateId: 'promptTemplateId',
      requestId: 'requestId',
      variables: 'variables',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
      promptTemplateId: 'string',
      requestId: 'string',
      variables: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

