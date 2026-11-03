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
   * The call ID for the multi-strategy recall of the experience store.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  callId?: string;
  /**
   * @remarks
   * The diagnostics information for the current experience recall, including duration, model call volume, and filtering. The actual diagnostics items are determined by the running mode.
   */
  diagnostics?: { [key: string]: any };
  /**
   * @remarks
   * The actual experience recall mode used for the current request. Valid values: direct, agentic, and hybrid.
   * 
   * @example
   * agentic
   */
  mode?: string;
  /**
   * @remarks
   * The ID of the recall event. You can use this ID to call the GetContextStoreRecall operation to view audit details.
   * 
   * @example
   * 0190f1c2-7d3e-7a1b-9c4d-2e5f6a7b8c9d
   */
  recallEventId?: string;
  /**
   * @remarks
   * The list of relevance judgment results for candidate experiences.
   */
  relevance?: { [key: string]: any }[];
  /**
   * @remarks
   * The ID of the request. You can use this ID to locate the request for troubleshooting.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The list of retrieval results, sorted by similarity in descending order.
   */
  results?: { [key: string]: any }[];
  /**
   * @remarks
   * The list of rewritten queries generated based on the original retrieval query. The original query is not included.
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
   * The strategy implementation version used for the current experience recall. This is used for auditing and result tracing.
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

