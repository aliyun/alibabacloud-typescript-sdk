// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource } from "./GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource";
import { GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget } from "./GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget";


export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDelta extends $dara.Model {
  source?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource;
  target?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget;
  /**
   * @example
   * CHANGE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource,
      target: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget,
      type: 'string',
    };
  }

  validate() {
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

