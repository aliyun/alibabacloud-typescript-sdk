// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokePageHeadersAccountContext extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 012345
   */
  accountId?: string;
  alidingSsoTicket?: string;
  ssoTicket?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      alidingSsoTicket: 'alidingSsoTicket',
      ssoTicket: 'ssoTicket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      alidingSsoTicket: 'string',
      ssoTicket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokePageHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: InvokePageHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'accountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: InvokePageHeadersAccountContext,
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

