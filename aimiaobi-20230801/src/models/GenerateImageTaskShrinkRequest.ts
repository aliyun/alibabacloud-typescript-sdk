// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateImageTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the workspace. For more information, see [AgentKey](https://help.aliyun.com/document_detail/2587494.html).
   * 
   * This parameter is required.
   * 
   * @example
   * e1be065b-adc3-435e-bd01-1c18c5ed75d3
   */
  agentKey?: string;
  /**
   * @remarks
   * The task ID of the article. If you do not have one, you can assign a universally unique identifier (UUID).
   * 
   * This parameter is required.
   * 
   * @example
   * e1be065b-adc3-435e-bd01-1c18c5ed75d3
   */
  articleTaskId?: string;
  /**
   * @remarks
   * The content of the paragraphs.
   * 
   * This parameter is required.
   */
  paragraphListShrink?: string;
  /**
   * @remarks
   * The size of the image to generate.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024*1024
   */
  size?: string;
  /**
   * @remarks
   * The style.
   * 
   * This parameter is required.
   * 
   * @example
   * \\"<auto>\\"
   */
  style?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      articleTaskId: 'ArticleTaskId',
      paragraphListShrink: 'ParagraphList',
      size: 'Size',
      style: 'Style',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      articleTaskId: 'string',
      paragraphListShrink: 'string',
      size: 'string',
      style: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

