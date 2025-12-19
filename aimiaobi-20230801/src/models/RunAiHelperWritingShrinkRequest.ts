// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAiHelperWritingShrinkRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  distributeWriting?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 请帮我写一篇关于人工智能发展趋势的文章
   */
  prompt?: string;
  /**
   * @example
   * Template
   */
  promptMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxxxx
   */
  workspaceId?: string;
  /**
   * @example
   * {"wordCount": "1000", "tone": "formal"}
   */
  writingParamsShrink?: string;
  /**
   * @remarks
   * 写作场景：government(政务)、media(传媒)、market(营销)、office(办公)、custom(自定义)
   * 
   * This parameter is required.
   * 
   * @example
   * media
   */
  writingScene?: string;
  /**
   * @remarks
   * 写作文体唯一标识KEY，可通过ListWritingStyles接口获取对应写作场景下的文体列表
   * 
   * This parameter is required.
   * 
   * @example
   * news_article
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

