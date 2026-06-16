// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuthScenePageListRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region code.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * account_abuse
   */
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'regId',
      sceneName: 'sceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regId: 'string',
      sceneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

