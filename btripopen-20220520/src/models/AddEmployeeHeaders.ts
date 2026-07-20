// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEmployeeHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The enterprise access token.
   * - When calling the operation over HTTP, include this as a **required parameter** in the request URL. For information about how to obtain the token, refer to [Enterprise access token](https://openapi.alibtrip.com/doc/toDocDetail?docId=3769985).
   * - When appending the token to the URL, use any of the following formats: `so_corp_token=value`, `dtb_corp_token=value`, or `corp_token=value`. **Recommended:** `corp_token=value`.
   * 
   * @example
   * feth****wls
   */
  xAcsBtripCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripCorpToken: 'x-acs-btrip-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripCorpToken: 'string',
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

