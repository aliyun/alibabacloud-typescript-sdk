// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCatalogAssetDetailsRequestGetCatalogAssetDetailsQuery extends $dara.Model {
  /**
   * @remarks
   * The asset GUID.
   * 
   * This parameter is required.
   * 
   * @example
   * dp_ds_table.300023201.7311626611751680256.load_test.abc
   */
  guid?: string;
  /**
   * @remarks
   * Specifies whether to include the field list. Default value: false. Valid values:
   * - false: Not included.
   * - true: Included.
   */
  includeColumns?: boolean;
  /**
   * @remarks
   * Specifies whether to include detailed data. Default value: false. Valid values:
   * - false: Not included.
   * - true: Included.
   */
  includeDetailedAttributes?: boolean;
  static names(): { [key: string]: string } {
    return {
      guid: 'Guid',
      includeColumns: 'IncludeColumns',
      includeDetailedAttributes: 'IncludeDetailedAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guid: 'string',
      includeColumns: 'boolean',
      includeDetailedAttributes: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogAssetDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The paging query for the listing asset catalog list.
   * 
   * This parameter is required.
   */
  getCatalogAssetDetailsQuery?: GetCatalogAssetDetailsRequestGetCatalogAssetDetailsQuery;
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
      getCatalogAssetDetailsQuery: 'GetCatalogAssetDetailsQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getCatalogAssetDetailsQuery: GetCatalogAssetDetailsRequestGetCatalogAssetDetailsQuery,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.getCatalogAssetDetailsQuery && typeof (this.getCatalogAssetDetailsQuery as any).validate === 'function') {
      (this.getCatalogAssetDetailsQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

