// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCatalogAssetsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The query parameters.
   * 
   * This parameter is required.
   */
  listCatalogAssetsQueryShrink?: string;
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
  static names(): { [key: string]: string } {
    return {
      listCatalogAssetsQueryShrink: 'ListCatalogAssetsQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listCatalogAssetsQueryShrink: 'string',
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

