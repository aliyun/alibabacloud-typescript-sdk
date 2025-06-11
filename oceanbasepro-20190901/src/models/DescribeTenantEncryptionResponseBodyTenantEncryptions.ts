// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantEncryptionResponseBodyTenantEncryptions extends $dara.Model {
  /**
   * @example
   * false
   */
  enableEncryption?: boolean;
  /**
   * @example
   * xxx
   */
  encryptionKeyId?: string;
  /**
   * @example
   * INTERNAL
   */
  encryptionType?: string;
  /**
   * @example
   * OPEN
   */
  status?: string;
  /**
   * @example
   * t4louaeei****
   */
  tenantId?: string;
  /**
   * @example
   * MySQL
   */
  tenantMode?: string;
  /**
   * @example
   * forMySQLTenant
   */
  tenantName?: string;
  /**
   * @example
   * ONLINE
   */
  tenantStatus?: string;
  static names(): { [key: string]: string } {
    return {
      enableEncryption: 'EnableEncryption',
      encryptionKeyId: 'EncryptionKeyId',
      encryptionType: 'EncryptionType',
      status: 'Status',
      tenantId: 'TenantId',
      tenantMode: 'TenantMode',
      tenantName: 'TenantName',
      tenantStatus: 'TenantStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableEncryption: 'boolean',
      encryptionKeyId: 'string',
      encryptionType: 'string',
      status: 'string',
      tenantId: 'string',
      tenantMode: 'string',
      tenantName: 'string',
      tenantStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

