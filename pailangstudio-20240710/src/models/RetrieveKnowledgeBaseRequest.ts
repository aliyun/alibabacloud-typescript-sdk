// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveKnowledgeBaseRequest extends $dara.Model {
  /**
   * @example
   * {
   *   "Strategy": "rrf",
   *   "RRFK":60,
   *   "Weight": 0.5
   * }
   */
  hybridStrategyConfig?: string;
  /**
   * @example
   * {
   *     "FilterCondition": "and", 
   *     "MetaDataFilters": [
   *         {
   *             "Key": "key1", 
   *             "Value": "value1", 
   *             "Operator": "=="
   *         },
   *         {
   *             "Key": "key2", 
   *             "Value": "value2", 
   *             "Operator": "!="
   *         },
   *         {
   *             "Key": "file_name", 
   *             "Value": "prefix", 
   *             "Operator": "contains"
   *         }
   *     ]
   * }
   */
  metaDataFilterConditions?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  /**
   * @example
   * dense
   */
  queryMode?: string;
  /**
   * @example
   * {
   *    "ConnectionId":"conn-xxx",
   *     "Model": "qwen-max",
   *     "TopK": 5
   * }
   */
  rerankConfig?: string;
  /**
   * @example
   * {
   *     "ConnectionId":"conn-xxx",
   *     "Model": "qwen-max",
   *     "Temperature": 0.7,
   *     "TopP": 0.9,
   *     "PresencePenalty": 0.5,
   *     "FrequencyPenalty": 0.5,
   *     "Seed": 0,
   *     "MaxTokens": 1024,
   *     "Stop": [],
   *     "EnableThinking": true
   * }
   */
  rewriteConfig?: string;
  scoreThreshold?: number;
  /**
   * @example
   * 5
   */
  topK?: number;
  /**
   * @example
   * v1
   */
  versionName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 174***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      hybridStrategyConfig: 'HybridStrategyConfig',
      metaDataFilterConditions: 'MetaDataFilterConditions',
      query: 'Query',
      queryMode: 'QueryMode',
      rerankConfig: 'RerankConfig',
      rewriteConfig: 'RewriteConfig',
      scoreThreshold: 'ScoreThreshold',
      topK: 'TopK',
      versionName: 'VersionName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hybridStrategyConfig: 'string',
      metaDataFilterConditions: 'string',
      query: 'string',
      queryMode: 'string',
      rerankConfig: 'string',
      rewriteConfig: 'string',
      scoreThreshold: 'number',
      topK: 'number',
      versionName: 'string',
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

