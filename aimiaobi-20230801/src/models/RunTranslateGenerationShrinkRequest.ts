// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunTranslateGenerationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The target language for translation. The source language is automatically detected.
   * 
   * | Language           | Prompt value |
   * | ------------------ | ------------ |
   * | English            | English      |
   * | Simplified Chinese | Chinese      |
   * | Japanese           | Japanese     |
   * | Korean             | Korean       |
   * | Spanish            | Spanish      |
   * | French             | French       |
   * | Portuguese         | Portuguese   |
   * | German             | German       |
   * | Italian            | Italian      |
   * 
   * This parameter is required.
   * 
   * @example
   * English
   */
  prompt?: string;
  /**
   * @remarks
   * The data required for generation.
   * 
   * This parameter is required.
   */
  referenceDataShrink?: string;
  /**
   * @remarks
   * Optional. The unique ID of the associated creative article.
   * 
   * > You do not need to specify TaskId. The system generates one automatically. If subsequent tasks use the same TaskId, they belong to the same conversation group.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * The unique ID of the Alibaba Cloud Model Studio workspace. For more information, see [Get a Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      prompt: 'Prompt',
      referenceDataShrink: 'ReferenceData',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompt: 'string',
      referenceDataShrink: 'string',
      taskId: 'string',
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

