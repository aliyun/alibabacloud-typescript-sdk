// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopLifecyclePolicyExecutionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * A request ID is returned regardless of whether the call is successful.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  /**
   * @remarks
   * The request status.
   * 
   * Valid values:
   * 
   * - true: The request was successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

