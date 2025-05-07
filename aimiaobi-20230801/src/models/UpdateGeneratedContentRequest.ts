// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGeneratedContentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 正文
   */
  content?: string;
  /**
   * @example
   * 正文
   */
  contentText?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 36
   */
  id?: number;
  keywords?: string[];
  /**
   * @example
   * 创作xx文章
   */
  prompt?: string;
  /**
   * @example
   * 评论类文章
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      contentText: 'ContentText',
      id: 'Id',
      keywords: 'Keywords',
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
      keywords: { 'type': 'array', 'itemType': 'string' },
      prompt: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

