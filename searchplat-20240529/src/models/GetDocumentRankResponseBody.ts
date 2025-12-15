// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentRankResponseBodyResultScores extends $dara.Model {
  index?: number;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      score: 'score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      score: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentRankResponseBodyResult extends $dara.Model {
  scores?: GetDocumentRankResponseBodyResultScores[];
  static names(): { [key: string]: string } {
    return {
      scores: 'scores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scores: { 'type': 'array', 'itemType': GetDocumentRankResponseBodyResultScores },
    };
  }

  validate() {
    if(Array.isArray(this.scores)) {
      $dara.Model.validateArray(this.scores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentRankResponseBodyUsage extends $dara.Model {
  docCount?: number;
  static names(): { [key: string]: string } {
    return {
      docCount: 'doc_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentRankResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetDocumentRankResponseBodyResult;
  usage?: GetDocumentRankResponseBodyUsage;
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
      result: GetDocumentRankResponseBodyResult,
      usage: GetDocumentRankResponseBodyUsage,
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

