// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDocumentRankResponseBodyResultScores } from "./GetDocumentRankResponseBodyResultScores";


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

