// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunWritingV2RequestArticles } from "./RunWritingV2requestArticles";
import { RunWritingV2RequestMiniDocs } from "./RunWritingV2requestMiniDocs";
import { RunWritingV2RequestOutlines } from "./RunWritingV2requestOutlines";
import { RunWritingV2RequestSearchSources } from "./RunWritingV2requestSearchSources";
import { RunWritingV2RequestSummarization } from "./RunWritingV2requestSummarization";


export class RunWritingV2Request extends $dara.Model {
  articles?: RunWritingV2RequestArticles[];
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
  keywords?: string[];
  /**
   * @example
   * en
   */
  language?: string;
  miniDocs?: RunWritingV2RequestMiniDocs[];
  outlines?: RunWritingV2RequestOutlines[];
  prompt?: string;
  /**
   * @example
   * Template
   */
  promptMode?: string;
  searchSources?: RunWritingV2RequestSearchSources[];
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
  summarization?: RunWritingV2RequestSummarization[];
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
  writingParams?: { [key: string]: string };
  /**
   * @example
   * media
   */
  writingScene?: string;
  writingStyle?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      distributeWriting: 'DistributeWriting',
      gcNumberSize: 'GcNumberSize',
      gcNumberSizeTag: 'GcNumberSizeTag',
      keywords: 'Keywords',
      language: 'Language',
      miniDocs: 'MiniDocs',
      outlines: 'Outlines',
      prompt: 'Prompt',
      promptMode: 'PromptMode',
      searchSources: 'SearchSources',
      sessionId: 'SessionId',
      step: 'Step',
      summarization: 'Summarization',
      taskId: 'TaskId',
      useSearch: 'UseSearch',
      workspaceId: 'WorkspaceId',
      writingParams: 'WritingParams',
      writingScene: 'WritingScene',
      writingStyle: 'WritingStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunWritingV2RequestArticles },
      distributeWriting: 'boolean',
      gcNumberSize: 'number',
      gcNumberSizeTag: 'string',
      keywords: { 'type': 'array', 'itemType': 'string' },
      language: 'string',
      miniDocs: { 'type': 'array', 'itemType': RunWritingV2RequestMiniDocs },
      outlines: { 'type': 'array', 'itemType': RunWritingV2RequestOutlines },
      prompt: 'string',
      promptMode: 'string',
      searchSources: { 'type': 'array', 'itemType': RunWritingV2RequestSearchSources },
      sessionId: 'string',
      step: 'string',
      summarization: { 'type': 'array', 'itemType': RunWritingV2RequestSummarization },
      taskId: 'string',
      useSearch: 'boolean',
      workspaceId: 'string',
      writingParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      writingScene: 'string',
      writingStyle: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    if(Array.isArray(this.miniDocs)) {
      $dara.Model.validateArray(this.miniDocs);
    }
    if(Array.isArray(this.outlines)) {
      $dara.Model.validateArray(this.outlines);
    }
    if(Array.isArray(this.searchSources)) {
      $dara.Model.validateArray(this.searchSources);
    }
    if(Array.isArray(this.summarization)) {
      $dara.Model.validateArray(this.summarization);
    }
    if(this.writingParams) {
      $dara.Model.validateMap(this.writingParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

