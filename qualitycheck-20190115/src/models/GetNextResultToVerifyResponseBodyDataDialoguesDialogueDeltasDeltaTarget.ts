// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTargetLine } from "./GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTargetLine";


export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget extends $dara.Model {
  line?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTargetLine;
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
      line: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTargetLine,
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

