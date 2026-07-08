// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunMultiDocIntroductionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Array of document IDs.
   * 
   * This parameter is required.
   */
  docIdsShrink?: string;
  /**
   * @remarks
   * Custom prompt for key points.
   * 
   * @example
   * 请简明扼要
   */
  keyPointPrompt?: string;
  /**
   * @remarks
   * Name of the custom model to use.
   * 
   * @example
   * quanmiao-max、quanmiao-plus
   */
  modelName?: string;
  /**
   * @remarks
   * Session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 75bf82fa-b71b-45d7-ae40-0b00e496cd9e
   */
  sessionId?: string;
  /**
   * @remarks
   * Custom prompt for the summary.
   * 
   * @example
   * 请简明扼要
   */
  summaryPrompt?: string;
  /**
   * @remarks
   * Unique identifier of the Alibaba Cloud Model Studio workspace. To get this ID, see [Get the workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docIdsShrink: 'DocIds',
      keyPointPrompt: 'KeyPointPrompt',
      modelName: 'ModelName',
      sessionId: 'SessionId',
      summaryPrompt: 'SummaryPrompt',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docIdsShrink: 'string',
      keyPointPrompt: 'string',
      modelName: 'string',
      sessionId: 'string',
      summaryPrompt: 'string',
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

