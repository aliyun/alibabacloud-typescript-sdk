// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunHotwordRequest extends $dara.Model {
  /**
   * @remarks
   * Document ID.
   * 
   * @example
   * 84ufBYEeLMZOjRFo84HJ7ySL3Efr55
   */
  docId?: string;
  /**
   * @remarks
   * Name of the custom model.
   * 
   * @example
   * quanmiao-max、quanmiao-plus
   */
  modelName?: string;
  /**
   * @remarks
   * Prompt.
   * 
   * @example
   * 提示词
   */
  prompt?: string;
  /**
   * @remarks
   * Document content to extract hotwords from. If not empty, extract hotwords from this content. If empty, extract hotwords using the DocId.
   * 
   * @example
   * 关联内容
   */
  referenceContent?: string;
  /**
   * @remarks
   * Session ID.
   * 
   * @example
   * e32a1a3f-1f7e-41dd-b888-ef1d91b96d1e
   */
  sessionId?: string;
  /**
   * @remarks
   * Unique identifier of the Alibaba Cloud Model Studio workspace. To get this ID, see [Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-baw8as25ll3wnzjr
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      modelName: 'ModelName',
      prompt: 'Prompt',
      referenceContent: 'ReferenceContent',
      sessionId: 'SessionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      modelName: 'string',
      prompt: 'string',
      referenceContent: 'string',
      sessionId: 'string',
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

