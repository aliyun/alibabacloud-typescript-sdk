// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTenantEncryptionRequest extends $dara.Model {
  /**
   * @example
   * key-shh322****470h8v0-g2ll85****
   */
  encryptionKeyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EncryptionKey
   */
  encryptionType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ob2mr3oae0****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionKeyId: 'EncryptionKeyId',
      encryptionType: 'EncryptionType',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionKeyId: 'string',
      encryptionType: 'string',
      instanceId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

