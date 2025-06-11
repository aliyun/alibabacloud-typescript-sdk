// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyTenantEncryptionResponseBodyTenantEncryption } from "./ModifyTenantEncryptionResponseBodyTenantEncryption";


export class ModifyTenantEncryptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EE205C00-30E4-****-****-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @remarks
   * job
   */
  tenantEncryption?: ModifyTenantEncryptionResponseBodyTenantEncryption;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantEncryption: 'TenantEncryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantEncryption: ModifyTenantEncryptionResponseBodyTenantEncryption,
    };
  }

  validate() {
    if(this.tenantEncryption && typeof (this.tenantEncryption as any).validate === 'function') {
      (this.tenantEncryption as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

