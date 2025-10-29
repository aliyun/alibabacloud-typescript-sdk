// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantSwitchAgreementRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to agree to migrate the client connections from overseas servers to the Singapore center.
   * 
   * @example
   * true
   */
  isAgree?: boolean;
  isConfirmed?: boolean;
  isImmediate?: boolean;
  /**
   * @remarks
   * The language type for requests and responses. The default value is **zh**. Possible values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Switching type. Possible values:
   * 
   * - **sg_switch**: Migrate client connections from overseas servers to Singapore
   * 
   * @example
   * sg_switch
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      isAgree: 'IsAgree',
      isConfirmed: 'IsConfirmed',
      isImmediate: 'IsImmediate',
      lang: 'Lang',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAgree: 'boolean',
      isConfirmed: 'boolean',
      isImmediate: 'boolean',
      lang: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

