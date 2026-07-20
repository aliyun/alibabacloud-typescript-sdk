// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EstimatedPriceQueryV2Headers extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * A header parameter obtained from the Enterprise Access Credential operation (added in the header). In HTTP mode, you can use so_corp_token=value or dtb_corp_token=value in the URL as an alternative.
   * 
   * @example
   * feth00jqwls
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

