// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryAnalysisResponseBodyResult extends $dara.Model {
  intent?: string;
  queries?: string[];
  query?: string;
  sql?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      intent: 'intent',
      queries: 'queries',
      query: 'query',
      sql: 'sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intent: 'string',
      queries: { 'type': 'array', 'itemType': 'string' },
      query: 'string',
      sql: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.queries)) {
      $dara.Model.validateArray(this.queries);
    }
    if(this.sql) {
      $dara.Model.validateMap(this.sql);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryAnalysisResponseBodyUsage extends $dara.Model {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'input_tokens',
      outputTokens: 'output_tokens',
      totalTokens: 'total_tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryAnalysisResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetQueryAnalysisResponseBodyResult;
  usage?: GetQueryAnalysisResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: GetQueryAnalysisResponseBodyResult,
      usage: GetQueryAnalysisResponseBodyUsage,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

