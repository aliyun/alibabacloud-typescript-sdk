// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressGetHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The enterprise access token.
   * - This is a **required** header parameter for HTTP calls. For information about how to obtain it, refer to [Enterprise access token](https://openapi.alibtrip.com/doc/toDocDetail?docId=3769985).
   * - You can use `corp_token=value` in the URL as an alternative.
   * 
   * @example
   * feth****wls
   */
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

