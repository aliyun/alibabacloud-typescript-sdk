// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMyTenantsRequest extends $dara.Model {
  /**
   * @remarks
   * The feature codes owned by the tenant.
   */
  featureCodeList?: string[];
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
      featureCodeList: 'FeatureCodeList',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureCodeList: { 'type': 'array', 'itemType': 'string' },
      opTenantId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.featureCodeList)) {
      $dara.Model.validateArray(this.featureCodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

