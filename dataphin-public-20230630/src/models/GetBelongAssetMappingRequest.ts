// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBelongAssetMappingRequestAssetMappingQuery extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1121
   */
  belongGuid?: string;
  /**
   * @example
   * VALID
   */
  relationType?: string;
  static names(): { [key: string]: string } {
    return {
      belongGuid: 'BelongGuid',
      relationType: 'RelationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongGuid: 'string',
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

export class GetBelongAssetMappingRequest extends $dara.Model {
  assetMappingQuery?: GetBelongAssetMappingRequestAssetMappingQuery;
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
      assetMappingQuery: GetBelongAssetMappingRequestAssetMappingQuery,
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

