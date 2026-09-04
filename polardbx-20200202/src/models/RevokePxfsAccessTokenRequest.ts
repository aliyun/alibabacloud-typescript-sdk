// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokePxfsAccessTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-xxxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * tenant-001
   */
  tenantId?: string;
  /**
   * @remarks
   * Token ID
   * 
   * This parameter is required.
   * 
   * @example
   * token-001
   */
  tokenId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      tenantId: 'TenantId',
      tokenId: 'TokenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
      tenantId: 'string',
      tokenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

