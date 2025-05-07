// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultToReviewResponseBodyDataDialoguesDialogue } from "./GetResultToReviewResponseBodyDataDialoguesDialogue";


export class GetResultToReviewResponseBodyDataDialogues extends $dara.Model {
  dialogue?: GetResultToReviewResponseBodyDataDialoguesDialogue[];
  static names(): { [key: string]: string } {
    return {
      dialogue: 'Dialogue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogue: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataDialoguesDialogue },
    };
  }

  validate() {
    if(Array.isArray(this.dialogue)) {
      $dara.Model.validateArray(this.dialogue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

