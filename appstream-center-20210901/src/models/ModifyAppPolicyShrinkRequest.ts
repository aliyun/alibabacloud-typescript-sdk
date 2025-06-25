// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pg-ee2znjktwgxu2****
   */
  appPolicyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  videoPolicyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appPolicyId: 'AppPolicyId',
      productType: 'ProductType',
      videoPolicyShrink: 'VideoPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPolicyId: 'string',
      productType: 'string',
      videoPolicyShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

