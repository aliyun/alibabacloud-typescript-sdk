// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetachKeyPairResponseBodyResults } from "./DetachKeyPairResponseBodyResults";


export class DetachKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of instances from which the SSH key pair failed to be unbound.
   * 
   * @example
   * 0
   */
  failCount?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The result set of the unbind operation.
   */
  results?: DetachKeyPairResponseBodyResults;
  /**
   * @remarks
   * The total number of instances from which you want to unbind the SSH key pair.
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
      results: DetachKeyPairResponseBodyResults,
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

