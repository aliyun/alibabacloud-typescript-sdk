// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TLSConfig extends $dara.Model {
  /**
   * @remarks
   * The list of allowed TLS cipher suites. If this parameter is not specified, the server default cipher suites are used.
   */
  cipherSuites?: string[];
  /**
   * @remarks
   * The maximum TLS protocol version allowed. Example values: TLSv1.2 and TLSv1.3. If this parameter is not specified, the server default value is used. Do not pass an empty string.
   * 
   * @example
   * TLSv1.3
   */
  maxVersion?: string;
  /**
   * @remarks
   * The minimum TLS protocol version allowed. Example values: TLSv1.2 and TLSv1.3. If this parameter is not specified, the server default value is used. Do not pass an empty string.
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

