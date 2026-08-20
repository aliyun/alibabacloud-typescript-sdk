// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SessionNetworkHeaderValueReplacement extends $dara.Model {
  /**
   * @remarks
   * The fake value. A placeholder used by code in the sandbox. The gateway performs an exact substring match on this string within the header value.
   * 
   * @example
   * sbx-notion-key-0001
   */
  placeholder?: string;
  /**
   * @remarks
   * The real value. The actual value after the placeholder is replaced.
   * 
   * @example
   * ntn_real_secret_xxx
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      placeholder: 'placeholder',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      placeholder: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

