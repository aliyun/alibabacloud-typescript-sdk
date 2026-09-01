// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnswerKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @example
   * 16000
   */
  maxContextChars?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 总结下今年财报
   */
  queryText?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * false
   */
  rerankEnabled?: boolean;
  /**
   * @example
   * true
   */
  returnSources?: boolean;
  /**
   * @example
   * 0.7
   */
  scoreThreshold?: number;
  /**
   * @example
   * semantic
   */
  searchMode?: string;
  /**
   * @example
   * This is a minimal test prompt for security verification.
   */
  systemPrompt?: string;
  /**
   * @example
   * 10
   */
  topK?: number;
  /**
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

