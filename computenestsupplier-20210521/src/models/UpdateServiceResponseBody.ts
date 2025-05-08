// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateServiceResponseBodyDryRunResult } from "./UpdateServiceResponseBodyDryRunResult";


export class UpdateServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dry run result.
   */
  dryRunResult?: UpdateServiceResponseBodyDryRunResult;
  /**
   * @remarks
   * The hosted O\\&M configurations.
   * 
   * @example
   * DF0F666F-FBBC-55C3-A368-C955DE7B4839
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: UpdateServiceResponseBodyDryRunResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dryRunResult && typeof (this.dryRunResult as any).validate === 'function') {
      (this.dryRunResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

