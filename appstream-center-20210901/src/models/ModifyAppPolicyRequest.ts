// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyAppPolicyRequestVideoPolicy } from "./ModifyAppPolicyRequestVideoPolicy";


export class ModifyAppPolicyRequest extends $dara.Model {
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
  videoPolicy?: ModifyAppPolicyRequestVideoPolicy;
  static names(): { [key: string]: string } {
    return {
      appPolicyId: 'AppPolicyId',
      productType: 'ProductType',
      videoPolicy: 'VideoPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPolicyId: 'string',
      productType: 'string',
      videoPolicy: ModifyAppPolicyRequestVideoPolicy,
    };
  }

  validate() {
    if(this.videoPolicy && typeof (this.videoPolicy as any).validate === 'function') {
      (this.videoPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

