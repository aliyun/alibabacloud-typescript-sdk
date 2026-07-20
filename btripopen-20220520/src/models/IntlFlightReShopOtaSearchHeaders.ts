// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopOtaSearchHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The enterprise access token.
   * 
   * - When calling this operation over HTTP, this parameter is required and must be appended to the request URL. For more information about how to obtain the token, see [Enterprise access token](https://openapi.alibtrip.com/doc/toDocDetail?spm=openapi-amp.newDocPublishment.0.0.5e2a281frQyDQ8&docId=3769985).
   * - When appending this parameter, use crop_token=value instead.
   * 
   * @example
   * feth00jqwls
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

