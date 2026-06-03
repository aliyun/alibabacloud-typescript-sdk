// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LookupTmchNoticeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  claimKey?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      claimKey: 'ClaimKey',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claimKey: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

