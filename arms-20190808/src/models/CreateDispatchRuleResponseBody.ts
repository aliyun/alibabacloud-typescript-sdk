// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDispatchRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the dispatch policy.
   * 
   * @example
   * 10413
   */
  dispatchRuleId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A5EC8221-08F2-4C95-9AF1-49FD998C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dispatchRuleId: 'DispatchRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dispatchRuleId: 'number',
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

