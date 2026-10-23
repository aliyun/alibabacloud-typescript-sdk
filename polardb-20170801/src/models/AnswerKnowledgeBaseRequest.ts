// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnswerKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the knowledge base. To obtain the ID, first call CreateKnowledgeSpace to create a knowledge space, use the returned KnowledgeSpaceId to call CreateKnowledgeBase, and then use the KnowledgeBaseId returned by CreateKnowledgeBase. Separate multiple knowledge base IDs with commas.
   * 
   * This parameter is required.
   * 
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The maximum number of characters in the context. Valid values: 1000 to 32000.
   * 
   * @example
   * 16000
   */
  maxContextChars?: number;
  /**
   * @remarks
   * The user question.
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
   * Specifies whether to return reference sources. Default value: true.
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
   * The number of results to recall.
   * 
   * @example
   * 10
   */
  topK?: number;
  /**
   * @remarks
   * The additional user instructions.
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

