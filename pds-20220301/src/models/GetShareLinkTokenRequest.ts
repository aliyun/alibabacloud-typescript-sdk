// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetShareLinkTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the token. Valid values: (0,7200]. Default value: 7200. Unit: seconds.
   * 
   * @example
   * 7200
   */
  expireSec?: number;
  /**
   * @remarks
   * The share ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The access code.
   * 
   * @example
   * abcF123x
   */
  sharePwd?: string;
  static names(): { [key: string]: string } {
    return {
      expireSec: 'expire_sec',
      shareId: 'share_id',
      sharePwd: 'share_pwd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireSec: 'number',
      shareId: 'string',
      sharePwd: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

