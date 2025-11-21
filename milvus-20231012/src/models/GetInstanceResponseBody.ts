// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InstanceDetail } from "./InstanceDetail";


export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * ABCD-1234-5678-EFGH
   */
  requestId?: string;
  instance?: InstanceDetail;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instance: 'instance',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instance: InstanceDetail,
      success: 'boolean',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

