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

