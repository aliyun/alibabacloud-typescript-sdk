// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBelongAssetMappingRequestAssetMappingQuery extends $dara.Model {
  /**
   * @remarks
   * The GUID of the owning asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 1121
   */
  belongGuid?: string;
  /**
   * @remarks
   * The type of the mapping relationship. Valid values: VALID (mapped) and INVALID (invalid mapping).
   * 
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
  /**
   * @remarks
   * The query command.
   */
  assetMappingQuery?: GetBelongAssetMappingRequestAssetMappingQuery;
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
      assetMappingQuery: 'AssetMappingQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetMappingQuery: GetBelongAssetMappingRequestAssetMappingQuery,
      opTenantId: 'number',
      opUserId: 'string',
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

