// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepoSyncRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F8A0BA6-7F06-4BAE-B147-10BD6A25****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the synchronization rule.
   * 
   * @example
   * crsr-gk5p2ns1kzns****
   */
  syncRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      syncRuleId: 'SyncRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      syncRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

