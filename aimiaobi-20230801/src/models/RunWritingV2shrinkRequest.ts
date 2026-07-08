// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunWritingV2ShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of articles to use as references. **Note:** When you provide this parameter, web search is disabled, overriding the `UseSearch` and `SearchSources` parameters.
   */
  articlesShrink?: string;
  /**
   * @remarks
   * Specifies whether to enable step-by-step writing. For more information, see the `Step` parameter description.
   * 
   * @example
   * false
   */
  distributeWriting?: boolean;
  /**
   * @remarks
   * The number of articles to write. If you request multiple articles, the system returns them concurrently, each with a unique session ID.
   * 
   * @example
   * 2
   */
  gcNumberSize?: number;
  /**
   * @remarks
   * A string that specifies the desired article length. Examples: "about 300 words", "about 600 words", "about 1,000 words", or "about 2,000 words".
   * 
   * @example
   * 2000字左右
   */
  gcNumberSizeTag?: string;
  /**
   * @remarks
   * A list of keywords used for both search and writing.
   */
  keywordsShrink?: string;
  /**
   * @remarks
   * The output language for the article.
   * 
   * - `en`: English
   * 
   * - `zh`: Chinese
   * 
   * - Other languages or specific style requirements can also be specified.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * A list of article snippets.
   */
  miniDocsShrink?: string;
  /**
   * @remarks
   * A list of outlines for step-by-step writing.
   */
  outlineListShrink?: string;
  /**
   * @remarks
   * A list of outlines for step-by-step writing. This parameter is deprecated. Use `OutlineList` instead.
   */
  outlinesShrink?: string;
  /**
   * @remarks
   * The writing prompt. You must provide either `Prompt` or `WritingParams`. For more information, see the description of the `PromptMode` parameter.
   * 
   * @example
   * 提示词
   */
  prompt?: string;
  /**
   * @remarks
   * The prompt mode. Valid values: `Template` (template mode) and `PE` (advanced PE mode).
   * 
   * 1. If this parameter is omitted, you must provide the `Prompt` parameter. We recommend that the prompt includes the topic, length, requirements, and prohibitions.
   * 
   * 2. If `PromptMode` is set to `Template`, you must provide `WritingParams`, which is a dictionary of string key-value pairs. For the required schema, see the `.Data.TemplateDefine[].Fields` field in the response of the [ListWritingStyles](https://help.aliyun.com/document_detail/2922609.html) operation.
   * 
   * 3. If `PromptMode` is set to `PE`, you must pass `WritingParams` with the following two fields:
   * 
   *    1. `topic`: Required. The topic to write about.
   * 
   *    2. `prompt`: Optional. Any additional custom prompts or writing requirements.
   * 
   * @example
   * Template
   */
  promptMode?: string;
  /**
   * @remarks
   * A list of specified search sources to use.
   */
  searchSourcesShrink?: string;
  /**
   * @remarks
   * The ID of a single-turn conversation. This parameter is deprecated and its use is discouraged.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @remarks
   * The source tracing method. Currently, only `modelSourceTrace` is supported. If set to `modelSourceTrace`, the model adds citation markers (for example, `[[1]]`) to the end of each cited snippet in the generated text. The citation index starts at 1.
   * 
   * @example
   * modelSourceTrace
   */
  sourceTraceMethod?: string;
  /**
   * @remarks
   * The step for step-by-step writing. Valid values:
   * 
   * - `OutlineGenerate`: Outline generation
   * 
   * - `Writing`: Article writing
   * 
   * When `DistributeWriting` is `true`, the default flow for step-by-step writing is to first generate an outline and then write the content based on it.
   * 
   * @example
   * Writing
   */
  step?: string;
  /**
   * @remarks
   * A list of summarization objects, used for step-by-step writing.
   */
  summarizationShrink?: string;
  /**
   * @remarks
   * The unique ID of the task. You can reuse the same task ID for a multi-turn conversation.
   * 
   * > The system automatically generates a `TaskId` if you do not specify one. Reusing the same `TaskId` for subsequent requests groups them into a single conversation.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * Specifies whether to enable web search. If `true`, the system uses its built-in web search feature. Default: `false`.
   * 
   * @example
   * true
   */
  useSearch?: boolean;
  /**
   * @remarks
   * The unique ID of the Model Studio workspace. For more information, see [Obtain a Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  /**
   * @remarks
   * The parameters for template-based writing, provided as a dictionary of string key-value pairs. You must provide either `Prompt` or `WritingParams`. For more information, see the description of the `PromptMode` parameter.
   */
  writingParamsShrink?: string;
  /**
   * @remarks
   * The writing scene. Valid values: `government` (government affairs), `media`, `market` (marketing), `office`, and `custom`.
   * 
   * @example
   * media
   */
  writingScene?: string;
  /**
   * @remarks
   * The writing style. For a list of supported styles, see [ListWritingStyles](https://help.aliyun.com/document_detail/2922609.html).
   * 
   * @example
   * 新闻评论
   */
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
      outlineListShrink: 'OutlineList',
      outlinesShrink: 'Outlines',
      prompt: 'Prompt',
      promptMode: 'PromptMode',
      searchSourcesShrink: 'SearchSources',
      sessionId: 'SessionId',
      sourceTraceMethod: 'SourceTraceMethod',
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
      outlineListShrink: 'string',
      outlinesShrink: 'string',
      prompt: 'string',
      promptMode: 'string',
      searchSourcesShrink: 'string',
      sessionId: 'string',
      sourceTraceMethod: 'string',
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

