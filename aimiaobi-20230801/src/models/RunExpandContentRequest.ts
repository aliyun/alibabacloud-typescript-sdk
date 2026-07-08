// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunExpandContentRequest extends $dara.Model {
  /**
   * @remarks
   * Content to expand.
   * 
   * This parameter is required.
   * 
   * @example
   * 创新政务社交媒体功能。鼓励各地区、各部门结合实际，开发政务社交媒体的特色功能，如在线咨询服务、政策解读、互动问答等，增强政务社交媒体的互动性和实用性，提升公众参与度。
   */
  content?: string;
  /**
   * @remarks
   * Custom prompt.
   */
  prompt?: string;
  /**
   * @remarks
   * Alibaba Cloud Model Studio workspace unique identifier. Get the [Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      prompt: 'Prompt',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      prompt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

