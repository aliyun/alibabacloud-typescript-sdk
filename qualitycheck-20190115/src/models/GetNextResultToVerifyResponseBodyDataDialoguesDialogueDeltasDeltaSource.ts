// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSourceLine } from "./GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSourceLine";


export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource extends $dara.Model {
  line?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSourceLine;
  /**
   * @example
   * 5
   */
  position?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSourceLine,
      position: 'number',
    };
  }

  validate() {
    if(this.line && typeof (this.line as any).validate === 'function') {
      (this.line as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

