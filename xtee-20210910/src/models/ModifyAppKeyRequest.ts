// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppKeyRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * appkey information.
   * 
   * @example
   * ***
   */
  appKey?: string;
  /**
   * @remarks
   * Application memo information.
   * 
   * @example
   * 备注
   */
  memo?: string;
  /**
   * @remarks
   * Region code
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

