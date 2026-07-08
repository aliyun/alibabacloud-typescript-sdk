// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGeneratedContentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the workspace. For more information, see [AgentKey](https://help.aliyun.com/document_detail/2587494.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * The body of the article in rich text format.
   * 
   * @example
   * 正文
   */
  content?: string;
  /**
   * @remarks
   * The body of the article in plain text format.
   * 
   * @example
   * 正文
   */
  contentText?: string;
  /**
   * @remarks
   * The unique identifier of the document.
   * 
   * This parameter is required.
   * 
   * @example
   * 36
   */
  id?: number;
  /**
   * @remarks
   * The keywords.
   */
  keywordsShrink?: string;
  /**
   * @remarks
   * The last prompt that was used to generate the content.
   * 
   * @example
   * 创作xx文章
   */
  prompt?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 文章名称
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      contentText: 'ContentText',
      id: 'Id',
      keywordsShrink: 'Keywords',
      prompt: 'Prompt',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      contentText: 'string',
      id: 'number',
      keywordsShrink: 'string',
      prompt: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

