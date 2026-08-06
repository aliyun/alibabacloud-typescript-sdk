// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCatalogKmsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the KMS customer master key (CMK) to be validated. The server uses this key to perform an SSE-KMS write probe.
   * 
   * This parameter is required.
   * 
   * @example
   * key-1234567890abcdef
   */
  kmsKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      kmsKeyId: 'kmsKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsKeyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

