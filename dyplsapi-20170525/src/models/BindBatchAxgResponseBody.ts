// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BindBatchAxgResponseBodySecretBindList } from "./BindBatchAxgResponseBodySecretBindList";


export class BindBatchAxgResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 5DCCA8CD-6C0A-50B4-A496-B1D2AB48A1C3
   */
  requestId?: string;
  secretBindList?: BindBatchAxgResponseBodySecretBindList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretBindList: 'SecretBindList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretBindList: BindBatchAxgResponseBodySecretBindList,
    };
  }

  validate() {
    if(this.secretBindList && typeof (this.secretBindList as any).validate === 'function') {
      (this.secretBindList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

