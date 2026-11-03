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
   * The structured filter conditions. The key is the field name, and the value is the expected match value.
   * 
   * @example
   * {"userId":"alice"}
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
   * Specifies whether to include memories with sourceState=inactive. Default value: false.
   * 
   * @example
   * false
   */
  includeInactive?: boolean;
  /**
   * @remarks
   * The maximum number of returned results based on the top-N similarity.
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
   * Recent user preferences
   */
  query?: string;
  /**
   * @remarks
   * The retrieval options used to control the retrieval strategy.
   * 
   * @example
   * semantic
   */
  retrievalOption?: string;
  /**
   * @remarks
   * The recall scope. If a field with the same name exists in the filter, a 400 ScopeFilterConflict error is returned.
   */
  scope?: SearchContextRequestScope;
  /**
   * @remarks
   * Filters results by extraction strategy IDs. Multiple IDs in the list are evaluated with an OR logic. If this parameter is not specified, all strategies are recalled. An empty list returns a 400 error. Valid IDs with no matches return empty results. Historical removed strategy IDs are supported.
   * 
   * @example
   * ["preferences","profile"]
   */
  strategyIds?: string[];
  /**
   * @remarks
   * The similarity threshold. Results with a similarity score below this value are filtered out. Valid values: 0 to 1.
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

