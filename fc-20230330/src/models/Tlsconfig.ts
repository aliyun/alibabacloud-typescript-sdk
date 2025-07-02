// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TLSConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  cipherSuites?: string[];
  /**
   * @example
   * TLSv1.3
   */
  maxVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TLSv1.0
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

