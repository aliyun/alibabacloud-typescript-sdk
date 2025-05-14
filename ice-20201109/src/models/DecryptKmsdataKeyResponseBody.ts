// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DecryptKMSDataKeyResponseBodyDataKey } from "./DecryptKmsdataKeyResponseBodyDataKey";


export class DecryptKMSDataKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the decryption result.
   */
  dataKey?: DecryptKMSDataKeyResponseBodyDataKey;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataKey: 'DataKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataKey: DecryptKMSDataKeyResponseBodyDataKey,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataKey && typeof (this.dataKey as any).validate === 'function') {
      (this.dataKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

