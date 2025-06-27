// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindInstanceDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of domain names that failed to be unbound from the instance.
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
   * 123
   */
  requestId?: string;
  /**
   * @remarks
   * The number of domain names that are unbound from the instance.
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

