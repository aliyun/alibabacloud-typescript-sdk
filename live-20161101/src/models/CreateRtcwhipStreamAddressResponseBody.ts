// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRTCWhipStreamAddressResponseBody extends $dara.Model {
  /**
   * @example
   * 58E7**D4-xxxx-xxxx-xxxx-6B5**6Cxxxxx
   */
  requestId?: string;
  /**
   * @example
   * https://xxxxxx.media-sh.xxxxx.com/xxxxxxxxxxxx/3723a3xxxxxxxxx223c606b***5f7a2bc7c56ea5cdd0xxxxe?auth_key=17495xxxxx-xxxx-0-f013003067c78c4053f9cd0xxxxxxx&qqzr=H4sIAAAAAAAC_6pWSlayUkrOMxxxxxxrPyCxQ0lFKQTCLlKyUjM2Nj**NDQ1TEy2Mjc3xxxxxxxxxxqRYAAAD__xxxxx__xxxxxxxx
   */
  whipAddress?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      whipAddress: 'WhipAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      whipAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

