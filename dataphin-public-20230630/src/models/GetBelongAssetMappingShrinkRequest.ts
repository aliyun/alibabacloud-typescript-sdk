// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBelongAssetMappingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Query command.
   */
  assetMappingQueryShrink?: string;
  /**
   * @remarks
   * Tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      assetMappingQueryShrink: 'AssetMappingQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetMappingQueryShrink: 'string',
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

