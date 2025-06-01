// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateBootAndAntiUninstallPolicyResponseBodyStrategy } from "./UpdateBootAndAntiUninstallPolicyResponseBodyStrategy";


export class UpdateBootAndAntiUninstallPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * CB67D866-1E54-5106-89DF-6D70C73E5989
   */
  requestId?: string;
  strategy?: UpdateBootAndAntiUninstallPolicyResponseBodyStrategy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategy: UpdateBootAndAntiUninstallPolicyResponseBodyStrategy,
    };
  }

  validate() {
    if(this.strategy && typeof (this.strategy as any).validate === 'function') {
      (this.strategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

