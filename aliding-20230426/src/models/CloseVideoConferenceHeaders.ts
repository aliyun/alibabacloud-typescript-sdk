// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CloseVideoConferenceHeadersAccountContext } from "./CloseVideoConferenceHeadersAccountContext";


export class CloseVideoConferenceHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: CloseVideoConferenceHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: CloseVideoConferenceHeadersAccountContext,
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    if(this.accountContext && typeof (this.accountContext as any).validate === 'function') {
      (this.accountContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

