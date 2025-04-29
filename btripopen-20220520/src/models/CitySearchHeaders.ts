// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CitySearchHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
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

