// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAiHelperWritingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to generate the text step by step.
   * 
   * @example
   * false
   */
  distributeWriting?: boolean;
  /**
   * @remarks
   * The prompt, which specifies the subject for the AI to write about.
   * 
   * This parameter is required.
   * 
   * @example
   * 请帮我写一篇关于人工智能发展趋势的文章
   */
  prompt?: string;
  /**
   * @remarks
   * The prompt pattern. For example, PE indicates the advanced pattern and Template indicates the template pattern.
   * 
   * @example
   * Template
   */
  promptMode?: string;
  /**
   * @remarks
   * The [workspace](https://help.aliyun.com/document_detail/2782167.html) ID.
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xxxxx
   */
  workspaceId?: string;
  /**
   * @remarks
   * The writing parameters from the previous form, specified as key-value pairs.
   * 
   * @example
   * {"wordCount": "1000", "tone": "formal"}
   */
  writingParamsShrink?: string;
  /**
   * @remarks
   * The writing scenario. Valid values: government, media, market, office, and custom.
   * 
   * This parameter is required.
   * 
   * @example
   * media
   */
  writingScene?: string;
  /**
   * @remarks
   * The unique key for the writing style. Call the [ListWritingStyles](https://help.aliyun.com/document_detail/2922609.html) operation to get a list of styles for the specified scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * 通知
   */
  writingStyle?: string;
  static names(): { [key: string]: string } {
    return {
      distributeWriting: 'DistributeWriting',
      prompt: 'Prompt',
      promptMode: 'PromptMode',
      workspaceId: 'WorkspaceId',
      writingParamsShrink: 'WritingParams',
      writingScene: 'WritingScene',
      writingStyle: 'WritingStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributeWriting: 'boolean',
      prompt: 'string',
      promptMode: 'string',
      workspaceId: 'string',
      writingParamsShrink: 'string',
      writingScene: 'string',
      writingStyle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

