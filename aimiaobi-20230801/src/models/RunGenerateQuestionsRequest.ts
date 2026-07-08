// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunGenerateQuestionsRequest extends $dara.Model {
  /**
   * @remarks
   * Document ID
   * 
   * @example
   * oOgIwodFANW1u5MnqxysOh1rtld3xn
   */
  docId?: string;
  /**
   * @remarks
   * Name of the custom model
   * 
   * @example
   * quanmiao-max、quanmiao-plus
   */
  modelName?: string;
  /**
   * @remarks
   * Document content to extract questions from. If this field is not empty, use this text. If it is empty, use the document identified by DocId.
   * 
   * @example
   * 关联内容
   */
  referenceContent?: string;
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * f486c4e2-b773-4d65-88f8-2ba540610456
   */
  sessionId?: string;
  /**
   * @remarks
   * Unique identifier of the Alibaba Cloud Model Studio workspace. To get this ID, see [Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-w335gauzlbba2vze
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      modelName: 'ModelName',
      referenceContent: 'ReferenceContent',
      sessionId: 'SessionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      modelName: 'string',
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

