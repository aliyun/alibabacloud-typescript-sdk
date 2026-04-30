// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCatalogAssetDetailsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  getCatalogAssetDetailsQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      getCatalogAssetDetailsQueryShrink: 'GetCatalogAssetDetailsQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getCatalogAssetDetailsQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

