// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetConferenceHostsHeadersAccountContext extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 012345
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetConferenceHostsHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: SetConferenceHostsHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: SetConferenceHostsHeadersAccountContext,
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

