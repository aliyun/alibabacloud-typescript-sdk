// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEncryptRoutineUidResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned ciphertext, which contains the Alibaba Cloud account ID, timestamp, and time to live (TTL).
   * 
   * @example
   * XXXXXj20p4UB/xgdOH5LtXXXXXX
   */
  content?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DBA68F5-04A9-406B-B1E4-F2CB635E103F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

