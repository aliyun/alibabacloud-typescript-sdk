// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesResponseBodyResourcesEncryption extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm.
   * 
   * @example
   * AESCTR
   */
  algorithm?: string;
  /**
   * @remarks
   * Indicates whether the resources are encrypted.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The primary key for the encryption.
   * 
   * @example
   * DEFAULT
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      enabled: 'Enabled',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      enabled: 'boolean',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

