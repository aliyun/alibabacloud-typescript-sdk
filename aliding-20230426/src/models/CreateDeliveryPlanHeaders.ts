// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeliveryPlanHeadersAccountContext extends $dara.Model {
  /**
   * @example
   * ba3a9b612345678d8fedf544ef69d19e
   */
  userToken?: string;
  static names(): { [key: string]: string } {
    return {
      userToken: 'userToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliveryPlanHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: CreateDeliveryPlanHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: CreateDeliveryPlanHeadersAccountContext,
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

