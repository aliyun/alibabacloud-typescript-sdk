// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeKmsKeysResponseBodyKmsKeys } from "./DescribeKmsKeysResponseBodyKmsKeys";


export class DescribeKmsKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried KMS keys.
   */
  kmsKeys?: DescribeKmsKeysResponseBodyKmsKeys;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F91F25F-8BCF-59E3-AF67-3806DB41FD09
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      kmsKeys: 'KmsKeys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsKeys: DescribeKmsKeysResponseBodyKmsKeys,
      requestId: 'string',
    };
  }

  validate() {
    if(this.kmsKeys && typeof (this.kmsKeys as any).validate === 'function') {
      (this.kmsKeys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

