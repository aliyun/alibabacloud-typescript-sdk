// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TripTaskQueryHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
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

