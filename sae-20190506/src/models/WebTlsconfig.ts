// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebTLSConfig extends $dara.Model {
  /**
   * @remarks
   * The supported cipher suites.
   */
  cipherSuites?: string[];
  /**
   * @remarks
   * The supported maximum TLS protocol version.
   * 
   * @example
   * TLSv1.3
   */
  maxVersion?: string;
  /**
   * @remarks
   * The supported minimum TLS protocol version.
   * 
   * @example
   * TLSv1.0
   */
  minVersion?: string;
  static names(): { [key: string]: string } {
    return {
      cipherSuites: 'CipherSuites',
      maxVersion: 'MaxVersion',
      minVersion: 'MinVersion',
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

