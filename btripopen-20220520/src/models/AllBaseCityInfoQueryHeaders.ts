// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllBaseCityInfoQueryHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @example
   * feth00jqwls
   */
  xAcsBtripAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripAccessToken: 'x-acs-btrip-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripAccessToken: 'string',
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

