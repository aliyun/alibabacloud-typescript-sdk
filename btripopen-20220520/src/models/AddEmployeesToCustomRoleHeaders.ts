// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEmployeesToCustomRoleHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * A header parameter obtained from the "Enterprise access token" operation. Add it to the header. In HTTP mode, you can use corp_token=value in the URL as an alternative.
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

