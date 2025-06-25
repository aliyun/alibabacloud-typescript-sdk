// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GenerateAssetOperationTokenResponseBodyAssetOperationToken } from "./GenerateAssetOperationTokenResponseBodyAssetOperationToken";


export class GenerateAssetOperationTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  assetOperationToken?: GenerateAssetOperationTokenResponseBodyAssetOperationToken;
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
      assetOperationToken: 'AssetOperationToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetOperationToken: GenerateAssetOperationTokenResponseBodyAssetOperationToken,
      requestId: 'string',
    };
  }

  validate() {
    if(this.assetOperationToken && typeof (this.assetOperationToken as any).validate === 'function') {
      (this.assetOperationToken as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

