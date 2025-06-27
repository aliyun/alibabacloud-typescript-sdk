// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindInstanceDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of domain names that failed to be bound to the instance.
   * 
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The number of domain names that are bound to the instance.
   * 
   * @example
   * 2
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedCount: 'FailedCount',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCount: 'number',
      requestId: 'string',
      successCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

