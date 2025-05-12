// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunWritingV2ShrinkRequest extends $dara.Model {
  articlesShrink?: string;
  /**
   * @example
   * false
   */
  distributeWriting?: boolean;
  /**
   * @example
   * 2
   */
  gcNumberSize?: number;
  gcNumberSizeTag?: string;
  keywordsShrink?: string;
  /**
   * @example
   * en
   */
  language?: string;
  miniDocsShrink?: string;
  outlinesShrink?: string;
  prompt?: string;
  /**
   * @example
   * Template
   */
  promptMode?: string;
  searchSourcesShrink?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * Writing
   */
  step?: string;
  summarizationShrink?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @example
   * true
   */
  useSearch?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  writingParamsShrink?: string;
  /**
   * @example
   * media
   */
  writingScene?: string;
  writingStyle?: string;
  static names(): { [key: string]: string } {
    return {
      articlesShrink: 'Articles',
      distributeWriting: 'DistributeWriting',
      gcNumberSize: 'GcNumberSize',
      gcNumberSizeTag: 'GcNumberSizeTag',
      keywordsShrink: 'Keywords',
      language: 'Language',
      miniDocsShrink: 'MiniDocs',
      outlinesShrink: 'Outlines',
      prompt: 'Prompt',
      promptMode: 'PromptMode',
      searchSourcesShrink: 'SearchSources',
      sessionId: 'SessionId',
      step: 'Step',
      summarizationShrink: 'Summarization',
      taskId: 'TaskId',
      useSearch: 'UseSearch',
      workspaceId: 'WorkspaceId',
      writingParamsShrink: 'WritingParams',
      writingScene: 'WritingScene',
      writingStyle: 'WritingStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articlesShrink: 'string',
      distributeWriting: 'boolean',
      gcNumberSize: 'number',
      gcNumberSizeTag: 'string',
      keywordsShrink: 'string',
      language: 'string',
      miniDocsShrink: 'string',
      outlinesShrink: 'string',
      prompt: 'string',
      promptMode: 'string',
      searchSourcesShrink: 'string',
      sessionId: 'string',
      step: 'string',
      summarizationShrink: 'string',
      taskId: 'string',
      useSearch: 'boolean',
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

