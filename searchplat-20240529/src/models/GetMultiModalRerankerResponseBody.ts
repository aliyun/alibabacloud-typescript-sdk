// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiModalRerankerResponseBodyResultScores extends $dara.Model {
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

export class GetMultiModalRerankerResponseBodyResult extends $dara.Model {
  scores?: GetMultiModalRerankerResponseBodyResultScores[];
  static names(): { [key: string]: string } {
    return {
      scores: 'scores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scores: { 'type': 'array', 'itemType': GetMultiModalRerankerResponseBodyResultScores },
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

export class GetMultiModalRerankerResponseBodyUsage extends $dara.Model {
  imageToken?: number;
  textToken?: number;
  static names(): { [key: string]: string } {
    return {
      imageToken: 'image_token',
      textToken: 'text_token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageToken: 'number',
      textToken: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiModalRerankerResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetMultiModalRerankerResponseBodyResult;
  usage?: GetMultiModalRerankerResponseBodyUsage;
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
      result: GetMultiModalRerankerResponseBodyResult,
      usage: GetMultiModalRerankerResponseBodyUsage,
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

