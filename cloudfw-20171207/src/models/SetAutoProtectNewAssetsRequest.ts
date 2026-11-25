// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAutoProtectNewAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic traffic redirection. Valid values:
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  autoProtect?: boolean;
  /**
   * @remarks
   * The language type. Valid values:
   * - **zh**: Chinese. Default value.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      autoProtect: 'AutoProtect',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProtect: 'boolean',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

