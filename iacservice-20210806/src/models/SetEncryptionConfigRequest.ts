// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetEncryptionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token. Format: [0-9a-zA-Z-]{1,64}. Use a UUID.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the KMS key used for encryption.
   * 
   * @example
   * 09d0641c-e96c-495a-925e-9b50xxxxxxxx
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The region ID of the KMS key.
   * 
   * @example
   * cn-beijing
   */
  kmsRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      kmsKeyId: 'kmsKeyId',
      kmsRegionId: 'kmsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      kmsKeyId: 'string',
      kmsRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

