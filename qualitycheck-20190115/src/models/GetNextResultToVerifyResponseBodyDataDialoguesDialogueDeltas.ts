// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDelta } from "./GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDelta";


export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas extends $dara.Model {
  delta?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDelta[];
  static names(): { [key: string]: string } {
    return {
      delta: 'Delta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delta: { 'type': 'array', 'itemType': GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDelta },
    };
  }

  validate() {
    if(Array.isArray(this.delta)) {
      $dara.Model.validateArray(this.delta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

