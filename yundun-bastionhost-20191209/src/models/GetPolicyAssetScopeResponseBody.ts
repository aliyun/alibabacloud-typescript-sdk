// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPolicyAssetScopeResponseBodyAssetScope } from "./GetPolicyAssetScopeResponseBodyAssetScope";


export class GetPolicyAssetScopeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The assets to which the control policy applies.
   */
  assetScope?: GetPolicyAssetScopeResponseBodyAssetScope;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assetScope: 'AssetScope',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetScope: GetPolicyAssetScopeResponseBodyAssetScope,
      requestId: 'string',
    };
  }

  validate() {
    if(this.assetScope && typeof (this.assetScope as any).validate === 'function') {
      (this.assetScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

