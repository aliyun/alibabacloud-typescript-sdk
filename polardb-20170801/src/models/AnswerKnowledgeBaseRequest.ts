// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnswerKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The maximum number of context characters. Valid values: 1000 to 32000.
   * 
   * @example
   * 16000
   */
  maxContextChars?: number;
  /**
   * @remarks
   * The user query text.
   * 
   * This parameter is required.
   * 
   * @example
   * Summarize this year\\"s financial report
   */
  queryText?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to enable reranking. Default value: false.
   * 
   * @example
   * false
   */
  rerankEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to return citation sources. Default value: true.
   * 
   * @example
   * true
   */
  returnSources?: boolean;
  /**
   * @remarks
   * The similarity score threshold.
   * 
   * @example
   * 0.7
   */
  scoreThreshold?: number;
  /**
   * @remarks
   * The search mode. Valid values: knn, rrf, precise, semantic, and balanced.
   * 
   * @example
   * semantic
   */
  searchMode?: string;
  /**
   * @remarks
   * The system prompt.
   * 
   * @example
   * This is a minimal test prompt for security verification.
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The number of results to recall during retrieval.
   * 
   * @example
   * 10
   */
  topK?: number;
  /**
   * @remarks
   * The supplementary user instructions.
   * 
   * @example
   * Return a short summary and test result.
   */
  userInstructions?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseId: 'KnowledgeBaseId',
      maxContextChars: 'MaxContextChars',
      queryText: 'QueryText',
      regionId: 'RegionId',
      rerankEnabled: 'RerankEnabled',
      returnSources: 'ReturnSources',
      scoreThreshold: 'ScoreThreshold',
      searchMode: 'SearchMode',
      systemPrompt: 'SystemPrompt',
      topK: 'TopK',
      userInstructions: 'UserInstructions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseId: 'string',
      maxContextChars: 'number',
      queryText: 'string',
      regionId: 'string',
      rerankEnabled: 'boolean',
      returnSources: 'boolean',
      scoreThreshold: 'number',
      searchMode: 'string',
      systemPrompt: 'string',
      topK: 'number',
      userInstructions: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

