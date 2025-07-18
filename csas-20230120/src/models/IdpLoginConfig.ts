// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdpLoginConfig extends $dara.Model {
  mobileLoginType?: string;
  mobileMfaTypes?: string;
  pcLoginType?: string;
  pcMfaTypes?: string;
  totpCorpVerifyAesKey?: string;
  totpCorpVerifyToken?: string;
  totpCorpVerifyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      mobileLoginType: 'MobileLoginType',
      mobileMfaTypes: 'MobileMfaTypes',
      pcLoginType: 'PcLoginType',
      pcMfaTypes: 'PcMfaTypes',
      totpCorpVerifyAesKey: 'TotpCorpVerifyAesKey',
      totpCorpVerifyToken: 'TotpCorpVerifyToken',
      totpCorpVerifyUrl: 'TotpCorpVerifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobileLoginType: 'string',
      mobileMfaTypes: 'string',
      pcLoginType: 'string',
      pcMfaTypes: 'string',
      totpCorpVerifyAesKey: 'string',
      totpCorpVerifyToken: 'string',
      totpCorpVerifyUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

