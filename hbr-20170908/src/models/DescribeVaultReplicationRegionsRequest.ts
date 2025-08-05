// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVaultReplicationRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 01W3ZZOQ
   */
  token?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * v-00030j3c******sn
   * 
   * @deprecated
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

