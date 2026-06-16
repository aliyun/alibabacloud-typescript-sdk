// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppKeyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the language type of the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The AppKey information.
   * 
   * @example
   * ***
   */
  appKey?: string;
  /**
   * @remarks
   * The memo information of the application.
   * 
   * @example
   * 备注
   */
  memo?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      appKey: 'appKey',
      memo: 'memo',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      appKey: 'string',
      memo: 'string',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

