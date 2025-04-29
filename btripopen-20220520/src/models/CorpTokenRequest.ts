// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CorpTokenRequest extends $dara.Model {
  /**
   * @example
   * Z2FyYmE1YTZjMDAwTixJU1M5LnZlLXtMO3FKbiYqJSM
   */
  appSecret?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * open324dfsdafsgcxvxv
   */
  corpId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
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

