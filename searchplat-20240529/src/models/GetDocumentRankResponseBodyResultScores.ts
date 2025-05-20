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

