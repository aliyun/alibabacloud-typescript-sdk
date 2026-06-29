// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetMappingRelationsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The query instruction.
   */
  assetMappingQueryShrink?: string;
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
      assetMappingQueryShrink: 'AssetMappingQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetMappingQueryShrink: 'string',
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

