// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TLSConfig extends $dara.Model {
  /**
   * @remarks
   * TLS 加密套件列表。
   * 
   * @example
   * [\"TLS_RSA_WITH_RC4_128_SHA\"]
   */
  cipherSuites?: string[];
  /**
   * @remarks
   * TLS 最大版本号。
   * 
   * @example
   * TLSv1.3
   */
  maxVersion?: string;
  /**
   * @remarks
   * TLS 最小版本号。
   * 
   * @example
   * TLSv1.2
   */
  minVersion?: string;
  static names(): { [key: string]: string } {
    return {
      cipherSuites: 'cipherSuites',
      maxVersion: 'maxVersion',
      minVersion: 'minVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipherSuites: { 'type': 'array', 'itemType': 'string' },
      maxVersion: 'string',
      minVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cipherSuites)) {
      $dara.Model.validateArray(this.cipherSuites);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

