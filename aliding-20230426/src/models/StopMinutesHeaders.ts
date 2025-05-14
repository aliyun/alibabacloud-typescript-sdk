// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StopMinutesHeadersAccountContext } from "./StopMinutesHeadersAccountContext";


export class StopMinutesHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: StopMinutesHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: StopMinutesHeadersAccountContext,
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

