// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgAccountRequest extends $dara.Model {
  loginEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mpk?: string;
  nationCode?: string;
  own?: string;
  realParentPk?: string;
  securityMobile?: string;
  showNickName?: string;
  siteNick?: string;
  srcAccountInfo?: string;
  static names(): { [key: string]: string } {
    return {
      loginEmail: 'LoginEmail',
      mpk: 'Mpk',
      nationCode: 'NationCode',
      own: 'Own',
      realParentPk: 'RealParentPk',
      securityMobile: 'SecurityMobile',
      showNickName: 'ShowNickName',
      siteNick: 'SiteNick',
      srcAccountInfo: 'srcAccountInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginEmail: 'string',
      mpk: 'string',
      nationCode: 'string',
      own: 'string',
      realParentPk: 'string',
      securityMobile: 'string',
      showNickName: 'string',
      siteNick: 'string',
      srcAccountInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

