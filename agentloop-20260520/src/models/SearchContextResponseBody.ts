// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchContextResponseBody extends $dara.Model {
  /**
   * @remarks
   * The audit write status. Valid values: ok and degraded.
   * 
   * @example
   * ok
   */
  auditStatus?: string;
  /**
   * @remarks
   * The call ID for multi-strategy recall in the experience store.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  callId?: string;
  /**
   * @remarks
   * The diagnostics information for the current experience recall, including duration, model call volume, and filtering. The actual diagnostics items are determined by the running mode.
   * 
   * @example
   * {
   * 	"durationMs": 386.5,
   * 	"modelCalls": 2,
   * 	"relevanceValidation": "semantic",
   * 	"candidateCount": 1,
   * 	"filtering": {
   * 		"model_not_relevant": 0
   * 	}
   * }
   */
  diagnostics?: { [key: string]: any };
  /**
   * @remarks
   * The experience recall mode actually used for the current request. Valid values: direct, agentic, and hybrid.
   * 
   * @example
   * agentic
   */
  mode?: string;
  /**
   * @remarks
   * The ID of the recall event. You can use this ID to call GetContextStoreRecall to view audit details.
   * 
   * @example
   * 0190f1c2-7d3e-7a1b-9c4d-2e5f6a7b8c9d
   */
  recallEventId?: string;
  /**
   * @remarks
   * The list of relevance judgment results for candidate experiences.
   * 
   * @example
   * [
   *   {
   *     "contextId": "a:1",
   *     "judgment": "relevant",
   *     "reason": "This experience explains how to skip tasks with unchanged inputs, which is relevant to the search query."
   *   }
   * ]
   */
  relevance?: { [key: string]: any }[];
  /**
   * @remarks
   * The ID of the request. You can use this ID to locate the request when troubleshooting issues.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The list of retrieval results, sorted by similarity in descending order. Each item contains contextId, context, metadata, score, rank, revision, strategyVersion, and strategyId.
   * 
   * @example
   * [{"contextId":"01a1cf08-c368-7c83******","strategyId":"default","context":"The assistant recommends steamed seafood because it is fresh and not spicy, which aligns with the user\"s preference for seafood and constraint against spicy food.","metadata":{"contextType":"memory","memoryType":"long","userId":"test_user_002","agentId":"95273000000000","appId":"mm_480d961******","runId":"jr-80ded1d6******","strategyId":"default","category":"recommendation","kind":"state","sourceKind":"api","sourceId":"addctx:75395808-cb81-54cd******","revision":1,"reviewStatus":"unreviewed","sourceState":"active","factKey":"assistant:recommendation:dish******","sessionId":"test_session_001"},"score":0.6617179,"rank":1,"revision":1,"strategyVersion":1}]
   */
  results?: { [key: string]: any }[];
  /**
   * @remarks
   * The list of rewritten queries generated based on the original retrieval query. The original query is not included.
   * 
   * @example
   * ["How to avoid repeatedly executing unchanged inputs"]
   */
  rewrittenQueries?: string[];
  /**
   * @remarks
   * The processing status of the current experience recall call. Valid values: success, degraded, failed, and error.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The implementation version of the strategy used for the current experience recall. This is used for auditing and result tracing.
   * 
   * @example
   * experience-recall-20261031-v5
   */
  strategyVersion?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'auditStatus',
      callId: 'callId',
      diagnostics: 'diagnostics',
      mode: 'mode',
      recallEventId: 'recallEventId',
      relevance: 'relevance',
      requestId: 'requestId',
      results: 'results',
      rewrittenQueries: 'rewrittenQueries',
      status: 'status',
      strategyVersion: 'strategyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      callId: 'string',
      diagnostics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mode: 'string',
      recallEventId: 'string',
      relevance: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
      results: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      rewrittenQueries: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      strategyVersion: 'string',
    };
  }

  validate() {
    if(this.diagnostics) {
      $dara.Model.validateMap(this.diagnostics);
    }
    if(Array.isArray(this.relevance)) {
      $dara.Model.validateArray(this.relevance);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    if(Array.isArray(this.rewrittenQueries)) {
      $dara.Model.validateArray(this.rewrittenQueries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

