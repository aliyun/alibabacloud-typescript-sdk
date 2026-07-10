// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CorpTokenRequest extends $dara.Model {
  appSecret?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appSecret: 'app_secret',
      corpId: 'corp_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecret: 'string',
      corpId: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

