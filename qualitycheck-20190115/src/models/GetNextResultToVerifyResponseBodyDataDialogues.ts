// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNextResultToVerifyResponseBodyDataDialoguesDialogue } from "./GetNextResultToVerifyResponseBodyDataDialoguesDialogue";


export class GetNextResultToVerifyResponseBodyDataDialogues extends $dara.Model {
  dialogue?: GetNextResultToVerifyResponseBodyDataDialoguesDialogue[];
  static names(): { [key: string]: string } {
    return {
      dialogue: 'Dialogue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogue: { 'type': 'array', 'itemType': GetNextResultToVerifyResponseBodyDataDialoguesDialogue },
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

