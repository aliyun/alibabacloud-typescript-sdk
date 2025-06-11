// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTenantEncryptionResponseBodyTenantEncryption extends $dara.Model {
  /**
   * @example
   * EncryptionKey
   */
  encryptionType?: string;
  /**
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @example
   * ob2mr3oae0****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionType: 'EncryptionType',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

