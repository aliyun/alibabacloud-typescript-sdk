// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTenantEncryptionResponseBodyTenantEncryptions } from "./DescribeTenantEncryptionResponseBodyTenantEncryptions";


export class DescribeTenantEncryptionResponseBody extends $dara.Model {
  /**
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  tenantEncryptions?: DescribeTenantEncryptionResponseBodyTenantEncryptions[];
  /**
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantEncryptions: 'TenantEncryptions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantEncryptions: { 'type': 'array', 'itemType': DescribeTenantEncryptionResponseBodyTenantEncryptions },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tenantEncryptions)) {
      $dara.Model.validateArray(this.tenantEncryptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

