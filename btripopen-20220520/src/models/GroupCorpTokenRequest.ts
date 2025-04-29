// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GroupCorpTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ZzljczY5dnFjNDAwVlNofiwoWX5ZWCxlcjVTKnVoZS0
   */
  appSecret?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * open12g9sfbmm5i07v10wDzRSK9w00
   */
  corpId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * btripuyxmbg3cs286734u_mow6q
   */
  subCorpId?: string;
  static names(): { [key: string]: string } {
    return {
      appSecret: 'app_secret',
      corpId: 'corp_id',
      subCorpId: 'sub_corp_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecret: 'string',
      corpId: 'string',
      subCorpId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

