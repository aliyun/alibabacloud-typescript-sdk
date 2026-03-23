// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceKeywordsResponseBodyWords extends $dara.Model {
  word?: string[];
  static names(): { [key: string]: string } {
    return {
      word: 'word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      word: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.word)) {
      $dara.Model.validateArray(this.word);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceKeywordsResponseBody extends $dara.Model {
  key?: string;
  requestId?: string;
  words?: DescribeInstanceKeywordsResponseBodyWords;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      requestId: 'RequestId',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      requestId: 'string',
      words: DescribeInstanceKeywordsResponseBodyWords,
    };
  }

  validate() {
    if(this.words && typeof (this.words as any).validate === 'function') {
      (this.words as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

