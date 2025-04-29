// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachKeyPairResponseBodyResults } from "./AttachKeyPairResponseBodyResults";


export class AttachKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of instances to which the SSH key pair fails to be bound.
   * 
   * @example
   * 0
   */
  failCount?: string;
  /**
   * @remarks
   * The name of the SSH key pair.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * An array that contains the results of the operation.
   */
  results?: AttachKeyPairResponseBodyResults;
  /**
   * @remarks
   * The total number of instances to which the SSH key pair is bound.
   * 
   * @example
   * 2
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      keyPairName: 'KeyPairName',
      requestId: 'RequestId',
      results: 'Results',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'string',
      keyPairName: 'string',
      requestId: 'string',
      results: AttachKeyPairResponseBodyResults,
      totalCount: 'string',
    };
  }

  validate() {
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

