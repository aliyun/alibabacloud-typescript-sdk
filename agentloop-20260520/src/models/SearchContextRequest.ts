// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchContextRequestScope extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent.
   * 
   * @example
   * sales-copilot
   */
  agentId?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * crm-service
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the run.
   * 
   * @example
   * run-001
   */
  runId?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-10001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      appId: 'appId',
      runId: 'runId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      appId: 'string',
      runId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchContextRequest extends $dara.Model {
  /**
   * @remarks
   * The structured filter conditions. The experience store supports scene. When __agentloopControl.mode is set to direct, hybrid, or agentic, multi-strategy recall with auditing is used, and you can pass source, callId, application, fields, channels, and budget simultaneously. The management plane can additionally pass contentStatus=all, active, candidate, gray, or deprecated to perform content retrieval, which includes disabled or unreviewed content and is not affected by store-level runtime switches. The API key runtime entry prohibits contentStatus and retains the original governance thresholds. The maximum value of timeoutMs is 60000. If mode is not passed, the existing semantics of fields, channels, minQualityScore, expansion, and debug are retained. When query is *, you can use includeCandidates, cursor, and offset to browse experiences (management plane only).
   * 
   * @example
   * {"scene":"incident-recovery","__agentloopControl":{"fields":["when_to_use","summary"],"channels":["vector","fulltext"],"minQualityScore":0.6,"expansion":false,"debug":true}}
   */
  filter?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether to apply structured formatting to the returned results.
   * 
   * @example
   * true
   */
  formatted?: boolean;
  /**
   * @remarks
   * Specifies whether to include memories with sourceState set to inactive. Default value: false.
   * 
   * @example
   * false
   */
  includeInactive?: boolean;
  /**
   * @remarks
   * The maximum number of returned results (Top-N similarity).
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The retrieval query text. Natural language is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * Recent user preference settings
   */
  query?: string;
  /**
   * @remarks
   * The retrieval options. The experience store supports normal and reranker (deterministic reranking). The memory store uses its own retrieval strategy. For real-time recall in the experience store, the limit ranges from 1 to 20.
   * 
   * @example
   * normal
   */
  retrievalOption?: string;
  /**
   * @remarks
   * The recall scope. If this field conflicts with a field of the same name in filter, a 400 ScopeFilterConflict error is returned.
   */
  scope?: SearchContextRequestScope;
  /**
   * @remarks
   * Filters results by extraction strategy IDs. The conditions in the list are combined by using the OR operator. If this parameter is not passed, all strategies are recalled. An empty list returns a 400 error. If the format is valid but no matching IDs are found, an empty result is returned. Historical removed strategy IDs are supported.
   * 
   * @example
   * ["preferences","profile"]
   */
  strategyIds?: string[];
  /**
   * @remarks
   * The similarity threshold. Results with a score lower than this value are filtered out. Valid values: 0 to 1.
   * 
   * @example
   * 0.5
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      formatted: 'formatted',
      includeInactive: 'includeInactive',
      limit: 'limit',
      query: 'query',
      retrievalOption: 'retrievalOption',
      scope: 'scope',
      strategyIds: 'strategyIds',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formatted: 'boolean',
      includeInactive: 'boolean',
      limit: 'number',
      query: 'string',
      retrievalOption: 'string',
      scope: SearchContextRequestScope,
      strategyIds: { 'type': 'array', 'itemType': 'string' },
      threshold: 'number',
    };
  }

  validate() {
    if(this.filter) {
      $dara.Model.validateMap(this.filter);
    }
    if(this.scope && typeof (this.scope as any).validate === 'function') {
      (this.scope as any).validate();
    }
    if(Array.isArray(this.strategyIds)) {
      $dara.Model.validateArray(this.strategyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

