// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMyTenantsShrinkRequest extends $dara.Model {
  featureCodeListShrink?: string;
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
      featureCodeListShrink: 'FeatureCodeList',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureCodeListShrink: 'string',
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

