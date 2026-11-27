// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopLifecyclePolicyExecutionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * A request ID is returned regardless of whether the API call succeeds.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the request.
   * 
   * Valid values:
   * 
   * - true: The request succeeded.
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

