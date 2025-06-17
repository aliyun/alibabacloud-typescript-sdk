// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnSecFuncInfoResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   */
  label?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
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

