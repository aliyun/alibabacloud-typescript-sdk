// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetTypeAttributeCodesRequest extends $dara.Model {
  /**
   * @remarks
   * The asset type filter. Valid values:
   * - TABLE: table.
   * - COLUMN: column.
   * - INDEX: metric.
   * - BIZ_INDEX: business metric.
   * - API: API.
   * - PAGE: dashboard.
   * 
   * @example
   * TABLE
   */
  assetType?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

