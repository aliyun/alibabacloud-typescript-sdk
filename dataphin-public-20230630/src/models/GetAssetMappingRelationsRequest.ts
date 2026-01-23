// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetMappingRelationsRequestAssetMappingQuery extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INDEX
   */
  assetType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1121
   */
  guid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VALID
   */
  relationType?: string;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      guid: 'Guid',
      relationType: 'RelationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      guid: 'string',
      relationType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetMappingRelationsRequest extends $dara.Model {
  assetMappingQuery?: GetAssetMappingRelationsRequestAssetMappingQuery;
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
      assetMappingQuery: 'AssetMappingQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetMappingQuery: GetAssetMappingRelationsRequestAssetMappingQuery,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.assetMappingQuery && typeof (this.assetMappingQuery as any).validate === 'function') {
      (this.assetMappingQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

